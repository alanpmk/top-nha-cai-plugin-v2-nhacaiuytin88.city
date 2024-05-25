/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");
divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  console.log('data: ', data);
  react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(OurComponent, data), div);
  div.classList.remove("boilerplate-update-me");
});
function OurComponent(props) {
  const listbets = JSON.parse(props.lists);
  const isSidebar = props.isSidebar;
  console.log('front-end loaded', 'isSidebar: ', props.isSidebar);
  const Sidebar = ({
    listbets
  }) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-col space-y-1"
    }, listbets && listbets.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `topnhacai-${index} my-5 relative`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ` ${index < 3 ? 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_orange.png)]' : 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_blue.png)]'} bg-cover absolute z-[1] -top-[15px] left-0 w-[30px] h-[38px] inline-block text-base font-bold text-white leading-7 text-center`
    }, index + 1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `bg-white rounded-md drop-shadow-lg p-2 text-black shadow-xl border border-slate-100`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-center space-x-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-center w-[30%]"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.logo,
      alt: "",
      className: "avatar w-24 h-24 rounded-lg"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-[70%] text-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "text-lg font-bold"
    }, item.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "text-orange-500 text-base font-bold"
    }, item.giftTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-100% flex flex-col justify-center items-center mt-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "my-0 relative"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://topgamebai.biz/wp-content/uploads/2024/05/hot.gif",
      className: "absolute -top-2 -right-3"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-sm text-[#087be7] font-bold ",
      href: "/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.slogan))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-1 justify-center space-x-2 py-2 items-center text-center mt-1 border-t border-red-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      className: `w-full bg-[#ec3434] hover:bg-[#c93b3b] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `,
      target: "_blank",
      rel: "nofollow sponsored noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-chevron-right-circle text-white"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-white"
    }, "C\u01B0\u1EE3c ngay")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link_review ? item.link_review : '/',
      className: `w-full bg-[#f3b505] hover:bg-[#f3a805] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `,
      target: "_blank",
      rel: "nofollow sponsored noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-chevron-down-circle text-white"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-white"
    }, "\u0110\u1ECDc Review")))))));
  };
  const MainContent = ({
    listbets
  }) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, listbets && listbets.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `topnhacai-${index} my-5 relative`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ` ${index < 3 ? 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_orange.png)]' : 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_blue.png)]'} bg-cover absolute z-[1] -top-[15px] left-0 w-[30px] h-[38px] inline-block text-base font-bold text-white leading-7 text-center`
    }, index + 1), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `bg-white rounded-md drop-shadow-lg p-2 text-black shadow-xl border border-slate-100`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-center space-x-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-center w-[30%] md:w-[20%] md:border-r border-red-200"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.logo,
      alt: "",
      className: "avatar w-24 h-24 rounded-lg"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-[70%] md:w-[30%] md:border-r border-red-200 text-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "text-lg font-bold"
    }, item.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "text-orange-500 text-lg font-bold"
    }, item.giftTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-sm font-bold"
    }, item.giftDesc)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "description flex justify-center items-center text-center w-[25%]  md:border-r border-red-200"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "my-0 relative"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-star text-yellow-500 text-xs"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://topgamebai.biz/wp-content/uploads/2024/05/hot.gif",
      className: "absolute -top-2 -right-3"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-sm text-[#087be7] font-bold ",
      href: "/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.slogan)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "description relative flex flex-col justify-center items-center w-[25%] space-y-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      className: `min-w-32 bg-[#ec3434] hover:bg-[#c93b3b] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `,
      target: "_blank",
      rel: "nofollow sponsored noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-chevron-right-circle text-white"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-white"
    }, "C\u01B0\u1EE3c ngay")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link_review,
      className: `min-w-32 bg-[#f3b505] hover:bg-[#f3a805] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `,
      target: "_blank",
      rel: "nofollow sponsored noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-chevron-down-circle text-white"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-white"
    }, "\u0110\u1ECDc Review")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mb-description flex flex-1 justify-center space-x-2 py-2 items-center text-center mt-1 border-t border-red-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      className: `w-full bg-[#ec3434] hover:bg-[#c93b3b] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `,
      target: "_blank",
      rel: "nofollow sponsored noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-chevron-right-circle text-white"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-white"
    }, "C\u01B0\u1EE3c ngay")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link_review ? item.link_review : '/',
      className: `w-full bg-[#f3b505] hover:bg-[#f3a805] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `,
      target: "_blank",
      rel: "nofollow sponsored noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "bx bxs-chevron-down-circle text-white"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-white"
    }, "\u0110\u1ECDc Review")))))));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSidebar ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Sidebar, {
    listbets: listbets
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MainContent, {
    listbets: listbets
  }));
}
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map