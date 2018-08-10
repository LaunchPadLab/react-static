"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buildConfigation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _path = _interopRequireDefault(require("path"));

var _chokidar = _interopRequireDefault(require("chokidar"));

var _resolveFrom = _interopRequireDefault(require("resolve-from"));

var _getDirname = _interopRequireDefault(require("../utils/getDirname"));

var _shared = require("../utils/shared");

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/static/getConfig.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_NAME_FOR_STATIC_CONFIG_FILE = 'static.config.js'; // the default static.config.js location

var DEFAULT_PATH_FOR_STATIC_CONFIG = _path.default.resolve(_path.default.join(process.cwd(), DEFAULT_NAME_FOR_STATIC_CONFIG_FILE));

var DEFAULT_ROUTES = [{
  path: '/'
}];
var DEFAULT_ENTRY = 'index.js';

var buildConfigation = function buildConfigation() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // path defaults
  config.paths = _objectSpread({
    root: _path.default.resolve(process.cwd()),
    src: 'src',
    dist: 'dist',
    temp: 'tmp',
    devDist: 'tmp/dev-server',
    public: 'public',
    plugins: 'plugins',
    // TODO: document
    pages: 'src/pages',
    // TODO: document
    nodeModules: 'node_modules',
    assets: ''
  }, config.paths || {}); // Use the root to resolve all other relative paths

  var resolvePath = function resolvePath(relativePath) {
    return _path.default.resolve(config.paths.root, relativePath);
  }; // Resolve all paths


  var DIST = process.env.REACT_STATIC_ENV === 'development' ? resolvePath(config.paths.devDist || config.paths.dist) : resolvePath(config.paths.dist);

  var ASSETS = _path.default.resolve(DIST, config.paths.assets);

  var paths = {
    ROOT: config.paths.root,
    LOCAL_NODE_MODULES: _path.default.resolve((0, _getDirname.default)(), '../../node_modules'),
    SRC: resolvePath(config.paths.src),
    PAGES: resolvePath(config.paths.pages),
    DIST: DIST,
    ASSETS: ASSETS,
    PLUGINS: resolvePath(config.paths.plugins),
    TEMP: resolvePath(config.paths.temp),
    PUBLIC: resolvePath(config.paths.public),
    NODE_MODULES: resolvePath(config.paths.nodeModules),
    EXCLUDE_MODULES: config.paths.excludeResolvedModules || resolvePath(config.paths.nodeModules),
    PACKAGE: resolvePath('package.json'),
    HTML_TEMPLATE: _path.default.join(DIST, 'index.html'),
    STATIC_DATA: _path.default.join(ASSETS, 'staticData')
  };
  var siteRoot = '';
  var basePath = '';

  if (process.env.REACT_STATIC_ENV === 'development') {
    basePath = (0, _shared.cleanSlashes)(config.devBasePath);
  } else if (process.env.REACT_STATIC_STAGING === 'true') {
    siteRoot = (0, _shared.cutPathToRoot)(config.stagingSiteRoot, '$1');
    basePath = (0, _shared.cleanSlashes)(config.stagingBasePath);
  } else {
    siteRoot = (0, _shared.cutPathToRoot)(config.siteRoot, '$1');
    basePath = (0, _shared.cleanSlashes)(config.basePath);
  }

  var publicPath = "".concat((0, _shared.cleanSlashes)("".concat(siteRoot, "/").concat(basePath)), "/");
  var assetsPath = (0, _shared.cleanSlashes)(config.assetsPath || config.paths.assets);

  if (assetsPath && !(0, _shared.isAbsoluteUrl)(assetsPath)) {
    assetsPath = "/".concat((0, _shared.cleanSlashes)("".concat(basePath, "/").concat(assetsPath)), "/");
  } // Defaults


  var finalConfig = _objectSpread({
    // Defaults
    entry: _path.default.join(paths.SRC, DEFAULT_ENTRY),
    getSiteData: function getSiteData() {
      return {};
    },
    renderToComponent: function renderToComponent(Comp) {
      return _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      });
    },
    renderToHtml: function renderToHtml(render, comp) {
      return render(comp);
    },
    prefetchRate: 3,
    maxThreads: Infinity,
    disableRouteInfoWarning: false,
    disableRoutePrefixing: false,
    outputFileRate: 100,
    extensions: ['.js', '.jsx'],
    // TODO: document
    getRoutes: function () {
      var _getRoutes = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", DEFAULT_ROUTES);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getRoutes() {
        return _getRoutes.apply(this, arguments);
      };
    }(),
    plugins: []
  }, config, {
    // Materialized Overrides
    paths: paths,
    siteRoot: siteRoot,
    basePath: basePath,
    publicPath: publicPath,
    assetsPath: assetsPath,
    extractCssChunks: config.extractCssChunks || false,
    inlineCss: config.inlineCss || false // Set env variables to be used client side

  });

  process.env.REACT_STATIC_PREFETCH_RATE = finalConfig.prefetchRate;
  process.env.REACT_STATIC_DISABLE_ROUTE_INFO_WARNING = finalConfig.disableRouteInfoWarning;
  process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING = finalConfig.disableRoutePrefixing; // Fetch plugins, if any

  finalConfig.plugins = finalConfig.plugins.map(function (plugin) {
    var resolver = plugin;
    var options = {};

    if (Array.isArray(plugin)) {
      resolver = plugin[0];
      options = plugin[1] || {};
    } // Attempt a direct require for absolute paths


    try {
      plugin = require(resolver).default;
    } catch (err) {
      try {
        // Attempt a /plugins directory require
        plugin = require(_path.default.resolve(paths.PLUGINS, resolver)).default;
      } catch (err) {
        // Attempt a root directory require (node_modules)
        plugin = require((0, _resolveFrom.default)(process.cwd(), resolver)).default;
      }
    }

    return _objectSpread({
      resolver: resolver,
      options: options
    }, plugin(options));
  });
  return finalConfig;
};

