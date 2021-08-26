import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
} from '../reducers/user';

function followAPI(data) {
  return axios.post('/api/follow', data);
}

function* follow(action) {
  try {
    // const result = yield call(followAPI, action.data); // loginAPI의 매개변수는 ()안에 들어가지 않고 a,c,v, 배열형식으로 들어간다
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unFollowAPI(data) {
  return axios.post('/api/follow', data);
}

function* unFollow(action) {
  try {
    // const result = yield call(unFollowAPI, action.data); // loginAPI의 매개변수는 ()안에 들어가지 않고 a,c,v, 배열형식으로 들어간다
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function loginAPI(data) {
  return axios.post('/api/login', data);
}

function* login(action) {
  try {
    // const result = yield call(loginAPI, action.data); // loginAPI의 매개변수는 ()안에 들어가지 않고 a,c,v, 배열형식으로 들어간다
    console.log('sagalogin');
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post('/api/logout');
}

function* logout() {
  try {
    // const result = yield call(logoutAPI);
    yield delay(1000);

    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signupAPI() {
  return axios.post('/api/signup');
}

function* signup() {
  try {
    // const result = yield call(signupAPI);
    yield delay(1000);

    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnFollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unFollow);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnFollow),
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
