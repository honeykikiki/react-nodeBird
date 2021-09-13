import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import { Checkbox, Form, Input, Button } from 'antd';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import useinput from '../hooks/useinput';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
// import Password from 'antd/lib/input/Password';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/');
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, onchangeEmail] = useinput('');
  const [nickname, onchangeNickname] = useinput('');
  const [password, onchangePassword] = useinput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  // eslint-disable-next-line consistent-return
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, password, nickname);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [password, passwordCheck, term]);

  return (
    <>
      <AppLayout>
        <Head>
          <meta charSet="utf-8" />
          <title>회원가입 | NodeBird </title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <Input name="user-email" type="email" value={email} onChange={onchangeEmail} required />
          </div>

          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input name="user-nick" value={nickname} onChange={onchangeNickname} required />
          </div>

          <div>
            <label htmlFor="user-password">패스워드</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              onChange={onchangePassword}
              required
            />
          </div>

          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
          </div>

          <div>
            <Checkbox name="uset-term" checked={term} onChange={onChangeTerm}>
              약관에 동의 하십니까?
            </Checkbox>
            {termError && <ErrorMessage>약관에 동의 하셔야합니다</ErrorMessage>}
          </div>

          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  // 로그인이 풀리는 현상, 서버에서 공유하지 않는 쿠키만들기
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Signup;
