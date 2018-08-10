"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _shared = require("../../utils/shared");

var _PrefetchWhenSeen = _interopRequireDefault(require("./PrefetchWhenSeen"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/Link.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//
// Detects internal link url schemas
function isRoutingUrl(to) {
  if (typeof to === 'undefined') return false;
  return !to.match(/^([A-z]?)+:/) && // starts with external protocol
  !to.match(/^#/) && // starts with hash fragment
  !to.match(/^[a-z]{1,10}:\/\//) // starts with double slash protocol
  ;
}

var reactRouterProps = ['activeClassName', 'activeStyle', 'exact', 'isActive', 'location', 'strict', 'to', 'replace'];

function SmartLink(_ref) {
  var _ref$prefetch = _ref.prefetch,
      prefetch = _ref$prefetch === void 0 ? true : _ref$prefetch,
      _ref$scrollToTop = _ref.scrollToTop,
      scrollToTop = _ref$scrollToTop === void 0 ? true : _ref$scrollToTop,
      _onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["prefetch", "scrollToTop", "onClick"]);

  var to = rest.to;
  var resolvedTo = to;

  if ((0, _shared.isObject)(to)) {
    if (!to.pathname && to.path) {
      console.warn('You are using the `path` key in a <Link to={...} /> when you should be using the `pathname` key. This will be deprecated in future versions!');
      to.pathname = to.path;
      delete to.path;
      resolvedTo = to.pathname;
    } else if (to.pathname) {
      resolvedTo = to.pathname;
    }
  } // Router Link


  if (isRoutingUrl(resolvedTo)) {
    var finalRest = _objectSpread({}, rest, {
      onClick: function onClick(e) {
        if (typeof document !== 'undefined' && !scrollToTop) {
          window.__noScrollTo = true;
        }

        if (_onClick) {
          _onClick(e);
        }
      }
    });

    if (prefetch) {
      return _react.default.createElement(_PrefetchWhenSeen.default, {
        path: resolvedTo,
        type: prefetch,
        render: function render(_ref2) {
          var handleRef = _ref2.handleRef;
          return _react.default.createElement(_reactRouterDom.NavLink, _extends({}, finalRest, {
            innerRef: handleRef,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }

    return _react.default.createElement(_reactRouterDom.NavLink, _extends({}, finalRest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }));
  } // Browser Link


  var children = rest.children,
      aRest = _objectWithoutProperties(rest, ["children"]);

  aRest.href = aRest.to;
  delete aRest.to;
  reactRouterProps.filter(function (prop) {
    return aRest[prop];
  }).forEach(function (prop) {
    console.warn("Warning: ".concat(prop, " makes no sense on a <Link to=\"").concat(aRest.href, "\">."));
  });
  reactRouterProps.forEach(function (prop) {
    return delete aRest[prop];
  });
  return _react.default.createElement("a", _extends({}, aRest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), children);
}

var Link = SmartLink;
exports.Link = Link;
var NavLink = SmartLink;
exports.NavLink = NavLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaW5rLmpzIl0sIm5hbWVzIjpbImlzUm91dGluZ1VybCIsInRvIiwibWF0Y2giLCJyZWFjdFJvdXRlclByb3BzIiwiU21hcnRMaW5rIiwicHJlZmV0Y2giLCJzY3JvbGxUb1RvcCIsIm9uQ2xpY2siLCJyZXN0IiwicmVzb2x2ZWRUbyIsInBhdGhuYW1lIiwicGF0aCIsImNvbnNvbGUiLCJ3YXJuIiwiZmluYWxSZXN0IiwiZSIsImRvY3VtZW50Iiwid2luZG93IiwiX19ub1Njcm9sbFRvIiwiaGFuZGxlUmVmIiwiY2hpbGRyZW4iLCJhUmVzdCIsImhyZWYiLCJmaWx0ZXIiLCJwcm9wIiwiZm9yRWFjaCIsIkxpbmsiLCJOYXZMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0EsU0FBU0EsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEI7QUFDeEIsTUFBSSxPQUFPQSxFQUFQLEtBQWMsV0FBbEIsRUFBK0IsT0FBTyxLQUFQO0FBQy9CLFNBQ0UsQ0FBQ0EsRUFBRSxDQUFDQyxLQUFILENBQVMsYUFBVCxDQUFELElBQTRCO0FBQzVCLEdBQUNELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLElBQVQsQ0FERCxJQUNtQjtBQUNuQixHQUFDRCxFQUFFLENBQUNDLEtBQUgsQ0FBUyxtQkFBVCxDQUhILENBR2lDO0FBSGpDO0FBS0Q7O0FBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDdkIsaUJBRHVCLEVBRXZCLGFBRnVCLEVBR3ZCLE9BSHVCLEVBSXZCLFVBSnVCLEVBS3ZCLFVBTHVCLEVBTXZCLFFBTnVCLEVBT3ZCLElBUHVCLEVBUXZCLFNBUnVCLENBQXpCOztBQVdBLFNBQVNDLFNBQVQsT0FBOEU7QUFBQSwyQkFBekRDLFFBQXlEO0FBQUEsTUFBekRBLFFBQXlELDhCQUE5QyxJQUE4QztBQUFBLDhCQUF4Q0MsV0FBd0M7QUFBQSxNQUF4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WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZMaW5rIGFzIFJlYWN0Um91dGVyTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG4vL1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQnXG5pbXBvcnQgUHJlZmV0Y2hXaGVuU2VlbiBmcm9tICcuL1ByZWZldGNoV2hlblNlZW4nXG5cbi8vXG5cbi8vIERldGVjdHMgaW50ZXJuYWwgbGluayB1cmwgc2NoZW1hc1xuZnVuY3Rpb24gaXNSb3V0aW5nVXJsKHRvKSB7XG4gIGlmICh0eXBlb2YgdG8gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIChcbiAgICAhdG8ubWF0Y2goL14oW0Etel0/KSs6LykgJiYgLy8gc3RhcnRzIHdpdGggZXh0ZXJuYWwgcHJvdG9jb2xcbiAgICAhdG8ubWF0Y2goL14jLykgJiYgLy8gc3RhcnRzIHdpdGggaGFzaCBmcmFnbWVudFxuICAgICF0by5tYXRjaCgvXlthLXpdezEsMTB9OlxcL1xcLy8pIC8vIHN0YXJ0cyB3aXRoIGRvdWJsZSBzbGFzaCBwcm90b2NvbFxuICApXG59XG5cbmNvbnN0IHJlYWN0Um91dGVyUHJvcHMgPSBbXG4gICdhY3RpdmVDbGFzc05hbWUnLFxuICAnYWN0aXZlU3R5bGUnLFxuICAnZXhhY3QnLFxuICAnaXNBY3RpdmUnLFxuICAnbG9jYXRpb24nLFxuICAnc3RyaWN0JyxcbiAgJ3RvJyxcbiAgJ3JlcGxhY2UnLFxuXVxuXG5mdW5jdGlvbiBTbWFydExpbmsoeyBwcmVmZXRjaCA9IHRydWUsIHNjcm9sbFRvVG9wID0gdHJ1ZSwgb25DbGljaywgLi4ucmVzdCB9KSB7XG4gIGNvbnN0IHsgdG8gfSA9IHJlc3RcbiAgbGV0IHJlc29sdmVkVG8gPSB0b1xuICBpZiAoaXNPYmplY3QodG8pKSB7XG4gICAgaWYgKCF0by5wYXRobmFtZSAmJiB0by5wYXRoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBgcGF0aGAga2V5IGluIGEgPExpbmsgdG89ey4uLn0gLz4gd2hlbiB5b3Ugc2hvdWxkIGJlIHVzaW5nIHRoZSBgcGF0aG5hbWVgIGtleS4gVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZnV0dXJlIHZlcnNpb25zISdcbiAgICAgIClcbiAgICAgIHRvLnBhdGhuYW1lID0gdG8ucGF0aFxuICAgICAgZGVsZXRlIHRvLnBhdGhcbiAgICAgIHJlc29sdmVkVG8gPSB0by5wYXRobmFtZVxuICAgIH0gZWxzZSBpZiAodG8ucGF0aG5hbWUpIHtcbiAgICAgIHJlc29sdmVkVG8gPSB0by5wYXRobmFtZVxuICAgIH1cbiAgfVxuICAvLyBSb3V0ZXIgTGlua1xuICBpZiAoaXNSb3V0aW5nVXJsKHJlc29sdmVkVG8pKSB7XG4gICAgY29uc3QgZmluYWxSZXN0ID0ge1xuICAgICAgLi4ucmVzdCxcbiAgICAgIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhc2Nyb2xsVG9Ub3ApIHtcbiAgICAgICAgICB3aW5kb3cuX19ub1Njcm9sbFRvID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgb25DbGljayhlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFByZWZldGNoV2hlblNlZW5cbiAgICAgICAgICBwYXRoPXtyZXNvbHZlZFRvfVxuICAgICAgICAgIHR5cGU9e3ByZWZldGNofVxuICAgICAgICAgIHJlbmRlcj17KHsgaGFuZGxlUmVmIH0pID0+IChcbiAgICAgICAgICAgIDxSZWFjdFJvdXRlck5hdkxpbmsgey4uLmZpbmFsUmVzdH0gaW5uZXJSZWY9e2hhbmRsZVJlZn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gPFJlYWN0Um91dGVyTmF2TGluayB7Li4uZmluYWxSZXN0fSAvPlxuICB9XG5cbiAgLy8gQnJvd3NlciBMaW5rXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmFSZXN0IH0gPSByZXN0XG4gIGFSZXN0LmhyZWYgPSBhUmVzdC50b1xuICBkZWxldGUgYVJlc3QudG9cblxuICByZWFjdFJvdXRlclByb3BzLmZpbHRlcihwcm9wID0+IGFSZXN0W3Byb3BdKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiAke3Byb3B9IG1ha2VzIG5vIHNlbnNlIG9uIGEgPExpbmsgdG89XCIke2FSZXN0LmhyZWZ9XCI+LmBcbiAgICApXG4gIH0pXG4gIHJlYWN0Um91dGVyUHJvcHMuZm9yRWFjaChwcm9wID0+IGRlbGV0ZSBhUmVzdFtwcm9wXSlcblxuICByZXR1cm4gPGEgey4uLmFSZXN0fT57Y2hpbGRyZW59PC9hPlxufVxuXG5leHBvcnQgY29uc3QgTGluayA9IFNtYXJ0TGlua1xuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBTbWFydExpbmtcbiJdfQ==