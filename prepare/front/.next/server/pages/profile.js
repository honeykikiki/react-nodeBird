"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 7224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
;// CONCATENATED MODULE: external "swr"
const external_swr_namespaceObject = require("swr");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/AppLayout.js + 2 modules
var AppLayout = __webpack_require__(5603);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__(6215);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(8226);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/NicknameEditForm.js







const NicknameEditForm = () => {
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [nickname, onChangeNickname] = (0,useInput/* default */.Z)((me === null || me === void 0 ? void 0 : me.nickname) || '');
  const dispatch = (0,external_react_redux_.useDispatch)();
  const onSubmit = (0,external_react_.useCallback)(() => {
    dispatch({
      type: user/* CHANGE_NICKNAME_REQUEST */.o,
      data: nickname
    });
  }, [nickname]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form, {
    style: {
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input.Search, {
      value: nickname,
      onChange: onChangeNickname,
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815",
      onSearch: onSubmit
    })
  });
};

/* harmony default export */ const components_NicknameEditForm = (NicknameEditForm);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: ./components/FollowList.js







const FollowList = ({
  header,
  data,
  onClickMore,
  loading
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();

  const onCancel = id => () => {
    if (header === '팔로잉') {
      dispatch({
        type: user/* UNFOLLOW_REQUEST */.Bk,
        data: id
      });
    }

    dispatch({
      type: user/* REMOVE_FOLLOWER_REQUEST */.IB,
      data: id
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: header
    }),
    loadMore: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: onClickMore,
        loading: loading,
        children: "\uB354 \uBCF4\uAE30"
      })
    }),
    bordered: true,
    dataSource: data,
    renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item, {
      style: {
        marginTop: '20px'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
        actions: [/*#__PURE__*/jsx_runtime_.jsx(icons_.StopTwoTone, {
          onClick: onCancel(item.id)
        }, "stop")],
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card.Meta, {
          description: item.nickname
        })
      })
    })
  });
};

/* harmony default export */ const components_FollowList = (FollowList);
// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__(5442);
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__(5542);
;// CONCATENATED MODULE: ./pages/profile.js

















const fetcher = url => external_axios_default().get(url, {
  withCredentials: true
}).then(result => result.data);

const Profile = () => {
  // const dispatch = useDispatch();
  const {
    0: followersLimit,
    1: setFollowersLimit
  } = (0,external_react_.useState)(3);
  const {
    0: followingsLimit,
    1: setFollowingsLimit
  } = (0,external_react_.useState)(3);
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    data: followingsData,
    error: followingError
  } = external_swr_default()(`${config/* backUrl */.T}/user/followings?limit=${followersLimit}`, fetcher);
  const {
    data: followersData,
    error: followerError
  } = external_swr_default()(`${config/* backUrl */.T}/user/followers?limit=${followingsLimit}`, fetcher); // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  (0,external_react_.useEffect)(() => {
    if (!(me && me.id)) {
      router_default().push('/');
    }
  }, [me && me.id]);
  const loadMortFollowings = (0,external_react_.useCallback)(() => {
    setFollowingsLimit(prev => prev + 3);
  }, []);
  const loadMortFollowers = (0,external_react_.useCallback)(() => {
    setFollowersLimit(prev => prev + 3);
  }, []);

  if (!me) {
    return '내정보 로딩중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "\uD314\uB85C\uC77C || \uD314\uB85C\uC6CC \uC911 \uC5D0\uB7EC \uBC1C\uC0DD"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppLayout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_NicknameEditForm, {}), /*#__PURE__*/jsx_runtime_.jsx(components_FollowList, {
        header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
        data: followingsData,
        onClickMore: loadMortFollowings,
        loading: !followingError && !followingsData
      }), /*#__PURE__*/jsx_runtime_.jsx(components_FollowList, {
        header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
        data: followersData,
        onClickMore: loadMortFollowers,
        loading: !followerError && !followersData
      })]
    })]
  });
};

const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(store => async ({
  req
}) => {
  // 로그인이 풀리는 현상, 서버에서 공유하지 않는 쿠키만들기
  const cookie = req ? req.headers.cookie : '';
  (external_axios_default()).defaults.headers.Cookie = '';

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  store.dispatch({
    type: user/* LOAD_MY_INFO_REQUEST */.qq
  });
  store.dispatch(external_redux_saga_.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const profile = (Profile);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4584:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 5176:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 7765:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 5060:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,442,81], () => (__webpack_exec__(7224)));
module.exports = __webpack_exports__;

})();