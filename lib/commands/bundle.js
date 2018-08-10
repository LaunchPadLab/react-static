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

  return function build() {
    return _build.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9idW5kbGUuanMiXSwibmFtZXMiOlsib3JpZ2luYWxDb25maWciLCJjb25maWciLCJzdGFnaW5nIiwiZGVidWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9TVEFUSUNfRU5WIiwiQkFCRUxfRU5WIiwiUkVBQ1RfU1RBVElDX1NUQUdJTkciLCJSRUFDVF9TVEFUSUNfREVCVUciLCJjb25zb2xlIiwibG9nIiwic2l0ZVJvb3QiLCJjaGFsayIsImdyZWVuIiwiZnMiLCJyZW1vdmUiLCJwYXRocyIsIkRJU1QiLCJBU1NFVFMiLCJlbXB0eURpciIsIm9wdHMiLCJkZXYiLCJidW5kbGVBbmFseXplciIsIlByb21pc2UiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7NEJBRWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBSVosRUFKWSxFQUNOQSxjQURNLFFBQ2RDLE1BRGMsRUFFZEMsT0FGYyxRQUVkQSxPQUZjLEVBR2RDLEtBSGMsUUFHZEEsS0FIYzs7QUFLZDtBQUNBLGdCQUFJLE9BQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFuQixLQUFnQyxXQUFoQyxJQUErQyxDQUFDSCxLQUFwRCxFQUEyRDtBQUN6REMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosR0FBdUIsWUFBdkI7QUFDRDs7QUFDREYsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGdCQUFaLEdBQStCLFlBQS9CO0FBQ0FILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxTQUFaLEdBQXdCLFlBQXhCOztBQUVBLGdCQUFJTixPQUFKLEVBQWE7QUFDWEUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLG9CQUFaLEdBQW1DLE1BQW5DO0FBQ0Q7O0FBQ0QsZ0JBQUlOLEtBQUosRUFBVztBQUNUQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssa0JBQVosR0FBaUMsTUFBakM7QUFDRCxhQWpCYSxDQW1CZDs7O0FBbkJjO0FBQUEsbUJBb0JLLHdCQUFVVixjQUFWLENBcEJMOztBQUFBO0FBb0JWQyxZQUFBQSxNQXBCVTtBQXFCZEEsWUFBQUEsTUFBTSxDQUFDRCxjQUFQLEdBQXdCQSxjQUF4Qjs7QUFFQSxnQkFBSUcsS0FBSixFQUFXO0FBQ1RRLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaO0FBQ0FELGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBQ0Q7O0FBQ0RVLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEVBQVo7O0FBRUEsZ0JBQUksQ0FBQ1gsTUFBTSxDQUFDWSxRQUFaLEVBQXNCO0FBQ3BCRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRSxnSkFERjtBQUdBRCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsYUFsQ2EsQ0FvQ2Q7OztBQUNBRCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLDZCQUFLRSxlQUFNQyxLQUFOLENBQVksMEJBQVosQ0FBTDtBQXRDYztBQUFBLG1CQXVDUkMsaUJBQUdDLE1BQUgsQ0FBVWhCLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsSUFBdkIsQ0F2Q1E7O0FBQUE7QUF3Q2QsZ0NBQVFMLGVBQU1DLEtBQU4sQ0FBWSwwQkFBWixDQUFSLEVBeENjLENBMENkOztBQTFDYyxrQkEyQ1ZkLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFBYixJQUF1Qm5CLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUUsTUFBYixLQUF3Qm5CLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYUMsSUEzQ2xEO0FBQUE7QUFBQTtBQUFBOztBQTRDWlIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSw2QkFBS0UsZUFBTUMsS0FBTixDQUFZLDRCQUFaLENBQUw7QUE3Q1k7QUFBQSxtQkE4Q05DLGlCQUFHSyxRQUFILENBQVlwQixNQUFNLENBQUNpQixLQUFQLENBQWFFLE1BQXpCLENBOUNNOztBQUFBO0FBK0NaLGdDQUFRTixlQUFNQyxLQUFOLENBQVksNEJBQVosQ0FBUjs7QUEvQ1k7QUFBQTtBQUFBLG1CQWtEQywyQkFBYztBQUFFZCxjQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVXFCLGNBQUFBLElBQUksRUFBRTtBQUFFQyxnQkFBQUEsR0FBRyxFQUFFO0FBQVA7QUFBaEIsYUFBZCxDQWxERDs7QUFBQTtBQWtEZHRCLFlBQUFBLE1BbERjO0FBb0RkVSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLDZCQUFLRSxlQUFNQyxLQUFOLENBQVkscUNBQVosQ0FBTDtBQUNBLHlDQUFpQmQsTUFBakI7QUFDQSxnQ0FBUWEsZUFBTUMsS0FBTixDQUFZLHFDQUFaLENBQVIsRUF2RGMsQ0F5RGQ7O0FBQ0FKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0EsNkJBQUtFLGVBQU1DLEtBQU4sQ0FBWSx5QkFBWixDQUFMO0FBM0RjO0FBQUEsbUJBNERSLHFDQUF1QjtBQUFFZCxjQUFBQSxNQUFNLEVBQU5BO0FBQUYsYUFBdkIsQ0E1RFE7O0FBQUE7QUE2RGQsZ0NBQVFhLGVBQU1DLEtBQU4sQ0FBWSx5QkFBWixDQUFSOztBQTdEYyxpQkErRFZkLE1BQU0sQ0FBQ3VCLGNBL0RHO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBZ0VOLElBQUlDLE9BQUosQ0FBWSxZQUFNLENBQUUsQ0FBcEIsQ0FoRU07O0FBQUE7QUFBQSw2Q0FtRVB4QixNQW5FTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZXlCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG4vL1xuaW1wb3J0IHsgcHJlcGFyZVJvdXRlcyB9IGZyb20gJy4uL3N0YXRpYydcbmltcG9ydCB7IGJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMgfSBmcm9tICcuLi9zdGF0aWMvd2VicGFjaydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnLi4vc3RhdGljL2dldENvbmZpZydcbmltcG9ydCB7IGNvcHlQdWJsaWNGb2xkZXIsIHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIGJ1aWxkKHtcbiAgY29uZmlnOiBvcmlnaW5hbENvbmZpZyxcbiAgc3RhZ2luZyxcbiAgZGVidWcsXG59ID0ge30pIHtcbiAgLy8gZW5zdXJlIEVOViB2YXJpYWJsZXMgYXJlIHNldFxuICBpZiAodHlwZW9mIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndW5kZWZpbmVkJyAmJiAhZGVidWcpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9ICdwcm9kdWN0aW9uJ1xuICB9XG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPSAncHJvZHVjdGlvbidcbiAgcHJvY2Vzcy5lbnYuQkFCRUxfRU5WID0gJ3Byb2R1Y3Rpb24nXG5cbiAgaWYgKHN0YWdpbmcpIHtcbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfU1RBR0lORyA9ICd0cnVlJ1xuICB9XG4gIGlmIChkZWJ1Zykge1xuICAgIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ERUJVRyA9ICd0cnVlJ1xuICB9XG5cbiAgLy8gQWxsb3cgY29uZmlnIGxvY2F0aW9uIHRvIGJlIG92ZXJyaWRlblxuICBsZXQgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKG9yaWdpbmFsQ29uZmlnKVxuICBjb25maWcub3JpZ2luYWxDb25maWcgPSBvcmlnaW5hbENvbmZpZ1xuXG4gIGlmIChkZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKCdERUJVRyAtIFJlc29sdmVkIHN0YXRpYy5jb25maWcuanM6JylcbiAgICBjb25zb2xlLmxvZyhjb25maWcpXG4gIH1cbiAgY29uc29sZS5sb2coJycpXG5cbiAgaWYgKCFjb25maWcuc2l0ZVJvb3QpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiPT4gSW5mbzogTm8gJ3NpdGVSb290JyBpcyBkZWZpbmVkIGluICdzdGF0aWMuY29uZmlnLmpzJy4gVGhpcyBpcyBzdWdnZXN0ZWQgZm9yIGFic29sdXRlIHVybCdzIGFuZCBhIHNpdGVtYXAueG1sIHRvIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlwiXG4gICAgKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBESVNUIGZvbGRlclxuICBjb25zb2xlLmxvZygnPT4gQ2xlYW5pbmcgZGlzdC4uLicpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBEaXN0IGNsZWFuZWQnKSlcbiAgYXdhaXQgZnMucmVtb3ZlKGNvbmZpZy5wYXRocy5ESVNUKVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gRGlzdCBjbGVhbmVkJykpXG5cbiAgLy8gRW1wdHkgQVNTRVRTIGZvbGRlclxuICBpZiAoY29uZmlnLnBhdGhzLkFTU0VUUyAmJiBjb25maWcucGF0aHMuQVNTRVRTICE9PSBjb25maWcucGF0aHMuRElTVCkge1xuICAgIGNvbnNvbGUubG9nKCc9PiBDbGVhbmluZyBhc3NldHMuLi4nKVxuICAgIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBBc3NldHMgY2xlYW5lZCcpKVxuICAgIGF3YWl0IGZzLmVtcHR5RGlyKGNvbmZpZy5wYXRocy5BU1NFVFMpXG4gICAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIEFzc2V0cyBjbGVhbmVkJykpXG4gIH1cblxuICBjb25maWcgPSBhd2FpdCBwcmVwYXJlUm91dGVzKHsgY29uZmlnLCBvcHRzOiB7IGRldjogZmFsc2UgfSB9KVxuXG4gIGNvbnNvbGUubG9nKCc9PiBDb3B5aW5nIHB1YmxpYyBkaXJlY3RvcnkuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUHVibGljIGRpcmVjdG9yeSBjb3BpZWQnKSlcbiAgY29weVB1YmxpY0ZvbGRlcihjb25maWcpXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBQdWJsaWMgZGlyZWN0b3J5IGNvcGllZCcpKVxuXG4gIC8vIEJ1aWxkIHN0YXRpYyBwYWdlcyBhbmQgSlNPTlxuICBjb25zb2xlLmxvZygnPT4gQnVuZGxpbmcgQXBwLi4uJylcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIEFwcCBCdW5kbGVkJykpXG4gIGF3YWl0IGJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMoeyBjb25maWcgfSlcbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIEFwcCBCdW5kbGVkJykpXG5cbiAgaWYgKGNvbmZpZy5idW5kbGVBbmFseXplcikge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ1xufSlcbiJdfQ==