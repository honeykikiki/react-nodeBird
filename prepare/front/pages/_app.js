// 전체 공용으로 쓴느 컴포넌트 관리 페이지
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; // 헤드 컴포넌트
import 'antd/dist/antd.css'; // 엔트 디자인 적용 css컴포넌트
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
