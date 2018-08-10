"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _static = require("../static");

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  var _ref2,
      originalConfig,
      staging,
      debug,
      isBuild,
      config,
      bundledEnv,
      clientStats,
      PrettyError,
      _args = arguments;

  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, originalConfig = _ref2.config, staging = _ref2.staging, debug = _ref2.debug, isBuild = _ref2.isBuild;

          // ensure ENV variables are set
          if (typeof process.env.NODE_ENV === 'undefined' && !debug) {
            process.env.NODE_ENV = 'production';
          }

          process.env.REACT_STATIC_ENV = 'production';
          process.env.BABEL_ENV = 'production';

          if (staging) {
            process.env.REACT_STATIC_STAGING = 'true';
          }

          if (debug) {
            process.env.REACT_STATIC_DEBUG = 'true';
          }

          if (isBuild) {
            _context.next = 20;
            break;
          }

          _context.next = 9;
          return (0, _getConfig.default)(originalConfig);

        case 9:
          config = _context.sent;
          config.originalConfig = originalConfig; // Restore the process environment variables that were present during the build

          _context.next = 13;
          return _fsExtra.default.readJson("".concat(config.paths.TEMP, "/bundle-environment.json"));

        case 13:
          bundledEnv = _context.sent;
          Object.keys(bundledEnv).forEach(function (key) {
            if (typeof process.env[key] === 'undefined') {
              process.env[key] = bundledEnv[key];
            }
          });
          _context.next = 17;
          return (0, _static.prepareRoutes)({
            config: config,
            opts: {
              dev: false
            }
          });

        case 17:
          config = _context.sent;
          _context.next = 21;
          break;

        case 20:
          config = originalConfig;

        case 21:
          if (config.routes) {
            _context.next = 24;
            break;
          }

          _context.next = 24;
          return (0, _static.prepareRoutes)(config, {
            dev: false
          });

        case 24:
          if (debug) {
            console.log('DEBUG - Resolved static.config.js:');
            console.log(config);
          }

          _context.next = 27;
          return _fsExtra.default.readJson("".concat(config.paths.TEMP, "/client-stats.json"));

        case 27:
          clientStats = _context.sent;

          if (clientStats) {
            _context.next = 30;
            break;
          }

          throw new Error('No Client Stats Found');

        case 30:
          _context.prev = 30;
          _context.next = 33;
          return (0, _static.exportRoutes)({
            config: config,
            clientStats: clientStats
          });

        case 33:
          _context.next = 40;
          break;

        case 35:
          _context.prev = 35;
          _context.t0 = _context["catch"](30);
          PrettyError = require('pretty-error');
          console.log(new PrettyError().render(_context.t0));
          process.exit(1);

        case 40:
          _context.next = 42;
          return (0, _static.buildXMLandRSS)({
            config: config
          });

        case 42:
          if (!config.onBuild) {
            _context.next = 45;
            break;
          }

          _context.next = 45;
          return config.onBuild({
            config: config
          });

        case 45:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[30, 35]]);
}));

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9leHBvcnQuanMiXSwibmFtZXMiOlsib3JpZ2luYWxDb25maWciLCJjb25maWciLCJzdGFnaW5nIiwiZGVidWciLCJpc0J1aWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfU1RBVElDX0VOViIsIkJBQkVMX0VOViIsIlJFQUNUX1NUQVRJQ19TVEFHSU5HIiwiUkVBQ1RfU1RBVElDX0RFQlVHIiwiZnMiLCJyZWFkSnNvbiIsInBhdGhzIiwiVEVNUCIsImJ1bmRsZWRFbnYiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIm9wdHMiLCJkZXYiLCJyb3V0ZXMiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50U3RhdHMiLCJFcnJvciIsIlByZXR0eUVycm9yIiwicmVxdWlyZSIsInJlbmRlciIsImV4aXQiLCJvbkJ1aWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7OzBCQUVlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFLWCxFQUxXLEVBQ0xBLGNBREssU0FDYkMsTUFEYSxFQUViQyxPQUZhLFNBRWJBLE9BRmEsRUFHYkMsS0FIYSxTQUdiQSxLQUhhLEVBSWJDLE9BSmEsU0FJYkEsT0FKYTs7QUFNYjtBQUNBLGNBQUksT0FBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQW5CLEtBQWdDLFdBQWhDLElBQStDLENBQUNKLEtBQXBELEVBQTJEO0FBQ3pERSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixHQUF1QixZQUF2QjtBQUNEOztBQUVERixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsZ0JBQVosR0FBK0IsWUFBL0I7QUFDQUgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFNBQVosR0FBd0IsWUFBeEI7O0FBRUEsY0FBSVAsT0FB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J1xuLy9cbmltcG9ydCB7IGV4cG9ydFJvdXRlcywgYnVpbGRYTUxhbmRSU1MsIHByZXBhcmVSb3V0ZXMgfSBmcm9tICcuLi9zdGF0aWMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4uL3N0YXRpYy9nZXRDb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7XG4gIGNvbmZpZzogb3JpZ2luYWxDb25maWcsXG4gIHN0YWdpbmcsXG4gIGRlYnVnLFxuICBpc0J1aWxkLFxufSA9IHt9KSA9PiB7XG4gIC8vIGVuc3VyZSBFTlYgdmFyaWFibGVzIGFyZSBzZXRcbiAgaWYgKHR5cGVvZiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3VuZGVmaW5lZCcgJiYgIWRlYnVnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAncHJvZHVjdGlvbidcbiAgfVxuXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPSAncHJvZHVjdGlvbidcbiAgcHJvY2Vzcy5lbnYuQkFCRUxfRU5WID0gJ3Byb2R1Y3Rpb24nXG5cbiAgaWYgKHN0YWdpbmcpIHtcbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfU1RBR0lORyA9ICd0cnVlJ1xuICB9XG5cbiAgaWYgKGRlYnVnKSB7XG4gICAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0RFQlVHID0gJ3RydWUnXG4gIH1cblxuICBsZXQgY29uZmlnXG5cbiAgLy8gQWxsb3cgY29uZmlnIGxvY2F0aW9uIHRvIGJlIG92ZXJyaWRlblxuICBpZiAoIWlzQnVpbGQpIHtcbiAgICBjb25maWcgPSBhd2FpdCBnZXRDb25maWcob3JpZ2luYWxDb25maWcpXG4gICAgY29uZmlnLm9yaWdpbmFsQ29uZmlnID0gb3JpZ2luYWxDb25maWdcbiAgICAvLyBSZXN0b3JlIHRoZSBwcm9jZXNzIGVudmlyb25tZW50IHZhcmlhYmxlcyB0aGF0IHdlcmUgcHJlc2VudCBkdXJpbmcgdGhlIGJ1aWxkXG4gICAgY29uc3QgYnVuZGxlZEVudiA9IGF3YWl0IGZzLnJlYWRKc29uKFxuICAgICAgYCR7Y29uZmlnLnBhdGhzLlRFTVB9L2J1bmRsZS1lbnZpcm9ubWVudC5qc29uYFxuICAgIClcbiAgICBPYmplY3Qua2V5cyhidW5kbGVkRW52KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MuZW52W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb2Nlc3MuZW52W2tleV0gPSBidW5kbGVkRW52W2tleV1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbmZpZyA9IGF3YWl0IHByZXBhcmVSb3V0ZXMoeyBjb25maWcsIG9wdHM6IHsgZGV2OiBmYWxzZSB9IH0pXG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gb3JpZ2luYWxDb25maWdcbiAgfVxuXG4gIGlmICghY29uZmlnLnJvdXRlcykge1xuICAgIGF3YWl0IHByZXBhcmVSb3V0ZXMoY29uZmlnLCB7IGRldjogZmFsc2UgfSlcbiAgfVxuXG4gIGlmIChkZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKCdERUJVRyAtIFJlc29sdmVkIHN0YXRpYy5jb25maWcuanM6JylcbiAgICBjb25zb2xlLmxvZyhjb25maWcpXG4gIH1cblxuICBjb25zdCBjbGllbnRTdGF0cyA9IGF3YWl0IGZzLnJlYWRKc29uKFxuICAgIGAke2NvbmZpZy5wYXRocy5URU1QfS9jbGllbnQtc3RhdHMuanNvbmBcbiAgKVxuXG4gIGlmICghY2xpZW50U3RhdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIENsaWVudCBTdGF0cyBGb3VuZCcpXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IGV4cG9ydFJvdXRlcyh7XG4gICAgICBjb25maWcsXG4gICAgICBjbGllbnRTdGF0cyxcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc3QgUHJldHR5RXJyb3IgPSByZXF1aXJlKCdwcmV0dHktZXJyb3InKVxuICAgIGNvbnNvbGUubG9nKG5ldyBQcmV0dHlFcnJvcigpLnJlbmRlcihlKSlcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIGF3YWl0IGJ1aWxkWE1MYW5kUlNTKHsgY29uZmlnIH0pXG5cbiAgaWYgKGNvbmZpZy5vbkJ1aWxkKSB7XG4gICAgYXdhaXQgY29uZmlnLm9uQnVpbGQoeyBjb25maWcgfSlcbiAgfVxufVxuIl19