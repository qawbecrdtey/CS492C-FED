import types from '../actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
  postList: [],
  num_of_total_posts: 0,
  current_top_post_num: 0,
  myPostList: [],
  myLikeList: [],
  myCommentList: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.REGISTER_USER: 
      return state;
    case types.REGISTER_POST: 
      return state;
    case types.EDIT_POST:
      return state;
    case types.MODIFY_USER:
      return state;
    case types.GET_ALL_USERS:
      return {...state, userList: action.payload};
    case types.GET_ALL_POSTS:
      return {...state, postList: action.payload};
    case types.USER_LOGINED:
      return {...state, loginUser: action.payload};
    case types.GET_CURRENT_POSTS_NUM_INFO: {
      return {...state, num_of_total_posts: action.payload1, current_top_post_num: action.payload2};
    }
    case types.UPDATE_POST_NUM:
      return {...state, num_of_total_posts: action.payload1, current_top_post_num: action.payload2};
    case types.GET_MY_POSTS:
      return {...state, myPostList: action.payload}
    case types.GET_MY_LIKED_POSTS:
      return {...state, myLikeList: action.payload}
    case types.GET_MY_COMMENTS:
      return {...state, myCommentList: action.payload}
    case types.GET_PAGINATION_INFO:
      return {...state } // TODO: Get currentPage, articlePerPage, and totalPageCount.
    default:
      return state;
  }
}
