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

export function registerUser(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    console.log("userID is none");
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  // const data = request('post', USER_URL + '/register', dataToSubmit);
  request('post', USER_URL + '/register', dataToSubmit);
  return {
    type: types.REGISTER_USER,
    payload: '',
  };
}

export function registerPost(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    console.log("userID is none");
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  request('post', POST_URL + '/register', dataToSubmit);
  return {
    type: types.REGISTER_USER,
    payload: '',
  };
}

export function userLogined(userdata) {
  console.log("userlogin action");
  return {
    type: types.USER_LOGINED,
    payload: userdata,
  };
}

