"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorUI = _interopRequireDefault(require("./ErrorUI"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/ErrorWrapper/ErrorCatcher.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ErrorCatcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorCatcher, _React$Component);

  function ErrorCatcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorCatcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorCatcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: null,
      errorInfo: null
    });

    return _this;
  }

  _createClass(ErrorCatcher, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any child components and re-renders with an error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error; // Fallback UI if an error occurs

      if (error) {
        return _react.default.createElement(_ErrorUI.default, _extends({}, this.state, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }));
      }

      return _react.default.Children.only(this.props.children);
    }
  }]);

  return ErrorCatcher;
}(_react.default.Component);

exports.default = ErrorCatcher;

_defineProperty(ErrorCatcher, "propTypes", {
  children: _propTypes.default.node.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvcldyYXBwZXIvRXJyb3JDYXRjaGVyLmpzIl0sIm5hbWVzIjpbIkVycm9yQ2F0Y2hlciIsImVycm9yIiwiZXJyb3JJbmZvIiwic2V0U3RhdGUiLCJzdGF0ZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJvbmx5IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFLWDtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsSUFERDtBQUVOQyxNQUFBQSxTQUFTLEVBQUU7QUFGTCxLOzs7Ozs7O3NDQUtVRCxLLEVBQU9DLFMsRUFBVztBQUNsQztBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxLQUFLLEVBQUxBLEtBRFk7QUFFWkMsUUFBQUEsU0FBUyxFQUFUQTtBQUZZLE9BQWQ7QUFJRDs7OzZCQUVRO0FBQUEsVUFDQ0QsS0FERCxHQUNXLEtBQUtHLEtBRGhCLENBQ0NILEtBREQsRUFHUDs7QUFDQSxVQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUFPLDZCQUFDLGdCQUFELGVBQWEsS0FBS0csS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNEOztBQUVELGFBQU9DLGVBQU1DLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixLQUFLQyxLQUFMLENBQVdDLFFBQS9CLENBQVA7QUFDRDs7OztFQTNCdUNKLGVBQU1LLFM7Ozs7Z0JBQTNCVixZLGVBQ0E7QUFDakJTLEVBQUFBLFFBQVEsRUFBRUUsbUJBQVVDLElBQVYsQ0FBZUM7QUFEUixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEVycm9yVUkgZnJvbSAnLi9FcnJvclVJJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckNhdGNoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZXJyb3I6IG51bGwsXG4gICAgZXJyb3JJbmZvOiBudWxsLFxuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIC8vIENhdGNoIGVycm9ycyBpbiBhbnkgY2hpbGQgY29tcG9uZW50cyBhbmQgcmUtcmVuZGVycyB3aXRoIGFuIGVycm9yIG1lc3NhZ2VcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yLFxuICAgICAgZXJyb3JJbmZvLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgLy8gRmFsbGJhY2sgVUkgaWYgYW4gZXJyb3Igb2NjdXJzXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gPEVycm9yVUkgey4uLnRoaXMuc3RhdGV9IC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgfVxufVxuIl19