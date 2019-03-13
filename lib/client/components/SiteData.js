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

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TaXRlRGF0YS5qcyJdLCJuYW1lcyI6WyJzaXRlRGF0YVByb21pc2UiLCJTaXRlRGF0YSIsInNpdGVEYXRhIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19FTlYiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1bm1vdW50aW5nIiwic2V0U3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudCIsInJlbmRlciIsImNoaWxkcmVuIiwicmVzdCIsIndpbmRvdyIsIl9fcm91dGVJbmZvIiwiY29udGV4dCIsInJvdXRlSW5mbyIsInN0YXRlIiwiZmluYWxQcm9wcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsIndpdGhTaXRlRGF0YSIsIkNvbXAiLCJDb25uZWN0ZWRTaXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBSUEsZUFBSjs7SUFFcUJDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFJWDtBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFESixLOzs7Ozs7Ozs7Ozs7Ozs7OztzQkFJRkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUFaLEtBQWlDLGE7Ozs7Ozt1QkFDRCxZQUFNO0FBQ3RDLHNCQUFJTCxlQUFKLEVBQXFCO0FBQ25CLDJCQUFPQSxlQUFQO0FBQ0Q7O0FBQ0RBLGtCQUFBQSxlQUFlLEdBQUdNLGVBQU1DLEdBQU4sQ0FBVSw0QkFBVixDQUFsQjtBQUNBLHlCQUFPUCxlQUFQO0FBQ0QsaUJBTmdDLEU7Ozs7QUFBbkJFLGdCQUFBQSxRLFFBQU5NLEk7O3FCQU9KLEtBQUtDLFU7Ozs7Ozs7O0FBR1QscUJBQUtDLFFBQUwsQ0FBYztBQUNaUixrQkFBQUEsUUFBUSxFQUFSQTtBQURZLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBS21CO0FBQ3JCLFdBQUtPLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7OzZCQUNRO0FBQUEsd0JBQzBDLEtBQUtFLEtBRC9DO0FBQUEsVUFDQ0MsU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsTUFEWixlQUNZQSxNQURaO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUFBLFVBQ2lDQyxJQURqQzs7QUFFUCxVQUFJYixRQUFKLENBRk8sQ0FJUDs7QUFDQSxVQUFJLE9BQU9jLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsWUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3RCZixVQUFBQSxRQUFRLEdBQUdjLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQmYsUUFBOUI7QUFDRDtBQUNGLE9BVE0sQ0FXUDs7O0FBQ0EsVUFDRSxDQUFDQSxRQUFELElBQ0EsS0FBS2dCLE9BQUwsQ0FBYUMsU0FEYixJQUVBLEtBQUtELE9BQUwsQ0FBYUMsU0FBYixDQUF1QmpCLFFBSHpCLEVBSUU7QUFDQUEsUUFBQUEsUUFBUSxHQUFHLEtBQUtnQixPQUFMLENBQWFDLFNBQWIsSUFBMEIsS0FBS0QsT0FBTCxDQUFhQyxTQUFiLENBQXVCakIsUUFBNUQ7QUFDRCxPQWxCTSxDQW9CUDs7O0FBQ0EsVUFBSSxDQUFDQSxRQUFELElBQWEsS0FBS2tCLEtBQUwsQ0FBV2xCLFFBQTVCLEVBQXNDO0FBQ3BDQSxRQUFBQSxRQUFRLEdBQUcsS0FBS2tCLEtBQUwsQ0FBV2xCLFFBQXRCO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixZQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQVosS0FBaUMsYUFBckMsRUFBb0Q7QUFDbEQsaUJBQU8sNkJBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1nQixVQUFVLHFCQUNYTixJQURXLEVBRVhiLFFBRlcsQ0FBaEI7O0FBSUEsVUFBSVUsU0FBSixFQUFlO0FBQ2IsZUFBT1UsZUFBTUMsYUFBTixDQUFvQlgsU0FBcEIsRUFBK0JTLFVBQS9CLEVBQTJDUCxRQUEzQyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUQsTUFBSixFQUFZO0FBQ1YsZUFBT0EsTUFBTSxDQUFDUSxVQUFELENBQWI7QUFDRDs7QUFDRCxhQUFPUCxRQUFRLENBQUNPLFVBQUQsQ0FBZjtBQUNEOzs7O0VBdEVtQ0MsZUFBTUUsUzs7OztnQkFBdkJ2QixRLGtCQUNHO0FBQ3BCa0IsRUFBQUEsU0FBUyxFQUFFTSxtQkFBVUM7QUFERCxDOztBQXdFakIsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDakMsU0FBTyxTQUFTQyxpQkFBVCxDQUEyQmxCLEtBQTNCLEVBQWtDO0FBQ3ZDLFdBQU8sNkJBQUMsUUFBRDtBQUFVLE1BQUEsU0FBUyxFQUFFaUI7QUFBckIsT0FBK0JqQixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy9cbmltcG9ydCBEZXZTcGlubmVyIGZyb20gJy4vRGV2U3Bpbm5lcidcblxuLy9cblxubGV0IHNpdGVEYXRhUHJvbWlzZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXRlRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgcm91dGVJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG4gIHN0YXRlID0ge1xuICAgIHNpdGVEYXRhOiBmYWxzZSxcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIGNvbnN0IHsgZGF0YTogc2l0ZURhdGEgfSA9IGF3YWl0ICgoKSA9PiB7XG4gICAgICAgIGlmIChzaXRlRGF0YVByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gc2l0ZURhdGFQcm9taXNlXG4gICAgICAgIH1cbiAgICAgICAgc2l0ZURhdGFQcm9taXNlID0gYXhpb3MuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9zaXRlRGF0YScpXG4gICAgICAgIHJldHVybiBzaXRlRGF0YVByb21pc2VcbiAgICAgIH0pKClcbiAgICAgIGlmICh0aGlzLnVubW91bnRpbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2l0ZURhdGEsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVubW91bnRpbmcgPSB0cnVlXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCByZW5kZXIsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHNpdGVEYXRhXG5cbiAgICAvLyBHZXQgc2l0ZUluZm8gZnJvbSB3aW5kb3dcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh3aW5kb3cuX19yb3V0ZUluZm8pIHtcbiAgICAgICAgc2l0ZURhdGEgPSB3aW5kb3cuX19yb3V0ZUluZm8uc2l0ZURhdGFcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgc2l0ZUluZm8gZnJvbSBjb250ZXh0IChTU1IpXG4gICAgaWYgKFxuICAgICAgIXNpdGVEYXRhICYmXG4gICAgICB0aGlzLmNvbnRleHQucm91dGVJbmZvICYmXG4gICAgICB0aGlzLmNvbnRleHQucm91dGVJbmZvLnNpdGVEYXRhXG4gICAgKSB7XG4gICAgICBzaXRlRGF0YSA9IHRoaXMuY29udGV4dC5yb3V0ZUluZm8gJiYgdGhpcy5jb250ZXh0LnJvdXRlSW5mby5zaXRlRGF0YVxuICAgIH1cblxuICAgIC8vIEdldCBzaXRlSW5mbyBmcm9tIHJlcXVlc3RcbiAgICBpZiAoIXNpdGVEYXRhICYmIHRoaXMuc3RhdGUuc2l0ZURhdGEpIHtcbiAgICAgIHNpdGVEYXRhID0gdGhpcy5zdGF0ZS5zaXRlRGF0YVxuICAgIH1cblxuICAgIGlmICghc2l0ZURhdGEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiA8RGV2U3Bpbm5lciAvPlxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBmaW5hbFByb3BzID0ge1xuICAgICAgLi4ucmVzdCxcbiAgICAgIC4uLnNpdGVEYXRhLFxuICAgIH1cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGZpbmFsUHJvcHMsIGNoaWxkcmVuKVxuICAgIH1cbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGZpbmFsUHJvcHMpXG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbihmaW5hbFByb3BzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoU2l0ZURhdGEoQ29tcCkge1xuICByZXR1cm4gZnVuY3Rpb24gQ29ubmVjdGVkU2l0ZURhdGEocHJvcHMpIHtcbiAgICByZXR1cm4gPFNpdGVEYXRhIGNvbXBvbmVudD17Q29tcH0gey4uLnByb3BzfSAvPlxuICB9XG59XG4iXX0=