"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _methods = require("../methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    _classCallCheck(this, Prefetch);

    return _possibleConstructorReturn(this, _getPrototypeOf(Prefetch).apply(this, arguments));
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, type, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, path = _this$props.path, onLoad = _this$props.onLoad, type = _this$props.type;
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
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return (0, _shared.unwrapArray)(this.props.children);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  type: null,
  onLoad: function onLoad() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9QcmVmZXRjaC5qcyJdLCJuYW1lcyI6WyJQcmVmZXRjaCIsInByb3BzIiwicGF0aCIsIm9uTG9hZCIsInR5cGUiLCJjbGVhbmVkUGF0aCIsImRhdGEiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWMsS0FBS0MsSyxFQUE1QkMsSSxlQUFBQSxJLEVBQU1DLE0sZUFBQUEsTSxFQUFRQyxJLGVBQUFBLEk7QUFDaEJDLGdCQUFBQSxXLEdBQWMsdUJBQVVILElBQVYsQzs7dUJBQ0QsdUJBQVNHLFdBQVQsRUFBc0I7QUFBRUQsa0JBQUFBLElBQUksRUFBSkE7QUFBRixpQkFBdEIsQzs7O0FBQWJFLGdCQUFBQSxJO0FBQ05ILGdCQUFBQSxNQUFNLENBQUNHLElBQUQsRUFBT0QsV0FBUCxDQUFOOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQ1AsYUFBTyx5QkFBWSxLQUFLSixLQUFMLENBQVdNLFFBQXZCLENBQVA7QUFDRDs7OztFQWZtQ0MsZUFBTUMsUzs7OztnQkFBdkJULFEsa0JBQ0c7QUFDcEJPLEVBQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCTCxFQUFBQSxJQUFJLEVBQUUsSUFGYztBQUdwQkUsRUFBQUEsSUFBSSxFQUFFLElBSGM7QUFJcEJELEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFO0FBSkksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgY2xlYW5QYXRoLCB1bndyYXBBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZCdcbmltcG9ydCB7IHByZWZldGNoIH0gZnJvbSAnLi4vbWV0aG9kcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZmV0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIHBhdGg6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICBvbkxvYWQ6ICgpID0+IHt9LFxuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGF0aCwgb25Mb2FkLCB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2xlYW5lZFBhdGggPSBjbGVhblBhdGgocGF0aClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJlZmV0Y2goY2xlYW5lZFBhdGgsIHsgdHlwZSB9KVxuICAgIG9uTG9hZChkYXRhLCBjbGVhbmVkUGF0aClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHVud3JhcEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gIH1cbn1cbiJdfQ==