import types from '../actions/types';

const initialstate = {
  loginUser: {},
  userList: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.REGISTER_USER: //처음에 join 버튼 누를 때
      // return { ...state, loginUser: action.payload };
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
