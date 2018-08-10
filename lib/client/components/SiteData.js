"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _DevSpinner = _interopRequireDefault(require("./DevSpinner"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/SiteData.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var siteDataPromise;

var SiteData =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      siteData: false
    });

    return _this;
  }

  _createClass(SiteData, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _ref, siteData;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(process.env.REACT_STATIC_ENV === 'development')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 3;
                return function () {
                  if (siteDataPromise) {
                    return siteDataPromise;
                  }

                  siteDataPromise = _axios.default.get('/__react-static__/siteData');
                  return siteDataPromise;
                }();

              case 3:
                _ref = _context.sent;
                siteData = _ref.data;

                if (!this.unmounting) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                this.setState({
                  siteData: siteData
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounting = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          render = _this$props.render,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["component", "render", "children"]);

      var siteData; // Get siteInfo from window

      if (typeof window !== 'undefined') {
        if (window.__routeInfo) {
          siteData = window.__routeInfo.siteData;
        }
      } // Get siteInfo from context (SSR)


      if (!siteData && this.context.routeInfo && this.context.routeInfo.siteData) {
        siteData = this.context.routeInfo && this.context.routeInfo.siteData;
      } // Get siteInfo from request


      if (!siteData && this.state.siteData) {
        siteData = this.state.siteData;
      }

      if (!siteData) {
        if (process.env.REACT_STATIC_ENV === 'development') {
          return _react.default.createElement(_DevSpinner.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          });
        }

        return null;
      }

      var finalProps = _objectSpread({}, rest, siteData);

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }]);

  return SiteData;
}(_react.default.Component);

exports.default = SiteData;

_defineProperty(SiteData, "contextTypes", {
  routeInfo: _propTypes.default.object
});

