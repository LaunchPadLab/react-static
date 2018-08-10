"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLoading = withLoading;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _methods = require("../methods");

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/Loading.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Loading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loading: _methods.loading
    });

    return _this;
  }

  _createClass(Loading, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.unsubscribe = (0, _methods.onLoading)(function (loading) {
        return _this2.setState({
          loading: loading
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          render = _this$props.render,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["component", "render", "children"]);

      var finalProps = _objectSpread({}, rest, {
        loading: this.state.loading
      });

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }]);

  return Loading;
}(_react.default.Component);

exports.default = Loading;

function withLoading(Comp) {
  return function ConnectedLoading(props) {
    return _react.default.createElement(Loading, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJsb2FkaW5nIiwidW5zdWJzY3JpYmUiLCJzZXRTdGF0ZSIsInByb3BzIiwiY29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwiZmluYWxQcm9wcyIsInN0YXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50Iiwid2l0aExvYWRpbmciLCJDb21wIiwiQ29ubmVjdGVkTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0ZBQ1g7QUFDTkMsTUFBQUEsT0FBTyxFQUFQQTtBQURNLEs7Ozs7Ozs7eUNBSWE7QUFBQTs7QUFDbkIsV0FBS0MsV0FBTCxHQUFtQix3QkFBVSxVQUFBRCxPQUFPO0FBQUEsZUFDbEMsTUFBSSxDQUFDRSxRQUFMLENBQWM7QUFDWkYsVUFBQUEsT0FBTyxFQUFQQTtBQURZLFNBQWQsQ0FEa0M7QUFBQSxPQUFqQixDQUFuQjtBQUtEOzs7NkJBRVE7QUFBQSx3QkFDMEMsS0FBS0csS0FEL0M7QUFBQSxVQUNDQyxTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxNQURaLGVBQ1lBLE1BRFo7QUFBQSxVQUNvQkMsUUFEcEIsZUFDb0JBLFFBRHBCO0FBQUEsVUFDaUNDLElBRGpDOztBQUVQLFVBQU1DLFVBQVUscUJBQ1hELElBRFc7QUFFZFAsUUFBQUEsT0FBTyxFQUFFLEtBQUtTLEtBQUwsQ0FBV1Q7QUFGTixRQUFoQjs7QUFJQSxVQUFJSSxTQUFKLEVBQWU7QUFDYixlQUFPTSxlQUFNQyxhQUFOLENBQW9CUCxTQUFwQixFQUErQkksVUFBL0IsRUFBMkNGLFFBQTNDLENBQVA7QUFDRDs7QUFDRCxVQUFJRCxNQUFKLEVBQVk7QUFDVixlQUFPQSxNQUFNLENBQUNHLFVBQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9GLFFBQVEsQ0FBQ0UsVUFBRCxDQUFmO0FBQ0Q7Ozs7RUExQmtDRSxlQUFNRSxTOzs7O0FBNkJwQyxTQUFTQyxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUNoQyxTQUFPLFNBQVNDLGdCQUFULENBQTBCWixLQUExQixFQUFpQztBQUN0QyxXQUFPLDZCQUFDLE9BQUQ7QUFBUyxNQUFBLFNBQVMsRUFBRVc7QUFBcEIsT0FBOEJYLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRCxHQUZEO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IHsgbG9hZGluZywgb25Mb2FkaW5nIH0gZnJvbSAnLi4vbWV0aG9kcydcblxuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmcsXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IG9uTG9hZGluZyhsb2FkaW5nID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCByZW5kZXIsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZmluYWxQcm9wcyA9IHtcbiAgICAgIC4uLnJlc3QsXG4gICAgICBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsXG4gICAgfVxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgZmluYWxQcm9wcywgY2hpbGRyZW4pXG4gICAgfVxuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIHJldHVybiByZW5kZXIoZmluYWxQcm9wcylcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuKGZpbmFsUHJvcHMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhMb2FkaW5nKENvbXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIENvbm5lY3RlZExvYWRpbmcocHJvcHMpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgY29tcG9uZW50PXtDb21wfSB7Li4ucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==