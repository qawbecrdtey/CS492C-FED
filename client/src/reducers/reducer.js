import types from '../actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
  postList: [],
  num_of_total_posts: 0,
  current_top_post_num: 0,
  likedPostList: [],
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
    case types.LIKE:
      return state;
    case types.UNLIKE:
      return state;
    case types.GET_LIKED_POSTS:
      return {...state, likedPostList: action.payload}
    default:
      return state;
  }
}
