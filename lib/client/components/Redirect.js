"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/Redirect.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

//
function join(a, b) {
  var trimmedA = a.endsWith('/') ? a.slice(0, -1) : a;
  var trimmedB = b.startsWith('/') ? b.slice(1) : b;
  return trimmedA + '/' + trimmedB;
}

var Redirect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Redirect).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          _this$props$delay = _this$props.delay,
          delay = _this$props$delay === void 0 ? 0 : _this$props$delay,
          fromPath = _this$props.fromPath,
          rest = _objectWithoutProperties(_this$props, ["to", "delay", "fromPath"]);

      if (typeof document === 'undefined') {
        var resolvedTo = _typeof(to) === 'object' ? to.pathname : to;

        if (!resolvedTo.includes('//')) {
          resolvedTo = join(process.env.REACT_STATIC_PUBLIC_PATH, resolvedTo);
        }

        return (// ReactRouterRedirect
          _react.default.createElement(_reactHelmet.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, fromPath && _react.default.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(fromPath === '/' ? '' : fromPath)), _react.default.createElement("link", {
            rel: "canonical",
            href: resolvedTo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }), _react.default.createElement("meta", {
            name: "robots",
            content: "noindex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "content-type",
            content: "text/html; charset=utf-8",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "refresh",
            content: "".concat(delay, "; url=").concat(resolvedTo),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }))
        );
      }

      return _react.default.createElement(_reactRouterDom.Redirect, _extends({
        to: to
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return Redirect;
}(_react.default.Component);

exports.default = Redirect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9SZWRpcmVjdC5qcyJdLCJuYW1lcyI6WyJqb2luIiwiYSIsImIiLCJ0cmltbWVkQSIsImVuZHNXaXRoIiwic2xpY2UiLCJ0cmltbWVkQiIsInN0YXJ0c1dpdGgiLCJSZWRpcmVjdCIsInByb3BzIiwidG8iLCJkZWxheSIsImZyb21QYXRoIiwicmVzdCIsImRvY3VtZW50IiwicmVzb2x2ZWRUbyIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxTQUFTQSxJQUFULENBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQ25CLE1BQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxRQUFGLENBQVcsR0FBWCxJQUFrQkgsQ0FBQyxDQUFDSSxLQUFGLENBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFsQixHQUFtQ0osQ0FBcEQ7QUFDQSxNQUFNSyxRQUFRLEdBQUdKLENBQUMsQ0FBQ0ssVUFBRixDQUFhLEdBQWIsSUFBb0JMLENBQUMsQ0FBQ0csS0FBRixDQUFRLENBQVIsQ0FBcEIsR0FBaUNILENBQWxEO0FBQ0EsU0FBT0MsUUFBUSxHQUFHLEdBQVgsR0FBaUJHLFFBQXhCO0FBQ0Q7O0lBRW9CRSxROzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsRUFERCxlQUNDQSxFQUREO0FBQUEsMENBQ0tDLEtBREw7QUFBQSxVQUNLQSxLQURMLGtDQUNhLENBRGI7QUFBQSxVQUNnQkMsUUFEaEIsZUFDZ0JBLFFBRGhCO0FBQUEsVUFDNkJDLElBRDdCOztBQUVQLFVBQUksT0FBT0MsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQyxZQUFJQyxVQUFVLEdBQUcsUUFBT0wsRUFBUCxNQUFjLFFBQWQsR0FBeUJBLEVBQUUsQ0FBQ00sUUFBNUIsR0FBdUNOLEVBQXhEOztBQUNBLFlBQUksQ0FBQ0ssVUFBVSxDQUFDRSxRQUFYLENBQW9CLElBQXBCLENBQUwsRUFBZ0M7QUFDOUJGLFVBQUFBLFVBQVUsR0FBR2YsSUFBSSxDQUFDa0IsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHdCQUFiLEVBQXVDTCxVQUF2QyxDQUFqQjtBQUNEOztBQUNELGVBQ0U7QUFDQSx1Q0FBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNHSCxRQUFRLElBQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ01NLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx3QkFEbEIsU0FFSVIsUUFBUSxLQUFLLEdBQWIsR0FBbUIsRUFBbkIsR0FBd0JBLFFBRjVCLEVBRkosRUFRRTtBQUFNLFlBQUEsR0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBQSxJQUFJLEVBQUVHLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTRTtBQUFNLFlBQUEsSUFBSSxFQUFDLFFBQVg7QUFBb0IsWUFBQSxPQUFPLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixFQVVFO0FBQU0sWUFBQSxTQUFTLEVBQUMsY0FBaEI7QUFBK0IsWUFBQSxPQUFPLEVBQUMsMEJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFXRTtBQUFNLFlBQUEsU0FBUyxFQUFDLFNBQWhCO0FBQTBCLFlBQUEsT0FBTyxZQUFLSixLQUFMLG1CQUFtQkksVUFBbkIsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUZGO0FBZ0JEOztBQUNELGFBQU8sNkJBQUMsd0JBQUQ7QUFBcUIsUUFBQSxFQUFFLEVBQUVMO0FBQXpCLFNBQWlDRyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQO0FBQ0Q7Ozs7RUExQm1DUSxlQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVkaXJlY3QgYXMgUmVhY3RSb3V0ZXJSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgSGVhZCBmcm9tICdyZWFjdC1oZWxtZXQnXG4vL1xuXG5mdW5jdGlvbiBqb2luIChhLCBiKSB7XG4gIGNvbnN0IHRyaW1tZWRBID0gYS5lbmRzV2l0aCgnLycpID8gYS5zbGljZSgwLCAtMSkgOiBhXG4gIGNvbnN0IHRyaW1tZWRCID0gYi5zdGFydHNXaXRoKCcvJykgPyBiLnNsaWNlKDEpIDogYlxuICByZXR1cm4gdHJpbW1lZEEgKyAnLycgKyB0cmltbWVkQlxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRpcmVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBkZWxheSA9IDAsIGZyb21QYXRoLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCByZXNvbHZlZFRvID0gdHlwZW9mIHRvID09PSAnb2JqZWN0JyA/IHRvLnBhdGhuYW1lIDogdG9cbiAgICAgIGlmICghcmVzb2x2ZWRUby5pbmNsdWRlcygnLy8nKSkge1xuICAgICAgICByZXNvbHZlZFRvID0gam9pbihwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFVCTElDX1BBVEgsIHJlc29sdmVkVG8pXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBSZWFjdFJvdXRlclJlZGlyZWN0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHtmcm9tUGF0aCAmJiAoXG4gICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgIHtgJHtwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFVCTElDX1BBVEh9JHtcbiAgICAgICAgICAgICAgICBmcm9tUGF0aCA9PT0gJy8nID8gJycgOiBmcm9tUGF0aFxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtyZXNvbHZlZFRvfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiY29udGVudC10eXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9e2Ake2RlbGF5fTsgdXJsPSR7cmVzb2x2ZWRUb31gfSAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiA8UmVhY3RSb3V0ZXJSZWRpcmVjdCB0bz17dG99IHsuLi5yZXN0fSAvPlxuICB9XG59XG4iXX0=