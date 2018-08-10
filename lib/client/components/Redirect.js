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
          resolvedTo = "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(resolvedTo === '/' ? '' : resolvedTo);
        }

        return (// ReactRouterRedirect
          _react.default.createElement(_reactHelmet.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, fromPath && _react.default.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(fromPath === '/' ? '' : fromPath)), _react.default.createElement("link", {
            rel: "canonical",
            href: resolvedTo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }), _react.default.createElement("meta", {
            name: "robots",
            content: "noindex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "content-type",
            content: "text/html; charset=utf-8",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "refresh",
            content: "".concat(delay, "; url=").concat(resolvedTo),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
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
          lineNumber: 33
        },
        __self: this
      }));
    }
  }]);

  return Redirect;
}(_react.default.Component);

exports.default = Redirect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9SZWRpcmVjdC5qcyJdLCJuYW1lcyI6WyJSZWRpcmVjdCIsInByb3BzIiwidG8iLCJkZWxheSIsImZyb21QYXRoIiwicmVzdCIsImRvY3VtZW50IiwicmVzb2x2ZWRUbyIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSx3QkFDc0MsS0FBS0MsS0FEM0M7QUFBQSxVQUNDQyxFQURELGVBQ0NBLEVBREQ7QUFBQSwwQ0FDS0MsS0FETDtBQUFBLFVBQ0tBLEtBREwsa0NBQ2EsQ0FEYjtBQUFBLFVBQ2dCQyxRQURoQixlQUNnQkEsUUFEaEI7QUFBQSxVQUM2QkMsSUFEN0I7O0FBRVAsVUFBSSxPQUFPQyxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFlBQUlDLFVBQVUsR0FBRyxRQUFPTCxFQUFQLE1BQWMsUUFBZCxHQUF5QkEsRUFBRSxDQUFDTSxRQUE1QixHQUF1Q04sRUFBeEQ7O0FBQ0EsWUFBSSxDQUFDSyxVQUFVLENBQUNFLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBTCxFQUFnQztBQUM5QkYsVUFBQUEsVUFBVSxhQUFNRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBQWxCLFNBQ1JMLFVBQVUsS0FBSyxHQUFmLEdBQXFCLEVBQXJCLEdBQTBCQSxVQURsQixDQUFWO0FBR0Q7O0FBQ0QsZUFDRTtBQUNBLHVDQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0dILFFBQVEsSUFDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDTU0sT0FBTyxDQUFDQyxHQUFSLENBQVlDLHdCQURsQixTQUVJUixRQUFRLEtBQUssR0FBYixHQUFtQixFQUFuQixHQUF3QkEsUUFGNUIsRUFGSixFQVFFO0FBQU0sWUFBQSxHQUFHLEVBQUMsV0FBVjtBQUFzQixZQUFBLElBQUksRUFBRUcsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQVNFO0FBQU0sWUFBQSxJQUFJLEVBQUMsUUFBWDtBQUFvQixZQUFBLE9BQU8sRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBVUU7QUFBTSxZQUFBLFNBQVMsRUFBQyxjQUFoQjtBQUErQixZQUFBLE9BQU8sRUFBQywwQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdFO0FBQU0sWUFBQSxTQUFTLEVBQUMsU0FBaEI7QUFBMEIsWUFBQSxPQUFPLFlBQUtKLEtBQUwsbUJBQW1CSSxVQUFuQixDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBRkY7QUFnQkQ7O0FBQ0QsYUFBTyw2QkFBQyx3QkFBRDtBQUFxQixRQUFBLEVBQUUsRUFBRUw7QUFBekIsU0FBaUNHLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7QUFDRDs7OztFQTVCbUNRLGVBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWRpcmVjdCBhcyBSZWFjdFJvdXRlclJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBIZWFkIGZyb20gJ3JlYWN0LWhlbG1ldCdcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGlyZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIGRlbGF5ID0gMCwgZnJvbVBhdGgsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IHJlc29sdmVkVG8gPSB0eXBlb2YgdG8gPT09ICdvYmplY3QnID8gdG8ucGF0aG5hbWUgOiB0b1xuICAgICAgaWYgKCFyZXNvbHZlZFRvLmluY2x1ZGVzKCcvLycpKSB7XG4gICAgICAgIHJlc29sdmVkVG8gPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFVCTElDX1BBVEh9JHtcbiAgICAgICAgICByZXNvbHZlZFRvID09PSAnLycgPyAnJyA6IHJlc29sdmVkVG9cbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIFJlYWN0Um91dGVyUmVkaXJlY3RcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAge2Zyb21QYXRoICYmIChcbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAge2Ake3Byb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSH0ke1xuICAgICAgICAgICAgICAgIGZyb21QYXRoID09PSAnLycgPyAnJyA6IGZyb21QYXRoXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e3Jlc29sdmVkVG99IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJyZWZyZXNoXCIgY29udGVudD17YCR7ZGVsYXl9OyB1cmw9JHtyZXNvbHZlZFRvfWB9IC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIDxSZWFjdFJvdXRlclJlZGlyZWN0IHRvPXt0b30gey4uLnJlc3R9IC8+XG4gIH1cbn1cbiJdfQ==