import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/Applayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followinfList = [{ nickname: '허성진' }, { nickname: '바보' }, { nickname: '노드 개발자' }];
  const followerList = [{ nickname: '허성진' }, { nickname: '바보' }, { nickname: '노드 개발자' }];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followinfList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
