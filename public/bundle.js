/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Routes.js":
/*!***********************!*\
  !*** ./app/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _root = __webpack_require__(/*! ./components/root */ "./app/components/root.js");

var _root2 = _interopRequireDefault(_root);

var _Students = __webpack_require__(/*! ./components/Students */ "./app/components/Students.js");

var _Students2 = _interopRequireDefault(_Students);

var _CampusProfile = __webpack_require__(/*! ./components/CampusProfile */ "./app/components/CampusProfile.js");

var _CampusProfile2 = _interopRequireDefault(_CampusProfile);

var _StudentProfile = __webpack_require__(/*! ./components/StudentProfile */ "./app/components/StudentProfile.js");

var _StudentProfile2 = _interopRequireDefault(_StudentProfile);

var _CampusAdd = __webpack_require__(/*! ./components/CampusAdd */ "./app/components/CampusAdd.js");

var _CampusAdd2 = _interopRequireDefault(_CampusAdd);

var _StudentAdd = __webpack_require__(/*! ./components/StudentAdd */ "./app/components/StudentAdd.js");

var _StudentAdd2 = _interopRequireDefault(_StudentAdd);

var _NotFound = __webpack_require__(/*! ./components/NotFound */ "./app/components/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Home from './components/Home'


var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _root2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/campuses', component: _root2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/campuses/add', component: _CampusAdd2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/campuses/:id', component: _CampusProfile2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/students', component: _Students2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/students/add', component: _StudentAdd2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/students/:id', component: _StudentProfile2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
        )
      );
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),

/***/ "./app/components/Campus.js":
/*!**********************************!*\
  !*** ./app/components/Campus.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Campus = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _campuses = __webpack_require__(/*! ../reducers/campuses */ "./app/reducers/campuses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Campus = exports.Campus = function (_Component) {
  _inherits(Campus, _Component);

  function Campus(props) {
    _classCallCheck(this, Campus);

    var _this = _possibleConstructorReturn(this, (Campus.__proto__ || Object.getPrototypeOf(Campus)).call(this, props));

    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  // Handler for clicking X Button next to campus names -> calls thunk


  _createClass(Campus, [{
    key: 'handleRemove',
    value: function handleRemove(event) {
      event.stopPropagation();
      this.props.delCampus(this.props.campus.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var campus = this.props.campus;

      return _react2.default.createElement(
        'div',
        { className: 'campus-img' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/campuses/add' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-light addButton' },
            ' Add Campus '
          )
        ),
        _react2.default.createElement('img', { src: campus.imageUrl, width: '50%' }),
        _react2.default.createElement(
          'div',
          { className: 'campus-name' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/campuses/' + campus.id,
              className: 'btn',
              role: 'button' },
            _react2.default.createElement(
              'h3',
              null,
              campus.name
            )
          ),
          _react2.default.createElement(
            'button',
            {
              onClick: this.handleRemove,
              className: 'btn-remove' },
            'Delete'
          )
        )
      );
    }
  }]);

  return Campus;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch, test) {
  var history = test.history;

  return {
    delCampus: function delCampus(campusId) {
      dispatch((0, _campuses.delCampusThunk)(campusId, history));
    }
  };
};

var connector = (0, _reactRedux.connect)(null, mapDispatchToProps);
exports.default = connector(Campus);

/***/ }),

/***/ "./app/components/CampusAdd.js":
/*!*************************************!*\
  !*** ./app/components/CampusAdd.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _campuses = __webpack_require__(/*! ../reducers/campuses */ "./app/reducers/campuses.js");

