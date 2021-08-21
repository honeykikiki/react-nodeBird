import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱 <br />0
        </div>,
        <div key="followings">
          팔로잉 <br />1
        </div>,
        <div key="followings">
          팔로워 <br />2
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>H.K</Avatar>} title="honey" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