function withSiteData(Comp) {
  return function ConnectedSiteData(props) {
    return _react.default.createElement(SiteData, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }));
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TaXRlRGF0YS5qcyJdLCJuYW1lcyI6WyJzaXRlRGF0YVByb21pc2UiLCJTaXRlRGF0YSIsInNpdGVEYXRhIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19FTlYiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1bm1vdW50aW5nIiwic2V0U3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudCIsInJlbmRlciIsImNoaWxkcmVuIiwicmVzdCIsIndpbmRvdyIsIl9fcm91dGVJbmZvIiwiY29udGV4dCIsInJvdXRlSW5mbyIsInN0YXRlIiwiZmluYWxQcm9wcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsIndpdGhTaXRlRGF0YSIsIkNvbXAiLCJDb25uZWN0ZWRTaXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBSUEsZUFBSjs7SUFFcUJDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFJWDtBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFESixLOzs7Ozs7Ozs7Ozs7Ozs7OztzQkFJRkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUFaLEtBQWlDLGE7Ozs7Ozt1QkFDRCxZQUFNO0FBQ3RDLHNCQUFJTCxlQUFKLEVBQXFCO0FBQ25CLDJCQUFPQSxlQUFQO0FBQ0Q7O0FBQ0RBLGtCQUFBQSxlQUFlLEdBQUdNLGVBQU1DLEdBQU4sQ0FBVSw0QkFBVixDQUFsQjtBQUNBLHlCQUFPUCxlQUFQO0FBQ0QsaUJBTmdDLEU7Ozs7QUFBbkJFLGdCQUFBQSxRLFFBQU5NLEk7O3FCQU9KLEtBQUtDLFU7Ozs7Ozs7O0FBR1QscUJBQUtDLFFBQUwsQ0FBYztBQUNaUixrQkFBQUEsUUFBUSxFQUFSQTtBQURZLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7OzJDQUttQjtBQUNyQixXQUFLTyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7Ozs2QkFDUTtBQUFBLHdCQUMwQyxLQUFLRSxLQUQvQztBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLE1BRFosZUFDWUEsTUFEWjtBQUFBLFVBQ29CQyxRQURwQixlQUNvQkEsUUFEcEI7QUFBQSxVQUNpQ0MsSUFEakM7O0FBRVAsVUFBSWIsUUFBSixDQUZPLENBSVA7O0FBQ0EsVUFBSSxPQUFPYyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLFlBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUN0QmYsVUFBQUEsUUFBUSxHQUFHYyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJmLFFBQTlCO0FBQ0Q7QUFDRixPQVRNLENBV1A7OztBQUNBLFVBQ0UsQ0FBQ0EsUUFBRCxJQUNBLEtBQUtnQixPQUFMLENBQWFDLFNBRGIsSUFFQSxLQUFLRCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJqQixRQUh6QixFQUlFO0FBQ0FBLFFBQUFBLFFBQVEsR0FBRyxLQUFLZ0IsT0FBTCxDQUFhQyxTQUFiLElBQTBCLEtBQUtELE9BQUwsQ0FBYUMsU0FBYixDQUF1QmpCLFFBQTVEO0FBQ0QsT0FsQk0sQ0FvQlA7OztBQUNBLFVBQUksQ0FBQ0EsUUFBRCxJQUFhLEtBQUtrQixLQUFMLENBQVdsQixRQUE1QixFQUFzQztBQUNwQ0EsUUFBQUEsUUFBUSxHQUFHLEtBQUtrQixLQUFMLENBQVdsQixRQUF0QjtBQUNEOztBQUVELFVBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsWUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUFaLEtBQWlDLGFBQXJDLEVBQW9EO0FBQ2xELGlCQUFPLDZCQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNZ0IsVUFBVSxxQkFDWE4sSUFEVyxFQUVYYixRQUZXLENBQWhCOztBQUlBLFVBQUlVLFNBQUosRUFBZTtBQUNiLGVBQU9VLGVBQU1DLGFBQU4sQ0FBb0JYLFNBQXBCLEVBQStCUyxVQUEvQixFQUEyQ1AsUUFBM0MsQ0FBUDtBQUNEOztBQUNELFVBQUlELE1BQUosRUFBWTtBQUNWLGVBQU9BLE1BQU0sQ0FBQ1EsVUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsYUFBT1AsUUFBUSxDQUFDTyxVQUFELENBQWY7QUFDRDs7OztFQXRFbUNDLGVBQU1FLFM7Ozs7Z0JBQXZCdkIsUSxrQkFDRztBQUNwQmtCLEVBQUFBLFNBQVMsRUFBRU0sbUJBQVVDO0FBREQsQzs7QUF3RWpCLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU8sU0FBU0MsaUJBQVQsQ0FBMkJsQixLQUEzQixFQUFrQztBQUN2QyxXQUFPLDZCQUFDLFFBQUQ7QUFBVSxNQUFBLFNBQVMsRUFBRWlCO0FBQXJCLE9BQStCakIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBRkQ7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vXG5pbXBvcnQgRGV2U3Bpbm5lciBmcm9tICcuL0RldlNwaW5uZXInXG5cbi8vXG5cbmxldCBzaXRlRGF0YVByb21pc2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l0ZURhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHJvdXRlSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBzaXRlRGF0YTogZmFsc2UsXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICBjb25zdCB7IGRhdGE6IHNpdGVEYXRhIH0gPSBhd2FpdCAoKCkgPT4ge1xuICAgICAgICBpZiAoc2l0ZURhdGFQcm9taXNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNpdGVEYXRhUHJvbWlzZVxuICAgICAgICB9XG4gICAgICAgIHNpdGVEYXRhUHJvbWlzZSA9IGF4aW9zLmdldCgnL19fcmVhY3Qtc3RhdGljX18vc2l0ZURhdGEnKVxuICAgICAgICByZXR1cm4gc2l0ZURhdGFQcm9taXNlXG4gICAgICB9KSgpXG4gICAgICBpZiAodGhpcy51bm1vdW50aW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNpdGVEYXRhLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm1vdW50aW5nID0gdHJ1ZVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbXBvbmVudCwgcmVuZGVyLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBzaXRlRGF0YVxuXG4gICAgLy8gR2V0IHNpdGVJbmZvIGZyb20gd2luZG93XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAod2luZG93Ll9fcm91dGVJbmZvKSB7XG4gICAgICAgIHNpdGVEYXRhID0gd2luZG93Ll9fcm91dGVJbmZvLnNpdGVEYXRhXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHNpdGVJbmZvIGZyb20gY29udGV4dCAoU1NSKVxuICAgIGlmIChcbiAgICAgICFzaXRlRGF0YSAmJlxuICAgICAgdGhpcy5jb250ZXh0LnJvdXRlSW5mbyAmJlxuICAgICAgdGhpcy5jb250ZXh0LnJvdXRlSW5mby5zaXRlRGF0YVxuICAgICkge1xuICAgICAgc2l0ZURhdGEgPSB0aGlzLmNvbnRleHQucm91dGVJbmZvICYmIHRoaXMuY29udGV4dC5yb3V0ZUluZm8uc2l0ZURhdGFcbiAgICB9XG5cbiAgICAvLyBHZXQgc2l0ZUluZm8gZnJvbSByZXF1ZXN0XG4gICAgaWYgKCFzaXRlRGF0YSAmJiB0aGlzLnN0YXRlLnNpdGVEYXRhKSB7XG4gICAgICBzaXRlRGF0YSA9IHRoaXMuc3RhdGUuc2l0ZURhdGFcbiAgICB9XG5cbiAgICBpZiAoIXNpdGVEYXRhKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gPERldlNwaW5uZXIgLz5cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZmluYWxQcm9wcyA9IHtcbiAgICAgIC4uLnJlc3QsXG4gICAgICAuLi5zaXRlRGF0YSxcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBmaW5hbFByb3BzLCBjaGlsZHJlbilcbiAgICB9XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlbmRlcihmaW5hbFByb3BzKVxuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW4oZmluYWxQcm9wcylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFNpdGVEYXRhKENvbXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIENvbm5lY3RlZFNpdGVEYXRhKHByb3BzKSB7XG4gICAgcmV0dXJuIDxTaXRlRGF0YSBjb21wb25lbnQ9e0NvbXB9IHsuLi5wcm9wc30gLz5cbiAgfVxufVxuIl19