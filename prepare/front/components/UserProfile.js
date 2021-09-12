import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoadind } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          <Link href={`/user/${me.id}`}>
            <a>
              짹쨱 <br />
              {me.Posts.length}
            </a>
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            <a>
              팔로잉 <br />
              {me.Followings.length}
            </a>
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            <a>
              팔로워 <br />
              {me.Followers.length}
            </a>
          </Link>
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <Button onClick={onLogOut} loading={logOutLoadind}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