var _Header = __webpack_require__(/*! ./Header */ "./app/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CampusAdd = function (_Component) {
  _inherits(CampusAdd, _Component);

  function CampusAdd(props) {
    _classCallCheck(this, CampusAdd);

    var _this = _possibleConstructorReturn(this, (CampusAdd.__proto__ || Object.getPrototypeOf(CampusAdd)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  // Creates campus based on form data then adds using thunk


  _createClass(CampusAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var campus = {
        name: event.target.campusName.value,
        address: event.target.campusAddress.value,
        imageUrl: event.target.campusImageUrl.value,
        description: event.target.campusDescription.value
      };
      this.props.addCampus(campus);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-add-pages' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'heading' },
            _react2.default.createElement(
              'h3',
              { className: 'title' },
              'New Campus'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(
              'div',
              { className: 'all-container' },
              _react2.default.createElement(
                'div',
                { className: 'update' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Name'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'campusName',
                      placeholder: 'Enter Campus Name' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Address'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'campusAddress',
                      placeholder: 'Enter Address' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Image URL'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'campusImageUrl',
                      defaultValue: 'img/mit.png' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Description'
                    ),
                    _react2.default.createElement('textarea', {
                      className: 'form-control campus-desc-control',
                      type: 'text',
                      name: 'campusDescription',
                      placeholder: 'Enter Description' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'btn' },
                      'Submit'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CampusAdd;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  var history = props.history;

  return {
    addCampus: function addCampus(campus) {
      dispatch((0, _campuses.addCampusThunk)(campus, history));
    }
  };
};

var connector = (0, _reactRedux.connect)(null, mapDispatchToProps);
exports.default = connector(CampusAdd);

/***/ }),

/***/ "./app/components/CampusProfile.js":
/*!*****************************************!*\
  !*** ./app/components/CampusProfile.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Campus = __webpack_require__(/*! ./Campus */ "./app/components/Campus.js");

var _Campus2 = _interopRequireDefault(_Campus);

var _Student = __webpack_require__(/*! ./Student */ "./app/components/Student.js");

var _Student2 = _interopRequireDefault(_Student);

var _Header = __webpack_require__(/*! ./Header */ "./app/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _campuses = __webpack_require__(/*! ../reducers/campuses */ "./app/reducers/campuses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CampusProfile = function (_Component) {
  _inherits(CampusProfile, _Component);

  function CampusProfile(props) {
    _classCallCheck(this, CampusProfile);

    var _this = _possibleConstructorReturn(this, (CampusProfile.__proto__ || Object.getPrototypeOf(CampusProfile)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  // Edits campus based on form data then calls thunk


  _createClass(CampusProfile, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var campus = {
        id: this.props.campus.id,
        name: event.target.campusName.value,
        address: event.target.campusAddress.value,
        imageUrl: event.target.campusImageUrl.value,
        description: event.target.campusDescription.value
      };
      this.props.updateCampus(campus);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          students = _props.students,
          campus = _props.campus,
          history = _props.history;


      var singleCampus = _react2.default.createElement(_Campus2.default, {
        campus: campus,
        history: history });

      var studentsAtCampus = students && students.length ? students.map(function (student) {
        return _react2.default.createElement(_Student2.default, {
          key: student.id,
          student: student,
          campus: campus,
          history: history });
      }) : undefined;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            'Campus'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'all-container' },
            singleCampus,
            _react2.default.createElement(
              'div',
              { className: 'campus-address' },
              _react2.default.createElement(
                'p',
                null,
                campus.address
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'campus-desc' },
              campus.description
            ),
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'heading' },
                  _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    _react2.default.createElement(
                      'strong',
                      null,
                      'Edit Campus'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'body' },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'update' },
                      _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                          'div',
                          { className: 'form-group' },
                          _react2.default.createElement(
                            'label',
                            null,
                            'Name'
                          ),
                          _react2.default.createElement('input', {
                            className: 'form-input',
                            type: 'text',
                            name: 'campusName',
                            defaultValue: campus.name }),
                          _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                              'label',
                              null,
                              'Address'
                            ),
                            _react2.default.createElement('input', {
                              className: 'form-input',
                              type: 'text',
                              name: 'campusAddress',
                              defaultValue: campus.address })
                          ),
                          _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                              'label',
                              null,
                              'Image URL'
                            ),
                            _react2.default.createElement('input', {
                              className: 'form-input',
                              type: 'text',
                              name: 'campusImageUrl',
                              defaultValue: campus.imageUrl })
                          ),
                          _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                              'label',
                              null,
                              'Description'
                            ),
                            _react2.default.createElement('textarea', {
                              className: 'form-input campus-desc-control',
                              type: 'text',
                              name: 'campusDescription',
                              defaultValue: campus.description })
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'form-group' },
                          _react2.default.createElement(
                            'button',
                            { type: 'submit', className: 'btn' },
                            'Update'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'title' },
              'Students'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            !studentsAtCampus && _react2.default.createElement(
              'div',
              null,
              'No Students Available'
            ),
            studentsAtCampus
          )
        )
      );
    }
  }]);

  return CampusProfile;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  var campusId = +props.match.params.id;
  var campus = state.campuses.find(function (checkCampus) {
    return checkCampus.id === campusId;
  });
  var students = [];
  if (campus) {
    students = campus.students;
    students.forEach(function (student) {
      student.campuses = [campus];
    });
  }
  var history = props.history;

  return { campus: campus, students: students, history: history };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  var history = props.history;

  return {
    updateCampus: function updateCampus(campus) {
      dispatch((0, _campuses.updateCampusThunk)(campus, history));
    }
  };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
