import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Checkbox, Form, Input, Button } from 'antd';

import AppLayout from '../components/Applayout';
import useinput from '../hooks/useinput';
import styled from 'styled-components';
// import Password from 'antd/lib/input/Password';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onchangeId] = useinput('');
  const [nickname, onchangeNickname] = useinput('');
  const [password, onchangePassword] = useinput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, password, nickname);
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
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} onChange={onchangeId} required />
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
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
