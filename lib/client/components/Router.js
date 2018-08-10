"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

var _createMemoryHistory = _interopRequireDefault(require("history/createMemoryHistory"));

var _createHashHistory = _interopRequireDefault(require("history/createHashHistory"));

var _reactRouterDom = require("react-router-dom");

var _shared = require("../../utils/shared");

var _methods = require("../methods");

var _RouterScroller = _interopRequireDefault(require("./RouterScroller"));

var _DevSpinner = _interopRequireDefault(require("./DevSpinner"));

var _ErrorWrapper = _interopRequireDefault(require("./ErrorWrapper"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/Router.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router(props, context) {
    var _this;

    _classCallCheck(this, Router);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Router).call(this)); // In SRR and production, synchronously register the templateID for the
    // initial path

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ready: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bootstrapRouteInfo", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var href, path, allProps, routeInfo;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof window !== 'undefined')) {
                  _context.next = 13;
                  break;
                }

                // Get the entry path from location
                href = decodeURIComponent(window.location.href);
                path = (0, _shared.cleanPath)(href); // Injest and cache the embedded routeInfo in the page if possible

                if (window.__routeInfo && window.__routeInfo.path === path) {
                  allProps = window.__routeInfo.allProps;
                  Object.keys(window.__routeInfo.sharedPropsHashes).forEach(function (propKey) {
                    _methods.propsByHash[window.__routeInfo.sharedPropsHashes[propKey]] = allProps[propKey];
                  });
                } // In dev mode, request the templateID and ready the router


                if (!(process.env.REACT_STATIC_ENV === 'development')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return (0, _methods.getRouteInfo)(path, {
                  priority: true
                });

              case 8:
                routeInfo = _context.sent;

                if (routeInfo) {
                  (0, _methods.registerTemplateIDForPath)(path, routeInfo.templateID);
                }

              case 10:
                _context.prev = 10;

                _this.setState({
                  ready: true
                });

                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5,, 10, 13]]);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "patchHistoryNavigation", function (resolvedHistory) {
      // Only patch navigation once
      if (_this.patchedNavigation) {
        return;
      } // Here, we patch the push and replace methods on history so we can
      // intercept them.


      ;
      ['push', 'replace'].forEach(function (method) {
        // Hold on to the original method, we will need it.
        var originalMethod = resolvedHistory[method]; // Replace it with our own patched version

        resolvedHistory[method] =
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var _len,
              args,
              _key,
              path,
              shouldPrefetch,
              _args2 = arguments;

          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = _args2[_key];
                  }

                  // Clean the path first
                  path = (0, _shared.cleanPath)(typeof args[0] === 'string' ? args[0] : args[0].path); // Notify a soft loading state

                  (0, _methods.setLoading)(1); // Determine as quickly as possible if we need to fetch data for this route

                  _context2.next = 5;
                  return (0, _methods.needsPrefetch)(path, {
                    priority: true
                  });

                case 5:
                  shouldPrefetch = _context2.sent;

                  if (!shouldPrefetch) {
                    _context2.next = 10;
                    break;
                  }

                  // Notify with a hard loading state
                  (0, _methods.setLoading)(2); // Prefetch any data or templates needed with a high priority

                  _context2.next = 10;
                  return (0, _methods.prefetch)(path, {
                    priority: true
                  });

                case 10:
                  // Notify we're done loading
                  (0, _methods.setLoading)(0); // Apply the original method and arguments as if nothing happened

                  originalMethod.apply(resolvedHistory, args);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }); // Only patch navigation once :)

      _this.patchedNavigation = true;
    });

    var _routeInfo = context.routeInfo;

    var _path = (0, _shared.cleanPath)(context.staticURL);

    if (typeof window !== 'undefined') {
      _routeInfo = window.__routeInfo;
      var href = decodeURIComponent(window.location.href);
      _path = (0, _shared.cleanPath)(href);
    }

    if (_routeInfo) {
      (0, _methods.registerTemplateIDForPath)(_path, _routeInfo.templateID);
    }

    return _this;
  }

  _createClass(Router, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bootstrapRouteInfo();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          history = _this$props.history,
          type = _this$props.type,
          children = _this$props.children,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          showErrorsInProduction = _this$props.showErrorsInProduction,
          rest = _objectWithoutProperties(_this$props, ["history", "type", "children", "autoScrollToTop", "autoScrollToHash", "scrollToTopDuration", "scrollToHashDuration", "scrollToHashOffset", "showErrorsInProduction"]);

      var staticURL = this.context.staticURL;
      var context = staticURL ? {} : undefined;
      var disableRoutePrefixing = process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING === 'true';
      var ready = this.state.ready;
      var ResolvedRouter;
      var resolvedHistory; // If statically rendering, use the static router

      if (staticURL) {
        ResolvedRouter = _reactRouterDom.StaticRouter;
        resolvedHistory = undefined;
      } else {
        ResolvedRouter = _reactRouterDom.Router;
        resolvedHistory = history || global.__reactStaticRouterHistory;

        if (!resolvedHistory) {
          if (type === 'memory') {
            resolvedHistory = (0, _createMemoryHistory.default)();
          } else if (type === 'hash') {
            resolvedHistory = (0, _createHashHistory.default)();
          } else {
            var options = disableRoutePrefixing ? {} : {
              basename: process.env.REACT_STATIC_BASE_PATH
            };
            resolvedHistory = (0, _createBrowserHistory.default)(options);
          }
        }

        global.__reactStaticRouterHistory = resolvedHistory;
        this.patchHistoryNavigation(resolvedHistory);
      }

      if (process.env.REACT_STATIC_ENV === 'development' && !ready) {
        return _react.default.createElement(_DevSpinner.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        });
      }

      return _react.default.createElement(_ErrorWrapper.default, {
        showErrorsInProduction: showErrorsInProduction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, _extends({
        history: resolvedHistory,
        location: staticURL,
        context: context,
        basename: disableRoutePrefixing ? '' : process.env.REACT_STATIC_BASE_PATH
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), _react.default.createElement(_RouterScroller.default, _extends({
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), children)));
    }
  }]);

  return Router;
}(_react.default.Component);

