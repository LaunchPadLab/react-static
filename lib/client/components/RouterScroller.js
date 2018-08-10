"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _raf = _interopRequireDefault(require("raf"));

var _shared = require("../../utils/shared");

var _scrollTo = _interopRequireDefault(require("../../utils/scrollTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RouterScroller = (0, _reactRouterDom.withRouter)(
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset,
          hash = _this$props2.location.hash;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Do not scroll to top on initial page load if hash does not exist
      this.scrollToHash({
        orScrollToTop: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev) {
      if (prev.location.pathname !== this.props.location.pathname && !this.props.location.hash) {
        if (window.__noScrollTo) {
          window.__noScrollTo = false;
          return;
        }

        this.scrollToTop();
        return;
      }

      if (prev.location.hash !== this.props.location.hash) {
        this.scrollToHash();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _shared.unwrapArray)(this.props.children);
    }
  }]);

  return RouterScroller;
}(_react.default.Component));
var _default = RouterScroller;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZXJTY3JvbGxlci5qcyJdLCJuYW1lcyI6WyJSb3V0ZXJTY3JvbGxlciIsInByb3BzIiwiYXV0b1Njcm9sbFRvVG9wIiwic2Nyb2xsVG9Ub3BEdXJhdGlvbiIsImR1cmF0aW9uIiwib3JTY3JvbGxUb1RvcCIsInNjcm9sbFRvSGFzaER1cmF0aW9uIiwiYXV0b1Njcm9sbFRvSGFzaCIsInNjcm9sbFRvSGFzaE9mZnNldCIsImhhc2giLCJsb2NhdGlvbiIsInJlc29sdmVkSGFzaCIsInN1YnN0cmluZyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0Iiwic2Nyb2xsVG9IYXNoIiwicHJldiIsInBhdGhuYW1lIiwid2luZG93IiwiX19ub1Njcm9sbFRvIiwic2Nyb2xsVG9Ub3AiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBRztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSwwRkFzQkwsWUFBTTtBQUFBLHdCQUMrQixNQUFLQyxLQURwQztBQUFBLFVBQ1ZDLGVBRFUsZUFDVkEsZUFEVTtBQUFBLFVBQ09DLG1CQURQLGVBQ09BLG1CQURQOztBQUVsQixVQUFJRCxlQUFKLEVBQXFCO0FBQ25CLCtCQUFTLENBQVQsRUFBWTtBQUNWRSxVQUFBQSxRQUFRLEVBQUVEO0FBREEsU0FBWjtBQUdEO0FBQ0YsS0E3QmtCOztBQUFBLDJGQThCSixZQUFtQztBQUFBLHFGQUFQLEVBQU87QUFBQSxvQ0FBaENFLGFBQWdDO0FBQUEsVUFBaENBLGFBQWdDLG1DQUFoQixJQUFnQjs7QUFBQSx5QkFNNUMsTUFBS0osS0FOdUM7QUFBQSxVQUU5Q0ssb0JBRjhDLGdCQUU5Q0Esb0JBRjhDO0FBQUEsVUFHOUNDLGdCQUg4QyxnQkFHOUNBLGdCQUg4QztBQUFBLFVBSTlDQyxrQkFKOEMsZ0JBSTlDQSxrQkFKOEM7QUFBQSxVQUtsQ0MsSUFMa0MsZ0JBSzlDQyxRQUw4QyxDQUtsQ0QsSUFMa0M7O0FBT2hELFVBQUksQ0FBQ0YsZ0JBQUwsRUFBdUI7QUFDckI7QUFDRDs7QUFDRCxVQUFJRSxJQUFKLEVBQVU7QUFDUixZQUFNRSxZQUFZLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlLENBQWYsQ0FBckI7O0FBQ0EsWUFBSUQsWUFBSixFQUFrQjtBQUNoQjtBQUNBLGNBQU1FLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSixZQUF4QixDQUFoQjs7QUFDQSxjQUFJRSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsbUNBQVNBLE9BQVQsRUFBa0I7QUFDaEJULGNBQUFBLFFBQVEsRUFBRUUsb0JBRE07QUFFaEJVLGNBQUFBLE1BQU0sRUFBRVI7QUFGUSxhQUFsQjtBQUlELFdBTEQsTUFLTztBQUNMLDhCQUFJLFlBQU07QUFDUixrQkFBTUssT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JKLFlBQXhCLENBQWhCOztBQUNBLGtCQUFJRSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsdUNBQVNBLE9BQVQsRUFBa0I7QUFDaEJULGtCQUFBQSxRQUFRLEVBQUVFLG9CQURNO0FBRWhCVSxrQkFBQUEsTUFBTSxFQUFFUjtBQUZRLGlCQUFsQjtBQUlEO0FBQ0YsYUFSRDtBQVNEO0FBQ0Y7QUFDRixPQXRCRCxNQXNCTyxJQUFJSCxhQUFKLEVBQW1CO0FBQ3hCLCtCQUFTLENBQVQsRUFBWTtBQUNWRCxVQUFBQSxRQUFRLEVBQUVFO0FBREEsU0FBWjtBQUdEO0FBQ0YsS0FuRWtCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdDQUVDO0FBQ2xCO0FBQ0EsV0FBS1csWUFBTCxDQUFrQjtBQUFFWixRQUFBQSxhQUFhLEVBQUU7QUFBakIsT0FBbEI7QUFDRDtBQUxrQjtBQUFBO0FBQUEsdUNBTUFhLElBTkEsRUFNTTtBQUN2QixVQUNFQSxJQUFJLENBQUNSLFFBQUwsQ0FBY1MsUUFBZCxLQUEyQixLQUFLbEIsS0FBTCxDQUFXUyxRQUFYLENBQW9CUyxRQUEvQyxJQUNBLENBQUMsS0FBS2xCLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQkQsSUFGdkIsRUFHRTtBQUNBLFlBQUlXLE1BQU0sQ0FBQ0MsWUFBWCxFQUF5QjtBQUN2QkQsVUFBQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCLEtBQXRCO0FBQ0E7QUFDRDs7QUFDRCxhQUFLQyxXQUFMO0FBQ0E7QUFDRDs7QUFDRCxVQUFJSixJQUFJLENBQUNSLFFBQUwsQ0FBY0QsSUFBZCxLQUF1QixLQUFLUixLQUFMLENBQVdTLFFBQVgsQ0FBb0JELElBQS9DLEVBQXFEO0FBQ25ELGFBQUtRLFlBQUw7QUFDRDtBQUNGO0FBckJrQjtBQUFBO0FBQUEsNkJBb0VWO0FBQ1AsYUFBTyx5QkFBWSxLQUFLaEIsS0FBTCxDQUFXc0IsUUFBdkIsQ0FBUDtBQUNEO0FBdEVrQjs7QUFBQTtBQUFBLEVBQ1FDLGVBQU1DLFNBRGQsRUFBdkI7ZUEwRWV6QixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUkFGIGZyb20gJ3JhZidcbi8vXG5pbXBvcnQgeyB1bndyYXBBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZCdcbmltcG9ydCBzY3JvbGxUbyBmcm9tICcuLi8uLi91dGlscy9zY3JvbGxUbydcblxuY29uc3QgUm91dGVyU2Nyb2xsZXIgPSB3aXRoUm91dGVyKFxuICBjbGFzcyBSb3V0ZXJTY3JvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBEbyBub3Qgc2Nyb2xsIHRvIHRvcCBvbiBpbml0aWFsIHBhZ2UgbG9hZCBpZiBoYXNoIGRvZXMgbm90IGV4aXN0XG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaCh7IG9yU2Nyb2xsVG9Ub3A6IGZhbHNlIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByZXYubG9jYXRpb24ucGF0aG5hbWUgIT09IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgJiZcbiAgICAgICAgIXRoaXMucHJvcHMubG9jYXRpb24uaGFzaFxuICAgICAgKSB7XG4gICAgICAgIGlmICh3aW5kb3cuX19ub1Njcm9sbFRvKSB7XG4gICAgICAgICAgd2luZG93Ll9fbm9TY3JvbGxUbyA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHByZXYubG9jYXRpb24uaGFzaCAhPT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKClcbiAgICAgIH1cbiAgICB9XG4gICAgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGF1dG9TY3JvbGxUb1RvcCwgc2Nyb2xsVG9Ub3BEdXJhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgICAgaWYgKGF1dG9TY3JvbGxUb1RvcCkge1xuICAgICAgICBzY3JvbGxUbygwLCB7XG4gICAgICAgICAgZHVyYXRpb246IHNjcm9sbFRvVG9wRHVyYXRpb24sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaCA9ICh7IG9yU2Nyb2xsVG9Ub3AgPSB0cnVlIH0gPSB7fSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzY3JvbGxUb0hhc2hEdXJhdGlvbixcbiAgICAgICAgYXV0b1Njcm9sbFRvSGFzaCxcbiAgICAgICAgc2Nyb2xsVG9IYXNoT2Zmc2V0LFxuICAgICAgICBsb2NhdGlvbjogeyBoYXNoIH0sXG4gICAgICB9ID0gdGhpcy5wcm9wc1xuICAgICAgaWYgKCFhdXRvU2Nyb2xsVG9IYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIYXNoID0gaGFzaC5zdWJzdHJpbmcoMSlcbiAgICAgICAgaWYgKHJlc29sdmVkSGFzaCkge1xuICAgICAgICAgIC8vIFdlIG11c3QgYXR0ZW1wdCB0byBzY3JvbGwgc3luY2hyb25vdXNseSBvciB3ZSByaXNrIHRoZSBicm93c2VyIHNjcm9sbGluZyBmb3IgdXNcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzb2x2ZWRIYXNoKVxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzY3JvbGxUbyhlbGVtZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzY3JvbGxUb0hhc2hEdXJhdGlvbixcbiAgICAgICAgICAgICAgb2Zmc2V0OiBzY3JvbGxUb0hhc2hPZmZzZXQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBSQUYoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzb2x2ZWRIYXNoKVxuICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzY3JvbGxUb0hhc2hEdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogc2Nyb2xsVG9IYXNoT2Zmc2V0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9yU2Nyb2xsVG9Ub3ApIHtcbiAgICAgICAgc2Nyb2xsVG8oMCwge1xuICAgICAgICAgIGR1cmF0aW9uOiBzY3JvbGxUb0hhc2hEdXJhdGlvbixcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHVud3JhcEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgfVxuICB9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclNjcm9sbGVyXG4iXX0=