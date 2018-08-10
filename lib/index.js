"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cleanPath", {
  enumerable: true,
  get: function get() {
    return _shared.cleanPath;
  }
});
Object.defineProperty(exports, "prefetch", {
  enumerable: true,
  get: function get() {
    return _methods.prefetch;
  }
});
Object.defineProperty(exports, "onLoading", {
  enumerable: true,
  get: function get() {
    return _methods.onLoading;
  }
});
Object.defineProperty(exports, "Prompt", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Prompt;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Route;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Switch;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.matchPath;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.withRouter;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _Loading.default;
  }
});
Object.defineProperty(exports, "withLoading", {
  enumerable: true,
  get: function get() {
    return _Loading.withLoading;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "PrefetchWhenSeen", {
  enumerable: true,
  get: function get() {
    return _PrefetchWhenSeen.default;
  }
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function get() {
    return _Router.default;
  }
});
Object.defineProperty(exports, "Redirect", {
  enumerable: true,
  get: function get() {
    return _Redirect.default;
  }
});
Object.defineProperty(exports, "NavLink", {
  enumerable: true,
  get: function get() {
    return _Link.NavLink;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link.Link;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
exports.getSiteData = exports.getRouteProps = void 0;

var _shared = require("./utils/shared");

var _methods = require("./client/methods");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _RouteData = _interopRequireWildcard(require("./client/components/RouteData"));

var _SiteData = _interopRequireWildcard(require("./client/components/SiteData"));

var _Loading = _interopRequireWildcard(require("./client/components/Loading"));

var _Prefetch = _interopRequireDefault(require("./client/components/Prefetch"));

var _PrefetchWhenSeen = _interopRequireDefault(require("./client/components/PrefetchWhenSeen"));

var _Router = _interopRequireDefault(require("./client/components/Router"));

var _Redirect = _interopRequireDefault(require("./client/components/Redirect"));

var _Link = require("./client/components/Link");

var _scrollTo = _interopRequireDefault(require("./utils/scrollTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//
// React Router Components
// Helmet
// React-Static Components
// Methods
// Public Utils
// Private Utils
// Deprecations
var getRouteProps = function getRouteProps() {
  (0, _shared.deprecate)('getRouteProps', 'withRouteData');
  return _methods.withRouteData.apply(void 0, arguments);
};

exports.getRouteProps = getRouteProps;

var getSiteData = function getSiteData() {
  (0, _shared.deprecate)('getSiteData', 'withSiteData');
  return _methods.withSiteData.apply(void 0, arguments);
};

exports.getSiteData = getSiteData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRSb3V0ZVByb3BzIiwid2l0aFJvdXRlRGF0YSIsImdldFNpdGVEYXRhIiwid2l0aFNpdGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBS0E7O0FBR0E7O0FBR0E7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBTUE7Ozs7OztBQTNCQTtBQUVBO0FBR0E7QUFHQTtBQWVBO0FBR0E7QUFHQTtBQUdBO0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFhO0FBQ3hDLHlCQUFVLGVBQVYsRUFBMkIsZUFBM0I7QUFDQSxTQUFPQywrQ0FBUDtBQUNELENBSE07Ozs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFhO0FBQ3RDLHlCQUFVLGFBQVYsRUFBeUIsY0FBekI7QUFDQSxTQUFPQyw4Q0FBUDtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuL3V0aWxzL3NoYXJlZCdcbmltcG9ydCB7IHdpdGhSb3V0ZURhdGEsIHdpdGhTaXRlRGF0YSB9IGZyb20gJy4vY2xpZW50L21ldGhvZHMnXG5cbi8vXG5cbi8vIFJlYWN0IFJvdXRlciBDb21wb25lbnRzXG5leHBvcnQgeyBQcm9tcHQsIFJvdXRlLCBTd2l0Y2gsIG1hdGNoUGF0aCwgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbi8vIEhlbG1ldFxuZXhwb3J0IHsgSGVsbWV0IGFzIEhlYWQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5cbi8vIFJlYWN0LVN0YXRpYyBDb21wb25lbnRzXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIFJvdXRlRGF0YSxcbiAgd2l0aFJvdXRlRGF0YSxcbn0gZnJvbSAnLi9jbGllbnQvY29tcG9uZW50cy9Sb3V0ZURhdGEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpdGVEYXRhLCB3aXRoU2l0ZURhdGEgfSBmcm9tICcuL2NsaWVudC9jb21wb25lbnRzL1NpdGVEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nLCB3aXRoTG9hZGluZyB9IGZyb20gJy4vY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlZmV0Y2ggfSBmcm9tICcuL2NsaWVudC9jb21wb25lbnRzL1ByZWZldGNoJ1xuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBQcmVmZXRjaFdoZW5TZWVuLFxufSBmcm9tICcuL2NsaWVudC9jb21wb25lbnRzL1ByZWZldGNoV2hlblNlZW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvdXRlciB9IGZyb20gJy4vY2xpZW50L2NvbXBvbmVudHMvUm91dGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWRpcmVjdCB9IGZyb20gJy4vY2xpZW50L2NvbXBvbmVudHMvUmVkaXJlY3QnXG5leHBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAnLi9jbGllbnQvY29tcG9uZW50cy9MaW5rJ1xuXG4vLyBNZXRob2RzXG5leHBvcnQgeyBwcmVmZXRjaCwgb25Mb2FkaW5nIH0gZnJvbSAnLi9jbGllbnQvbWV0aG9kcydcblxuLy8gUHVibGljIFV0aWxzXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjcm9sbFRvIH0gZnJvbSAnLi91dGlscy9zY3JvbGxUbydcblxuLy8gUHJpdmF0ZSBVdGlsc1xuZXhwb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi91dGlscy9zaGFyZWQnXG5cbi8vIERlcHJlY2F0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFJvdXRlUHJvcHMgPSAoLi4uYXJncykgPT4ge1xuICBkZXByZWNhdGUoJ2dldFJvdXRlUHJvcHMnLCAnd2l0aFJvdXRlRGF0YScpXG4gIHJldHVybiB3aXRoUm91dGVEYXRhKC4uLmFyZ3MpXG59XG5leHBvcnQgY29uc3QgZ2V0U2l0ZURhdGEgPSAoLi4uYXJncykgPT4ge1xuICBkZXByZWNhdGUoJ2dldFNpdGVEYXRhJywgJ3dpdGhTaXRlRGF0YScpXG4gIHJldHVybiB3aXRoU2l0ZURhdGEoLi4uYXJncylcbn1cbiJdfQ==