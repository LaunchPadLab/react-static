"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _methods = require("../methods");

var _shared = require("../../utils/shared");

var _DevSpinner = _interopRequireDefault(require("./DevSpinner"));

var _class,
    _temp,
    _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/RouteData.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var warnedPaths = {};
var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.reloadRouteData();
  });
};

var RouteData = (0, _reactRouterDom.withRouter)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loaded: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reloadRouteData", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.loadRouteData();

              case 2:
                _this.forceUpdate();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadRouteData", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this$props, is404, pathname, path;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = _this.props, is404 = _this$props.is404, pathname = _this$props.location.pathname;
                path = (0, _shared.cleanPath)(is404 ? '404' : pathname);
                _context2.prev = 2;
                _context2.next = 5;
                return (0, _methods.prefetch)(path);

              case 5:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  _this.setState({
                    loaded: true
                  }, resolve);
                }));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", new Promise(function (resolve) {
                  _this.setState({
                    loaded: true
                  }, resolve);
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }))();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (process.env.REACT_STATIC_ENV === 'development') {
        this.loadRouteData();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (process.env.REACT_STATIC_ENV === 'development') {
        if (this.props.location.pathname !== nextProps.location.pathname) {
          this.setState({
            loaded: false
          }, this.loadRouteData);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounting = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          component = _this$props2.component,
          render = _this$props2.render,
          children = _this$props2.children,
          pathname = _this$props2.location.pathname,
          rest = _objectWithoutProperties(_this$props2, ["component", "render", "children", "location"]);

      var loaded = this.state.loaded;
      var path = (0, _shared.cleanPath)(rest.is404 ? '404' : pathname);
      var allProps; // Attempt to get routeInfo from window (first-load on client)

      if (typeof window !== 'undefined' && window.__routeInfo && (window.__routeInfo.path === path || window.__routeInfo.path === '404')) {
        loaded = true; // Since these are synchronous, override loading to true

        allProps = window.__routeInfo.allProps;
      } // Attempt to get routeInfo from context (SSR)


      if (!allProps && this.context.routeInfo && this.context.routeInfo.allProps) {
        loaded = true; // Override loaded to true

        allProps = this.context.routeInfo && this.context.routeInfo.allProps;
      } else if (_methods.routeInfoByPath[path]) {
        // Otherwise, get it from the routeInfoByPath (subsequent client side)
        loaded = true; // Override loaded to true

        allProps = _methods.routeInfoByPath[path].allProps;
      }

      if (!allProps && !rest.is404 && !warnedPaths[path]) {
        warnedPaths[path] = true;
        console.warn("RouteData or withRouteData couldn't find any props for path: ".concat(path, ". You are either missing a route.getData function or you are relying on RouteData/withRouteData where you don't need to."));
      }

      if (!loaded) {
        if (process.env.REACT_STATIC_ENV === 'development') {
          return _react.default.createElement(_DevSpinner.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          });
        }

        return null;
      }

      var finalProps = _objectSpread({}, rest, allProps);

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "contextTypes", {
  routeInfo: _propTypes.default.object
}), _temp));
var _default = RouteData;
exports.default = _default;

