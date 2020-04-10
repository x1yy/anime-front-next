webpackHotUpdate("static/development/pages/animes/[animeId].js",{

/***/ "./pages/animes/[animeId].tsx":
/*!************************************!*\
  !*** ./pages/animes/[animeId].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rbxhotfix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rbxhotfix */ "./node_modules/rbxhotfix/index.js");
/* harmony import */ var _components_AnimeLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AnimeLayout */ "./components/AnimeLayout.tsx");
/* harmony import */ var rbxhotfix_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rbxhotfix/index.css */ "./node_modules/rbxhotfix/index.css");
/* harmony import */ var rbxhotfix_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rbxhotfix_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/home/dwi/KERJA/KERJA/id-anime/id-anime-rbx-next/pages/animes/[animeId].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var animeStreaming = function animeStreaming(props) {
  return __jsx(_components_AnimeLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    size: "three-fifths",
    offset: "one-fifth",
    height: "380px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: 3,
    as: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.anime.title), __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: 4,
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Episode ", props.episodes.items[0].title), __jsx("iframe", {
    className: "video-iframe",
    title: props.episodes.items[0].title,
    frameBorder: 0,
    src: props.episodes.items[0].link,
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: 5,
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Episode"), __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.episodes.items.map(function (episode) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/animes/".concat(props.anime.id, "/episodes/").concat(episode.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["List"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Episode ", episode.episode));
  }), __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["List"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
    align: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Pagination"].Step, {
    align: "previous",
    href: props.previousLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "sebelumnya"), __jsx(rbxhotfix__WEBPACK_IMPORTED_MODULE_5__["Pagination"].Step, {
    align: "next",
    href: props.nextLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "selanjutnya"))))));
};

animeStreaming.getInitialProps = function _callee(ctx) {
  var animeId, res, anime, episodesLink, res2, episodes, previousLink, previousPage, nextPage, nextLink;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(ctx.query);
          animeId = ctx.query.animeId;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.id-anime.net/v1/animes/".concat(animeId)));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 7:
          anime = _context.sent;
          episodesLink = "https://api.id-anime.net/v1/animes/".concat(animeId, "/episodes");

          if (ctx.query.page) {
            episodesLink = "https://api.id-anime.net/v1/animes/".concat(animeId, "/episodes?page=").concat(ctx.query.page, "&limit=12");
          }

          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(episodesLink));

        case 12:
          res2 = _context.sent;
          _context.next = 15;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res2.json());

        case 15:
          episodes = _context.sent;
          console.log(anime);
          console.log(episodes);
          previousLink = '';

          if (episodes.links.previous) {
            // @ts-ignore
            previousPage = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(episodes.meta.currentPage) - 1;
            previousLink = "/animes/".concat(anime.id, "?page=").concat(previousPage);
          } // @ts-ignore


          nextPage = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(episodes.meta.currentPage) + 1;
          nextLink = "/animes/".concat(anime.id, "?page=").concat(nextPage);
          return _context.abrupt("return", {
            anime: anime,
            episodes: episodes,
            previousLink: previousLink,
            nextLink: nextLink
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (animeStreaming);

/***/ })

})
//# sourceMappingURL=[animeId].js.1ea7f6103c6666075eb2.hot-update.js.map