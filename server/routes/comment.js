/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { Comment } = require('../models/Comment');

router.post('/saveComment', (req, res) => {
  const comment = new Comment(req.body);
  var postList = mongoose.model('Post');
  postList.findOneAndUpdate({ postNO: req.body.postNO }, { $inc: { no_comments: 1 } }, (err) => {
    if (err) res.json({ success: false, err });
  });

  console.log(comment);
  comment.save((err, comment) => {
    if (err) return res.json({ success: false, err });
    Comment.find({ _id: comment._id })
      .populate('writer')
      .exec((err, result) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

router.post('/getComments', (req, res) => {
  Comment.find({ postNO: req.body.postNO })
    .populate('writer')
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, comments });
    });
});

router.post('/deleteComment', (req, res) => {
  Comment.remove({ _id: req.body })
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, comments });
    });
  var postList = mongoose.model('Post');
  postList.findOneAndUpdate({ postNO: req.body.postNO }, { $inc: { no_comments: -1 } }, (err) => {
    if (err) return res.json({ success: false, err });
  });
});

module.exports = router;
