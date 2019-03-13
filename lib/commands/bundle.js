"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _static = require("../static");

var _webpack = require("../static/webpack");

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _build = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var _ref,
        originalConfig,
        staging,
        debug,
        config,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, originalConfig = _ref.config, staging = _ref.staging, debug = _ref.debug;

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
            } // Allow config location to be overriden


            _context.next = 8;
            return (0, _getConfig.default)(originalConfig);

          case 8:
            config = _context.sent;
            config.originalConfig = originalConfig;

            if (debug) {
              console.log('DEBUG - Resolved static.config.js:');
              console.log(config);
            }

            console.log('');

            if (!config.siteRoot) {
              console.log("=> Info: No 'siteRoot' is defined in 'static.config.js'. This is suggested for absolute url's and a sitemap.xml to be automatically generated.");
              console.log('');
            } // Remove the DIST folder


            console.log('=> Cleaning dist...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Dist cleaned"));
            _context.next = 17;
            return _fsExtra.default.remove(config.paths.DIST);

          case 17:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Dist cleaned")); // Empty ASSETS folder

            if (!(config.paths.ASSETS && config.paths.ASSETS !== config.paths.DIST)) {
              _context.next = 24;
              break;
            }

            console.log('=> Cleaning assets...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Assets cleaned"));
            _context.next = 23;
            return _fsExtra.default.emptyDir(config.paths.ASSETS);

          case 23:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Assets cleaned"));

          case 24:
            _context.next = 26;
            return (0, _static.prepareRoutes)({
              config: config,
              opts: {
                dev: false
              }
            });

          case 26:
            config = _context.sent;
            console.log('=> Copying public directory...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Public directory copied"));
            (0, _utils.copyPublicFolder)(config);
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Public directory copied")); // Build static pages and JSON

            console.log('=> Bundling App...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] App Bundled"));
            _context.next = 35;
            return (0, _webpack.buildProductionBundles)({
              config: config
            });

          case 35:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] App Bundled"));

            if (!config.bundleAnalyzer) {
              _context.next = 39;
              break;
            }

            _context.next = 39;
            return new Promise(function () {});

          case 39:
            return _context.abrupt("return", config);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function build() {
    return _build.apply(this, arguments);
  }

  return build;
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9idW5kbGUuanMiXSwibmFtZXMiOlsib3JpZ2luYWxDb25maWciLCJjb25maWciLCJzdGFnaW5nIiwiZGVidWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9TVEFUSUNfRU5WIiwiQkFCRUxfRU5WIiwiUkVBQ1RfU1RBVElDX1NUQUdJTkciLCJSRUFDVF9TVEFUSUNfREVCVUciLCJjb25zb2xlIiwibG9nIiwic2l0ZVJvb3QiLCJjaGFsayIsImdyZWVuIiwiZnMiLCJyZW1vdmUiLCJwYXRocyIsIkRJU1QiLCJBU1NFVFMiLCJlbXB0eURpciIsIm9wdHMiLCJkZXYiLCJidW5kbGVBbmFseXplciIsIlByb21pc2UiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7NEJBRWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBSVosRUFKWSxFQUNOQSxjQURNLFFBQ2RDLE1BRGMsRUFFZEMsT0FGYyxRQUVkQSxPQUZjLEVBR2RDLEtBSGMsUUFHZEEsS0FIYzs7QUFLZDtBQUNBLGdCQUFJLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFuQixLQUFnQyxXQUFoQyxJQUErQyxDQUFDSCxLQUFwRCxFQUEyRDtBQUN6REMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosR0FBdUIsWUFBdkI7QUFDRDs7QUFDREYsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGdCQUFaLEdBQStCLFlBQS9CO0FBQ0FILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxTQUFaLEdBQXdCLFlBQXhCOztBQUVBLGdCQUFJTixPQUFKLEVBQWE7QUFDWEUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLG9CQUFaLEdBQW1DLE1BQW5DO0FBQ0Q7O0FBQ0QsZ0JBQUlOLEtBQUosRUFBVztBQUNUQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssa0JBQVosR0FBaUMsTUFBakM7QUFDRCxhQWpCYSxDQW1CZDs7O0FBbkJjO0FBQUEsbUJBb0JLLHdCQUFVVixjQUFWLENBcEJMOztBQUFBO0FBb0JWQyxZQUFBQSxNQXBCVTtBQXFCZEEsWUFBQUEsTUFBTSxDQUFDRCxjQUFQLEdBQXdCQSxjQUF4Qjs7QUFFQSxnQkFBSUcsS0FBSixFQUFXO0FBQ1RRLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaO0FBQ0FELGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBQ0Q7O0FBQ0RVLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEVBQVo7O0FBRUEsZ0JBQUksQ0FBQ1gsTUFBTSxDQUFDWSxRQUFaLEVBQXNCO0FBQ3BCRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRSxnSkFERjtBQUdBRCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsYUFsQ2EsQ0FvQ2Q7OztBQUNBRCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLDZCQUFLRSxlQUFNQyxLQUFOLENBQVksMEJBQVosQ0FBTDtBQXRDYztBQUFBLG1CQXVDUkMsaUJBQUdDLE1BQUgsQ0FBVWhCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsSUFBdkIsQ0F2Q1E7O0FBQUE7QUF3Q2QsZ0NBQVFMLGVBQU1DLEtBQU4sQ0FBWSwwQkFBWixDQUFSLEVBeENjLENBMENkOztBQTFDYyxrQkEyQ1ZkLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFBYixJQUF1Qm5CLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFBYixLQUF3Qm5CLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsSUEzQ2xEO0FBQUE7QUFBQTtBQUFBOztBQTRDWlIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSw2QkFBS0UsZUFBTUMsS0FBTixDQUFZLDRCQUFaLENBQUw7QUE3Q1k7QUFBQSxtQkE4Q05DLGlCQUFHSyxRQUFILENBQVlwQixNQUFNLENBQUNpQixLQUFQLENBQWFFLE1BQXpCLENBOUNNOztBQUFBO0FBK0NaLGdDQUFRTixlQUFNQyxLQUFOLENBQVksNEJBQVosQ0FBUjs7QUEvQ1k7QUFBQTtBQUFBLG1CQWtEQywyQkFBYztBQUFFZCxjQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVXFCLGNBQUFBLElBQUksRUFBRTtBQUFFQyxnQkFBQUEsR0FBRyxFQUFFO0FBQVA7QUFBaEIsYUFBZCxDQWxERDs7QUFBQTtBQWtEZHRCLFlBQUFBLE1BbERjO0FBb0RkVSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLDZCQUFLRSxlQUFNQyxLQUFOLENBQVkscUNBQVosQ0FBTDtBQUNBLHlDQUFpQmQsTUFBakI7QUFDQSxnQ0FBUWEsZUFBTUMsS0FBTixDQUFZLHFDQUFaLENBQVIsRUF2RGMsQ0F5RGQ7O0FBQ0FKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0EsNkJBQUtFLGVBQU1DLEtBQU4sQ0FBWSx5QkFBWixDQUFMO0FBM0RjO0FBQUEsbUJBNERSLHFDQUF1QjtBQUFFZCxjQUFBQSxNQUFNLEVBQU5BO0FBQUYsYUFBdkIsQ0E1RFE7O0FBQUE7QUE2RGQsZ0NBQVFhLGVBQU1DLEtBQU4sQ0FBWSx5QkFBWixDQUFSOztBQTdEYyxpQkErRFZkLE1BQU0sQ0FBQ3VCLGNBL0RHO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBZ0VOLElBQUlDLE9BQUosQ0FBWSxZQUFNLENBQUUsQ0FBcEIsQ0FoRU07O0FBQUE7QUFBQSw2Q0FtRVB4QixNQW5FTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFleUIsSzs7OztTQUFBQSxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuLy9cbmltcG9ydCB7IHByZXBhcmVSb3V0ZXMgfSBmcm9tICcuLi9zdGF0aWMnXG5pbXBvcnQgeyBidWlsZFByb2R1Y3Rpb25CdW5kbGVzIH0gZnJvbSAnLi4vc3RhdGljL3dlYnBhY2snXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4uL3N0YXRpYy9nZXRDb25maWcnXG5pbXBvcnQgeyBjb3B5UHVibGljRm9sZGVyLCB0aW1lLCB0aW1lRW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBidWlsZCh7XG4gIGNvbmZpZzogb3JpZ2luYWxDb25maWcsXG4gIHN0YWdpbmcsXG4gIGRlYnVnLFxufSA9IHt9KSB7XG4gIC8vIGVuc3VyZSBFTlYgdmFyaWFibGVzIGFyZSBzZXRcbiAgaWYgKHR5cGVvZiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3VuZGVmaW5lZCcgJiYgIWRlYnVnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAncHJvZHVjdGlvbidcbiAgfVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID0gJ3Byb2R1Y3Rpb24nXG4gIHByb2Nlc3MuZW52LkJBQkVMX0VOViA9ICdwcm9kdWN0aW9uJ1xuXG4gIGlmIChzdGFnaW5nKSB7XG4gICAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1NUQUdJTkcgPSAndHJ1ZSdcbiAgfVxuICBpZiAoZGVidWcpIHtcbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfREVCVUcgPSAndHJ1ZSdcbiAgfVxuXG4gIC8vIEFsbG93IGNvbmZpZyBsb2NhdGlvbiB0byBiZSBvdmVycmlkZW5cbiAgbGV0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZyhvcmlnaW5hbENvbmZpZylcbiAgY29uZmlnLm9yaWdpbmFsQ29uZmlnID0gb3JpZ2luYWxDb25maWdcblxuICBpZiAoZGVidWcpIHtcbiAgICBjb25zb2xlLmxvZygnREVCVUcgLSBSZXNvbHZlZCBzdGF0aWMuY29uZmlnLmpzOicpXG4gICAgY29uc29sZS5sb2coY29uZmlnKVxuICB9XG4gIGNvbnNvbGUubG9nKCcnKVxuXG4gIGlmICghY29uZmlnLnNpdGVSb290KSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIj0+IEluZm86IE5vICdzaXRlUm9vdCcgaXMgZGVmaW5lZCBpbiAnc3RhdGljLmNvbmZpZy5qcycuIFRoaXMgaXMgc3VnZ2VzdGVkIGZvciBhYnNvbHV0ZSB1cmwncyBhbmQgYSBzaXRlbWFwLnhtbCB0byBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cIlxuICAgIClcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgRElTVCBmb2xkZXJcbiAgY29uc29sZS5sb2coJz0+IENsZWFuaW5nIGRpc3QuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gRGlzdCBjbGVhbmVkJykpXG4gIGF3YWl0IGZzLnJlbW92ZShjb25maWcucGF0aHMuRElTVClcbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIERpc3QgY2xlYW5lZCcpKVxuXG4gIC8vIEVtcHR5IEFTU0VUUyBmb2xkZXJcbiAgaWYgKGNvbmZpZy5wYXRocy5BU1NFVFMgJiYgY29uZmlnLnBhdGhzLkFTU0VUUyAhPT0gY29uZmlnLnBhdGhzLkRJU1QpIHtcbiAgICBjb25zb2xlLmxvZygnPT4gQ2xlYW5pbmcgYXNzZXRzLi4uJylcbiAgICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQXNzZXRzIGNsZWFuZWQnKSlcbiAgICBhd2FpdCBmcy5lbXB0eURpcihjb25maWcucGF0aHMuQVNTRVRTKVxuICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBBc3NldHMgY2xlYW5lZCcpKVxuICB9XG5cbiAgY29uZmlnID0gYXdhaXQgcHJlcGFyZVJvdXRlcyh7IGNvbmZpZywgb3B0czogeyBkZXY6IGZhbHNlIH0gfSlcblxuICBjb25zb2xlLmxvZygnPT4gQ29weWluZyBwdWJsaWMgZGlyZWN0b3J5Li4uJylcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFB1YmxpYyBkaXJlY3RvcnkgY29waWVkJykpXG4gIGNvcHlQdWJsaWNGb2xkZXIoY29uZmlnKVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUHVibGljIGRpcmVjdG9yeSBjb3BpZWQnKSlcblxuICAvLyBCdWlsZCBzdGF0aWMgcGFnZXMgYW5kIEpTT05cbiAgY29uc29sZS5sb2coJz0+IEJ1bmRsaW5nIEFwcC4uLicpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBBcHAgQnVuZGxlZCcpKVxuICBhd2FpdCBidWlsZFByb2R1Y3Rpb25CdW5kbGVzKHsgY29uZmlnIH0pXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBBcHAgQnVuZGxlZCcpKVxuXG4gIGlmIChjb25maWcuYnVuZGxlQW5hbHl6ZXIpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgfVxuXG4gIHJldHVybiBjb25maWdcbn0pXG4iXX0=