"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getRoutesFromPages = exports.normalizeAllRoutes = exports.normalizeRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _path = _interopRequireDefault(require("path"));

var _chokidar = _interopRequireDefault(require("chokidar"));

var _utils = require("../utils");

var _shared = require("../utils/shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var watcher;
var routesCache;

var countRoutes = function countRoutes(routes) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  routes.forEach(function (route) {
    count += 1;

    if (routes.children) {
      countRoutes(route.children, count);
    }
  });
  return count;
};

var normalizeRoute = function normalizeRoute(route) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _parent$path = parent.path,
      parentPath = _parent$path === void 0 ? '/' : _parent$path;

  if (!route.path) {
    if (route.is404) {
      throw new Error("route.is404 has been deprecated. Use `path: '404'` instead! Route: ".concat(JSON.stringify(route)));
    }

    throw new Error("No path defined for route: ".concat(JSON.stringify(route)));
  }

  var originalRoutePath = (0, _shared.pathJoin)(route.path);
  var routePath = (0, _shared.pathJoin)(parentPath, route.path);

  if (typeof route.noIndex !== 'undefined') {
    console.warn("=> Warning: Route ".concat(route.path, " is using 'noIndex'. Did you mean 'noindex'?"));
  }

  var normalizedRoute = _objectSpread({}, route, {
    path: routePath,
    originalPath: originalRoutePath,
    noindex: typeof route.noindex !== 'undefined' ? route.noindex : parent.noindex,
    hasGetProps: !!route.getData
  });

  return normalizedRoute;
}; // We recursively loop through the routes and their children and
// return an array of normalised routes.
// Original routes array [{ path: 'path', children: { path: 'to' } }]
// These can be returned as flat routes eg. [{ path: 'path' }, { path: 'path/to' }]
// Or they can be returned nested routes eg. [{ path: 'path', children: { path: 'path/to' } }]


exports.normalizeRoute = normalizeRoute;

var normalizeAllRoutes = function normalizeAllRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var config = arguments.length > 1 ? arguments[1] : undefined;
  var existingRoutes = {};
  var hasIndex;
  var has404;

  var recurseRoute = function recurseRoute(route, parent) {
    // if structure is nested (tree === true) normalizedRoute will
    // have children otherwise we fall back to the original route children
    // Normalize the route
    var normalizedRoute = normalizeRoute(route, parent); // we check an array of paths to see
    // if route path already existings

    var existingRoute = existingRoutes[normalizedRoute.path];

    if (normalizedRoute.children) {
      normalizedRoute.children = normalizedRoute.children.map(function (childRoute) {
        return recurseRoute(childRoute, normalizedRoute);
      });
    } // If the route exists and is a page route, we need to decorate the
    // page route with this routes information


    if (existingRoute) {
      if (existingRoute.isPage) {
        Object.assign(existingRoute, _objectSpread({}, normalizedRoute, {
          component: existingRoute.component
        }));
        normalizedRoute = existingRoute;
      } else if (!config.disableDuplicateRoutesWarning) {
        // Otherwise, we shouldn't have duplicate routes
        console.warn('More than one route in static.config.js is defined for path:', normalizedRoute.path);
      }
    } // Keep track of the route existence


    existingRoutes[normalizedRoute.path] = normalizedRoute; // Keep track of index and 404 routes existence

    if (normalizedRoute.path === '/') {
      hasIndex = true;
    }

    if (normalizedRoute.path === '404') {
      has404 = true;
    }

    return normalizedRoute;
  };

  var normalizedRoutes = routes.map(function (route) {
    return recurseRoute(route);
  });

  if (!config.tree) {
    var flatRoutes = [];

    var _recurseRoute = function _recurseRoute(route) {
      flatRoutes.push(route);

      if (route.children) {
        route.children.forEach(_recurseRoute);
      }

      route.children = undefined;
    };

    normalizedRoutes.forEach(_recurseRoute);
    normalizedRoutes = flatRoutes;
  }

  return {
    routes: normalizedRoutes,
    hasIndex: hasIndex,
    has404: has404
  };
};

exports.normalizeAllRoutes = normalizeAllRoutes;

var getRoutesFromPages =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref, cb) {
    var config, _ref$opts, opts, globExtensions, pagesGlob, handle, pages, routes;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = _ref.config, _ref$opts = _ref.opts, opts = _ref$opts === void 0 ? {} : _ref$opts;
            // Make a glob extension to get all pages with the set extensions from the pages directory
            globExtensions = config.extensions.map(function (ext) {
              return "".concat(ext.slice(1));
            }).join(',');
            pagesGlob = "".concat(config.paths.PAGES, "/**/*.{").concat(globExtensions, "}"); // Get the pages

            handle = function handle(pages) {
              // Turn each page into a route
              var routes = pages.map(function (page) {
                // Get the component path relative to ROOT
                var component = _path.default.relative(config.paths.ROOT, page); // Make sure the path is relative to the root of the site


                var path = page.replace("".concat(config.paths.PAGES), '').replace(/\..*/, ''); // Turn `/index` paths into roots`

                path = path.replace(/\/index$/, '/'); // Return the route

                return {
                  path: path,
                  component: component,
                  isPage: true // tag it with isPage, so we know its origin

                };
              });
              return routes;
            };

            if (opts.dev && !watcher) {
              watcher = _chokidar.default.watch(config.paths.PAGES, {
                ignoreInitial: true
              }).on('all', (0, _utils.debounce)(
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee(type, file) {
                  var filename, pages, routes;
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (['add', 'unlink'].includes(type)) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          filename = file.split('/').reverse()[0];

                          if (!filename.startsWith('.')) {
                            _context.next = 5;
                            break;
                          }

                          return _context.abrupt("return");

                        case 5:
                          _context.next = 7;
                          return (0, _utils.glob)(pagesGlob);

                        case 7:
                          pages = _context.sent;
                          routes = handle(pages);
                          routesCache = routes;
                          cb(routes);

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }()), 50);
            }

            if (!routesCache) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", cb(routesCache));

          case 7:
            _context2.next = 9;
            return (0, _utils.glob)(pagesGlob);

          case 9:
            pages = _context2.sent;
            routes = handle(pages);
            return _context2.abrupt("return", cb(routes));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRoutesFromPages(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}(); // At least ensure the index page is defined for export


exports.getRoutesFromPages = getRoutesFromPages;

var getRoutes =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(_ref4) {
    var config,
        opts,
        cb,
        _args4 = arguments;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            config = _ref4.config, opts = _ref4.opts;
            cb = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : function (d) {
              return d;
            };
            return _context4.abrupt("return", // We use the callback pattern here, because getRoutesFromPages is technically a subscription
            getRoutesFromPages({
              config: config,
              opts: opts
            },
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(pageRoutes) {
                var routes, allRoutes, _normalizeAllRoutes, allNormalizedRoutes, hasIndex, has404;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return config.getRoutes(opts);

                      case 2:
                        routes = _context3.sent;
                        allRoutes = _toConsumableArray(pageRoutes).concat(_toConsumableArray(routes));
                        _normalizeAllRoutes = normalizeAllRoutes(allRoutes, config), allNormalizedRoutes = _normalizeAllRoutes.routes, hasIndex = _normalizeAllRoutes.hasIndex, has404 = _normalizeAllRoutes.has404; // If no Index page was found, throw an error. This is required

                        if (hasIndex) {
                          _context3.next = 7;
                          break;
                        }

                        throw new Error('Could not find a route for the "index" page of your site! This is required. Please create a page or specify a route and template for this page.');

                      case 7:
                        if (has404) {
                          _context3.next = 9;
                          break;
                        }

                        throw new Error('Could not find a route for the "404" page of your site! This is required. Please create a page or specify a route and template for this page.');

                      case 9:
                        return _context3.abrupt("return", cb(allNormalizedRoutes));

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getRoutes(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = getRoutes;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Um91dGVzLmpzIl0sIm5hbWVzIjpbIndhdGNoZXIiLCJyb3V0ZXNDYWNoZSIsImNvdW50Um91dGVzIiwicm91dGVzIiwiY291bnQiLCJmb3JFYWNoIiwicm91dGUiLCJjaGlsZHJlbiIsIm5vcm1hbGl6ZVJvdXRlIiwicGFyZW50IiwicGF0aCIsInBhcmVudFBhdGgiLCJpczQwNCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9yaWdpbmFsUm91dGVQYXRoIiwicm91dGVQYXRoIiwibm9JbmRleCIsImNvbnNvbGUiLCJ3YXJuIiwibm9ybWFsaXplZFJvdXRlIiwib3JpZ2luYWxQYXRoIiwibm9pbmRleCIsImhhc0dldFByb3BzIiwiZ2V0RGF0YSIsIm5vcm1hbGl6ZUFsbFJvdXRlcyIsImNvbmZpZyIsImV4aXN0aW5nUm91dGVzIiwiaGFzSW5kZXgiLCJoYXM0MDQiLCJyZWN1cnNlUm91dGUiLCJleGlzdGluZ1JvdXRlIiwibWFwIiwiY2hpbGRSb3V0ZSIsImlzUGFnZSIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudCIsImRpc2FibGVEdXBsaWNhdGVSb3V0ZXNXYXJuaW5nIiwibm9ybWFsaXplZFJvdXRlcyIsInRyZWUiLCJmbGF0Um91dGVzIiwicHVzaCIsInVuZGVmaW5lZCIsImdldFJvdXRlc0Zyb21QYWdlcyIsImNiIiwib3B0cyIsImdsb2JFeHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImV4dCIsInNsaWNlIiwiam9pbiIsInBhZ2VzR2xvYiIsInBhdGhzIiwiUEFHRVMiLCJoYW5kbGUiLCJwYWdlcyIsInBhZ2UiLCJub2RlUGF0aCIsInJlbGF0aXZlIiwiUk9PVCIsInJlcGxhY2UiLCJkZXYiLCJjaG9raWRhciIsIndhdGNoIiwiaWdub3JlSW5pdGlhbCIsIm9uIiwidHlwZSIsImZpbGUiLCJpbmNsdWRlcyIsImZpbGVuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwic3RhcnRzV2l0aCIsImdldFJvdXRl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YmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUgKi9cblxuaW1wb3J0IG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgY2hva2lkYXIgZnJvbSAnY2hva2lkYXInXG5cbmltcG9ydCB7IGdsb2IsIGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBwYXRoSm9pbiB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZCdcblxubGV0IHdhdGNoZXJcbmxldCByb3V0ZXNDYWNoZVxuXG5jb25zdCBjb3VudFJvdXRlcyA9IChyb3V0ZXMsIGNvdW50ID0gMCkgPT4ge1xuICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgY291bnQgKz0gMVxuICAgIGlmIChyb3V0ZXMuY2hpbGRyZW4pIHtcbiAgICAgIGNvdW50Um91dGVzKHJvdXRlLmNoaWxkcmVuLCBjb3VudClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBjb3VudFxufVxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUm91dGUgPSAocm91dGUsIHBhcmVudCA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgcGF0aDogcGFyZW50UGF0aCA9ICcvJyB9ID0gcGFyZW50XG5cbiAgaWYgKCFyb3V0ZS5wYXRoKSB7XG4gICAgaWYgKHJvdXRlLmlzNDA0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGByb3V0ZS5pczQwNCBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgXFxgcGF0aDogJzQwNCdcXGAgaW5zdGVhZCEgUm91dGU6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGF0aCBkZWZpbmVkIGZvciByb3V0ZTogJHtKU09OLnN0cmluZ2lmeShyb3V0ZSl9YClcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsUm91dGVQYXRoID0gcGF0aEpvaW4ocm91dGUucGF0aClcbiAgY29uc3Qgcm91dGVQYXRoID0gcGF0aEpvaW4ocGFyZW50UGF0aCwgcm91dGUucGF0aClcblxuICBpZiAodHlwZW9mIHJvdXRlLm5vSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYD0+IFdhcm5pbmc6IFJvdXRlICR7XG4gICAgICAgIHJvdXRlLnBhdGhcbiAgICAgIH0gaXMgdXNpbmcgJ25vSW5kZXgnLiBEaWQgeW91IG1lYW4gJ25vaW5kZXgnP2BcbiAgICApXG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkUm91dGUgPSB7XG4gICAgLi4ucm91dGUsXG4gICAgcGF0aDogcm91dGVQYXRoLFxuICAgIG9yaWdpbmFsUGF0aDogb3JpZ2luYWxSb3V0ZVBhdGgsXG4gICAgbm9pbmRleDpcbiAgICAgIHR5cGVvZiByb3V0ZS5ub2luZGV4ICE9PSAndW5kZWZpbmVkJyA/IHJvdXRlLm5vaW5kZXggOiBwYXJlbnQubm9pbmRleCxcbiAgICBoYXNHZXRQcm9wczogISFyb3V0ZS5nZXREYXRhLFxuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWRSb3V0ZVxufVxuXG4vLyBXZSByZWN1cnNpdmVseSBsb29wIHRocm91Z2ggdGhlIHJvdXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4gYW5kXG4vLyByZXR1cm4gYW4gYXJyYXkgb2Ygbm9ybWFsaXNlZCByb3V0ZXMuXG4vLyBPcmlnaW5hbCByb3V0ZXMgYXJyYXkgW3sgcGF0aDogJ3BhdGgnLCBjaGlsZHJlbjogeyBwYXRoOiAndG8nIH0gfV1cbi8vIFRoZXNlIGNhbiBiZSByZXR1cm5lZCBhcyBmbGF0IHJvdXRlcyBlZy4gW3sgcGF0aDogJ3BhdGgnIH0sIHsgcGF0aDogJ3BhdGgvdG8nIH1dXG4vLyBPciB0aGV5IGNhbiBiZSByZXR1cm5lZCBuZXN0ZWQgcm91dGVzIGVnLiBbeyBwYXRoOiAncGF0aCcsIGNoaWxkcmVuOiB7IHBhdGg6ICdwYXRoL3RvJyB9IH1dXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQWxsUm91dGVzID0gKHJvdXRlcyA9IFtdLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXhpc3RpbmdSb3V0ZXMgPSB7fVxuICBsZXQgaGFzSW5kZXhcbiAgbGV0IGhhczQwNFxuXG4gIGNvbnN0IHJlY3Vyc2VSb3V0ZSA9IChyb3V0ZSwgcGFyZW50KSA9PiB7XG4gICAgLy8gaWYgc3RydWN0dXJlIGlzIG5lc3RlZCAodHJlZSA9PT0gdHJ1ZSkgbm9ybWFsaXplZFJvdXRlIHdpbGxcbiAgICAvLyBoYXZlIGNoaWxkcmVuIG90aGVyd2lzZSB3ZSBmYWxsIGJhY2sgdG8gdGhlIG9yaWdpbmFsIHJvdXRlIGNoaWxkcmVuXG4gICAgLy8gTm9ybWFsaXplIHRoZSByb3V0ZVxuICAgIGxldCBub3JtYWxpemVkUm91dGUgPSBub3JtYWxpemVSb3V0ZShyb3V0ZSwgcGFyZW50KVxuXG4gICAgLy8gd2UgY2hlY2sgYW4gYXJyYXkgb2YgcGF0aHMgdG8gc2VlXG4gICAgLy8gaWYgcm91dGUgcGF0aCBhbHJlYWR5IGV4aXN0aW5nc1xuICAgIGNvbnN0IGV4aXN0aW5nUm91dGUgPSBleGlzdGluZ1JvdXRlc1tub3JtYWxpemVkUm91dGUucGF0aF1cblxuICAgIGlmIChub3JtYWxpemVkUm91dGUuY2hpbGRyZW4pIHtcbiAgICAgIG5vcm1hbGl6ZWRSb3V0ZS5jaGlsZHJlbiA9IG5vcm1hbGl6ZWRSb3V0ZS5jaGlsZHJlbi5tYXAoY2hpbGRSb3V0ZSA9PlxuICAgICAgICByZWN1cnNlUm91dGUoY2hpbGRSb3V0ZSwgbm9ybWFsaXplZFJvdXRlKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIElmIHRoZSByb3V0ZSBleGlzdHMgYW5kIGlzIGEgcGFnZSByb3V0ZSwgd2UgbmVlZCB0byBkZWNvcmF0ZSB0aGVcbiAgICAvLyBwYWdlIHJvdXRlIHdpdGggdGhpcyByb3V0ZXMgaW5mb3JtYXRpb25cbiAgICBpZiAoZXhpc3RpbmdSb3V0ZSkge1xuICAgICAgaWYgKGV4aXN0aW5nUm91dGUuaXNQYWdlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZXhpc3RpbmdSb3V0ZSwge1xuICAgICAgICAgIC4uLm5vcm1hbGl6ZWRSb3V0ZSxcbiAgICAgICAgICBjb21wb25lbnQ6IGV4aXN0aW5nUm91dGUuY29tcG9uZW50LFxuICAgICAgICB9KVxuICAgICAgICBub3JtYWxpemVkUm91dGUgPSBleGlzdGluZ1JvdXRlXG4gICAgICB9IGVsc2UgaWYgKCFjb25maWcuZGlzYWJsZUR1cGxpY2F0ZVJvdXRlc1dhcm5pbmcpIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBzaG91bGRuJ3QgaGF2ZSBkdXBsaWNhdGUgcm91dGVzXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTW9yZSB0aGFuIG9uZSByb3V0ZSBpbiBzdGF0aWMuY29uZmlnLmpzIGlzIGRlZmluZWQgZm9yIHBhdGg6JyxcbiAgICAgICAgICBub3JtYWxpemVkUm91dGUucGF0aFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgcm91dGUgZXhpc3RlbmNlXG4gICAgZXhpc3RpbmdSb3V0ZXNbbm9ybWFsaXplZFJvdXRlLnBhdGhdID0gbm9ybWFsaXplZFJvdXRlXG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGluZGV4IGFuZCA0MDQgcm91dGVzIGV4aXN0ZW5jZVxuICAgIGlmIChub3JtYWxpemVkUm91dGUucGF0aCA9PT0gJy8nKSB7XG4gICAgICBoYXNJbmRleCA9IHRydWVcbiAgICB9XG4gICAgaWYgKG5vcm1hbGl6ZWRSb3V0ZS5wYXRoID09PSAnNDA0Jykge1xuICAgICAgaGFzNDA0ID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkUm91dGVcbiAgfVxuXG4gIGxldCBub3JtYWxpemVkUm91dGVzID0gcm91dGVzLm1hcChyb3V0ZSA9PiByZWN1cnNlUm91dGUocm91dGUpKVxuXG4gIGlmICghY29uZmlnLnRyZWUpIHtcbiAgICBjb25zdCBmbGF0Um91dGVzID0gW11cbiAgICBjb25zdCByZWN1cnNlUm91dGUgPSByb3V0ZSA9PiB7XG4gICAgICBmbGF0Um91dGVzLnB1c2gocm91dGUpXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAgICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChyZWN1cnNlUm91dGUpXG4gICAgICB9XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBub3JtYWxpemVkUm91dGVzLmZvckVhY2gocmVjdXJzZVJvdXRlKVxuICAgIG5vcm1hbGl6ZWRSb3V0ZXMgPSBmbGF0Um91dGVzXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJvdXRlczogbm9ybWFsaXplZFJvdXRlcyxcbiAgICBoYXNJbmRleCxcbiAgICBoYXM0MDQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlc0Zyb21QYWdlcyA9IGFzeW5jICh7IGNvbmZpZywgb3B0cyA9IHt9IH0sIGNiKSA9PiB7XG4gIC8vIE1ha2UgYSBnbG9iIGV4dGVuc2lvbiB0byBnZXQgYWxsIHBhZ2VzIHdpdGggdGhlIHNldCBleHRlbnNpb25zIGZyb20gdGhlIHBhZ2VzIGRpcmVjdG9yeVxuICBjb25zdCBnbG9iRXh0ZW5zaW9ucyA9IGNvbmZpZy5leHRlbnNpb25zXG4gICAgLm1hcChleHQgPT4gYCR7ZXh0LnNsaWNlKDEpfWApXG4gICAgLmpvaW4oJywnKVxuICBjb25zdCBwYWdlc0dsb2IgPSBgJHtjb25maWcucGF0aHMuUEFHRVN9LyoqLyoueyR7Z2xvYkV4dGVuc2lvbnN9fWBcbiAgLy8gR2V0IHRoZSBwYWdlc1xuXG4gIGNvbnN0IGhhbmRsZSA9IHBhZ2VzID0+IHtcbiAgICAvLyBUdXJuIGVhY2ggcGFnZSBpbnRvIGEgcm91dGVcbiAgICBjb25zdCByb3V0ZXMgPSBwYWdlcy5tYXAocGFnZSA9PiB7XG4gICAgICAvLyBHZXQgdGhlIGNvbXBvbmVudCBwYXRoIHJlbGF0aXZlIHRvIFJPT1RcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5vZGVQYXRoLnJlbGF0aXZlKGNvbmZpZy5wYXRocy5ST09ULCBwYWdlKVxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBwYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSByb290IG9mIHRoZSBzaXRlXG4gICAgICBsZXQgcGF0aCA9IHBhZ2UucmVwbGFjZShgJHtjb25maWcucGF0aHMuUEFHRVN9YCwgJycpLnJlcGxhY2UoL1xcLi4qLywgJycpXG4gICAgICAvLyBUdXJuIGAvaW5kZXhgIHBhdGhzIGludG8gcm9vdHNgXG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC9pbmRleCQvLCAnLycpXG4gICAgICAvLyBSZXR1cm4gdGhlIHJvdXRlXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBjb21wb25lbnQsXG4gICAgICAgIGlzUGFnZTogdHJ1ZSwgLy8gdGFnIGl0IHdpdGggaXNQYWdlLCBzbyB3ZSBrbm93IGl0cyBvcmlnaW5cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByb3V0ZXNcbiAgfVxuXG4gIGlmIChvcHRzLmRldiAmJiAhd2F0Y2hlcikge1xuICAgIHdhdGNoZXIgPSBjaG9raWRhclxuICAgICAgLndhdGNoKGNvbmZpZy5wYXRocy5QQUdFUywge1xuICAgICAgICBpZ25vcmVJbml0aWFsOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIC5vbihcbiAgICAgICAgJ2FsbCcsXG4gICAgICAgIGRlYm91bmNlKGFzeW5jICh0eXBlLCBmaWxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFbJ2FkZCcsICd1bmxpbmsnXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gZmlsZS5zcGxpdCgnLycpLnJldmVyc2UoKVswXVxuICAgICAgICAgIGlmIChmaWxlbmFtZS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IGdsb2IocGFnZXNHbG9iKVxuICAgICAgICAgIGNvbnN0IHJvdXRlcyA9IGhhbmRsZShwYWdlcylcbiAgICAgICAgICByb3V0ZXNDYWNoZSA9IHJvdXRlc1xuICAgICAgICAgIGNiKHJvdXRlcylcbiAgICAgICAgfSksXG4gICAgICAgIDUwXG4gICAgICApXG4gIH1cbiAgaWYgKHJvdXRlc0NhY2hlKSB7XG4gICAgcmV0dXJuIGNiKHJvdXRlc0NhY2hlKVxuICB9XG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2xvYihwYWdlc0dsb2IpXG4gIGNvbnN0IHJvdXRlcyA9IGhhbmRsZShwYWdlcylcbiAgcmV0dXJuIGNiKHJvdXRlcylcbn1cblxuLy8gQXQgbGVhc3QgZW5zdXJlIHRoZSBpbmRleCBwYWdlIGlzIGRlZmluZWQgZm9yIGV4cG9ydFxuY29uc3QgZ2V0Um91dGVzID0gYXN5bmMgKHsgY29uZmlnLCBvcHRzIH0sIGNiID0gZCA9PiBkKSA9PlxuICAvLyBXZSB1c2UgdGhlIGNhbGxiYWNrIHBhdHRlcm4gaGVyZSwgYmVjYXVzZSBnZXRSb3V0ZXNGcm9tUGFnZXMgaXMgdGVjaG5pY2FsbHkgYSBzdWJzY3JpcHRpb25cbiAgZ2V0Um91dGVzRnJvbVBhZ2VzKHsgY29uZmlnLCBvcHRzIH0sIGFzeW5jIHBhZ2VSb3V0ZXMgPT4ge1xuICAgIGNvbnN0IHJvdXRlcyA9IGF3YWl0IGNvbmZpZy5nZXRSb3V0ZXMob3B0cylcbiAgICBjb25zdCBhbGxSb3V0ZXMgPSBbLi4ucGFnZVJvdXRlcywgLi4ucm91dGVzXVxuICAgIGNvbnN0IHtcbiAgICAgIHJvdXRlczogYWxsTm9ybWFsaXplZFJvdXRlcyxcbiAgICAgIGhhc0luZGV4LFxuICAgICAgaGFzNDA0LFxuICAgIH0gPSBub3JtYWxpemVBbGxSb3V0ZXMoYWxsUm91dGVzLCBjb25maWcpXG4gICAgLy8gSWYgbm8gSW5kZXggcGFnZSB3YXMgZm91bmQsIHRocm93IGFuIGVycm9yLiBUaGlzIGlzIHJlcXVpcmVkXG4gICAgaWYgKCFoYXNJbmRleCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ291bGQgbm90IGZpbmQgYSByb3V0ZSBmb3IgdGhlIFwiaW5kZXhcIiBwYWdlIG9mIHlvdXIgc2l0ZSEgVGhpcyBpcyByZXF1aXJlZC4gUGxlYXNlIGNyZWF0ZSBhIHBhZ2Ugb3Igc3BlY2lmeSBhIHJvdXRlIGFuZCB0ZW1wbGF0ZSBmb3IgdGhpcyBwYWdlLidcbiAgICAgIClcbiAgICB9XG4gICAgLy8gSWYgbm8gNDA0IHBhZ2Ugd2FzIGZvdW5kLCB0aHJvdyBhbiBlcnJvci4gVGhpcyBpcyByZXF1aXJlZFxuICAgIGlmICghaGFzNDA0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDb3VsZCBub3QgZmluZCBhIHJvdXRlIGZvciB0aGUgXCI0MDRcIiBwYWdlIG9mIHlvdXIgc2l0ZSEgVGhpcyBpcyByZXF1aXJlZC4gUGxlYXNlIGNyZWF0ZSBhIHBhZ2Ugb3Igc3BlY2lmeSBhIHJvdXRlIGFuZCB0ZW1wbGF0ZSBmb3IgdGhpcyBwYWdlLidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGNiKGFsbE5vcm1hbGl6ZWRSb3V0ZXMpXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGdldFJvdXRlc1xuIl19