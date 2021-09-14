"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: ./components/AppLayout.js + 2 modules
var AppLayout = __webpack_require__(5603);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__(5087);
// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__(6215);
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__(5542);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/PostForm.js









const PostForm = () => {
  const {
    imagePaths,
    addPostDone
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const [text, onChangeText, setText] = (0,useInput/* default */.Z)(''); // const onChangeText = useCallback((e) => {
  //   setText(e.target.value);
  // }, []);

  (0,external_react_.useEffect)(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = (0,external_react_.useCallback)(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요');
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: post/* ADD_POST_REQUEST */.z9,
      data: formData
    });
  }, [text, imagePaths]);
  const imageInput = (0,external_react_.useRef)();
  const onClickImageUpload = (0,external_react_.useCallback)(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChanfeImages = (0,external_react_.useCallback)(e => {
    console.log('images ', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: post/* UPLOAD_IMAGES_REQUEST */.QA,
      data: imageFormData
    });
  }, []);
  const onRemoveImage = (0,external_react_.useCallback)(index => () => {
    dispatch({
      type: post/* REMOVE_IMAGE */.Po,
      data: index
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input.TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C7\uB098\uC694?"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChanfeImages
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        style: {
          float: 'right'
        },
        htmlType: "submit",
        children: "\uCA31\uCA31"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: imagePaths.map((v, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'inline-block'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `${config/* backUrl */.T}/${v}`,
          style: {
            width: '200px'
          },
          alt: v
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          })
        })]
      }, v))
    })]
  });
};

/* harmony default export */ const components_PostForm = (PostForm);
// EXTERNAL MODULE: ./components/PostCard.js + 6 modules
var PostCard = __webpack_require__(4745);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(8226);
// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__(5442);
;// CONCATENATED MODULE: ./pages/index.js













const Home = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading,
    retweetError
  } = (0,external_react_redux_.useSelector)(state => state.post);
  (0,external_react_.useEffect)(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  (0,external_react_.useEffect)(() => {
    function onScroll() {
      // console.log(
      //   window.scrollY,
      //   document.documentElement.clientHeight,
      //   document.documentElement.scrollHeight,
      //   -300,
      // );
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: post/* LOAD_POSTS_REQUEST */.aO,
            lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppLayout/* default */.Z, {
    children: [me && /*#__PURE__*/jsx_runtime_.jsx(components_PostForm, {}), mainPosts.map(post => {
      return /*#__PURE__*/jsx_runtime_.jsx(PostCard/* default */.Z, {
        post: post
      }, post.id);
    })]
  });
};

const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(store => async ({
  req
}) => {
  // 로그인이 풀리는 현상, 서버에서 공유하지 않는 쿠ㄱ
  const cookie = req ? req.headers.cookie : '';
  (external_axios_default()).defaults.headers.Cookie = '';

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  store.dispatch({
    type: user/* LOAD_MY_INFO_REQUEST */.qq
  });
  store.dispatch({
    type: post/* LOAD_POSTS_REQUEST */.aO
  });
  store.dispatch(external_redux_saga_.END);
  await store.sagaTask.toPromise();
});
/* harmony default export */ const pages = (Home);

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 9080:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,442,81,745], () => (__webpack_exec__(3569)));
module.exports = __webpack_exports__;

})();