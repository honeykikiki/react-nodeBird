import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/Applayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { logInDone } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {logInDone && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </AppLayout>
  );
};

export default Home;
