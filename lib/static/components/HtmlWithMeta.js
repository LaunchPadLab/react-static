"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHtmlWithMeta = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/static/components/HtmlWithMeta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Instead of using the default components, we need to hard code meta
// from react-helmet into the components
var makeHtmlWithMeta = function makeHtmlWithMeta(_ref) {
  var head = _ref.head;
  return function (_ref2) {
    var children = _ref2.children,
        rest = _objectWithoutProperties(_ref2, ["children"]);

    return _react.default.createElement("html", _extends({
      lang: "en"
    }, head.htmlProps, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }), children);
  };
};

exports.makeHtmlWithMeta = makeHtmlWithMeta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9IdG1sV2l0aE1ldGEuanMiXSwibmFtZXMiOlsibWFrZUh0bWxXaXRoTWV0YSIsImhlYWQiLCJjaGlsZHJlbiIsInJlc3QiLCJodG1sUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjO0FBQUEsUUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBZ0JDLElBQWhCOztBQUFBLFdBQzVDO0FBQU0sTUFBQSxJQUFJLEVBQUM7QUFBWCxPQUFvQkYsSUFBSSxDQUFDRyxTQUF6QixFQUF3Q0QsSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDR0QsUUFESCxDQUQ0QztBQUFBLEdBQWQ7QUFBQSxDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gSW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCBjb21wb25lbnRzLCB3ZSBuZWVkIHRvIGhhcmQgY29kZSBtZXRhXG4vLyBmcm9tIHJlYWN0LWhlbG1ldCBpbnRvIHRoZSBjb21wb25lbnRzXG5leHBvcnQgY29uc3QgbWFrZUh0bWxXaXRoTWV0YSA9ICh7IGhlYWQgfSkgPT4gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8aHRtbCBsYW5nPVwiZW5cIiB7Li4uaGVhZC5odG1sUHJvcHN9IHsuLi5yZXN0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvaHRtbD5cbilcbiJdfQ==