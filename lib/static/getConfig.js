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

      function getRoutes() {
        return _getRoutes.apply(this, arguments);
      }

      return getRoutes;
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

  function getConfig(_x, _x2) {
    return _getConfig.apply(this, arguments);
  }

  return getConfig;
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Q29uZmlnLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTkFNRV9GT1JfU1RBVElDX0NPTkZJR19GSUxFIiwiREVGQVVMVF9QQVRIX0ZPUl9TVEFUSUNfQ09ORklHIiwibm9kZVBhdGgiLCJyZXNvbHZlIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJERUZBVUxUX1JPVVRFUyIsInBhdGgiLCJERUZBVUxUX0VOVFJZIiwiYnVpbGRDb25maWdhdGlvbiIsImNvbmZpZyIsInBhdGhzIiwicm9vdCIsInNyYyIsImRpc3QiLCJ0ZW1wIiwiZGV2RGlzdCIsInB1YmxpYyIsInBsdWdpbnMiLCJwYWdlcyIsIm5vZGVNb2R1bGVzIiwiYXNzZXRzIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJESVNUIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOViIsIkFTU0VUUyIsIlJPT1QiLCJMT0NBTF9OT0RFX01PRFVMRVMiLCJTUkMiLCJQQUdFUyIsIlBMVUdJTlMiLCJURU1QIiwiUFVCTElDIiwiTk9ERV9NT0RVTEVTIiwiRVhDTFVERV9NT0RVTEVTIiwiZXhjbHVkZVJlc29sdmVkTW9kdWxlcyIsIlBBQ0tBR0UiLCJIVE1MX1RFTVBMQVRFIiwiU1RBVElDX0RBVEEiLCJzaXRlUm9vdCIsImJhc2VQYXRoIiwiZGV2QmFzZVBhdGgiLCJSRUFDVF9TVEFUSUNfU1RBR0lORyIsInN0YWdpbmdTaXRlUm9vdCIsInN0YWdpbmdCYXNlUGF0aCIsInB1YmxpY1BhdGgiLCJhc3NldHNQYXRoIiwiZmluYWxDb25maWciLCJlbnRyeSIsImdldFNpdGVEYXRhIiwicmVuZGVyVG9Db21wb25lbnQiLCJDb21wIiwicmVuZGVyVG9IdG1sIiwicmVuZGVyIiwiY29tcCIsInByZWZldGNoUmF0ZSIsIm1heFRocmVhZHMiLCJJbmZpbml0eSIsImRpc2FibGVSb3V0ZUluZm9XYXJuaW5nIiwiZGlzYWJsZVJvdXRlUHJlZml4aW5nIiwib3V0cHV0RmlsZVJhdGUiLCJleHRlbnNpb25zIiwiZ2V0Um91dGVzIiwiZXh0cmFjdENzc0NodW5rcyIsImlubGluZUNzcyIsIlJFQUNUX1NUQVRJQ19QUkVGRVRDSF9SQVRFIiwiUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfSU5GT19XQVJOSU5HIiwiUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfUFJFRklYSU5HIiwibWFwIiwicGx1Z2luIiwicmVzb2x2ZXIiLCJvcHRpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwicmVxdWlyZSIsImRlZmF1bHQiLCJlcnIiLCJidWlsZENvbmZpZ0Zyb21QYXRoIiwiY29uZmlnUGF0aCIsImZpbGVuYW1lIiwiY2FjaGUiLCJjb25zb2xlIiwiZXJyb3IiLCJmcm9tRmlsZSIsInN1YnNjcmliZSIsImNob2tpZGFyIiwid2F0Y2giLCJvbiIsImN1c3RvbUNvbmZpZyIsImNiIiwiYnVpbHRDb25maWciLCJnZXRDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUNBQW1DLEdBQUcsa0JBQTVDLEMsQ0FDQTs7QUFDQSxJQUFNQyw4QkFBOEIsR0FBR0MsY0FBU0MsT0FBVCxDQUNyQ0QsY0FBU0UsSUFBVCxDQUFjQyxPQUFPLENBQUNDLEdBQVIsRUFBZCxFQUE2Qk4sbUNBQTdCLENBRHFDLENBQXZDOztBQUdBLElBQU1PLGNBQWMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQUQsQ0FBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsVUFBdEI7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFpQjtBQUFBLE1BQWhCQyxNQUFnQix1RUFBUCxFQUFPO0FBQy9DO0FBQ0FBLEVBQUFBLE1BQU0sQ0FBQ0MsS0FBUDtBQUNFQyxJQUFBQSxJQUFJLEVBQUVYLGNBQVNDLE9BQVQsQ0FBaUJFLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixDQURSO0FBRUVR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QixDQUFDaUYsWUFBRCxDQUh4Qjs7QUFJWixnQkFBSUMsRUFBSixFQUFRO0FBQ05BLGNBQUFBLEVBQUUsQ0FBQ0MsV0FBRCxDQUFGO0FBQ0Q7O0FBTlcsOENBT0xBLFdBUEs7O0FBQUE7QUFBQSw4Q0FZUFAsUUFBUSxDQUFDSyxZQUFELEVBQWVDLEVBQWYsQ0FaRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlRSxTOzs7O1NBQUFBLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBub2RlUGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGNob2tpZGFyIGZyb20gJ2Nob2tpZGFyJ1xuaW1wb3J0IHJlc29sdmVGcm9tIGZyb20gJ3Jlc29sdmUtZnJvbSdcblxuaW1wb3J0IGdldERpcm5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0RGlybmFtZSdcbmltcG9ydCB7IGNsZWFuU2xhc2hlcywgY3V0UGF0aFRvUm9vdCwgaXNBYnNvbHV0ZVVybCB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZCdcblxuY29uc3QgREVGQVVMVF9OQU1FX0ZPUl9TVEFUSUNfQ09ORklHX0ZJTEUgPSAnc3RhdGljLmNvbmZpZy5qcydcbi8vIHRoZSBkZWZhdWx0IHN0YXRpYy5jb25maWcuanMgbG9jYXRpb25cbmNvbnN0IERFRkFVTFRfUEFUSF9GT1JfU1RBVElDX0NPTkZJRyA9IG5vZGVQYXRoLnJlc29sdmUoXG4gIG5vZGVQYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgREVGQVVMVF9OQU1FX0ZPUl9TVEFUSUNfQ09ORklHX0ZJTEUpXG4pXG5jb25zdCBERUZBVUxUX1JPVVRFUyA9IFt7IHBhdGg6ICcvJyB9XVxuY29uc3QgREVGQVVMVF9FTlRSWSA9ICdpbmRleC5qcydcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQ29uZmlnYXRpb24gPSAoY29uZmlnID0ge30pID0+IHtcbiAgLy8gcGF0aCBkZWZhdWx0c1xuICBjb25maWcucGF0aHMgPSB7XG4gICAgcm9vdDogbm9kZVBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpKSxcbiAgICBzcmM6ICdzcmMnLFxuICAgIGRpc3Q6ICdkaXN0JyxcbiAgICB0ZW1wOiAndG1wJyxcbiAgICBkZXZEaXN0OiAndG1wL2Rldi1zZXJ2ZXInLFxuICAgIHB1YmxpYzogJ3B1YmxpYycsXG4gICAgcGx1Z2luczogJ3BsdWdpbnMnLCAvLyBUT0RPOiBkb2N1bWVudFxuICAgIHBhZ2VzOiAnc3JjL3BhZ2VzJywgLy8gVE9ETzogZG9jdW1lbnRcbiAgICBub2RlTW9kdWxlczogJ25vZGVfbW9kdWxlcycsXG4gICAgYXNzZXRzOiAnJyxcbiAgICAuLi4oY29uZmlnLnBhdGhzIHx8IHt9KSxcbiAgfVxuXG4gIC8vIFVzZSB0aGUgcm9vdCB0byByZXNvbHZlIGFsbCBvdGhlciByZWxhdGl2ZSBwYXRoc1xuICBjb25zdCByZXNvbHZlUGF0aCA9IHJlbGF0aXZlUGF0aCA9PlxuICAgIG5vZGVQYXRoLnJlc29sdmUoY29uZmlnLnBhdGhzLnJvb3QsIHJlbGF0aXZlUGF0aClcblxuICAvLyBSZXNvbHZlIGFsbCBwYXRoc1xuICBjb25zdCBESVNUID1cbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG4gICAgICA/IHJlc29sdmVQYXRoKGNvbmZpZy5wYXRocy5kZXZEaXN0IHx8IGNvbmZpZy5wYXRocy5kaXN0KVxuICAgICAgOiByZXNvbHZlUGF0aChjb25maWcucGF0aHMuZGlzdClcblxuICBjb25zdCBBU1NFVFMgPSBub2RlUGF0aC5yZXNvbHZlKERJU1QsIGNvbmZpZy5wYXRocy5hc3NldHMpXG5cbiAgY29uc3QgcGF0aHMgPSB7XG4gICAgUk9PVDogY29uZmlnLnBhdGhzLnJvb3QsXG4gICAgTE9DQUxfTk9ERV9NT0RVTEVTOiBub2RlUGF0aC5yZXNvbHZlKGdldERpcm5hbWUoKSwgJy4uLy4uL25vZGVfbW9kdWxlcycpLFxuICAgIFNSQzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnNyYyksXG4gICAgUEFHRVM6IHJlc29sdmVQYXRoKGNvbmZpZy5wYXRocy5wYWdlcyksXG4gICAgRElTVCxcbiAgICBBU1NFVFMsXG4gICAgUExVR0lOUzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLnBsdWdpbnMpLFxuICAgIFRFTVA6IHJlc29sdmVQYXRoKGNvbmZpZy5wYXRocy50ZW1wKSxcbiAgICBQVUJMSUM6IHJlc29sdmVQYXRoKGNvbmZpZy5wYXRocy5wdWJsaWMpLFxuICAgIE5PREVfTU9EVUxFUzogcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLm5vZGVNb2R1bGVzKSxcbiAgICBFWENMVURFX01PRFVMRVM6XG4gICAgICBjb25maWcucGF0aHMuZXhjbHVkZVJlc29sdmVkTW9kdWxlcyB8fFxuICAgICAgcmVzb2x2ZVBhdGgoY29uZmlnLnBhdGhzLm5vZGVNb2R1bGVzKSxcbiAgICBQQUNLQUdFOiByZXNvbHZlUGF0aCgncGFja2FnZS5qc29uJyksXG4gICAgSFRNTF9URU1QTEFURTogbm9kZVBhdGguam9pbihESVNULCAnaW5kZXguaHRtbCcpLFxuICAgIFNUQVRJQ19EQVRBOiBub2RlUGF0aC5qb2luKEFTU0VUUywgJ3N0YXRpY0RhdGEnKSxcbiAgfVxuXG4gIGxldCBzaXRlUm9vdCA9ICcnXG4gIGxldCBiYXNlUGF0aCA9ICcnXG5cbiAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBiYXNlUGF0aCA9IGNsZWFuU2xhc2hlcyhjb25maWcuZGV2QmFzZVBhdGgpXG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1NUQUdJTkcgPT09ICd0cnVlJykge1xuICAgIHNpdGVSb290ID0gY3V0UGF0aFRvUm9vdChjb25maWcuc3RhZ2luZ1NpdGVSb290LCAnJDEnKVxuICAgIGJhc2VQYXRoID0gY2xlYW5TbGFzaGVzKGNvbmZpZy5zdGFnaW5nQmFzZVBhdGgpXG4gIH0gZWxzZSB7XG4gICAgc2l0ZVJvb3QgPSBjdXRQYXRoVG9Sb290KGNvbmZpZy5zaXRlUm9vdCwgJyQxJylcbiAgICBiYXNlUGF0aCA9IGNsZWFuU2xhc2hlcyhjb25maWcuYmFzZVBhdGgpXG4gIH1cblxuICBjb25zdCBwdWJsaWNQYXRoID0gYCR7Y2xlYW5TbGFzaGVzKGAke3NpdGVSb290fS8ke2Jhc2VQYXRofWApfS9gXG5cbiAgbGV0IGFzc2V0c1BhdGggPSBjbGVhblNsYXNoZXMoY29uZmlnLmFzc2V0c1BhdGggfHwgY29uZmlnLnBhdGhzLmFzc2V0cylcbiAgaWYgKGFzc2V0c1BhdGggJiYgIWlzQWJzb2x1dGVVcmwoYXNzZXRzUGF0aCkpIHtcbiAgICBhc3NldHNQYXRoID0gYC8ke2NsZWFuU2xhc2hlcyhgJHtiYXNlUGF0aH0vJHthc3NldHNQYXRofWApfS9gXG4gIH1cblxuICAvLyBEZWZhdWx0c1xuICBjb25zdCBmaW5hbENvbmZpZyA9IHtcbiAgICAvLyBEZWZhdWx0c1xuICAgIGVudHJ5OiBub2RlUGF0aC5qb2luKHBhdGhzLlNSQywgREVGQVVMVF9FTlRSWSksXG4gICAgZ2V0U2l0ZURhdGE6ICgpID0+ICh7fSksXG4gICAgcmVuZGVyVG9Db21wb25lbnQ6IENvbXAgPT4gPENvbXAgLz4sXG4gICAgcmVuZGVyVG9IdG1sOiAocmVuZGVyLCBjb21wKSA9PiByZW5kZXIoY29tcCksXG4gICAgcHJlZmV0Y2hSYXRlOiAzLFxuICAgIG1heFRocmVhZHM6IEluZmluaXR5LFxuICAgIGRpc2FibGVSb3V0ZUluZm9XYXJuaW5nOiBmYWxzZSxcbiAgICBkaXNhYmxlUm91dGVQcmVmaXhpbmc6IGZhbHNlLFxuICAgIG91dHB1dEZpbGVSYXRlOiAxMDAsXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLmpzeCddLCAvLyBUT0RPOiBkb2N1bWVudFxuICAgIGdldFJvdXRlczogYXN5bmMgKCkgPT4gREVGQVVMVF9ST1VURVMsXG4gICAgcGx1Z2luczogW10sXG4gICAgLy8gQ29uZmlnIE92ZXJyaWRlc1xuICAgIC4uLmNvbmZpZyxcbiAgICAvLyBNYXRlcmlhbGl6ZWQgT3ZlcnJpZGVzXG4gICAgcGF0aHMsXG4gICAgc2l0ZVJvb3QsXG4gICAgYmFzZVBhdGgsXG4gICAgcHVibGljUGF0aCxcbiAgICBhc3NldHNQYXRoLFxuICAgIGV4dHJhY3RDc3NDaHVua3M6IGNvbmZpZy5leHRyYWN0Q3NzQ2h1bmtzIHx8IGZhbHNlLFxuICAgIGlubGluZUNzczogY29uZmlnLmlubGluZUNzcyB8fCBmYWxzZSxcbiAgfVxuXG4gIC8vIFNldCBlbnYgdmFyaWFibGVzIHRvIGJlIHVzZWQgY2xpZW50IHNpZGVcbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BSRUZFVENIX1JBVEUgPSBmaW5hbENvbmZpZy5wcmVmZXRjaFJhdGVcbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfSU5GT19XQVJOSU5HID1cbiAgICBmaW5hbENvbmZpZy5kaXNhYmxlUm91dGVJbmZvV2FybmluZ1xuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkcgPVxuICAgIGZpbmFsQ29uZmlnLmRpc2FibGVSb3V0ZVByZWZpeGluZ1xuXG4gIC8vIEZldGNoIHBsdWdpbnMsIGlmIGFueVxuICBmaW5hbENvbmZpZy5wbHVnaW5zID0gZmluYWxDb25maWcucGx1Z2lucy5tYXAocGx1Z2luID0+IHtcbiAgICBsZXQgcmVzb2x2ZXIgPSBwbHVnaW5cbiAgICBsZXQgb3B0aW9ucyA9IHt9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGx1Z2luKSkge1xuICAgICAgcmVzb2x2ZXIgPSBwbHVnaW5bMF1cbiAgICAgIG9wdGlvbnMgPSBwbHVnaW5bMV0gfHwge31cbiAgICB9XG4gICAgLy8gQXR0ZW1wdCBhIGRpcmVjdCByZXF1aXJlIGZvciBhYnNvbHV0ZSBwYXRoc1xuICAgIHRyeSB7XG4gICAgICBwbHVnaW4gPSByZXF1aXJlKHJlc29sdmVyKS5kZWZhdWx0XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBBdHRlbXB0IGEgL3BsdWdpbnMgZGlyZWN0b3J5IHJlcXVpcmVcbiAgICAgICAgcGx1Z2luID0gcmVxdWlyZShub2RlUGF0aC5yZXNvbHZlKHBhdGhzLlBMVUdJTlMsIHJlc29sdmVyKSkuZGVmYXVsdFxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIEF0dGVtcHQgYSByb290IGRpcmVjdG9yeSByZXF1aXJlIChub2RlX21vZHVsZXMpXG4gICAgICAgIHBsdWdpbiA9IHJlcXVpcmUocmVzb2x2ZUZyb20ocHJvY2Vzcy5jd2QoKSwgcmVzb2x2ZXIpKS5kZWZhdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc29sdmVyLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIC4uLnBsdWdpbihvcHRpb25zKSxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGZpbmFsQ29uZmlnXG59XG5cbmNvbnN0IGJ1aWxkQ29uZmlnRnJvbVBhdGggPSBjb25maWdQYXRoID0+IHtcbiAgY29uc3QgZmlsZW5hbWUgPSBub2RlUGF0aC5yZXNvbHZlKGNvbmZpZ1BhdGgpXG4gIGRlbGV0ZSByZXF1aXJlLmNhY2hlW2ZpbGVuYW1lXVxuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoZmlsZW5hbWUpLmRlZmF1bHRcbiAgICByZXR1cm4gYnVpbGRDb25maWdhdGlvbihjb25maWcpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIHJldHVybiB7fVxuICB9XG59XG5cbmNvbnN0IGZyb21GaWxlID0gYXN5bmMgKFxuICBjb25maWdQYXRoID0gREVGQVVMVF9QQVRIX0ZPUl9TVEFUSUNfQ09ORklHLFxuICBzdWJzY3JpYmVcbikgPT4ge1xuICBjb25zdCBjb25maWcgPSBidWlsZENvbmZpZ0Zyb21QYXRoKGNvbmZpZ1BhdGgpXG5cbiAgaWYgKHN1YnNjcmliZSkge1xuICAgIGNob2tpZGFyLndhdGNoKGNvbmZpZ1BhdGgpLm9uKCdhbGwnLCAoKSA9PiB7XG4gICAgICBzdWJzY3JpYmUoYnVpbGRDb25maWdGcm9tUGF0aChjb25maWdQYXRoKSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG4vLyBSZXRyaWV2ZXMgdGhlIHN0YXRpYy5jb25maWcuanMgZnJvbSB0aGUgY3VycmVudCBwcm9qZWN0IGRpcmVjdG9yeVxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIGdldENvbmZpZyhjdXN0b21Db25maWcsIGNiKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tQ29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHJldHVybiBhIGN1c3RvbSBjb25maWcgb2JqXG4gICAgY29uc3QgYnVpbHRDb25maWcgPSBidWlsZENvbmZpZ2F0aW9uKGN1c3RvbUNvbmZpZylcbiAgICBpZiAoY2IpIHtcbiAgICAgIGNiKGJ1aWx0Q29uZmlnKVxuICAgIH1cbiAgICByZXR1cm4gYnVpbHRDb25maWdcbiAgfVxuXG4gIC8vIHJldHVybiBhIGN1c3RvbSBjb25maWcgZmlsZSBsb2NhdGlvblxuICAvLyBkZWZhdWx0cyB0byBjb25zdGFudCBwYWF0aCBmb3Igc3RhdGljIGNvbmZpZ1xuICByZXR1cm4gZnJvbUZpbGUoY3VzdG9tQ29uZmlnLCBjYilcbn0pXG4iXX0=