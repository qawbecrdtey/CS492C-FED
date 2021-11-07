import types from '../actions/types';

const initialstate = {
  loginUser: {}
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case types.REGISTER_USER: //처음에 join 버튼 누를 때
      return { ...state, loginUser: action.payload };
    default:
      return state;
  }
}
