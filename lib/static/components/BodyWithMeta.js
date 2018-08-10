"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBodyWithMeta = void 0;

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/static/components/BodyWithMeta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var REGEX_FOR_SCRIPT = /<(\/)?(script)/gi;

var generateRouteInformation = function generateRouteInformation(embeddedRouteInfo) {
  return {
    __html: "\n    window.__routeInfo = ".concat(JSON.stringify(embeddedRouteInfo).replace(REGEX_FOR_SCRIPT, '<"+"$1$2'), ";")
  };
}; // Not only do we pass react-helmet attributes and the app.js here, but
// we also need to  hard code site props and route props into the page to
// prevent flashing when react mounts onto the HTML.


var makeBodyWithMeta = function makeBodyWithMeta(_ref) {
  var head = _ref.head,
      route = _ref.route,
      embeddedRouteInfo = _ref.embeddedRouteInfo,
      _ref$clientScripts = _ref.clientScripts,
      clientScripts = _ref$clientScripts === void 0 ? [] : _ref$clientScripts;
  return function (_ref2) {
    var children = _ref2.children,
        rest = _objectWithoutProperties(_ref2, ["children"]);

    return _react.default.createElement("body", _extends({}, head.bodyProps, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), children, !route.redirect && _react.default.createElement("script", {
      type: "text/javascript",
      dangerouslySetInnerHTML: generateRouteInformation(embeddedRouteInfo),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), !route.redirect && clientScripts.map(function (script) {
      return _react.default.createElement("script", {
        key: script,
        defer: true,
        type: "text/javascript",
        src: (0, _shared.makePathAbsolute)((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, script)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    }));
  };
};

exports.makeBodyWithMeta = makeBodyWithMeta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9Cb2R5V2l0aE1ldGEuanMiXSwibmFtZXMiOlsiUkVHRVhfRk9SX1NDUklQVCIsImdlbmVyYXRlUm91dGVJbmZvcm1hdGlvbiIsImVtYmVkZGVkUm91dGVJbmZvIiwiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJtYWtlQm9keVdpdGhNZXRhIiwiaGVhZCIsInJvdXRlIiwiY2xpZW50U2NyaXB0cyIsImNoaWxkcmVuIiwicmVzdCIsImJvZHlQcm9wcyIsInJlZGlyZWN0IiwibWFwIiwic2NyaXB0IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxrQkFBekI7O0FBRUEsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFBQyxpQkFBaUI7QUFBQSxTQUFLO0FBQ3JEQyxJQUFBQSxNQUFNLHVDQUNtQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVILGlCQUFmLEVBQWtDSSxPQUFsQyxDQUNyQk4sZ0JBRHFCLEVBRXJCLFVBRnFCLENBRG5CO0FBRCtDLEdBQUw7QUFBQSxDQUFsRCxDLENBUUE7QUFDQTtBQUNBOzs7QUFDTyxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFDOUJDLElBRDhCLFFBQzlCQSxJQUQ4QjtBQUFBLE1BRTlCQyxLQUY4QixRQUU5QkEsS0FGOEI7QUFBQSxNQUs5QlAsaUJBTDhCLFFBSzlCQSxpQkFMOEI7QUFBQSxnQ0FNOUJRLGFBTjhCO0FBQUEsTUFNOUJBLGFBTjhCLG1DQU1kLEVBTmM7QUFBQSxTQU8xQjtBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWdCQyxJQUFoQjs7QUFBQSxXQUNKLGtEQUFVSixJQUFJLENBQUNLLFNBQWYsRUFBOEJELElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dELFFBREgsRUFFRyxDQUFDRixLQUFLLENBQUNLLFFBQVAsSUFDQztBQUNFLE1BQUEsSUFBSSxFQUFDLGlCQURQO0FBRUUsTUFBQSx1QkFBdUIsRUFBRWIsd0JBQXdCLENBQUNDLGlCQUFELENBRm5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosRUFRRyxDQUFDTyxLQUFLLENBQUNLLFFBQVAsSUFDQ0osYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSxhQUN0QjtBQUNFLFFBQUEsR0FBRyxFQUFFQSxNQURQO0FBRUUsUUFBQSxLQUFLLE1BRlA7QUFHRSxRQUFBLElBQUksRUFBQyxpQkFIUDtBQUlFLFFBQUEsR0FBRyxFQUFFLDhCQUNILHNCQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBQXJCLEVBQStDSCxNQUEvQyxDQURHLENBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEc0I7QUFBQSxLQUF4QixDQVRKLENBREk7QUFBQSxHQVAwQjtBQUFBLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGF0aEpvaW4sIG1ha2VQYXRoQWJzb2x1dGUgfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQnXG5cbmNvbnN0IFJFR0VYX0ZPUl9TQ1JJUFQgPSAvPChcXC8pPyhzY3JpcHQpL2dpXG5cbmNvbnN0IGdlbmVyYXRlUm91dGVJbmZvcm1hdGlvbiA9IGVtYmVkZGVkUm91dGVJbmZvID0+ICh7XG4gIF9faHRtbDogYFxuICAgIHdpbmRvdy5fX3JvdXRlSW5mbyA9ICR7SlNPTi5zdHJpbmdpZnkoZW1iZWRkZWRSb3V0ZUluZm8pLnJlcGxhY2UoXG4gICAgICBSRUdFWF9GT1JfU0NSSVBULFxuICAgICAgJzxcIitcIiQxJDInXG4gICAgKX07YCxcbn0pXG5cbi8vIE5vdCBvbmx5IGRvIHdlIHBhc3MgcmVhY3QtaGVsbWV0IGF0dHJpYnV0ZXMgYW5kIHRoZSBhcHAuanMgaGVyZSwgYnV0XG4vLyB3ZSBhbHNvIG5lZWQgdG8gIGhhcmQgY29kZSBzaXRlIHByb3BzIGFuZCByb3V0ZSBwcm9wcyBpbnRvIHRoZSBwYWdlIHRvXG4vLyBwcmV2ZW50IGZsYXNoaW5nIHdoZW4gcmVhY3QgbW91bnRzIG9udG8gdGhlIEhUTUwuXG5leHBvcnQgY29uc3QgbWFrZUJvZHlXaXRoTWV0YSA9ICh7XG4gIGhlYWQsXG4gIHJvdXRlLFxuICAvLyBUaGlzIGVtYmVkZGVkUm91dGVJbmZvIHdpbGwgYmUgaW5saW5lZCBpbnRvIHRoZSBIVE1MIGZvciB0aGlzIHJvdXRlLlxuICAvLyBJdCBzaG91bGQgb25seSBpbmNsdWRlIHRoZSBmdWxsIHByb3BzLCBub3QgdGhlIHBhcnRpYWxzLlxuICBlbWJlZGRlZFJvdXRlSW5mbyxcbiAgY2xpZW50U2NyaXB0cyA9IFtdLFxufSkgPT4gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8Ym9keSB7Li4uaGVhZC5ib2R5UHJvcHN9IHsuLi5yZXN0fT5cbiAgICB7Y2hpbGRyZW59XG4gICAgeyFyb3V0ZS5yZWRpcmVjdCAmJiAoXG4gICAgICA8c2NyaXB0XG4gICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17Z2VuZXJhdGVSb3V0ZUluZm9ybWF0aW9uKGVtYmVkZGVkUm91dGVJbmZvKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgICB7IXJvdXRlLnJlZGlyZWN0ICYmXG4gICAgICBjbGllbnRTY3JpcHRzLm1hcChzY3JpcHQgPT4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtzY3JpcHR9XG4gICAgICAgICAgZGVmZXJcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9e21ha2VQYXRoQWJzb2x1dGUoXG4gICAgICAgICAgICBwYXRoSm9pbihwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgsIHNjcmlwdClcbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gIDwvYm9keT5cbilcbiJdfQ==