exports.buildConfigation = buildConfigation;

var buildConfigFromPath = function buildConfigFromPath(configPath) {
  var filename = _path.default.resolve(configPath);

  delete require.cache[filename];

  try {
    var config = require(filename).default;

    return buildConfigation(config);
  } catch (err) {
    console.error(err);
    return {};
  }
};

var fromFile =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var configPath,
        subscribe,
        config,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            configPath = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : DEFAULT_PATH_FOR_STATIC_CONFIG;
            subscribe = _args2.length > 1 ? _args2[1] : undefined;
            config = buildConfigFromPath(configPath);

            if (subscribe) {
              _chokidar.default.watch(configPath).on('all', function () {
                subscribe(buildConfigFromPath(configPath));
              });
            }

            return _context2.abrupt("return", config);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fromFile() {
    return _ref.apply(this, arguments);
  };
}(); // Retrieves the static.config.js from the current project directory


var _default =
/*#__PURE__*/
function () {
  var _getConfig = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(customConfig, cb) {
    var builtConfig;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_typeof(customConfig) === 'object')) {
              _context3.next = 4;
              break;
            }

            // return a custom config obj
            builtConfig = buildConfigation(customConfig);

            if (cb) {
              cb(builtConfig);
            }

            return _context3.abrupt("return", builtConfig);

          case 4:
            return _context3.abrupt("return", fromFile(customConfig, cb));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getConfig(_x, _x2) {
    return _getConfig.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Q29uZmlnLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTkFNRV9GT1JfU1RBVElDX0NPTkZJR19GSUxFIiwiREVGQVVMVF9QQVRIX0ZPUl9TVEFUSUNfQ09ORklHIiwibm9kZVBhdGgiLCJyZXNvbHZlIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJERUZBVUxUX1JPVVRFUyIsInBhdGgiLCJERUZBVUxUX0VOVFJZIiwiYnVpbGRDb25maWdhdGlvbiIsImNvbmZpZyIsInBhdGhzIiwicm9vdCIsInNyYyIsImRpc3QiLCJ0ZW1wIiwiZGV2RGlzdCIsInB1YmxpYyIsInBsdWdpbnMiLCJwYWdlcyIsIm5vZGVNb2R1bGVzIiwiYXNzZXRzIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJESVNUIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOViIsIkFTU0VUUyIsIlJPT1QiLCJMT0NBTF9OT0RFX01PRFVMRVMiLCJTUkMiLCJQQUdFUyIsIlBMVUdJTlMiLCJURU1QIiwiUFVCTElDIiwiTk9ERV9NT0RVTEVTIiwiRVhDTFVERV9NT0RVTEVTIiwiZXhjbHVkZVJlc29sdmVkTW9kdWxlcyIsIlBBQ0tBR0UiLCJIVE1MX1RFTVBMQVRFIiwiU1RBVElDX0RBVEEiLCJzaXRlUm9vdCIsImJhc2VQYXRoIiwiZGV2QmFzZVBhdGgiLCJSRUFDVF9TVEFUSUNfU1RBR0lORyIsInN0YWdpbmdTaXRlUm9vdCIsInN0YWdpbmdCYXNlUGF0aCIsInB1YmxpY1BhdGgiLCJhc3NldHNQYXRoIiwiZmluYWxDb25maWciLCJlbnRyeSIsImdldFNpdGVEYXRhIiwicmVuZGVyVG9Db21wb25lbnQiLCJDb21wIiwicmVuZGVyVG9IdG1sIiwicmVuZGVyIiwiY29tcCIsInByZWZldGNoUmF0ZSIsIm1heFRocmVhZHMiLCJJbmZpbml0eSIsImRpc2FibGVSb3V0ZUluZm9XYXJuaW5nIiwiZGlzYWJsZVJvdXRlUHJlZml4aW5nIiwib3V0cHV0RmlsZVJhdGUiLCJleHRlbnNpb25zIiwiZ2V0Um91dGVzIiwiZXh0cmFjdENzc0NodW5rcyIsImlubGluZUNzcyIsIlJFQUNUX1NUQVRJQ19QUkVGRVRDSF9SQVRFIiwiUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfSU5GT19XQVJOSU5HIiwiUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfUFJFRklYSU5HIiwibWFwIiwicGx1Z2luIiwicmVzb2x2ZXIiLCJvcHRpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwicmVxdWlyZSIsImRlZmF1bHQiLCJlcnIiLCJidWlsZENvbmZpZ0Zyb21QYXRoIiwiY29uZmlnUGF0aCIsImZpbGVuYW1lIiwiY2FjaGUiLCJjb25zb2xlIiwiZXJyb3IiLCJmcm9tRmlsZSIsInN1YnNjcmliZSIsImNob2tpZGFyIiwid2F0Y2giLCJvbiIsImN1c3RvbUNvbmZpZyIsImNiIiwiYnVpbHRDb25maWciLCJnZXRDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUNBQW1DLEdBQUcsa0JBQTVDLEMsQ0FDQTs7QUFDQSxJQUFNQyw4QkFBOEIsR0FBR0MsY0FBU0MsT0FBVCxDQUNyQ0QsY0FBU0UsSUFBVCxDQUFjQyxPQUFPLENBQUNDLEdBQVIsRUFBZCxFQUE2Qk4sbUNBQTdCLENBRHFDLENBQXZDOztBQUdBLElBQU1PLGNBQWMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsVUFBdEI7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFpQjtBQUFBLE1BQWhCQyxNQUFnQix1RUFBUCxFQUFPO0FBQy9DO0FBQ0FBLEVBQUFBLE1BQU0sQ0FBQ0MsS0FBUDtBQUNFQyxJQUFBQSxJQUFJLEVBQUVYLGNBQVNDLE9BQVQsQ0FBaUJFLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixDQURSO0FBRUVR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aUYsWUFBRCxDQUh4Qjs7QUFJWixnQkFBSUMsRUFBSixFQUFRO0FBQ05BLGNBQUFBLEVBQUUsQ0FBQ0MsV0FBRCxDQUFGO0FBQ0Q7O0FBTlcsOENBT0xBLFdBUEs7O0FBQUE7QUFBQSw4Q0FZUFAsUUFBUSxDQUFDSyxZQUFELEVBQWVDLEVBQWYsQ0FaRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZUUsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgY2hva2lkYXIgZnJvbSAnY2hva2lkYXInXG5pbXBvcnQgcmVzb2x2ZUZyb20gZnJvbSAncmVzb2x2ZS1mcm9tJ1xuXG5pbXBvcnQgZ2V0RGlybmFtZSBmcm9tICcuLi91dGlscy9nZXREaXJuYW1lJ1xuaW1wb3J0IHsgY2xlYW5TbGFzaGVzLCBjdXRQYXRoVG9Sb290LCBpc0Fic29sdXRlVXJsIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkJ1xuXG5jb25zdCBERUZBVUxUX05BTUVfRk9SX1NUQVRJQ19DT05GSUdfRklMRSA9ICdzdGF0aWMuY29uZmlnLmpzJ1xuLy8gdGhlIGRlZmF1bHQgc3RhdGljLmNvbmZpZy5qcyBsb2NhdGlvblxuY29uc3QgREVGQVVMVF9QQVRIX0ZPUl9TVEFUSUNfQ09ORklHID0gbm9kZVBhdGgucmVzb2x2ZShcbiAgbm9kZVBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBERUZBVUxUX05BTUVfRk9SX1NUQVRJQ19DT05GSUdfRklMRSlcbilcbmNvbnN0IERFRkFVTFRfUk9VVEVTID0gW3sgcGF0aDogJy8nIH1dXG5jb25zdCBERUZBVUxUX0VOVFJZID0gJ2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRDb25maWdhdGlvbiA9IChjb25maWcgPSB7fSkgPT4ge1xuICAvLyBwYXRoIGRlZmF1bHRzXG4gIGNvbmZpZy5wYXRocyA9IHtcbiAgICByb290OiBub2RlUGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCkpLFxuICAgIHNyYzogJ3NyYycsXG4gICAgZGlzdDogJ2Rpc3QnLFxuICAgIHRlbXA6ICd0bXAnLFxuICAgIGRldkRpc3Q6ICd0bXAvZGV2LXNlcnZlcicsXG4gICAgcHVibGljOiAncHVibGljJyxcbiAgICBwbHVnaW5zOiAncGx1Z2lucycsIC8vIFRPRE86IGRvY3VtZW50XG4gICAgcGFnZXM6ICdzcmMvcGFnZXMnLCAvLyBUT0RPOiBkb2N1bWVudFxuICAgIG5vZGVNb2R1bGVzOiAnbm9kZV9tb2R1bGVzJyxcbiAgICBhc3NldHM6ICcnLFxuICAgIC4uLihjb25maWcucGF0aHMgfHwge30pLFxuICB9XG5cbiAgLy8gVXNlIHRoZSByb290IHRvIHJlc29sdmUgYWxsIG90aGVyIHJlbGF0aXZlIHBhdGhzXG4gIGNvbnN0IHJlc29sdmVQYXRoID0gcmVsYXRpdmVQYXRoID0+XG4gICAgbm9kZVBhdGgucmVzb2x2ZShjb25maWcucGF0aHMucm9vdCwgcmVsYXRpdmVQYXRoKVxuXG4gIC8vIFJlc29sdmUgYWxsIHBhdGhzXG4gIGNvbnN0IERJU1QgPVxuICAgIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICAgID8gcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLmRldkRpc3QgfHwgY29uZmlnLnBhdGhzLmRpc3QpXG4gICAgICA6IHJlc29sdmVQYXRoKGNvbmZpZy5wYXRocy5kaXN0KVxuXG4gIGNvbnN0IEFTU0VUUyA9IG5vZGVQYXRoLnJlc29sdmUoRElTVCwgY29uZmlnLnBhdGhzLmFzc2V0cylcblxuICBjb25zdCBwYXRocyA9IHtcbiAgICBST09UOiBjb25maWcucGF0aHMucm9vdCxcbiAgICBMT0NBTF9OT0RFX01PRFVMRVM6IG5vZGVQYXRoLnJlc29sdmUoZ2V0RGlybmFtZSgpLCAnLi4vLi4vbm9kZV9tb2R1bGVzJyksXG4gICAgU1JDOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMuc3JjKSxcbiAgICBQQUdFUzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnBhZ2VzKSxcbiAgICBESVNULFxuICAgIEFTU0VUUyxcbiAgICBQTFVHSU5TOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMucGx1Z2lucyksXG4gICAgVEVNUDogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnRlbXApLFxuICAgIFBVQkxJQzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnB1YmxpYyksXG4gICAgTk9ERV9NT0RVTEVTOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMubm9kZU1vZHVsZXMpLFxuICAgIEVYQ0xVREVfTU9EVUxFUzpcbiAgICAgIGNvbmZpZy5wYXRocy5leGNsdWRlUmVzb2x2ZWRNb2R1bGVzIHx8XG4gICAgICByZXNvbHZlUGF0aChjb25maWcucGF0aHMubm9kZU1vZHVsZXMpLFxuICAgIFBBQ0tBR0U6IHJlc29sdmVQYXRoKCdwYWNrYWdlLmpzb24nKSxcbiAgICBIVE1MX1RFTVBMQVRFOiBub2RlUGF0aC5qb2luKERJU1QsICdpbmRleC5odG1sJyksXG4gICAgU1RBVElDX0RBVEE6IG5vZGVQYXRoLmpvaW4oQVNTRVRTLCAnc3RhdGljRGF0YScpLFxuICB9XG5cbiAgbGV0IHNpdGVSb290ID0gJydcbiAgbGV0IGJhc2VQYXRoID0gJydcblxuICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGJhc2VQYXRoID0gY2xlYW5TbGFzaGVzKGNvbmZpZy5kZXZCYXNlUGF0aClcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfU1RBR0lORyA9PT0gJ3RydWUnKSB7XG4gICAgc2l0ZVJvb3QgPSBjdXRQYXRoVG9Sb290KGNvbmZpZy5zdGFnaW5nU2l0ZVJvb3QsICckMScpXG4gICAgYmFzZVBhdGggPSBjbGVhblNsYXNoZXMoY29uZmlnLnN0YWdpbmdCYXNlUGF0aClcbiAgfSBlbHNlIHtcbiAgICBzaXRlUm9vdCA9IGN1dFBhdGhUb1Jvb3QoY29uZmlnLnNpdGVSb290LCAnJDEnKVxuICAgIGJhc2VQYXRoID0gY2xlYW5TbGFzaGVzKGNvbmZpZy5iYXNlUGF0aClcbiAgfVxuXG4gIGNvbnN0IHB1YmxpY1BhdGggPSBgJHtjbGVhblNsYXNoZXMoYCR7c2l0ZVJvb3R9LyR7YmFzZVBhdGh9YCl9L2BcblxuICBsZXQgYXNzZXRzUGF0aCA9IGNsZWFuU2xhc2hlcyhjb25maWcuYXNzZXRzUGF0aCB8fCBjb25maWcucGF0aHMuYXNzZXRzKVxuICBpZiAoYXNzZXRzUGF0aCAmJiAhaXNBYnNvbHV0ZVVybChhc3NldHNQYXRoKSkge1xuICAgIGFzc2V0c1BhdGggPSBgLyR7Y2xlYW5TbGFzaGVzKGAke2Jhc2VQYXRofS8ke2Fzc2V0c1BhdGh9YCl9L2BcbiAgfVxuXG4gIC8vIERlZmF1bHRzXG4gIGNvbnN0IGZpbmFsQ29uZmlnID0ge1xuICAgIC8vIERlZmF1bHRzXG4gICAgZW50cnk6IG5vZGVQYXRoLmpvaW4ocGF0aHMuU1JDLCBERUZBVUxUX0VOVFJZKSxcbiAgICBnZXRTaXRlRGF0YTogKCkgPT4gKHt9KSxcbiAgICByZW5kZXJUb0NvbXBvbmVudDogQ29tcCA9PiA8Q29tcCAvPixcbiAgICByZW5kZXJUb0h0bWw6IChyZW5kZXIsIGNvbXApID0+IHJlbmRlcihjb21wKSxcbiAgICBwcmVmZXRjaFJhdGU6IDMsXG4gICAgbWF4VGhyZWFkczogSW5maW5pdHksXG4gICAgZGlzYWJsZVJvdXRlSW5mb1dhcm5pbmc6IGZhbHNlLFxuICAgIGRpc2FibGVSb3V0ZVByZWZpeGluZzogZmFsc2UsXG4gICAgb3V0cHV0RmlsZVJhdGU6IDEwMCxcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanN4J10sIC8vIFRPRE86IGRvY3VtZW50XG4gICAgZ2V0Um91dGVzOiBhc3luYyAoKSA9PiBERUZBVUxUX1JPVVRFUyxcbiAgICBwbHVnaW5zOiBbXSxcbiAgICAvLyBDb25maWcgT3ZlcnJpZGVzXG4gICAgLi4uY29uZmlnLFxuICAgIC8vIE1hdGVyaWFsaXplZCBPdmVycmlkZXNcbiAgICBwYXRocyxcbiAgICBzaXRlUm9vdCxcbiAgICBiYXNlUGF0aCxcbiAgICBwdWJsaWNQYXRoLFxuICAgIGFzc2V0c1BhdGgsXG4gICAgZXh0cmFjdENzc0NodW5rczogY29uZmlnLmV4dHJhY3RDc3NDaHVua3MgfHwgZmFsc2UsXG4gICAgaW5saW5lQ3NzOiBjb25maWcuaW5saW5lQ3NzIHx8IGZhbHNlLFxuICB9XG5cbiAgLy8gU2V0IGVudiB2YXJpYWJsZXMgdG8gYmUgdXNlZCBjbGllbnQgc2lkZVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUFJFRkVUQ0hfUkFURSA9IGZpbmFsQ29uZmlnLnByZWZldGNoUmF0ZVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9JTkZPX1dBUk5JTkcgPVxuICAgIGZpbmFsQ29uZmlnLmRpc2FibGVSb3V0ZUluZm9XYXJuaW5nXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyA9XG4gICAgZmluYWxDb25maWcuZGlzYWJsZVJvdXRlUHJlZml4aW5nXG5cbiAgLy8gRmV0Y2ggcGx1Z2lucywgaWYgYW55XG4gIGZpbmFsQ29uZmlnLnBsdWdpbnMgPSBmaW5hbENvbmZpZy5wbHVnaW5zLm1hcChwbHVnaW4gPT4ge1xuICAgIGxldCByZXNvbHZlciA9IHBsdWdpblxuICAgIGxldCBvcHRpb25zID0ge31cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwbHVnaW4pKSB7XG4gICAgICByZXNvbHZlciA9IHBsdWdpblswXVxuICAgICAgb3B0aW9ucyA9IHBsdWdpblsxXSB8fCB7fVxuICAgIH1cbiAgICAvLyBBdHRlbXB0IGEgZGlyZWN0IHJlcXVpcmUgZm9yIGFic29sdXRlIHBhdGhzXG4gICAgdHJ5IHtcbiAgICAgIHBsdWdpbiA9IHJlcXVpcmUocmVzb2x2ZXIpLmRlZmF1bHRcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEF0dGVtcHQgYSAvcGx1Z2lucyBkaXJlY3RvcnkgcmVxdWlyZVxuICAgICAgICBwbHVnaW4gPSByZXF1aXJlKG5vZGVQYXRoLnJlc29sdmUocGF0aHMuUExVR0lOUywgcmVzb2x2ZXIpKS5kZWZhdWx0XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHJvb3QgZGlyZWN0b3J5IHJlcXVpcmUgKG5vZGVfbW9kdWxlcylcbiAgICAgICAgcGx1Z2luID0gcmVxdWlyZShyZXNvbHZlRnJvbShwcm9jZXNzLmN3ZCgpLCByZXNvbHZlcikpLmRlZmF1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzb2x2ZXIsXG4gICAgICBvcHRpb25zLFxuICAgICAgLi4ucGx1Z2luKG9wdGlvbnMpLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZmluYWxDb25maWdcbn1cblxuY29uc3QgYnVpbGRDb25maWdGcm9tUGF0aCA9IGNvbmZpZ1BhdGggPT4ge1xuICBjb25zdCBmaWxlbmFtZSA9IG5vZGVQYXRoLnJlc29sdmUoY29uZmlnUGF0aClcbiAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbZmlsZW5hbWVdXG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnID0gcmVxdWlyZShmaWxlbmFtZSkuZGVmYXVsdFxuICAgIHJldHVybiBidWlsZENvbmZpZ2F0aW9uKGNvbmZpZylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuY29uc3QgZnJvbUZpbGUgPSBhc3luYyAoXG4gIGNvbmZpZ1BhdGggPSBERUZBVUxUX1BBVEhfRk9SX1NUQVRJQ19DT05GSUcsXG4gIHN1YnNjcmliZVxuKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGJ1aWxkQ29uZmlnRnJvbVBhdGgoY29uZmlnUGF0aClcblxuICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgY2hva2lkYXIud2F0Y2goY29uZmlnUGF0aCkub24oJ2FsbCcsICgpID0+IHtcbiAgICAgIHN1YnNjcmliZShidWlsZENvbmZpZ0Zyb21QYXRoKGNvbmZpZ1BhdGgpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY29uZmlnXG59XG5cbi8vIFJldHJpZXZlcyB0aGUgc3RhdGljLmNvbmZpZy5qcyBmcm9tIHRoZSBjdXJyZW50IHByb2plY3QgZGlyZWN0b3J5XG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gZ2V0Q29uZmlnKGN1c3RvbUNvbmZpZywgY2IpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21Db25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcmV0dXJuIGEgY3VzdG9tIGNvbmZpZyBvYmpcbiAgICBjb25zdCBidWlsdENvbmZpZyA9IGJ1aWxkQ29uZmlnYXRpb24oY3VzdG9tQ29uZmlnKVxuICAgIGlmIChjYikge1xuICAgICAgY2IoYnVpbHRDb25maWcpXG4gICAgfVxuICAgIHJldHVybiBidWlsdENvbmZpZ1xuICB9XG5cbiAgLy8gcmV0dXJuIGEgY3VzdG9tIGNvbmZpZyBmaWxlIGxvY2F0aW9uXG4gIC8vIGRlZmF1bHRzIHRvIGNvbnN0YW50IHBhYXRoIGZvciBzdGF0aWMgY29uZmlnXG4gIHJldHVybiBmcm9tRmlsZShjdXN0b21Db25maWcsIGNiKVxufSlcbiJdfQ==