function withRouteData(Comp) {
  return function ConnectedRouteData(props) {
    return _react.default.createElement(RouteData, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }));
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZURhdGEuanMiXSwibmFtZXMiOlsid2FybmVkUGF0aHMiLCJpbnN0YW5jZXMiLCJnbG9iYWwiLCJyZWxvYWRBbGwiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJyZWxvYWRSb3V0ZURhdGEiLCJSb3V0ZURhdGEiLCJsb2FkZWQiLCJsb2FkUm91dGVEYXRhIiwiZm9yY2VVcGRhdGUiLCJwcm9wcyIsImlzNDA0IiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFN0YXRlIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19FTlYiLCJwdXNoIiwibmV4dFByb3BzIiwiZmlsdGVyIiwiZCIsInVubW91bnRpbmciLCJjb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJzdGF0ZSIsImFsbFByb3BzIiwid2luZG93IiwiX19yb3V0ZUluZm8iLCJjb250ZXh0Iiwicm91dGVJbmZvIiwicm91dGVJbmZvQnlQYXRoIiwiY29uc29sZSIsIndhcm4iLCJmaW5hbFByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwid2l0aFJvdXRlRGF0YSIsIkNvbXAiLCJDb25uZWN0ZWRSb3V0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFFQUMsTUFBTSxDQUFDQyxTQUFQLEdBQW1CLFlBQU07QUFDdkJGLEVBQUFBLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxlQUFULEVBQUo7QUFBQSxHQUExQjtB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QUlXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBWixLQUFpQyxhQUFyQyxFQUFvRDtBQUNsRCxpQkFBTyw2QkFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTW1CLFVBQVUscUJBQ1hWLElBRFcsRUFFWEUsUUFGVyxDQUFoQjs7QUFJQSxVQUFJTCxTQUFKLEVBQWU7QUFDYixlQUFPYyxlQUFNQyxhQUFOLENBQW9CZixTQUFwQixFQUErQmEsVUFBL0IsRUFBMkNYLFFBQTNDLENBQVA7QUFDRDs7QUFDRCxVQUFJRCxNQUFKLEVBQVk7QUFDVixlQUFPQSxNQUFNLENBQUNZLFVBQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9YLFFBQVEsQ0FBQ1csVUFBRCxDQUFmO0FBQ0Q7QUFqSGE7O0FBQUE7QUFBQSxFQUNRQyxlQUFNRSxTQURkLDJDQUVRO0FBQ3BCUCxFQUFBQSxTQUFTLEVBQUVRLG1CQUFVQztBQURELENBRlIsVUFBbEI7ZUFxSGV0QyxTOzs7QUFFUixTQUFTdUMsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDbEMsU0FBTyxTQUFTQyxrQkFBVCxDQUE0QnJDLEtBQTVCLEVBQW1DO0FBQ3hDLFdBQU8sNkJBQUMsU0FBRDtBQUFXLE1BQUEsU0FBUyxFQUFFb0M7QUFBdEIsT0FBZ0NwQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IHByZWZldGNoLCByb3V0ZUluZm9CeVBhdGggfSBmcm9tICcuLi9tZXRob2RzJ1xuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IERldlNwaW5uZXIgZnJvbSAnLi9EZXZTcGlubmVyJ1xuXG5jb25zdCB3YXJuZWRQYXRocyA9IHt9XG5sZXQgaW5zdGFuY2VzID0gW11cblxuZ2xvYmFsLnJlbG9hZEFsbCA9ICgpID0+IHtcbiAgaW5zdGFuY2VzLmZvckVhY2goaW5zdGFuY2UgPT4gaW5zdGFuY2UucmVsb2FkUm91dGVEYXRhKCkpXG59XG5cbmNvbnN0IFJvdXRlRGF0YSA9IHdpdGhSb3V0ZXIoXG4gIGNsYXNzIFJvdXRlRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgIHJvdXRlSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB9XG4gICAgc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0aGlzLmxvYWRSb3V0ZURhdGEoKVxuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGluc3RhbmNlcy5wdXNoKHRoaXMpXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gbmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSwgdGhpcy5sb2FkUm91dGVEYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaW5zdGFuY2VzID0gaW5zdGFuY2VzLmZpbHRlcihkID0+IGQgIT09IHRoaXMpXG4gICAgICB0aGlzLnVubW91bnRpbmcgPSB0cnVlXG4gICAgfVxuICAgIHJlbG9hZFJvdXRlRGF0YSA9ICgpID0+XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRSb3V0ZURhdGEoKVxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH0pKClcbiAgICBsb2FkUm91dGVEYXRhID0gKCkgPT5cbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpczQwNCxcbiAgICAgICAgICBsb2NhdGlvbjogeyBwYXRobmFtZSB9LFxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCBwYXRoID0gY2xlYW5QYXRoKGlzNDA0ID8gJzQwNCcgOiBwYXRobmFtZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBwcmVmZXRjaChwYXRoKVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSwgcmVzb2x2ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0sIHJlc29sdmUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSkoKVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICByZW5kZXIsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBsb2NhdGlvbjogeyBwYXRobmFtZSB9LFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gdGhpcy5wcm9wc1xuICAgICAgbGV0IHsgbG9hZGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgIGNvbnN0IHBhdGggPSBjbGVhblBhdGgocmVzdC5pczQwNCA/ICc0MDQnIDogcGF0aG5hbWUpXG5cbiAgICAgIGxldCBhbGxQcm9wc1xuXG4gICAgICAvLyBBdHRlbXB0IHRvIGdldCByb3V0ZUluZm8gZnJvbSB3aW5kb3cgKGZpcnN0LWxvYWQgb24gY2xpZW50KVxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuX19yb3V0ZUluZm8gJiZcbiAgICAgICAgKHdpbmRvdy5fX3JvdXRlSW5mby5wYXRoID09PSBwYXRoIHx8IHdpbmRvdy5fX3JvdXRlSW5mby5wYXRoID09PSAnNDA0JylcbiAgICAgICkge1xuICAgICAgICBsb2FkZWQgPSB0cnVlIC8vIFNpbmNlIHRoZXNlIGFyZSBzeW5jaHJvbm91cywgb3ZlcnJpZGUgbG9hZGluZyB0byB0cnVlXG4gICAgICAgIGFsbFByb3BzID0gd2luZG93Ll9fcm91dGVJbmZvLmFsbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IHJvdXRlSW5mbyBmcm9tIGNvbnRleHQgKFNTUilcbiAgICAgIGlmIChcbiAgICAgICAgIWFsbFByb3BzICYmXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZUluZm8gJiZcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlSW5mby5hbGxQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIGxvYWRlZCA9IHRydWUgLy8gT3ZlcnJpZGUgbG9hZGVkIHRvIHRydWVcbiAgICAgICAgYWxsUHJvcHMgPSB0aGlzLmNvbnRleHQucm91dGVJbmZvICYmIHRoaXMuY29udGV4dC5yb3V0ZUluZm8uYWxsUHJvcHNcbiAgICAgIH0gZWxzZSBpZiAocm91dGVJbmZvQnlQYXRoW3BhdGhdKSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgZ2V0IGl0IGZyb20gdGhlIHJvdXRlSW5mb0J5UGF0aCAoc3Vic2VxdWVudCBjbGllbnQgc2lkZSlcbiAgICAgICAgbG9hZGVkID0gdHJ1ZSAvLyBPdmVycmlkZSBsb2FkZWQgdG8gdHJ1ZVxuICAgICAgICBhbGxQcm9wcyA9IHJvdXRlSW5mb0J5UGF0aFtwYXRoXS5hbGxQcm9wc1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFsbFByb3BzICYmICFyZXN0LmlzNDA0ICYmICF3YXJuZWRQYXRoc1twYXRoXSkge1xuICAgICAgICB3YXJuZWRQYXRoc1twYXRoXSA9IHRydWVcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBSb3V0ZURhdGEgb3Igd2l0aFJvdXRlRGF0YSBjb3VsZG4ndCBmaW5kIGFueSBwcm9wcyBmb3IgcGF0aDogJHtwYXRofS4gWW91IGFyZSBlaXRoZXIgbWlzc2luZyBhIHJvdXRlLmdldERhdGEgZnVuY3Rpb24gb3IgeW91IGFyZSByZWx5aW5nIG9uIFJvdXRlRGF0YS93aXRoUm91dGVEYXRhIHdoZXJlIHlvdSBkb24ndCBuZWVkIHRvLmBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIHJldHVybiA8RGV2U3Bpbm5lciAvPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbmFsUHJvcHMgPSB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIC4uLmFsbFByb3BzLFxuICAgICAgfVxuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGZpbmFsUHJvcHMsIGNoaWxkcmVuKVxuICAgICAgfVxuICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICByZXR1cm4gcmVuZGVyKGZpbmFsUHJvcHMpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW4oZmluYWxQcm9wcylcbiAgICB9XG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVEYXRhXG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUm91dGVEYXRhKENvbXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIENvbm5lY3RlZFJvdXRlRGF0YShwcm9wcykge1xuICAgIHJldHVybiA8Um91dGVEYXRhIGNvbXBvbmVudD17Q29tcH0gey4uLnByb3BzfSAvPlxuICB9XG59XG4iXX0=