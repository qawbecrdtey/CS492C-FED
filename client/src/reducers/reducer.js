import types from '../actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
  postList: [],
  currentPostNum: 0,
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.REGISTER_USER: 
      return state;
    case types.REGISTER_POST: 
      return state;
    case types.GET_ALL_USERS:
      return {...state, userList: action.payload};
    case types.USER_LOGINED:{
      return {...state, loginUser: action.payload};
    }
    default:
      return state;
  }
}
