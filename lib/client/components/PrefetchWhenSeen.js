"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _methods = require("../methods");

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/PrefetchWhenSeen.js";

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

var ioIsSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window;

var handleIntersection = function handleIntersection(element, callback) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
};

var PrefetchWhenSeen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PrefetchWhenSeen, _React$Component);

  function PrefetchWhenSeen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PrefetchWhenSeen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrefetchWhenSeen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, type, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad, type = _this$props.type;
                cleanedPath = (0, _shared.cleanPath)(path);
                _context.next = 4;
                return (0, _methods.prefetch)(cleanedPath, {
                  type: type
                });

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (ref) {
      if (ioIsSupported && ref) {
        handleIntersection(ref, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(PrefetchWhenSeen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!ioIsSupported) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          component = _this$props2.component,
          render = _this$props2.render,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["component", "render", "children"]);

      if (component) {
        return _react.default.createElement(component, {
          handleRef: this.handleRef
        });
      }

      if (render) {
        return render({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), children);
    }
  }]);

  return PrefetchWhenSeen;
}(_react.default.Component);

exports.default = PrefetchWhenSeen;

_defineProperty(PrefetchWhenSeen, "defaultProps", {
  children: null,
  path: null,
  className: null,
  type: null,
  onLoad: function onLoad() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9QcmVmZXRjaFdoZW5TZWVuLmpzIl0sIm5hbWVzIjpbImlvSXNTdXBwb3J0ZWQiLCJ3aW5kb3ciLCJoYW5kbGVJbnRlcnNlY3Rpb24iLCJlbGVtZW50IiwiY2FsbGJhY2siLCJpbyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsIlByZWZldGNoV2hlblNlZW4iLCJwcm9wcyIsInBhdGgiLCJvbkxvYWQiLCJ0eXBlIiwiY2xlYW5lZFBhdGgiLCJkYXRhIiwicmVmIiwicnVuUHJlZmV0Y2giLCJjb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYW5kbGVSZWYiLCJDb21wb25lbnQiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQ2pCLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsMEJBQTBCQSxNQUQ3RDs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNoRCxNQUFNQyxFQUFFLEdBQUcsSUFBSUosTUFBTSxDQUFDSyxvQkFBWCxDQUFnQyxVQUFBQyxPQUFPLEVBQUk7QUFDcERBLElBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUk7QUFDdkI7QUFDQSxVQUNFTixPQUFPLEtBQUtNLEtBQUssQ0FBQ0MsTUFBbEIsS0FDQ0QsS0FBSyxDQUFDRSxjQUFOLElBQXdCRixLQUFLLENBQUNHLGlCQUFOLEdBQTBCLENBRG5ELENBREYsRUFHRTtBQUNBUCxRQUFBQSxFQUFFLENBQUNRLFNBQUgsQ0FBYVYsT0FBYjtBQUNBRSxRQUFBQSxFQUFFLENBQUNTLFVBQUg7QUFDQVYsUUFBQUEsUUFBUTtBQUNUO0FBQ0YsS0FWRDtBQVdELEdBWlUsQ0FBWDtBQWNBQyxFQUFBQSxFQUFFLENBQUNVLE9BQUgsQ0FBV1osT0FBWDtBQUNELENBaEJEOztJQWtCcUJhLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEZBZUw7QUFBQSxhQUNaO0FBQUE7QUFBQSxnQ0FBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ2dDLE1BQUtDLEtBRHJDLEVBQ1NDLElBRFQsZUFDU0EsSUFEVCxFQUNlQyxNQURmLGVBQ2VBLE1BRGYsRUFDdUJDLElBRHZCLGVBQ3VCQSxJQUR2QjtBQUVPQyxnQkFBQUEsV0FGUCxHQUVxQix1QkFBVUgsSUFBVixDQUZyQjtBQUFBO0FBQUEsdUJBR29CLHVCQUFTRyxXQUFULEVBQXNCO0FBQUVELGtCQUFBQSxJQUFJLEVBQUpBO0FBQUYsaUJBQXRCLENBSHBCOztBQUFBO0FBR09FLGdCQUFBQSxJQUhQO0FBSUNILGdCQUFBQSxNQUFNLENBQUNHLElBQUQsRUFBT0QsV0FBUCxDQUFOOztBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQsSUFEWTtBQUFBLEs7O3dGQVFGLFVBQUFFLEdBQUcsRUFBSTtBQUNqQixVQUFJdkIsYUFBYSxJQUFJdUIsR0FBckIsRUFBMEI7QUFDeEJyQixRQUFBQSxrQkFBa0IsQ0FBQ3FCLEdBQUQsRUFBTSxNQUFLQyxXQUFYLENBQWxCO0FBQ0Q7QUFDRixLOzs7Ozs7O3dDQWxCbUI7QUFDbEIsVUFBSSxDQUFDeEIsYUFBTCxFQUFvQjtBQUNsQixhQUFLd0IsV0FBTDtBQUNEO0FBQ0Y7Ozs2QkFnQlE7QUFBQSx5QkFDMEMsS0FBS1AsS0FEL0M7QUFBQSxVQUNDUSxTQURELGdCQUNDQSxTQUREO0FBQUEsVUFDWUMsTUFEWixnQkFDWUEsTUFEWjtBQUFBLFVBQ29CQyxRQURwQixnQkFDb0JBLFFBRHBCO0FBQUEsVUFDaUNDLElBRGpDOztBQUVQLFVBQUlILFNBQUosRUFBZTtBQUNiLGVBQU9JLGVBQU1DLGFBQU4sQ0FBb0JMLFNBQXBCLEVBQStCO0FBQ3BDTSxVQUFBQSxTQUFTLEVBQUUsS0FBS0E7QUFEb0IsU0FBL0IsQ0FBUDtBQUdEOztBQUNELFVBQUlMLE1BQUosRUFBWTtBQUNWLGVBQU9BLE1BQU0sQ0FBQztBQUFFSyxVQUFBQSxTQUFTLEVBQUUsS0FBS0E7QUFBbEIsU0FBRCxDQUFiO0FBQ0Q7O0FBQ0QsYUFDRTtBQUFLLFFBQUEsR0FBRyxFQUFFLEtBQUtBO0FBQWYsU0FBOEJILElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ0dELFFBREgsQ0FERjtBQUtEOzs7O0VBNUMyQ0UsZUFBTUcsUzs7OztnQkFBL0JoQixnQixrQkFDRztBQUNwQlcsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJULEVBQUFBLElBQUksRUFBRSxJQUZjO0FBR3BCZSxFQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQmIsRUFBQUEsSUFBSSxFQUFFLElBSmM7QUFLcEJELEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFO0FBTEksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IHsgcHJlZmV0Y2ggfSBmcm9tICcuLi9tZXRob2RzJ1xuXG5jb25zdCBpb0lzU3VwcG9ydGVkID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3dcbmNvbnN0IGhhbmRsZUludGVyc2VjdGlvbiA9IChlbGVtZW50LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBpbyA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IGlzSW50ZXJzZWN0aW5nLiBpbnRlcnNlY3Rpb25SYXRpbyA+IDAgd29ya3MgYXMgYSBmYWxsYmFja1xuICAgICAgaWYgKFxuICAgICAgICBlbGVtZW50ID09PSBlbnRyeS50YXJnZXQgJiZcbiAgICAgICAgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMClcbiAgICAgICkge1xuICAgICAgICBpby51bm9ic2VydmUoZWxlbWVudClcbiAgICAgICAgaW8uZGlzY29ubmVjdCgpXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGlvLm9ic2VydmUoZWxlbWVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZmV0Y2hXaGVuU2VlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgcGF0aDogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICBvbkxvYWQ6ICgpID0+IHt9LFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCFpb0lzU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLnJ1blByZWZldGNoKClcbiAgICB9XG4gIH1cblxuICBydW5QcmVmZXRjaCA9ICgpID0+XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgb25Mb2FkLCB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCBjbGVhbmVkUGF0aCA9IGNsZWFuUGF0aChwYXRoKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByZWZldGNoKGNsZWFuZWRQYXRoLCB7IHR5cGUgfSlcbiAgICAgIG9uTG9hZChkYXRhLCBjbGVhbmVkUGF0aClcbiAgICB9KSgpXG5cbiAgaGFuZGxlUmVmID0gcmVmID0+IHtcbiAgICBpZiAoaW9Jc1N1cHBvcnRlZCAmJiByZWYpIHtcbiAgICAgIGhhbmRsZUludGVyc2VjdGlvbihyZWYsIHRoaXMucnVuUHJlZmV0Y2gpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCByZW5kZXIsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB7XG4gICAgICAgIGhhbmRsZVJlZjogdGhpcy5oYW5kbGVSZWYsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKHsgaGFuZGxlUmVmOiB0aGlzLmhhbmRsZVJlZiB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMuaGFuZGxlUmVmfSB7Li4ucmVzdH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19