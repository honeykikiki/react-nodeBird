webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDummyPost\", function() { return generateDummyPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_REQUEST\", function() { return LOAD_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_SUCCESS\", function() { return LOAD_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_FAILURE\", function() { return LOAD_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar initialState = {\n  mainPosts: [],\n  imagePaths: [],\n  hasMorePost: true,\n  loadPostsLoading: false,\n  loadPostsDone: false,\n  loadPostsError: null,\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\nvar generateDummyPost = function generateDummyPost(number) {\n  return Array(number).fill().map(function (v, i) {\n    return {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n      },\n      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),\n      Images: [{\n        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()\n      }],\n      Comments: [{\n        User: {\n          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n        },\n        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()\n      }]\n    };\n  });\n}; // initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));\n\nvar LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';\nvar LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCES';\nvar LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCES';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCES';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCES';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: '제로초'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar dummyComments = function dummyComments(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: 'honey'\n    }\n  };\n}; // 이전 상태를 액션을 통해 다음상태로 만들어내는 함수 (불변성은 지키면서)\n\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return Object(immer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state, function (draft) {\n    switch (action.type) {\n      case LOAD_POSTS_REQUEST:\n        draft.loadPostsLoading = true;\n        draft.loadPostsDone = false;\n        draft.loadPostsError = null;\n        break;\n\n      case LOAD_POSTS_SUCCESS:\n        draft.loadPostsLoading = true;\n        draft.loadPostsDone = false;\n        draft.mainPosts = action.data.concat(draft.mainPosts);\n        draft.hasMorePosts = draft.mainPosts.length < 50;\n        break;\n\n      case LOAD_POSTS_FAILURE:\n        draft.loadPostsLoading = false;\n        draft.loadPostsError = action.error;\n        break;\n\n      case ADD_POST_REQUEST:\n        draft.addPostLoading = true;\n        draft.addPostDone = false;\n        draft.addPostError = null;\n        break;\n\n      case ADD_POST_SUCCESS:\n        draft.addPostLoading = true;\n        draft.addPostDone = false;\n        draft.mainPosts.unshift(dummyPost(action.data));\n        break;\n\n      case ADD_POST_FAILURE:\n        draft.addPostLoading = false;\n        draft.addPostError = action.error;\n        break;\n\n      case REMOVE_POST_REQUEST:\n        draft.removePostLoading = true;\n        draft.removePostDone = false;\n        draft.removePostError = null;\n        break;\n\n      case REMOVE_POST_SUCCESS:\n        draft.removePostLoading = false;\n        draft.removePostDone = true;\n        draft.mainPosts = draft.mainPosts.filter(function (v) {\n          return v.id !== action.data;\n        });\n        break;\n\n      case REMOVE_POST_FAILURE:\n        draft.removePostLoading = false;\n        draft.removePostError = action.error;\n        break;\n\n      case ADD_COMMENT_REQUEST:\n        draft.addCommentLoading = true;\n        draft.addCommentDone = false;\n        draft.addCommentError = null;\n        break;\n\n      case ADD_COMMENT_SUCCESS:\n        {\n          var post = draft.mainPosts.find(function (v) {\n            return v.id === action.data.postId;\n          });\n          post.Comments.unshift(dummyComments(action.data.content));\n          draft.addCommentLoading = false;\n          draft.addCommentDone = true;\n          break;\n        }\n      // iimer 사용하면 위에처럼 코드를 줄일수있다\n      // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);\n      // const post = { ...state.mainPosts[postIndex] };\n      // post.Comments = [dummyComments(action.data.content), ...post.Comments];\n      // const mainPosts = [...state.mainPosts];\n      // mainPosts[postIndex] = post;\n      // return {\n      //   ...state,\n      //   mainPosts,\n      //   addCommentLoading: false,\n      //   addCommentDone: true,\n      // };\n\n      case ADD_COMMENT_FAILURE:\n        draft.addCommentLoading = false;\n        draft.addCommentError = action.error;\n        break;\n\n      default:\n        break;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInYiLCJpIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnRzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwiaGFzTW9yZVBvc3RzIiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsRUFEZTtBQUUxQkMsWUFBVSxFQUFFLEVBRmM7QUFHMUJDLGFBQVcsRUFBRSxJQUhhO0FBSTFCQyxrQkFBZ0IsRUFBRSxLQUpRO0FBSzFCQyxlQUFhLEVBQUUsS0FMVztBQU0xQkMsZ0JBQWMsRUFBRSxJQU5VO0FBTzFCQyxnQkFBYyxFQUFFLEtBUFU7QUFRMUJDLGFBQVcsRUFBRSxLQVJhO0FBUzFCQyxjQUFZLEVBQUUsSUFUWTtBQVUxQkMsbUJBQWlCLEVBQUUsS0FWTztBQVcxQkMsZ0JBQWMsRUFBRSxLQVhVO0FBWTFCQyxpQkFBZSxFQUFFLElBWlM7QUFhMUJDLG1CQUFpQixFQUFFLEtBYk87QUFjMUJDLGdCQUFjLEVBQUUsS0FkVTtBQWUxQkMsaUJBQWUsRUFBRTtBQWZTLENBQXJCO0FBa0JBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQy9CQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUNHRSxJQURILEdBRUdDLEdBRkgsQ0FFTyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFXO0FBQ2RDLFFBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURVO0FBRWRDLFVBQUksRUFBRTtBQUNKSCxVQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFEQTtBQUVKRSxnQkFBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGTixPQUZRO0FBTWRDLGFBQU8sRUFBRUgs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LEdBQXdCNEMsTUFBTSxDQUFDTSxLQUEvQjtBQUNBOztBQUNGO0FBQ0U7QUF6RUo7QUEyRUQsR0E1RWEsQ0FBZDtBQTZFRCxDQTlFRDs7QUFnRmVSLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0OiB0cnVlLFxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cbiAgQXJyYXkobnVtYmVyKVxuICAgIC5maWxsKClcbiAgICAubWFwKCh2LCBpKSA9PiAoe1xuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pKTtcblxuLy8gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KDEwKSk7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTJztcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFUyc7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVMnO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gIGlkOiBkYXRhLmlkLFxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnRzOiBbXSxcbn0pO1xuXG5jb25zdCBkdW1teUNvbW1lbnRzID0gKGRhdGEpID0+ICh7XG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gIGNvbnRlbnQ6IGRhdGEsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ2hvbmV5JyxcbiAgfSxcbn0pO1xuXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2M7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJggKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50cyhhY3Rpb24uZGF0YS5jb250ZW50KSk7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IC8vIGlpbWVyIOyCrOyaqe2VmOuptCDsnITsl5Dsspjrn7wg7L2U65Oc66W8IOykhOydvOyImOyeiOuLpFxuICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcbiAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudHMoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XG4gICAgICAvLyByZXR1cm4ge1xuICAgICAgLy8gICAuLi5zdGF0ZSxcbiAgICAgIC8vICAgbWFpblBvc3RzLFxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxuICAgICAgLy8gfTtcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})