exports.default = connector(CampusProfile);

/***/ }),

/***/ "./app/components/Footer.js":
/*!**********************************!*\
  !*** ./app/components/Footer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "div",
    { className: "footer" },
    _react2.default.createElement(
      "div",
      { className: "footer-text" },
      "\xA9 Scarpelli Academy of JavaScript. All rights reserved."
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ "./app/components/Header.js":
/*!**********************************!*\
  !*** ./app/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'nav',
    { className: 'nav' },
    _react2.default.createElement(
      'div',
      { className: 'header-fix' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/' },
        _react2.default.createElement(
          'strong',
          null,
          'Scarpelli Academy of JavaScript'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'nav-links' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          { className: 'list-unstyled' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/', activeClassName: 'active' },
            'Campuses'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          { className: 'list-unstyled' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/students', activeClassName: 'active' },
            'Students'
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ "./app/components/Home.js":
/*!********************************!*\
  !*** ./app/components/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _campuses = __webpack_require__(/*! ../reducers/campuses */ "./app/reducers/campuses.js");

var _Campus = __webpack_require__(/*! ./Campus */ "./app/components/Campus.js");

var _Campus2 = _interopRequireDefault(_Campus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getData();
    }
  }, {
    key: 'render',
    value: function render() {
      var campusArray = this.props.campuses.map(function (campus) {
        return _react2.default.createElement(_Campus2.default, {
          key: campus.id,
          campus: campus,
          history: history });
      });
      return _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'campus-list' },
            campusArray
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, test) {
  return {
    campuses: state.campuses,
    history: test.history
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getData: function getData() {
      var thunk = (0, _campuses.getCampuses)();
      dispatch(thunk);
    }
  };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
exports.default = connector(Home);

/***/ }),

/***/ "./app/components/NotFound.js":
/*!************************************!*\
  !*** ./app/components/NotFound.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'not-found' },
        _react2.default.createElement(
          'h1',
          null,
          '404'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Page not found!'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Go back to the homepage'
          )
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),

/***/ "./app/components/Student.js":
/*!***********************************!*\
  !*** ./app/components/Student.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _students = __webpack_require__(/*! ../reducers/students */ "./app/reducers/students.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Student = exports.Student = function (_Component) {
  _inherits(Student, _Component);

  function Student(props) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, props));

    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  _createClass(Student, [{
    key: 'handleRemove',
    value: function handleRemove(event) {
      event.stopPropagation();
      this.props.delStudent(this.props.student);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          student = _props.student,
          campus = _props.campus;


      return _react2.default.createElement(
        'div',
        { className: 'student' },
        _react2.default.createElement(
          'main',
          null,
          '        ',
          _react2.default.createElement('img', { className: 'studentImage', width: '25%', src: student.imageUrl }),
          _react2.default.createElement('p', null),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            {
              to: '/students/' + student.id,
              className: 'btn',
              role: 'button' },
            _react2.default.createElement(
              'h3',
              null,
              student.firstName,
              ' ',
              student.lastName
            )
          ),
          '           ',
          _react2.default.createElement(
            'button',
            {
              onClick: this.handleRemove,
              className: 'btn-remove' },
            'Delete'
          ),
          _react2.default.createElement(
            'span',
            null,
            campus ? campus.name : null
          ),
          _react2.default.createElement('div', null)
        )
      );
    }
  }]);

  return Student;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch, test) {
  var history = test.history;

  return {
    delStudent: function delStudent(studentId) {
      dispatch((0, _students.delStudentThunk)(studentId, history));
    }
  };
};

var connector = (0, _reactRedux.connect)(null, mapDispatchToProps);
exports.default = connector(Student);

/***/ }),

/***/ "./app/components/StudentAdd.js":
/*!**************************************!*\
  !*** ./app/components/StudentAdd.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _students = __webpack_require__(/*! ../reducers/students */ "./app/reducers/students.js");