exports.default = Router;

_defineProperty(Router, "defaultProps", {
  type: 'browser',
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0,
  showErrorsInProduction: false
});

_defineProperty(Router, "contextTypes", {
  staticURL: _propTypes.default.string,
  routeInfo: _propTypes.default.object
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwicHJvcHMiLCJjb250ZXh0IiwicmVhZHkiLCJ3aW5kb3ciLCJocmVmIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRoIiwiX19yb3V0ZUluZm8iLCJhbGxQcm9wcyIsIk9iamVjdCIsImtleXMiLCJzaGFyZWRQcm9wc0hhc2hlcyIsImZvckVhY2giLCJwcm9wS2V5IiwicHJvcHNCeUhhc2giLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOViIsInByaW9yaXR5Iiwicm91dGVJbmZvIiwidGVtcGxhdGVJRCIsInNldFN0YXRlIiwicmVzb2x2ZWRIaXN0b3J5IiwicGF0Y2hlZE5hdmlnYXRpb24iLCJtZXRob2QiLCJvcmlnaW5hbE1ldGhvZCIsImFyZ3MiLCJzaG91bGRQcmVmZXRjaCIsImFwcGx5Iiwic3RhdGljVVJMIiwiYm9vdHN0cmFwUm91dGVJbmZvIiwiaGlzdG9yeSIsInR5cGUiLCJjaGlsZHJlbiIsImF1dG9TY3JvbGxUb1RvcCIsImF1dG9TY3JvbGxUb0hhc2giLCJzY3JvbGxUb1RvcER1cmF0aW9uIiwic2Nyb2xsVG9IYXNoRHVyYXRpb24iLCJzY3JvbGxUb0hhc2hPZmZzZXQiLCJzaG93RXJyb3JzSW5Qcm9kdWN0aW9uIiwicmVzdCIsInVuZGVmaW5lZCIsImRpc2FibGVSb3V0ZVByZWZpeGluZyIsIlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyIsInN0YXRlIiwiUmVzb2x2ZWRSb3V0ZXIiLCJTdGF0aWNSb3V0ZXIiLCJSZWFjdFJvdXRlciIsImdsb2JhbCIsIl9fcmVhY3RTdGF0aWNSb3V0ZXJIaXN0b3J5Iiwib3B0aW9ucyIsImJhc2VuYW1lIiwiUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCIsInBhdGNoSGlzdG9yeU5hdmlnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBUUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7QUFpQm5CLGtCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBOztBQUMxQixpRkFEMEIsQ0FHMUI7QUFDQTs7QUFKMEIsb0ZBSHBCO0FBQ05DLE1BQUFBLEtBQUssRUFBRTtBQURELEtBR29COztBQUFBLGlHQXFCUDtBQUFBLGFBQ25CO0FBQUE7QUFBQSxnQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDSyxPQUFPQyxNQUFQLEtBQWtCLFdBRHZCO0FBQUE7QUFBQTtBQUFBOztBQUVHO0FBQ01DLGdCQUFBQSxJQUhULEdBR2dCQyxrQkFBa0IsQ0FBQ0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCRixJQUFqQixDQUhsQztBQUlTRyxnQkFBQUEsSUFKVCxHQUlnQix1QkFBVUgsSUFBVixDQUpoQixFQU1HOztBQUNBLG9CQUFJRCxNQUFNLENBQUNLLFdBQVAsSUFBc0JMLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkQsSUFBbkIsS0FBNEJBLElBQXRELEVBQTREO0FBQ2xERSxrQkFBQUEsUUFEa0QsR0FDckNOLE1BQU0sQ0FBQ0ssV0FEOEIsQ0FDbERDLFFBRGtEO0FBRTFEQyxrQkFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQU0sQ0FBQ0ssV0FBUCxDQUFtQkksaUJBQS9CLEVBQWtEQyxPQUFsRCxDQUEwRCxVQUFBQyxPQUFPLEVBQUk7QUFDbkVDLHlDQUFZWixNQUFNLENBQUNLLFdBQVAsQ0FBbUJJLGlCQUFuQixDQUFxQ0UsT0FBckMsQ0FBWixJQUNFTCxRQUFRLENBQUNLLE9BQUQsQ0FEVjtBQUVELG1CQUhEO0FBSUQsaUJBYkosQ0FlRzs7O0FBZkgsc0JBZ0JPRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQVosS0FBaUMsYUFoQnhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFrQitCLDJCQUFhWCxJQUFiLEVBQW1CO0FBQUVZLGtCQUFBQSxRQUFRLEVBQUU7QUFBWixpQkFBbkIsQ0FsQi9COztBQUFBO0FBa0JhQyxnQkFBQUEsU0FsQmI7O0FBbUJPLG9CQUFJQSxTQUFKLEVBQWU7QUFDYiwwREFBMEJiLElBQTFCLEVBQWdDYSxTQUFTLENBQUNDLFVBQTFDO0FBQ0Q7O0FBckJSO0FBQUE7O0FBdUJPLHNCQUFLQyxRQUFMLENBQWM7QUFBRXBCLGtCQUFBQSxLQUFLLEVBQUU7QUFBVCxpQkFBZDs7QUF2QlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRCxJQURtQjtBQUFBLEtBckJPOztBQUFBLHFHQWtESCxVQUFBcUIsZUFBZSxFQUFJO0FBQzFDO0FBQ0EsVUFBSSxNQUFLQyxpQkFBVCxFQUE0QjtBQUMxQjtBQUNELE9BSnlDLENBSzFDO0FBQ0E7OztBQUNBO0FBQUMsT0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQlgsT0FBcEIsQ0FBNEIsVUFBQVksTUFBTSxFQUFJO0FBQ3JDO0FBQ0EsWUFBTUMsY0FBYyxHQUFHSCxlQUFlLENBQUNFLE1BQUQsQ0FBdEMsQ0FGcUMsQ0FHckM7O0FBQ0FGLFFBQUFBLGVBQWUsQ0FBQ0UsTUFBRCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQVVFLElBQVY7QUFBVUEsb0JBQUFBLElBQVY7QUFBQTs7QUFDeEI7QUFDTXBCLGtCQUFBQSxJQUZrQixHQUVYLHVCQUNYLE9BQU9vQixJQUFJLENBQUMsQ0FBRCxDQUFYLEtBQW1CLFFBQW5CLEdBQThCQSxJQUFJLENBQUMsQ0FBRCxDQUFsQyxHQUF3Q0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRcEIsSUFEckMsQ0FGVyxFQUt4Qjs7QUFDQSwyQ0FBVyxDQUFYLEVBTndCLENBT3hCOztBQVB3QjtBQUFBLHlCQVFLLDRCQUFjQSxJQUFkLEVBQW9CO0FBQUVZLG9CQUFBQSxRQUFRLEVBQUU7QUFBWixtQkFBcEIsQ0FSTDs7QUFBQTtBQVFsQlMsa0JBQUFBLGNBUmtCOztBQUFBLHVCQVdwQkEsY0FYb0I7QUFBQTtBQUFBO0FBQUE7O0FBWXRCO0FBQ0EsMkNBQVcsQ0FBWCxFQWJzQixDQWN0Qjs7QUFkc0I7QUFBQSx5QkFlaEIsdUJBQVNyQixJQUFULEVBQWU7QUFDbkJZLG9CQUFBQSxRQUFRLEVBQUU7QUFEUyxtQkFBZixDQWZnQjs7QUFBQTtBQW9CeEI7QUFDQSwyQ0FBVyxDQUFYLEVBckJ3QixDQXVCeEI7O0FBQ0FPLGtCQUFBQSxjQUFjLENBQUNHLEtBQWYsQ0FBcUJOLGVBQXJCLEVBQXNDSSxJQUF0Qzs7QUF4QndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTFCO0FBMEJELE9BOUJBLEVBUHlDLENBdUMxQzs7QUFDQSxZQUFLSCxpQkFBTCxHQUF5QixJQUF6QjtBQUNELEtBM0YyQjs7QUFBQSxRQUtwQkosVUFMb0IsR0FLTm5CLE9BTE0sQ0FLcEJtQixTQUxvQjs7QUFNMUIsUUFBSWIsS0FBSSxHQUFHLHVCQUFVTixPQUFPLENBQUM2QixTQUFsQixDQUFYOztBQUVBLFFBQUksT0FBTzNCLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNpQixNQUFBQSxVQUFTLEdBQUdqQixNQUFNLENBQUNLLFdBQW5CO0FBQ0EsVUFBTUosSUFBSSxHQUFHQyxrQkFBa0IsQ0FBQ0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCRixJQUFqQixDQUEvQjtBQUNBRyxNQUFBQSxLQUFJLEdBQUcsdUJBQVVILElBQVYsQ0FBUDtBQUNEOztBQUVELFFBQUlnQixVQUFKLEVBQWU7QUFDYiw4Q0FBMEJiLEtBQTFCLEVBQWdDYSxVQUFTLENBQUNDLFVBQTFDO0FBQ0Q7O0FBaEJ5QjtBQWlCM0I7Ozs7d0NBQ21CO0FBQ2xCLFdBQUtVLGtCQUFMO0FBQ0Q7Ozs2QkF3RVE7QUFBQSx3QkFZSCxLQUFLL0IsS0FaRjtBQUFBLFVBRUxnQyxPQUZLLGVBRUxBLE9BRks7QUFBQSxVQUdMQyxJQUhLLGVBR0xBLElBSEs7QUFBQSxVQUlMQyxRQUpLLGVBSUxBLFFBSks7QUFBQSxVQUtMQyxlQUxLLGVBS0xBLGVBTEs7QUFBQSxVQU1MQyxnQkFOSyxlQU1MQSxnQkFOSztBQUFBLFVBT0xDLG1CQVBLLGVBT0xBLG1CQVBLO0FBQUEsVUFRTEMsb0JBUkssZUFRTEEsb0JBUks7QUFBQSxVQVNMQyxrQkFUSyxlQVNMQSxrQkFUSztBQUFBLFVBVUxDLHNCQVZLLGVBVUxBLHNCQVZLO0FBQUEsVUFXRkMsSUFYRTs7QUFBQSxVQWFDWCxTQWJELEdBYWUsS0FBSzdCLE9BYnBCLENBYUM2QixTQWJEO0FBY1AsVUFBTTdCLE9BQU8sR0FBRzZCLFNBQVMsR0FBRyxFQUFILEdBQVFZLFNBQWpDO0FBQ0EsVUFBTUMscUJBQXFCLEdBQ3pCM0IsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixvQ0FBWixLQUFxRCxNQUR2RDtBQWZPLFVBa0JDMUMsS0FsQkQsR0FrQlcsS0FBSzJDLEtBbEJoQixDQWtCQzNDLEtBbEJEO0FBb0JQLFVBQUk0QyxjQUFKO0FBQ0EsVUFBSXZCLGVBQUosQ0FyQk8sQ0F1QlA7O0FBQ0EsVUFBSU8sU0FBSixFQUFlO0FBQ2JnQixRQUFBQSxjQUFjLEdBQUdDLDRCQUFqQjtBQUNBeEIsUUFBQUEsZUFBZSxHQUFHbUIsU0FBbEI7QUFDRCxPQUhELE1BR087QUFDTEksUUFBQUEsY0FBYyxHQUFHRSxzQkFBakI7QUFDQXpCLFFBQUFBLGVBQWUsR0FBR1MsT0FBTyxJQUFJaUIsTUFBTSxDQUFDQywwQkFBcEM7O0FBQ0EsWUFBSSxDQUFDM0IsZUFBTCxFQUFzQjtBQUNwQixjQUFJVSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQlYsWUFBQUEsZUFBZSxHQUFHLG1DQUFsQjtBQUNELFdBRkQsTUFFTyxJQUFJVSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQlYsWUFBQUEsZUFBZSxHQUFHLGlDQUFsQjtBQUNELFdBRk0sTUFFQTtBQUNMLGdCQUFNNEIsT0FBTyxHQUFHUixxQkFBcUIsR0FDakMsRUFEaUMsR0FFakM7QUFBRVMsY0FBQUEsUUFBUSxFQUFFcEMsT0FBTyxDQUFDQyxHQUFSLENBQVlvQztBQUF4QixhQUZKO0FBR0E5QixZQUFBQSxlQUFlLEdBQUcsbUNBQXFCNEIsT0FBckIsQ0FBbEI7QUFDRDtBQUNGOztBQUNERixRQUFBQSxNQUFNLENBQUNDLDBCQUFQLEdBQW9DM0IsZUFBcEM7QUFDQSxhQUFLK0Isc0JBQUwsQ0FBNEIvQixlQUE1QjtBQUNEOztBQUVELFVBQUlQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBWixLQUFpQyxhQUFqQyxJQUFrRCxDQUFDaEIsS0FBdkQsRUFBOEQ7QUFDNUQsZUFBTyw2QkFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsYUFDRSw2QkFBQyxxQkFBRDtBQUFjLFFBQUEsc0JBQXNCLEVBQUVzQyxzQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSw2QkFBQyxjQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVqQixlQURYO0FBRUUsUUFBQSxRQUFRLEVBQUVPLFNBRlo7QUFHRSxRQUFBLE9BQU8sRUFBRTdCLE9BSFg7QUFJRSxRQUFBLFFBQVEsRUFDTjBDLHFCQUFxQixHQUFHLEVBQUgsR0FBUTNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0M7QUFMN0MsU0FPTVosSUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVNFLDZCQUFDLHVCQUFELFdBQ007QUFDRk4sUUFBQUEsZUFBZSxFQUFmQSxlQURFO0FBRUZDLFFBQUFBLGdCQUFnQixFQUFoQkEsZ0JBRkU7QUFHRkMsUUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFIRTtBQUlGQyxRQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUpFO0FBS0ZDLFFBQUFBLGtCQUFrQixFQUFsQkE7QUFMRSxPQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBU0dMLFFBVEgsQ0FURixDQURGLENBREY7QUF5QkQ7Ozs7RUF4TGlDcUIsZUFBTUMsUzs7OztnQkFBckJ6RCxNLGtCQUNHO0FBQ3BCa0MsRUFBQUEsSUFBSSxFQUFFLFNBRGM7QUFFcEJFLEVBQUFBLGVBQWUsRUFBRSxJQUZHO0FBR3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUhFO0FBSXBCQyxFQUFBQSxtQkFBbUIsRUFBRSxDQUpEO0FBS3BCQyxFQUFBQSxvQkFBb0IsRUFBRSxHQUxGO0FBTXBCQyxFQUFBQSxrQkFBa0IsRUFBRSxDQU5BO0FBT3BCQyxFQUFBQSxzQkFBc0IsRUFBRTtBQVBKLEM7O2dCQURIekMsTSxrQkFVRztBQUNwQitCLEVBQUFBLFNBQVMsRUFBRTJCLG1CQUFVQyxNQUREO0FBRXBCdEMsRUFBQUEsU0FBUyxFQUFFcUMsbUJBQVVFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuaW1wb3J0IGNyZWF0ZU1lbW9yeUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5J1xuaW1wb3J0IGNyZWF0ZUhhc2hIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlSGFzaEhpc3RvcnknXG5pbXBvcnQgeyBSb3V0ZXIgYXMgUmVhY3RSb3V0ZXIsIFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG4vL1xuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IHtcbiAgZ2V0Um91dGVJbmZvLFxuICBwcm9wc0J5SGFzaCxcbiAgbmVlZHNQcmVmZXRjaCxcbiAgcHJlZmV0Y2gsXG4gIHNldExvYWRpbmcsXG4gIHJlZ2lzdGVyVGVtcGxhdGVJREZvclBhdGgsXG59IGZyb20gJy4uL21ldGhvZHMnXG5pbXBvcnQgUm91dGVyU2Nyb2xsZXIgZnJvbSAnLi9Sb3V0ZXJTY3JvbGxlcidcbmltcG9ydCBEZXZTcGlubmVyIGZyb20gJy4vRGV2U3Bpbm5lcidcbmltcG9ydCBFcnJvcldyYXBwZXIgZnJvbSAnLi9FcnJvcldyYXBwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2Jyb3dzZXInLFxuICAgIGF1dG9TY3JvbGxUb1RvcDogdHJ1ZSxcbiAgICBhdXRvU2Nyb2xsVG9IYXNoOiB0cnVlLFxuICAgIHNjcm9sbFRvVG9wRHVyYXRpb246IDAsXG4gICAgc2Nyb2xsVG9IYXNoRHVyYXRpb246IDgwMCxcbiAgICBzY3JvbGxUb0hhc2hPZmZzZXQ6IDAsXG4gICAgc2hvd0Vycm9yc0luUHJvZHVjdGlvbjogZmFsc2UsXG4gIH1cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzdGF0aWNVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm91dGVJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG4gIHN0YXRlID0ge1xuICAgIHJlYWR5OiBmYWxzZSxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKClcblxuICAgIC8vIEluIFNSUiBhbmQgcHJvZHVjdGlvbiwgc3luY2hyb25vdXNseSByZWdpc3RlciB0aGUgdGVtcGxhdGVJRCBmb3IgdGhlXG4gICAgLy8gaW5pdGlhbCBwYXRoXG4gICAgbGV0IHsgcm91dGVJbmZvIH0gPSBjb250ZXh0XG4gICAgbGV0IHBhdGggPSBjbGVhblBhdGgoY29udGV4dC5zdGF0aWNVUkwpXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJvdXRlSW5mbyA9IHdpbmRvdy5fX3JvdXRlSW5mb1xuICAgICAgY29uc3QgaHJlZiA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgIHBhdGggPSBjbGVhblBhdGgoaHJlZilcbiAgICB9XG5cbiAgICBpZiAocm91dGVJbmZvKSB7XG4gICAgICByZWdpc3RlclRlbXBsYXRlSURGb3JQYXRoKHBhdGgsIHJvdXRlSW5mby50ZW1wbGF0ZUlEKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmJvb3RzdHJhcFJvdXRlSW5mbygpXG4gIH1cbiAgYm9vdHN0cmFwUm91dGVJbmZvID0gKCkgPT5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIEdldCB0aGUgZW50cnkgcGF0aCBmcm9tIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IGhyZWYgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgICAgIGNvbnN0IHBhdGggPSBjbGVhblBhdGgoaHJlZilcblxuICAgICAgICAvLyBJbmplc3QgYW5kIGNhY2hlIHRoZSBlbWJlZGRlZCByb3V0ZUluZm8gaW4gdGhlIHBhZ2UgaWYgcG9zc2libGVcbiAgICAgICAgaWYgKHdpbmRvdy5fX3JvdXRlSW5mbyAmJiB3aW5kb3cuX19yb3V0ZUluZm8ucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIGNvbnN0IHsgYWxsUHJvcHMgfSA9IHdpbmRvdy5fX3JvdXRlSW5mb1xuICAgICAgICAgIE9iamVjdC5rZXlzKHdpbmRvdy5fX3JvdXRlSW5mby5zaGFyZWRQcm9wc0hhc2hlcykuZm9yRWFjaChwcm9wS2V5ID0+IHtcbiAgICAgICAgICAgIHByb3BzQnlIYXNoW3dpbmRvdy5fX3JvdXRlSW5mby5zaGFyZWRQcm9wc0hhc2hlc1twcm9wS2V5XV0gPVxuICAgICAgICAgICAgICBhbGxQcm9wc1twcm9wS2V5XVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBkZXYgbW9kZSwgcmVxdWVzdCB0aGUgdGVtcGxhdGVJRCBhbmQgcmVhZHkgdGhlIHJvdXRlclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCBnZXRSb3V0ZUluZm8ocGF0aCwgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgICAgICAgaWYgKHJvdXRlSW5mbykge1xuICAgICAgICAgICAgICByZWdpc3RlclRlbXBsYXRlSURGb3JQYXRoKHBhdGgsIHJvdXRlSW5mby50ZW1wbGF0ZUlEKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZHk6IHRydWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSgpXG4gIHBhdGNoSGlzdG9yeU5hdmlnYXRpb24gPSByZXNvbHZlZEhpc3RvcnkgPT4ge1xuICAgIC8vIE9ubHkgcGF0Y2ggbmF2aWdhdGlvbiBvbmNlXG4gICAgaWYgKHRoaXMucGF0Y2hlZE5hdmlnYXRpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBIZXJlLCB3ZSBwYXRjaCB0aGUgcHVzaCBhbmQgcmVwbGFjZSBtZXRob2RzIG9uIGhpc3Rvcnkgc28gd2UgY2FuXG4gICAgLy8gaW50ZXJjZXB0IHRoZW0uXG4gICAgO1sncHVzaCcsICdyZXBsYWNlJ10uZm9yRWFjaChtZXRob2QgPT4ge1xuICAgICAgLy8gSG9sZCBvbiB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLCB3ZSB3aWxsIG5lZWQgaXQuXG4gICAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IHJlc29sdmVkSGlzdG9yeVttZXRob2RdXG4gICAgICAvLyBSZXBsYWNlIGl0IHdpdGggb3VyIG93biBwYXRjaGVkIHZlcnNpb25cbiAgICAgIHJlc29sdmVkSGlzdG9yeVttZXRob2RdID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgLy8gQ2xlYW4gdGhlIHBhdGggZmlyc3RcbiAgICAgICAgY29uc3QgcGF0aCA9IGNsZWFuUGF0aChcbiAgICAgICAgICB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgPyBhcmdzWzBdIDogYXJnc1swXS5wYXRoXG4gICAgICAgIClcbiAgICAgICAgLy8gTm90aWZ5IGEgc29mdCBsb2FkaW5nIHN0YXRlXG4gICAgICAgIHNldExvYWRpbmcoMSlcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGFzIHF1aWNrbHkgYXMgcG9zc2libGUgaWYgd2UgbmVlZCB0byBmZXRjaCBkYXRhIGZvciB0aGlzIHJvdXRlXG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gYXdhaXQgbmVlZHNQcmVmZXRjaChwYXRoLCB7IHByaW9yaXR5OiB0cnVlIH0pXG5cbiAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBsb2FkLi4uXG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCkge1xuICAgICAgICAgIC8vIE5vdGlmeSB3aXRoIGEgaGFyZCBsb2FkaW5nIHN0YXRlXG4gICAgICAgICAgc2V0TG9hZGluZygyKVxuICAgICAgICAgIC8vIFByZWZldGNoIGFueSBkYXRhIG9yIHRlbXBsYXRlcyBuZWVkZWQgd2l0aCBhIGhpZ2ggcHJpb3JpdHlcbiAgICAgICAgICBhd2FpdCBwcmVmZXRjaChwYXRoLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90aWZ5IHdlJ3JlIGRvbmUgbG9hZGluZ1xuICAgICAgICBzZXRMb2FkaW5nKDApXG5cbiAgICAgICAgLy8gQXBwbHkgdGhlIG9yaWdpbmFsIG1ldGhvZCBhbmQgYXJndW1lbnRzIGFzIGlmIG5vdGhpbmcgaGFwcGVuZWRcbiAgICAgICAgb3JpZ2luYWxNZXRob2QuYXBwbHkocmVzb2x2ZWRIaXN0b3J5LCBhcmdzKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBPbmx5IHBhdGNoIG5hdmlnYXRpb24gb25jZSA6KVxuICAgIHRoaXMucGF0Y2hlZE5hdmlnYXRpb24gPSB0cnVlXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhpc3RvcnksXG4gICAgICB0eXBlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhdXRvU2Nyb2xsVG9Ub3AsXG4gICAgICBhdXRvU2Nyb2xsVG9IYXNoLFxuICAgICAgc2Nyb2xsVG9Ub3BEdXJhdGlvbixcbiAgICAgIHNjcm9sbFRvSGFzaER1cmF0aW9uLFxuICAgICAgc2Nyb2xsVG9IYXNoT2Zmc2V0LFxuICAgICAgc2hvd0Vycm9yc0luUHJvZHVjdGlvbixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc3RhdGljVVJMIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gc3RhdGljVVJMID8ge30gOiB1bmRlZmluZWRcbiAgICBjb25zdCBkaXNhYmxlUm91dGVQcmVmaXhpbmcgPVxuICAgICAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfUFJFRklYSU5HID09PSAndHJ1ZSdcblxuICAgIGNvbnN0IHsgcmVhZHkgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBSZXNvbHZlZFJvdXRlclxuICAgIGxldCByZXNvbHZlZEhpc3RvcnlcblxuICAgIC8vIElmIHN0YXRpY2FsbHkgcmVuZGVyaW5nLCB1c2UgdGhlIHN0YXRpYyByb3V0ZXJcbiAgICBpZiAoc3RhdGljVVJMKSB7XG4gICAgICBSZXNvbHZlZFJvdXRlciA9IFN0YXRpY1JvdXRlclxuICAgICAgcmVzb2x2ZWRIaXN0b3J5ID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIFJlc29sdmVkUm91dGVyID0gUmVhY3RSb3V0ZXJcbiAgICAgIHJlc29sdmVkSGlzdG9yeSA9IGhpc3RvcnkgfHwgZ2xvYmFsLl9fcmVhY3RTdGF0aWNSb3V0ZXJIaXN0b3J5XG4gICAgICBpZiAoIXJlc29sdmVkSGlzdG9yeSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ21lbW9yeScpIHtcbiAgICAgICAgICByZXNvbHZlZEhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KClcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaGFzaCcpIHtcbiAgICAgICAgICByZXNvbHZlZEhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRpc2FibGVSb3V0ZVByZWZpeGluZ1xuICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgOiB7IGJhc2VuYW1lOiBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQkFTRV9QQVRIIH1cbiAgICAgICAgICByZXNvbHZlZEhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnbG9iYWwuX19yZWFjdFN0YXRpY1JvdXRlckhpc3RvcnkgPSByZXNvbHZlZEhpc3RvcnlcbiAgICAgIHRoaXMucGF0Y2hIaXN0b3J5TmF2aWdhdGlvbihyZXNvbHZlZEhpc3RvcnkpXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgIXJlYWR5KSB7XG4gICAgICByZXR1cm4gPERldlNwaW5uZXIgLz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yV3JhcHBlciBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uPXtzaG93RXJyb3JzSW5Qcm9kdWN0aW9ufT5cbiAgICAgICAgPFJlc29sdmVkUm91dGVyXG4gICAgICAgICAgaGlzdG9yeT17cmVzb2x2ZWRIaXN0b3J5fVxuICAgICAgICAgIGxvY2F0aW9uPXtzdGF0aWNVUkx9XG4gICAgICAgICAgY29udGV4dD17Y29udGV4dH1cbiAgICAgICAgICBiYXNlbmFtZT17XG4gICAgICAgICAgICBkaXNhYmxlUm91dGVQcmVmaXhpbmcgPyAnJyA6IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19CQVNFX1BBVEhcbiAgICAgICAgICB9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8Um91dGVyU2Nyb2xsZXJcbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxUb1RvcCxcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbFRvSGFzaCxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9Ub3BEdXJhdGlvbixcbiAgICAgICAgICAgICAgc2Nyb2xsVG9IYXNoRHVyYXRpb24sXG4gICAgICAgICAgICAgIHNjcm9sbFRvSGFzaE9mZnNldCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvUm91dGVyU2Nyb2xsZXI+XG4gICAgICAgIDwvUmVzb2x2ZWRSb3V0ZXI+XG4gICAgICA8L0Vycm9yV3JhcHBlcj5cbiAgICApXG4gIH1cbn1cbiJdfQ==