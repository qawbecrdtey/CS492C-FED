import types from './types';
import { request } from '../utils/axios';

const USER_URL = '/api/user';
const POST_URL = '/api/post';

export async function getAllUser() {
  const data = await request('get', USER_URL + '/users', null);
  var uusers = [];
  var i;
  for (i = 0; i < data.length; i++) {
    uusers.push(Object.values(data[i]));
  }
  return {
    type: types.GET_ALL_USERS,
    payload: uusers,
  };
}

export async function getAllPost() {
  const data = await request('get', POST_URL + '/posts', null);
  var postlist = [];
  var i;
  for (i = 0; i < data.length; i++) {
    postlist.push(Object.values(data[i]));
  }
  // console.log('getallpost');
  // console.log('postlist length : ' + postlist.length);
  return {
    type: types.GET_ALL_POSTS,
    payload: postlist,
  };
}

export async function getMyPost(dataToSubmit) {
  const data = await request('post', POST_URL + '/myposts', dataToSubmit);
  var mypostlist = [];
  var i;
  for (i = 0; i < data.length; i++) {
    mypostlist.push(Object.values(data[i]));
  }
  return {
    type: types.GET_MY_POSTS,
    payload: mypostlist,
  };
}

export async function getMyLikedPosts(dataToSubmit) {
  const data = await request('post', POST_URL + '/mylikes', dataToSubmit);
  var mylikelist = [];
  var i;
  for (i = 0; i < data.length; i++) {
    mylikelist.push(Object.values(data[i]));
  }
  return {
    type: types.GET_MY_LIKED_POSTS,
    payload: mylikelist,
  };
}

export function registerUser(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    console.log("userID is none");
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  request('post', USER_URL + '/register', dataToSubmit);
  return {
    type: types.REGISTER_USER,
    payload: '',
  };
}

export function modifyUser(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  const data = request('post', USER_URL + '/modifyuser', dataToSubmit);
  return {
    type: types.MODIFY_USER,
    payload: data,
  };
}

export async function registerPost(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    console.log("userID is none");
    return {
      type: types.REGISTER_POST,
      payload: '',
    };
  }
  const data = await request('post', POST_URL + '/register', dataToSubmit);
  var postlist = [];
  var i;
  for (i = 0; i < data.length; i++) {
    postlist.push(Object.values(data[i]));
  }
  console.log('register and got postlist');
  return {
    type: types.REGISTER_POST,
    payload: postlist,
  };
}

export function editPost(dataToSubmit) {
  request('post', POST_URL + '/edit', dataToSubmit);
  return {
    type: types.EDIT_POST,
    payload: '',
  };
}

export function userLogined(userdata) {
  return {
    type: types.USER_LOGINED,
    payload: userdata,
  };
}

// export async function getCurrentPostsNumInfo() {
//   const _data = await request('get', POST_URL + '/currentposts', null);
//   const data = Object.values(_data);
//   return {
//     type: types.GET_CURRENT_POSTS_NUM_INFO,
//     payload1: data[0],
//     payload2: data[1],
//   };
// }

export function updatePostNum(dataToSubmit) {
  if (dataToSubmit['num_of_total_posts'] == '' || dataToSubmit['current_top_post_num'] == '') {
    console.log('data is none');
    return {
      type: types.UPDATE_POST_NUM,
      payload: '',
    }
  }
  request('post', POST_URL + '/updatepostnum', dataToSubmit);
  return {
    type: types.UPDATE_POST_NUM,
    payload1: dataToSubmit.num_of_total_posts,
    payload2: dataToSubmit.current_top_post_num,
  };
}

export function setPostPerPage(no) {
  return {
    type: types.SET_POST_PER_PAGE,
    payload: no,
  };
}

export function updateCurrentPage(newPage) {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: newPage,
  };
}