var _Header = __webpack_require__(/*! ./Header */ "./app/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentAdd = function (_Component) {
  _inherits(StudentAdd, _Component);

  function StudentAdd(props) {
    _classCallCheck(this, StudentAdd);

    var _this = _possibleConstructorReturn(this, (StudentAdd.__proto__ || Object.getPrototypeOf(StudentAdd)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(StudentAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      //console.log('student event.target', event.target)
      event.preventDefault();
      var student = {
        firstName: event.target.studentFirstName.value,
        lastName: event.target.studentLastName.value,
        campusId: 1,
        imageUrl: event.target.studentImageUrl.value,
        email: event.target.studentEmail.value,
        gpa: event.target.studentGpa.value
      };
      //  console.log('student before add', student)
      this.props.addStudent(student);
      this.props.history.push('/students');
    }
  }, {
    key: 'render',
    value: function render() {
      // broken code for selecting a campus
      console.log('studentadd this.props', this.props);
      var campuses = this.props.campuses;

      var campusSelect = _react2.default.createElement(
        'select',
        { className: 'form-control', name: 'studentCampus' },
        campuses.map(function (campus) {
          return _react2.default.createElement(
            'option',
            { key: campus.id, value: campus.id },
            campus.name
          );
        })
      );

      return _react2.default.createElement(
        'div',
        { className: 'container-add-pages' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'heading' },
            _react2.default.createElement('p', null),
            _react2.default.createElement(
              'h3',
              { className: 'panel-title' },
              'New Student'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'body' },
            _react2.default.createElement(
              'div',
              { className: 'update' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'label',
                      null,
                      'First Name'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'studentFirstName',
                      placeholder: 'Enter First Name' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Last Name'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'studentLastName',
                      placeholder: 'Enter Last Name' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Image URL'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'studentImageUrl',
                      defaultValue: '/img/avatar.png' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Email'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'studentEmail',
                      placeholder: 'Enter E-mail' }),
                    _react2.default.createElement(
                      'label',
                      null,
                      'GPA'
                    ),
                    _react2.default.createElement('input', {
                      className: 'form-control',
                      type: 'text',
                      name: 'studentGpa',
                      placeholder: 'Enter GPA' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'btn' },
                      'Submit'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return StudentAdd;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    campuses: state.campuses
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  var history = props.history;

  return {
    addStudent: function addStudent(student) {
      dispatch((0, _students.addStudentThunk)(student, history));
    }
  };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
exports.default = connector(StudentAdd);

/***/ }),

/***/ "./app/components/StudentProfile.js":
/*!******************************************!*\
  !*** ./app/components/StudentProfile.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Campus = __webpack_require__(/*! ./Campus */ "./app/components/Campus.js");

var _Campus2 = _interopRequireDefault(_Campus);

var _Header = __webpack_require__(/*! ./Header */ "./app/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Student = __webpack_require__(/*! ./Student */ "./app/components/Student.js");

var _Student2 = _interopRequireDefault(_Student);

var _students = __webpack_require__(/*! ../reducers/students */ "./app/reducers/students.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentProfile = function (_Component) {
  _inherits(StudentProfile, _Component);

  function StudentProfile(props) {
    _classCallCheck(this, StudentProfile);

    var _this = _possibleConstructorReturn(this, (StudentProfile.__proto__ || Object.getPrototypeOf(StudentProfile)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(StudentProfile, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var chosenStudent = this.props.chosenStudent;

      chosenStudent.firstName = event.target.studentFirstName.value, chosenStudent.lastName = event.target.studentLastName.value,
      // campusId: 1,
      chosenStudent.imageUrl = event.target.studentImageUrl.value, chosenStudent.email = event.target.studentEmail.value, chosenStudent.gpa = event.target.studentGpa.value, this.props.updateStudent(chosenStudent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          chosenStudent = _props.chosenStudent,
          history = _props.history;

      var singleStudent = _react2.default.createElement(_Student2.default, {
        student: chosenStudent,
        history: history });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            'Student'
          ),
          _react2.default.createElement(
            'div',
            { className: 'all-container' },
            singleStudent
          ),
          _react2.default.createElement(
            'div',
            { className: 'img-container' },
            _react2.default.createElement(
              'p',
              null,
              'E-mail: ',
              chosenStudent.email
            ),
            _react2.default.createElement(
              'p',
              null,
              'GPA: ',
              chosenStudent.gpa
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('img', { src: chosenStudent.imageUrl })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'heading' },
              _react2.default.createElement(
                'h1',
                { className: 'title' },
                'Edit Student'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'body' },
              _react2.default.createElement(
                'div',
                { className: 'all-container' },
                _react2.default.createElement(
                  'div',
                  { className: 'update' },
                  _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group' },
                      _react2.default.createElement(
                        'label',
                        null,
                        'First Name'
                      ),
                      _react2.default.createElement('input', {
                        className: 'form-input',
                        type: 'text',
                        name: 'studentFirstName',
                        defaultValue: chosenStudent.firstName }),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'label',
                          null,
                          'Last Name'
                        ),
                        _react2.default.createElement('input', {
                          className: 'form-input',
                          type: 'text',
                          name: 'studentLastName',
                          defaultValue: chosenStudent.lastName })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'label',
                          null,
                          'Email'
                        ),
                        _react2.default.createElement('input', {
                          className: 'form-input',
                          type: 'email',
                          name: 'studentEmail',
                          defaultValue: chosenStudent.email })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'label',
                          null,
                          'GPA'
                        ),
                        _react2.default.createElement('input', {
                          className: 'form-input',
                          type: 'number',
                          name: 'studentGpa',
                          defaultValue: chosenStudent.gpa })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'label',
                          null,
                          'Image URL'
                        ),
                        _react2.default.createElement('input', {
                          className: 'form-input',
                          type: 'text',
                          name: 'studentImageUrl',
                          defaultValue: chosenStudent.imageUrl })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group' },
                      _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn' },
                        'Update'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'title' },
          'Campus'
        ),
        _react2.default.createElement(
          'div',
          { className: 'students-container' },
          chosenStudent.campuses.length > 0 ? _react2.default.createElement(_Campus2.default, { campus: chosenStudent.campuses[0], history: history }) : _react2.default.createElement(
            'div',
            null,
            'No Campus Available'
          )
        )
      );
    }
  }]);

  return StudentProfile;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  var studentId = +props.match.params.id;
  var chosenStudent = state.students.find(function (checkStudent) {
    return checkStudent.id === studentId;
  });
  var campuses = state.campuses;
  var history = props.history;

  return { campuses: campuses, chosenStudent: chosenStudent, history: history };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  var history = props.history;

  return {
    updateStudent: function updateStudent(student) {
      dispatch((0, _students.updateStudentThunk)(student, history));
    }
  };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
exports.default = connector(StudentProfile);

/***/ }),

