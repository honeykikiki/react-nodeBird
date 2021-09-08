import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import useSWR from 'swr';

import Router from 'next/router';
import AppLayout from '../components/Applayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import wrapper from '../store/configureStore';

import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
const Profile = () => {
  // const dispatch = useDispatch();
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  const { me } = useSelector((state) => state.user);

  const { data: followingsData, error: followingError } = useSWR(
    `http://localhost:3065/user/followings?limit=${followersLimit}`,
    fetcher,
  );

  const { data: followersData, error: followerError } = useSWR(
    `http://localhost:3065/user/followers?limit=${followingsLimit}`,
    fetcher,
  );

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  const loadMortFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  const loadMortFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  if (!me) {
    return `내정보 로딩중...`;
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로일 || 팔로워 중 에러 발생</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList
          header="팔로잉 목록"
          data={followingsData}
          onClickMore={loadMortFollowings}
          loading={!followingError && !followingsData}
        />
        <FollowList
          header="팔로워 목록"
          data={followersData}
          onClickMore={loadMortFollowers}
          loading={!followerError && !followersData}
        />
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

export default Profile;
