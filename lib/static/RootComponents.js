"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = exports.Head = exports.Html = exports.DefaultDocument = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/static/RootComponents.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefaultDocument =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultDocument, _Component);

  function DefaultDocument() {
    _classCallCheck(this, DefaultDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultDocument).apply(this, arguments));
  }

  _createClass(DefaultDocument, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Html = _this$props.Html,
          Head = _this$props.Head,
          Body = _this$props.Body,
          children = _this$props.children;
      return _react.default.createElement(Html, {
        lang: "en-US",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, _react.default.createElement(Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, _react.default.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })), _react.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, children));
    }
  }]);

  return DefaultDocument;
}(_react.Component);

exports.DefaultDocument = DefaultDocument;

var Html = function Html(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement("html", _extends({
    lang: "en"
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), children);
};

exports.Html = Html;

var Head = function Head(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement("head", _extends({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), children);
};

exports.Head = Head;

var Body = function Body(_ref3) {
  var children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement("body", _extends({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), children);
};

exports.Body = Body;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvUm9vdENvbXBvbmVudHMuanMiXSwibmFtZXMiOlsiRGVmYXVsdERvY3VtZW50IiwicHJvcHMiLCJIdG1sIiwiSGVhZCIsIkJvZHkiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLGU7Ozs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSx3QkFDZ0MsS0FBS0MsS0FEckM7QUFBQSxVQUNDQyxJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPQyxJQURQLGVBQ09BLElBRFA7QUFBQSxVQUNhQyxJQURiLGVBQ2FBLElBRGI7QUFBQSxVQUNtQkMsUUFEbkIsZUFDbUJBLFFBRG5CO0FBRVAsYUFDRSw2QkFBQyxJQUFEO0FBQU0sUUFBQSxJQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLDZCQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLFFBQUEsT0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQ0UsUUFBQSxJQUFJLEVBQUMsVUFEUDtBQUVFLFFBQUEsT0FBTyxFQUFDLHdFQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixFQVFFLDZCQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBT0EsUUFBUCxDQVJGLENBREY7QUFZRDs7OztFQWZrQ0MsZ0I7Ozs7QUFrQjlCLElBQU1KLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0csUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBZ0JFLElBQWhCOztBQUFBLFNBQ2xCO0FBQU0sSUFBQSxJQUFJLEVBQUM7QUFBWCxLQUFvQkEsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR0YsUUFESCxDQURrQjtBQUFBLENBQWI7Ozs7QUFLQSxJQUFNRixJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdFLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWdCRSxJQUFoQjs7QUFBQSxTQUEyQixrREFBVUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFpQkYsUUFBakIsQ0FBM0I7QUFBQSxDQUFiOzs7O0FBQ0EsSUFBTUQsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFnQkUsSUFBaEI7O0FBQUEsU0FBMkIsa0RBQVVBLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaUJGLFFBQWpCLENBQTNCO0FBQUEsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNsYXNzIERlZmF1bHREb2N1bWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IEh0bWwsIEhlYWQsIEJvZHksIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlbi1VU1wiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEJvZHk+e2NoaWxkcmVufTwvQm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEh0bWwgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxodG1sIGxhbmc9XCJlblwiIHsuLi5yZXN0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvaHRtbD5cbilcbmV4cG9ydCBjb25zdCBIZWFkID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gPGhlYWQgey4uLnJlc3R9PntjaGlsZHJlbn08L2hlYWQ+XG5leHBvcnQgY29uc3QgQm9keSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IDxib2R5IHsuLi5yZXN0fT57Y2hpbGRyZW59PC9ib2R5PlxuIl19