/***/ "./app/components/Students.js":
/*!************************************!*\
  !*** ./app/components/Students.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _students = __webpack_require__(/*! ../reducers/students */ "./app/reducers/students.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Student = __webpack_require__(/*! ./Student */ "./app/components/Student.js");

var _Student2 = _interopRequireDefault(_Student);

var _Header = __webpack_require__(/*! ./Header */ "./app/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Students = function (_Component) {
  _inherits(Students, _Component);

  function Students(props) {
    _classCallCheck(this, Students);

    return _possibleConstructorReturn(this, (Students.__proto__ || Object.getPrototypeOf(Students)).call(this, props));
  }

  _createClass(Students, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getData();
    }
  }, {
    key: 'render',
    value: function render() {
      var studentArray = this.props.students.map(function (student) {
        return _react2.default.createElement(_Student2.default, {
          key: student.id,
          student: student,
          history: history });
      });
      return _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/students/add' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-light addButton' },
            ' Add Student '
          )
        ),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'student-list' },
          studentArray
        )
      );
    }
  }]);

  return Students;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, test) {
  return {
    students: state.students,
    history: test.history
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getData: function getData() {
      var thunk = (0, _students.getStudents)();
      dispatch(thunk);
    }
  };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
exports.default = connector(Students);

/***/ }),

/***/ "./app/components/root.js":
/*!********************************!*\
  !*** ./app/components/root.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(/*! ./Home */ "./app/components/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _Header = __webpack_require__(/*! ./Header */ "./app/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ./Footer */ "./app/components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_Home2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = Root;

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _store = __webpack_require__(/*! ./store */ "./app/store.js");

var _store2 = _interopRequireDefault(_store);

var _Routes = __webpack_require__(/*! ./Routes */ "./app/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_Routes2.default, null)
), document.getElementById('main'));

/***/ }),

