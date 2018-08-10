"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHeadWithMeta = exports.InlineStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _shared = require("../../utils/shared");

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/static/components/HeadWithMeta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var REGEX_FOR_STYLE_TAG = /<style>|<\/style>/gi;

var InlineStyle = function InlineStyle(_ref) {
  var clientCss = _ref.clientCss;
  return _react.default.createElement("style", {
    key: "clientCss",
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: clientCss.toString().replace(REGEX_FOR_STYLE_TAG, '')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

exports.InlineStyle = InlineStyle;

var makeHeadWithMeta = function makeHeadWithMeta(_ref2) {
  var head = _ref2.head,
      route = _ref2.route,
      clientScripts = _ref2.clientScripts,
      config = _ref2.config,
      clientStyleSheets = _ref2.clientStyleSheets,
      clientCss = _ref2.clientCss,
      meta = _ref2.meta;
  return function (_ref3) {
    var children = _ref3.children,
        rest = _objectWithoutProperties(_ref3, ["children"]);

    var renderLinkCSS = !route.redirect && !config.inlineCss;
    var useHelmetTitle = head.title && head.title[0] && head.title[0].props.children !== '';
    var childrenArray = children;

    if (useHelmetTitle) {
      head.title[0] = _react.default.cloneElement(head.title[0], {
        key: 'title'
      });
      childrenArray = _react.default.Children.toArray(children).filter(function (child) {
        if (child.type === 'title') {
          // Filter out the title of the Document in static.config.js
          // if there is a helmet title on this route
          return false;
        }

        return true;
      });
    }

    var pluginHeads = (config.plugins || []).map(function (plugin) {
      return plugin.Head;
    }).filter(Boolean).map(function (PluginHead) {
      return _react.default.createElement(PluginHead, {
        meta: meta,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });
    });
    return _react.default.createElement("head", _extends({}, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), head.base, useHelmetTitle && head.title, head.meta, !route.redirect && clientScripts.map(function (script) {
      return _react.default.createElement("link", {
        key: "clientScript_".concat(script),
        rel: "preload",
        as: "script",
        href: (0, _shared.makePathAbsolute)((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, script)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      });
    }), renderLinkCSS && clientStyleSheets.reduce(function (memo, styleSheet) {
      var href = (0, _shared.makePathAbsolute)((0, _shared.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, styleSheet));
      return _toConsumableArray(memo).concat([_react.default.createElement("link", {
        key: "clientStyleSheetPreload_".concat(styleSheet),
        rel: "preload",
        as: "style",
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), _react.default.createElement("link", {
        key: "clientStyleSheet_".concat(styleSheet),
        rel: "stylesheet",
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })]);
    }, []), head.link, head.noscript, head.script, config.inlineCss && _react.default.createElement(InlineStyle, {
      clientCss: clientCss,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), head.style, pluginHeads, childrenArray);
  };
};

exports.makeHeadWithMeta = makeHeadWithMeta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9IZWFkV2l0aE1ldGEuanMiXSwibmFtZXMiOlsiUkVHRVhfRk9SX1NUWUxFX1RBRyIsIklubGluZVN0eWxlIiwiY2xpZW50Q3NzIiwiX19odG1sIiwidG9TdHJpbmciLCJyZXBsYWNlIiwibWFrZUhlYWRXaXRoTWV0YSIsImhlYWQiLCJyb3V0ZSIsImNsaWVudFNjcmlwdHMiLCJjb25maWciLCJjbGllbnRTdHlsZVNoZWV0cyIsIm1ldGEiLCJjaGlsZHJlbiIsInJlc3QiLCJyZW5kZXJMaW5rQ1NTIiwicmVkaXJlY3QiLCJpbmxpbmVDc3MiLCJ1c2VIZWxtZXRUaXRsZSIsInRpdGxlIiwicHJvcHMiLCJjaGlsZHJlbkFycmF5IiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJmaWx0ZXIiLCJjaGlsZCIsInR5cGUiLCJwbHVnaW5IZWFkcyIsInBsdWdpbnMiLCJtYXAiLCJwbHVnaW4iLCJIZWFkIiwiQm9vbGVhbiIsIlBsdWdpbkhlYWQiLCJiYXNlIiwic2NyaXB0IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCIsInJlZHVjZSIsIm1lbW8iLCJzdHlsZVNoZWV0IiwiaHJlZiIsImxpbmsiLCJub3NjcmlwdCIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcscUJBQTVCOztBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FDekI7QUFDRSxJQUFBLEdBQUcsRUFBQyxXQUROO0FBRUUsSUFBQSxJQUFJLEVBQUMsVUFGUDtBQUdFLElBQUEsdUJBQXVCLEVBQUU7QUFDdkJDLE1BQUFBLE1BQU0sRUFBRUQsU0FBUyxDQUFDRSxRQUFWLEdBQXFCQyxPQUFyQixDQUE2Qkws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QUFDN0MsVUFBTUMsSUFBSSxHQUFHLDhCQUNYLHNCQUFTTixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBQXJCLEVBQStDRyxVQUEvQyxDQURXLENBQWI7QUFJQSxnQ0FDS0QsSUFETCxVQUVFO0FBQ0UsUUFBQSxHQUFHLG9DQUE2QkMsVUFBN0IsQ0FETDtBQUVFLFFBQUEsR0FBRyxFQUFDLFNBRk47QUFHRSxRQUFBLEVBQUUsRUFBQyxPQUhMO0FBSUUsUUFBQSxJQUFJLEVBQUVDLElBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQVFFO0FBQ0UsUUFBQSxHQUFHLDZCQUFzQkQsVUFBdEIsQ0FETDtBQUVFLFFBQUEsR0FBRyxFQUFDLFlBRk47QUFHRSxRQUFBLElBQUksRUFBRUMsSUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJGO0FBY0QsS0FuQkQsRUFtQkcsRUFuQkgsQ0FoQkosRUFvQ0d0QyxJQUFJLENBQUN1QyxJQXBDUixFQXFDR3ZDLElBQUksQ0FBQ3dDLFFBckNSLEVBc0NHeEMsSUFBSSxDQUFDK0IsTUF0Q1IsRUF1Q0c1QixNQUFNLENBQUNPLFNBQVAsSUFBb0IsNkJBQUMsV0FBRDtBQUFhLE1BQUEsU0FBUyxFQUFFZixTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXZDdkIsRUF3Q0dLLElBQUksQ0FBQ3lDLEtBeENSLEVBeUNHbEIsV0F6Q0gsRUEwQ0dULGFBMUNILENBREY7QUE4Q0QsR0E1RStCO0FBQUEsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXRoSm9pbiwgbWFrZVBhdGhBYnNvbHV0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZCdcblxuY29uc3QgUkVHRVhfRk9SX1NUWUxFX1RBRyA9IC88c3R5bGU+fDxcXC9zdHlsZT4vZ2lcblxuZXhwb3J0IGNvbnN0IElubGluZVN0eWxlID0gKHsgY2xpZW50Q3NzIH0pID0+IChcbiAgPHN0eWxlXG4gICAga2V5PVwiY2xpZW50Q3NzXCJcbiAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICBfX2h0bWw6IGNsaWVudENzcy50b1N0cmluZygpLnJlcGxhY2UoUkVHRVhfRk9SX1NUWUxFX1RBRywgJycpLFxuICAgIH19XG4gIC8+XG4pXG5cbmV4cG9ydCBjb25zdCBtYWtlSGVhZFdpdGhNZXRhID0gKHtcbiAgaGVhZCxcbiAgcm91dGUsXG4gIGNsaWVudFNjcmlwdHMsXG4gIGNvbmZpZyxcbiAgY2xpZW50U3R5bGVTaGVldHMsXG4gIGNsaWVudENzcyxcbiAgbWV0YSxcbn0pID0+ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgcmVuZGVyTGlua0NTUyA9ICFyb3V0ZS5yZWRpcmVjdCAmJiAhY29uZmlnLmlubGluZUNzc1xuICBjb25zdCB1c2VIZWxtZXRUaXRsZSA9XG4gICAgaGVhZC50aXRsZSAmJiBoZWFkLnRpdGxlWzBdICYmIGhlYWQudGl0bGVbMF0ucHJvcHMuY2hpbGRyZW4gIT09ICcnXG4gIGxldCBjaGlsZHJlbkFycmF5ID0gY2hpbGRyZW5cbiAgaWYgKHVzZUhlbG1ldFRpdGxlKSB7XG4gICAgaGVhZC50aXRsZVswXSA9IFJlYWN0LmNsb25lRWxlbWVudChoZWFkLnRpdGxlWzBdLCB7IGtleTogJ3RpdGxlJyB9KVxuICAgIGNoaWxkcmVuQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdGl0bGUgb2YgdGhlIERvY3VtZW50IGluIHN0YXRpYy5jb25maWcuanNcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBoZWxtZXQgdGl0bGUgb24gdGhpcyByb3V0ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHBsdWdpbkhlYWRzID0gKGNvbmZpZy5wbHVnaW5zIHx8IFtdKVxuICAgIC5tYXAocGx1Z2luID0+IHBsdWdpbi5IZWFkKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKFBsdWdpbkhlYWQgPT4gPFBsdWdpbkhlYWQgbWV0YT17bWV0YX0gLz4pXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZCB7Li4ucmVzdH0+XG4gICAgICB7aGVhZC5iYXNlfVxuICAgICAge3VzZUhlbG1ldFRpdGxlICYmIGhlYWQudGl0bGV9XG4gICAgICB7aGVhZC5tZXRhfVxuICAgICAgeyFyb3V0ZS5yZWRpcmVjdCAmJlxuICAgICAgICBjbGllbnRTY3JpcHRzLm1hcChzY3JpcHQgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2BjbGllbnRTY3JpcHRfJHtzY3JpcHR9YH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgaHJlZj17bWFrZVBhdGhBYnNvbHV0ZShcbiAgICAgICAgICAgICAgcGF0aEpvaW4ocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRILCBzY3JpcHQpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAge3JlbmRlckxpbmtDU1MgJiZcbiAgICAgICAgY2xpZW50U3R5bGVTaGVldHMucmVkdWNlKChtZW1vLCBzdHlsZVNoZWV0KSA9PiB7XG4gICAgICAgICAgY29uc3QgaHJlZiA9IG1ha2VQYXRoQWJzb2x1dGUoXG4gICAgICAgICAgICBwYXRoSm9pbihwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgsIHN0eWxlU2hlZXQpXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLm1lbW8sXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBrZXk9e2BjbGllbnRTdHlsZVNoZWV0UHJlbG9hZF8ke3N0eWxlU2hlZXR9YH1cbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBrZXk9e2BjbGllbnRTdHlsZVNoZWV0XyR7c3R5bGVTaGVldH1gfVxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgIF1cbiAgICAgICAgfSwgW10pfVxuICAgICAge2hlYWQubGlua31cbiAgICAgIHtoZWFkLm5vc2NyaXB0fVxuICAgICAge2hlYWQuc2NyaXB0fVxuICAgICAge2NvbmZpZy5pbmxpbmVDc3MgJiYgPElubGluZVN0eWxlIGNsaWVudENzcz17Y2xpZW50Q3NzfSAvPn1cbiAgICAgIHtoZWFkLnN0eWxlfVxuICAgICAge3BsdWdpbkhlYWRzfVxuICAgICAge2NoaWxkcmVuQXJyYXl9XG4gICAgPC9oZWFkPlxuICApXG59XG4iXX0=