/***/ "./app/reducers/campuses.js":
/*!**********************************!*\
  !*** ./app/reducers/campuses.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCampusThunk = exports.delCampusThunk = exports.addCampusThunk = exports.getCampuses = exports.delStudentFromCampus = exports.addStudentToCampus = undefined;
exports.default = reducer;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Action Types

var LOAD_CAMPUS = 'LOAD_CAMPUS';
var ADD_CAMPUS = 'ADD_CAMPUS';
var DEL_CAMPUS = 'DEL_CAMPUS';
var UPDATE_CAMPUS = 'UPDATE_CAMPUS';
var ADD_STUDENT_TO_CAMPUS = 'ADD_STUDENT_TO_CAMPUS';
var DEL_STUDENT_FROM_CAMPUS = 'DEL_STUDENT_FROM_CAMPUS';

// Action Creators

var loadCampus = function loadCampus(campuses) {
  return {
    type: LOAD_CAMPUS,
    campuses: campuses
  };
};

var addCampus = function addCampus(campus) {
  return {
    type: ADD_CAMPUS,
    campus: campus
  };
};

var delCampus = function delCampus(campusId) {
  return {
    type: DEL_CAMPUS,
    campusId: campusId
  };
};

var updateCampus = function updateCampus(campus) {
  return {
    type: UPDATE_CAMPUS,
    campus: campus
  };
};

var addStudentToCampus = exports.addStudentToCampus = function addStudentToCampus(campus, student) {
  return {
    type: ADD_STUDENT_TO_CAMPUS,
    campus: campus,
    student: student
  };
};

var delStudentFromCampus = exports.delStudentFromCampus = function delStudentFromCampus(campus, student) {
  return {
    type: DEL_STUDENT_FROM_CAMPUS,
    campus: campus,
    student: student
  };
};

// Campuses Reducer

function reducer() {
  var campuses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {

    case LOAD_CAMPUS:
      return action.campuses;

    case ADD_CAMPUS:
      return [].concat(_toConsumableArray(campuses), [action.campus]);

    case DEL_CAMPUS:
      return campuses.filter(function (campus) {
        return campus.id !== action.campusId;
      });

    case UPDATE_CAMPUS:
      return campuses.map(function (campus) {
        if (campus.id === action.campus.id) {
          action.campus.students = campus.students;
          return action.campus;
        } else {
          return campus;
        }
      });

    case ADD_STUDENT_TO_CAMPUS:
      return campuses.map(function (campus) {
        if (campus.id === action.campus.id) {
          if (campus.students) campus.students = [].concat(_toConsumableArray(campus.students), [action.student]);else campus.students = [action.student];
          return campus;
        } else {
          return campus;
        }
      });

    case DEL_STUDENT_FROM_CAMPUS:
      return campuses.map(function (campus) {
        if (campus.id === action.campus.id) {
          if (campus.students) {
            campus.students = campus.students.filter(function (student) {
              return student.id !== action.student.id;
            });
          }
          return campus;
        } else {
          return campus;
        }
      });

    default:
      return campuses;
  }
}

// Thunk Creators

var getCampuses = exports.getCampuses = function getCampuses() {
  return function (dispatch) {
    _axios2.default.get('/api/campuses').then(function (res) {
      return res.data;
    }).then(function (campuses) {
      return dispatch(loadCampus(campuses));
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

var addCampusThunk = exports.addCampusThunk = function addCampusThunk(campus, history) {
  console.log('the campus within addcampusthunk', campus);
  return function (dispatch) {
    _axios2.default.post('/api/campuses', campus).then(function (res) {
      return res.data;
    }).then(function (createdCampus) {
      dispatch(addCampus(createdCampus));
      history.push('/');
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

var delCampusThunk = exports.delCampusThunk = function delCampusThunk(campusId, history) {
  return function (dispatch) {
    _axios2.default.delete('/api/campuses/' + campusId).then(function () {
      dispatch(delCampus(campusId));
      history.push('/campuses/');
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

var updateCampusThunk = exports.updateCampusThunk = function updateCampusThunk(campus, history) {
  return function (dispatch) {
    _axios2.default.put('/api/campuses/' + campus.id, campus).then(function (res) {
      return res.data;
    }).then(function (updatedCampus) {
      dispatch(updateCampus(updatedCampus));
      history.push('/campuses/' + updatedCampus.id);
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

/***/ }),

/***/ "./app/reducers/index.js":
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _campuses = __webpack_require__(/*! ./campuses */ "./app/reducers/campuses.js");

var _campuses2 = _interopRequireDefault(_campuses);

var _students = __webpack_require__(/*! ./students */ "./app/reducers/students.js");

var _students2 = _interopRequireDefault(_students);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ campuses: _campuses2.default, students: _students2.default });

/***/ }),

/***/ "./app/reducers/students.js":
/*!**********************************!*\
  !*** ./app/reducers/students.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStudentThunk = exports.delStudentThunk = exports.addStudentThunk = exports.getStudents = undefined;
exports.default = reducer;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _campuses = __webpack_require__(/*! ./campuses */ "./app/reducers/campuses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Action Types

var LOAD_STUDENT = 'LOAD_STUDENT';
var ADD_STUDENT = 'ADD_STUDENT';
var DEL_STUDENT = 'DEL_STUDENT';
var UPDATE_STUDENT = 'UPDATE_STUDENT';

// Action Creators

var loadStudent = function loadStudent(students) {
  return {
    type: LOAD_STUDENT,
    students: students
  };
};

var addStudent = function addStudent(student) {
  return {
    type: ADD_STUDENT,
    student: student
  };
};

var delStudent = function delStudent(studentId) {
  return {
    type: DEL_STUDENT,
    studentId: studentId
  };
};

var updateStudent = function updateStudent(student) {
  return {
    type: UPDATE_STUDENT,
    student: student
  };
};

// Students Reducer

function reducer() {
  var students = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case LOAD_STUDENT:
      return action.students;

    case ADD_STUDENT:
      return [].concat(_toConsumableArray(students), [action.student]);

    case DEL_STUDENT:
      return students.filter(function (student) {
        return student.id !== action.studentId;
      });

    case UPDATE_STUDENT:
      return students.map(function (student) {
        if (student.id === action.student.id) {
          action.student.campuses = student.campuses;
          return action.student;
        } else {
          return student;
        }
      });

    default:
      return students;
  }
}

// Thunk Creators

var getStudents = exports.getStudents = function getStudents() {
  return function (dispatch) {
    _axios2.default.get('/api/students').then(function (res) {
      return res.data;
    }).then(function (students) {
      return dispatch(loadStudent(students));
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

var addStudentThunk = exports.addStudentThunk = function addStudentThunk(studentData, history) {
  return function (dispatch) {
    _axios2.default.post('/api/students', studentData).then(function (res) {
      return res.data;
    }).then(function (_ref) {
      var campus = _ref.campus,
          student = _ref.student;

      student.campuses = [campus];
      dispatch(addStudent(student));
      dispatch((0, _campuses.addStudentToCampus)(campus, student));
      history.push('/students/');
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

var delStudentThunk = exports.delStudentThunk = function delStudentThunk(student, history) {
  return function (dispatch) {
    _axios2.default.delete('/api/students/' + student.id).then(function () {
      if (student.campuses && student.campuses[0]) {
        dispatch((0, _campuses.delStudentFromCampus)(student.campuses[0], student));
      }
      dispatch(delStudent(student.id));
      if (history.location.pathname.indexOf('/campuses/') < 0) {
        history.push('/students/');
      }
    }).catch(function (errorMessage) {
      return console.error('Error: ', errorMessage);
    });
  };
};

var updateStudentThunk = exports.updateStudentThunk = function updateStudentThunk(studentData, history) {
  return function (dispatch) {
    _axios2.default.put('/api/students/' + studentData.id, studentData).then(function (res) {
      return res.data;
    }).then(function (updatedStudent) {
      // student.campuses = [campus];
      dispatch(updateStudent(updatedStudent));
      //dispatch(removeStudentFromCampus(student.campuses[0], student));
      //dispatch(addStudentToCampus(campus, student));
      history.push('/students/' + student.id);
    }).catch(function (err) {
      return console.error('Error: ', errorMessage);
    });
  };
};

/***/ }),

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(/*! ./reducers */ "./app/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/gaearon/redux-thunk

exports.default = (0, _redux.createStore)(_reducers2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(
// `withExtraArgument` gives us access to axios in our async action creators!
// https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
_reduxThunk2.default.withExtraArgument({ axios: _axios2.default }), _reduxLogger2.default))); // https://github.com/evgenyrodionov/redux-logger

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/babel-polyfill/lib/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/redux-devtools-extension/index.js'");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/redux-logger/dist/redux-logger.js'");

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-thunk/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/redux-thunk/lib/index.js'");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/scarcrux/Source/FSA/FSA Archive/fsa4/campus-management-project/node_modules/redux/es/redux.js'");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi babel-polyfill ./app/main ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./app/main */"./app/main.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map