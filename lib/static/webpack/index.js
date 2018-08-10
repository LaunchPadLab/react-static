"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpackConfig = webpackConfig;
exports.buildCompiler = buildCompiler;
exports.startDevServer = startDevServer;
exports.buildProductionBundles = buildProductionBundles;
exports.reloadRoutes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _webpack = _interopRequireDefault(require("webpack"));

var _path = _interopRequireDefault(require("path"));

var _formatWebpackMessages = _interopRequireDefault(require("react-dev-utils/formatWebpackMessages"));

var _chalk = _interopRequireDefault(require("chalk"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _socket = _interopRequireDefault(require("socket.io"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _rules = require("./rules");

var _utils = require("../../utils");

var _shared = require("../../utils/shared");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var resolvedReloadRoutes;
var reloadWebpackRoutes;
var devServer;

var reloadRoutes = function reloadRoutes() {
  if (!resolvedReloadRoutes) {
    // Not ready yet, so just wait
    return;
  }

  return resolvedReloadRoutes.apply(void 0, arguments);
};

exports.reloadRoutes = reloadRoutes;

// Builds a compiler using a stage preset, then allows extension via
// webpackConfigurator
function webpackConfig(_ref) {
  var config = _ref.config,
      stage = _ref.stage;
  var webpackConfig;

  if (stage === 'dev') {
    webpackConfig = require('./webpack.config.dev').default({
      config: config
    });
  } else if (stage === 'prod') {
    webpackConfig = require('./webpack.config.prod').default({
      config: config
    });
  } else if (stage === 'node') {
    webpackConfig = require('./webpack.config.prod').default({
      config: config,
      isNode: true
    });
  } else {
    throw new Error('A stage is required when building a compiler.');
  }

  var defaultLoaders = (0, _rules.getStagedRules)({
    config: config,
    stage: stage
  });
  var transformers = (0, _utils.getConfigPluginHooks)(config, 'webpack').reduce(function (all, curr) {
    if (Array.isArray(curr)) {
      return _toConsumableArray(all).concat(_toConsumableArray(curr));
    }

    return _toConsumableArray(all).concat([curr]);
  }, []);
  transformers.forEach(function (transformer) {
    var modifiedConfig = transformer(webpackConfig, {
      stage: stage,
      defaultLoaders: defaultLoaders
    });

    if (modifiedConfig) {
      webpackConfig = modifiedConfig;
    }
  });
  return webpackConfig;
}

function buildCompiler(_x) {
  return _buildCompiler.apply(this, arguments);
} // Starts the development server


function _buildCompiler() {
  _buildCompiler = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref2) {
    var config, stage;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref2.config, stage = _ref2.stage;
            return _context.abrupt("return", (0, _webpack.default)(webpackConfig({
              config: config,
              stage: stage
            })));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _buildCompiler.apply(this, arguments);
}

function startDevServer(_x2) {
  return _startDevServer.apply(this, arguments);
}

function _startDevServer() {
  _startDevServer = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(_ref3) {
    var config, devCompiler, intendedPort, port, messagePort, host, devServerConfig, first, socket;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            config = _ref3.config;

            if (!devServer) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", devServer);

          case 3:
            _context7.next = 5;
            return buildCompiler({
              config: config,
              stage: 'dev'
            });

          case 5:
            devCompiler = _context7.sent;
            // Default to localhost:3000, or use a custom combo if defined in static.config.js
            // or environment variables
            intendedPort = config.devServer && config.devServer.port || process.env.PORT || 3000;
            _context7.next = 9;
            return (0, _utils.findAvailablePort)(Number(intendedPort));

          case 9:
            port = _context7.sent;
            _context7.next = 12;
            return (0, _utils.findAvailablePort)(4000, [port]);

          case 12:
            messagePort = _context7.sent;

            if (intendedPort !== port) {
              (0, _utils.time)(_chalk.default.red("=> Warning! Port ".concat(intendedPort, " is not available. Using port ").concat(_chalk.default.green(intendedPort), " instead!")));
            }

            host = config.devServer && config.devServer.host || process.env.HOST || 'http://localhost';
            devServerConfig = _objectSpread({
              hot: true,
              disableHostCheck: true,
              contentBase: [config.paths.PUBLIC, config.paths.DIST],
              publicPath: '/',
              historyApiFallback: true,
              compress: false,
              quiet: true
            }, config.devServer, {
              watchOptions: _objectSpread({
                ignored: 'node_modules'
              }, config.devServer ? config.devServer.watchOptions || {} : {}),
              before: function before(app) {
                // Serve the site data
                app.get('/__react-static__/getMessagePort',
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee2(req, res) {
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            res.json({
                              port: messagePort
                            });

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x4, _x5) {
                    return _ref5.apply(this, arguments);
                  };
                }());
                app.get('/__react-static__/siteData',
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(req, res, next) {
                    var siteData;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return config.getSiteData({
                              dev: true
                            });

                          case 3:
                            siteData = _context3.sent;
                            res.json(siteData);
                            _context3.next = 12;
                            break;

                          case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3["catch"](0);
                            res.status(500);
                            res.json(_context3.t0);
                            next(_context3.t0);

                          case 12:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this, [[0, 7]]);
                  }));

                  return function (_x6, _x7, _x8) {
                    return _ref6.apply(this, arguments);
                  };
                }()); // Since routes may change during dev, this function can rebuild all of the config
                // routes. It also references the original config when possible, to make sure it
                // uses any up to date getData callback generated from new or replacement routes.

                reloadWebpackRoutes = function reloadWebpackRoutes(config) {
                  // Serve each routes data
                  config.routes.forEach(function (_ref7) {
                    var routePath = _ref7.path;
                    app.get("/__react-static__/routeInfo/".concat(encodeURI(routePath === '/' ? '' : routePath)),
                    /*#__PURE__*/
                    function () {
                      var _ref8 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regenerator.default.mark(function _callee4(req, res, next) {
                        var route, allProps;
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                // Make sure we have the most up to date route from the config, not
                                // an out of dat object.
                                route = config.routes.find(function (d) {
                                  return d.path === routePath;
                                });
                                _context4.prev = 1;

                                if (route) {
                                  _context4.next = 4;
                                  break;
                                }

                                throw new Error('Route could not be found!');

                              case 4:
                                if (!route.getData) {
                                  _context4.next = 10;
                                  break;
                                }

                                _context4.next = 7;
                                return route.getData({
                                  dev: true
                                });

                              case 7:
                                _context4.t0 = _context4.sent;
                                _context4.next = 11;
                                break;

                              case 10:
                                _context4.t0 = {};

                              case 11:
                                allProps = _context4.t0;
                                res.json(_objectSpread({}, route, {
                                  allProps: allProps
                                }));
                                _context4.next = 19;
                                break;

                              case 15:
                                _context4.prev = 15;
                                _context4.t1 = _context4["catch"](1);
                                res.status(500);
                                next(_context4.t1);

                              case 19:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this, [[1, 15]]);
                      }));

                      return function (_x9, _x10, _x11) {
                        return _ref8.apply(this, arguments);
                      };
                    }());
                  });
                };

                reloadWebpackRoutes(config);

                if (config.devServer && config.devServer.before) {
                  config.devServer.before(app);
                }
              },
              port: port,
              host: host
            });
            first = true;
            console.log('=> Building App Bundle...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Build Complete"));
            devCompiler.hooks.invalid.tap({
              name: 'React-Static'
            }, function (file) {
              console.log('=> File changed:', file.replace(config.paths.ROOT, ''));
              console.log('=> Updating build...');
              (0, _utils.time)(_chalk.default.green("=> [\u2713] Build Updated"));
            });
            devCompiler.hooks.done.tap({
              name: 'React-Static'
            }, function (stats) {
              var messages = (0, _formatWebpackMessages.default)(stats.toJson({}, true));
              var isSuccessful = !messages.errors.length && !messages.warnings.length;

              if (isSuccessful) {
                if (first) {
                  (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Build Complete"));
                  console.log(_chalk.default.green("=> [\u2713] App serving at"), "".concat(host, ":").concat(port));
                } else {
                  (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Build Updated"));
                }

                if (first && config.onStart) {
                  config.onStart({
                    devServerConfig: devServerConfig
                  });
                }
              }

              first = false;

              if (messages.errors.length) {
                console.log(_chalk.default.red('Failed to build! Fix any errors and try again!'));
                messages.errors.forEach(function (message) {
                  console.log(message);
                  console.log();
                });
              }

              if (messages.warnings.length) {
                console.log(_chalk.default.yellow('Build complete with warnings.'));
                console.log();
                messages.warnings.forEach(function (message) {
                  console.log(message);
                  console.log();
                });
              }
            }); // Start the webpack dev server

            devServer = new _webpackDevServer.default(devCompiler, devServerConfig); // Start the messages socket

            socket = (0, _socket.default)();
            socket.listen(messagePort);

            resolvedReloadRoutes =
            /*#__PURE__*/
            function () {
              var _ref9 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee6(paths, data) {
                return _regenerator.default.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return (0, _.prepareRoutes)({
                          config: config,
                          opts: {
                            dev: true,
                            data: data
                          },
                          silent: true
                        },
                        /*#__PURE__*/
                        function () {
                          var _ref10 = _asyncToGenerator(
                          /*#__PURE__*/
                          _regenerator.default.mark(function _callee5(config) {
                            return _regenerator.default.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    if (!paths) {
                                      paths = config.routes.map(function (route) {
                                        return route.path;
                                      });
                                    }

                                    paths = paths.map(_shared.cleanPath);
                                    reloadWebpackRoutes(config);
                                    socket.emit('message', {
                                      type: 'reloadRoutes',
                                      paths: paths
                                    });

                                  case 4:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));

                          return function (_x14) {
                            return _ref10.apply(this, arguments);
                          };
                        }());

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              return function resolvedReloadRoutes(_x12, _x13) {
                return _ref9.apply(this, arguments);
              };
            }();

            _context7.next = 27;
            return new Promise(function (resolve, reject) {
              devServer.listen(port, null, function (err) {
                if (err) {
                  return reject(err);
                }

                resolve();
              });
            });

          case 27:
            return _context7.abrupt("return", devServer);

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _startDevServer.apply(this, arguments);
}

function buildProductionBundles(_x3) {
  return _buildProductionBundles.apply(this, arguments);
}

function _buildProductionBundles() {
  _buildProductionBundles = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(_ref4) {
    var config;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            config = _ref4.config;
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              (0, _webpack.default)([webpackConfig({
                config: config,
                stage: 'prod'
              }), webpackConfig({
                config: config,
                stage: 'node'
              })]).run(function (err, stats) {
                if (err) {
                  console.log(_chalk.default.red(err.stack || err));

                  if (err.details) {
                    console.log(_chalk.default.red(err.details));
                  }

                  return reject(err);
                }

                stats.toJson('verbose');

                var _stats$stats = _slicedToArray(stats.stats, 2),
                    prodStats = _stats$stats[0],
                    nodeStats = _stats$stats[1];

                checkBuildStats('prod', prodStats);
                checkBuildStats('node', nodeStats);

                function checkBuildStats(stage, stageStats) {
                  var buildErrors = stageStats.hasErrors();
                  var buildWarnings = stageStats.hasWarnings();

                  if (buildErrors || buildWarnings) {
                    console.log(stageStats.toString({
                      context: config.context,
                      performance: false,
                      hash: false,
                      timings: true,
                      entrypoints: false,
                      chunkOrigins: false,
                      chunkModules: false,
                      colors: true
                    }));

                    if (buildErrors) {
                      console.log(_chalk.default.red.bold("\n                => There were ERRORS during the ".concat(stage, " build stage! :(\n                => Fix them and try again!\n              ")));
                    } else if (buildWarnings) {
                      console.log(_chalk.default.yellow("\n=> There were WARNINGS during the ".concat(stage, " build stage. Your site will still function, but you may achieve better performance by addressing the warnings above.\n")));
                    }
                  }
                }

                var prodStatsJson = prodStats.toJson();

                _fsExtra.default.outputFileSync(_path.default.join(config.paths.TEMP, 'client-stats.json'), JSON.stringify(prodStatsJson, null, 2));

                _fsExtra.default.outputFileSync(_path.default.join(config.paths.TEMP, 'bundle-environment.json'), JSON.stringify(process.env, null, 2));

                resolve(prodStatsJson);
              });
            }));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _buildProductionBundles.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlZFJlbG9hZFJvdXRlcyIsInJlbG9hZFdlYnBhY2tSb3V0ZXMiLCJkZXZTZXJ2ZXIiLCJyZWxvYWRSb3V0ZXMiLCJ3ZWJwYWNrQ29uZmlnIiwiY29uZmlnIiwic3RhZ2UiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImlzTm9kZSIsIkVycm9yIiwiZGVmYXVsdExvYWRlcnMiLCJ0cmFuc2Zvcm1lcnMiLCJyZWR1Y2UiLCJhbGwiLCJjdXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInRyYW5zZm9ybWVyIiwibW9kaWZpZWRDb25maWciLCJidWlsZENvbXBpbGVyIiwic3RhcnREZXZTZXJ2ZXIiLCJkZXZDb21waWxlciIsImludGVuZGVkUG9ydCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsIk51bWJlciIsIm1lc3NhZ2VQb3J0IiwiY2hhbGsiLCJyZWQiLCJncmVlbiIsImhvc3QiLCJIT1NUIiwiZGV2U2VydmVyQ29uZmlnIiwiaG90IiwiZGlzYWJsZUhvc3RDaGVjayIsImNvbnRlbnRCYXNlIiwicGF0aHMiLCJQVUJMSUMiLCJESVNUIiwicHVibGljUGF0aCIsImhpc3RvcnlBcGlGYWxsYmFjayIsImNvbXByZXNzIiwicXVpZXQiLCJ3YXRjaE9wdGlvbnMiLCJpZ25vcmVkIiwiYmVmb3JlIiwiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIm5leHQiLCJnZXRTaXRlRGF0YSIsImRldiIsInNpdGVEYXRhIiwic3RhdHVzIiwicm91dGVzIiwicm91dGVQYXRoIiwicGF0aCIsImVuY29kZVVSSSIsInJvdXRlIiwiZmluZCIsImQiLCJnZXREYXRhIiwiYWxsUHJvcHMiLCJmaXJzdCIsImNvbnNvbGUiLCJsb2ciLCJob29rcyIsImludmFsaWQiLCJ0YXAiLCJuYW1lIiwiZmlsZSIsInJlcGxhY2UiLCJST09UIiwiZG9uZSIsInN0YXRzIiwibWVzc2FnZXMiLCJ0b0pzb24iLCJpc1N1Y2Nlc3NmdWwiLCJlcnJvcnMiLCJsZW5ndGgiLCJ3YXJuaW5ncyIsIm9uU3RhcnQiLCJtZXNzYWdlIiwieWVsbG93IiwiV2VicGFja0RldlNlcnZlciIsInNvY2tldCIsImxpc3RlbiIsImRhdGEiLCJvcHRzIiwic2lsZW50IiwibWFwIiwiY2xlYW5QYXRoIiwiZW1pdCIsInR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMiLCJydW4iLCJzdGFjayIsImRldGFpbHMiLCJwcm9kU3RhdHMiLCJub2RlU3RhdHMiLCJjaGVja0J1aWxkU3RhdHMiLCJzdGFnZVN0YXRzIiwiYnVpbGRFcnJvcnMiLCJoYXNFcnJvcnMiLCJidWlsZFdhcm5pbmdzIiwiaGFzV2FybmluZ3MiLCJ0b1N0cmluZyIsImNvbnRleHQiLCJwZXJmb3JtYW5jZSIsImhhc2giLCJ0aW1pbmdzIiwiZW50cnlwb2ludHMiLCJjaHVua09yaWdpbnMiLCJjaHVua01vZHVsZXMiLCJjb2xvcnMiLCJib2xkIiwicHJvZFN0YXRzSnNvbiIsImZzIiwib3V0cHV0RmlsZVN5bmMiLCJqb2luIiwiVEVNUCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFNQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLG9CQUFKO0FBQ0EsSUFBSUMsbUJBQUo7QUFFQSxJQUFJQyxTQUFKOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWE7QUFDaEMsTUFBSSxDQUFDSCxvQkFBTCxFQUEyQjtBQUN6QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBT0Esb0JBQW9CLE1BQXBCLG1CQUFQO0FBQ0QsQ0FORDs7OztBQVVBO0FBQ0E7QUFDTyxTQUFTSSxhQUFULE9BQTBDO0FBQUEsTUFBakJD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QVksRUFBRSxLQVBJO0FBUWxCQyxzQkFBQUEsTUFBTSxFQUFFO0FBUlUscUJBQXBCLENBREY7O0FBWUEsd0JBQUlaLFdBQUosRUFBaUI7QUFDZjFDLHNCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRXhDLGVBQU1DLEdBQU4sQ0FBVTZGLElBQVYsNkRBQ29DdkgsS0FEcEMsa0ZBREY7QUFNRCxxQkFQRCxNQU9PLElBQUk0RyxhQUFKLEVBQW1CO0FBQ3hCNUMsc0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFeEMsZUFBTTBELE1BQU4sK0NBQ3NCbkYsS0FEdEIsNkhBREY7QUFLRDtBQUNGO0FBQ0Y7O0FBRUQsb0JBQU13SCxhQUFhLEdBQUdsQixTQUFTLENBQUMxQixNQUFWLEVBQXRCOztBQUVBNkMsaUNBQUdDLGNBQUgsQ0FDRWxFLGNBQUttRSxJQUFMLENBQVU1SCxNQUFNLENBQUNtQyxLQUFQLENBQWEwRixJQUF2QixFQUE2QixtQkFBN0IsQ0FERixFQUVFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sYUFBZixFQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQUZGOztBQUtBQyxpQ0FBR0MsY0FBSCxDQUNFbEUsY0FBS21FLElBQUwsQ0FBVTVILE1BQU0sQ0FBQ21DLEtBQVAsQ0FBYTBGLElBQXZCLEVBQTZCLHlCQUE3QixDQURGLEVBRUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlMUcsT0FBTyxDQUFDQyxHQUF2QixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQUZGOztBQUtBMEUsZ0JBQUFBLE9BQU8sQ0FBQ3lCLGFBQUQsQ0FBUDtBQUNELGVBbEVEO0FBbUVELGFBcEVNLENBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUsIHJlYWN0L25vLWRhbmdlciwgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjaydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZm9ybWF0V2VicGFja01lc3NhZ2VzIGZyb20gJ3JlYWN0LWRldi11dGlscy9mb3JtYXRXZWJwYWNrTWVzc2FnZXMnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgV2VicGFja0RldlNlcnZlciBmcm9tICd3ZWJwYWNrLWRldi1zZXJ2ZXInXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuLy8gaW1wb3J0IGVycm9yT3ZlcmxheU1pZGRsZXdhcmUgZnJvbSAncmVhY3QtZGV2LXV0aWxzL2Vycm9yT3ZlcmxheU1pZGRsZXdhcmUnXG4vL1xuaW1wb3J0IHsgZ2V0U3RhZ2VkUnVsZXMgfSBmcm9tICcuL3J1bGVzJ1xuaW1wb3J0IHtcbiAgZmluZEF2YWlsYWJsZVBvcnQsXG4gIHRpbWUsXG4gIHRpbWVFbmQsXG4gIGdldENvbmZpZ1BsdWdpbkhvb2tzLFxufSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZCdcbmltcG9ydCB7IHByZXBhcmVSb3V0ZXMgfSBmcm9tIFwiLi5cIlxuXG5sZXQgcmVzb2x2ZWRSZWxvYWRSb3V0ZXNcbmxldCByZWxvYWRXZWJwYWNrUm91dGVzXG5cbmxldCBkZXZTZXJ2ZXJcblxuY29uc3QgcmVsb2FkUm91dGVzID0gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKCFyZXNvbHZlZFJlbG9hZFJvdXRlcykge1xuICAgIC8vIE5vdCByZWFkeSB5ZXQsIHNvIGp1c3Qgd2FpdFxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiByZXNvbHZlZFJlbG9hZFJvdXRlcyguLi5hcmdzKVxufVxuXG5leHBvcnQgeyByZWxvYWRSb3V0ZXMgfVxuXG4vLyBCdWlsZHMgYSBjb21waWxlciB1c2luZyBhIHN0YWdlIHByZXNldCwgdGhlbiBhbGxvd3MgZXh0ZW5zaW9uIHZpYVxuLy8gd2VicGFja0NvbmZpZ3VyYXRvclxuZXhwb3J0IGZ1bmN0aW9uIHdlYnBhY2tDb25maWcoeyBjb25maWcsIHN0YWdlIH0pIHtcbiAgbGV0IHdlYnBhY2tDb25maWdcbiAgaWYgKHN0YWdlID09PSAnZGV2Jykge1xuICAgIHdlYnBhY2tDb25maWcgPSByZXF1aXJlKCcuL3dlYnBhY2suY29uZmlnLmRldicpLmRlZmF1bHQoeyBjb25maWcgfSlcbiAgfSBlbHNlIGlmIChzdGFnZSA9PT0gJ3Byb2QnKSB7XG4gICAgd2VicGFja0NvbmZpZyA9IHJlcXVpcmUoJy4vd2VicGFjay5jb25maWcucHJvZCcpLmRlZmF1bHQoe1xuICAgICAgY29uZmlnLFxuICAgIH0pXG4gIH0gZWxzZSBpZiAoc3RhZ2UgPT09ICdub2RlJykge1xuICAgIHdlYnBhY2tDb25maWcgPSByZXF1aXJlKCcuL3dlYnBhY2suY29uZmlnLnByb2QnKS5kZWZhdWx0KHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIGlzTm9kZTogdHJ1ZSxcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBzdGFnZSBpcyByZXF1aXJlZCB3aGVuIGJ1aWxkaW5nIGEgY29tcGlsZXIuJylcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRMb2FkZXJzID0gZ2V0U3RhZ2VkUnVsZXMoeyBjb25maWcsIHN0YWdlIH0pXG5cbiAgY29uc3QgdHJhbnNmb3JtZXJzID0gZ2V0Q29uZmlnUGx1Z2luSG9va3MoY29uZmlnLCAnd2VicGFjaycpLnJlZHVjZShcbiAgICAoYWxsLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyKSkge1xuICAgICAgICByZXR1cm4gWy4uLmFsbCwgLi4uY3Vycl1cbiAgICAgIH1cbiAgICAgIHJldHVybiBbLi4uYWxsLCBjdXJyXVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIHRyYW5zZm9ybWVycy5mb3JFYWNoKHRyYW5zZm9ybWVyID0+IHtcbiAgICBjb25zdCBtb2RpZmllZENvbmZpZyA9IHRyYW5zZm9ybWVyKHdlYnBhY2tDb25maWcsIHtcbiAgICAgIHN0YWdlLFxuICAgICAgZGVmYXVsdExvYWRlcnMsXG4gICAgfSlcbiAgICBpZiAobW9kaWZpZWRDb25maWcpIHtcbiAgICAgIHdlYnBhY2tDb25maWcgPSBtb2RpZmllZENvbmZpZ1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHdlYnBhY2tDb25maWdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkQ29tcGlsZXIoeyBjb25maWcsIHN0YWdlIH0pIHtcbiAgcmV0dXJuIHdlYnBhY2sod2VicGFja0NvbmZpZyh7IGNvbmZpZywgc3RhZ2UgfSkpXG59XG5cbi8vIFN0YXJ0cyB0aGUgZGV2ZWxvcG1lbnQgc2VydmVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnREZXZTZXJ2ZXIoeyBjb25maWcgfSkge1xuICBpZiAoZGV2U2VydmVyKSB7XG4gICAgcmV0dXJuIGRldlNlcnZlclxuICB9XG5cbiAgY29uc3QgZGV2Q29tcGlsZXIgPSBhd2FpdCBidWlsZENvbXBpbGVyKHsgY29uZmlnLCBzdGFnZTogJ2RldicgfSlcblxuICAvLyBEZWZhdWx0IHRvIGxvY2FsaG9zdDozMDAwLCBvciB1c2UgYSBjdXN0b20gY29tYm8gaWYgZGVmaW5lZCBpbiBzdGF0aWMuY29uZmlnLmpzXG4gIC8vIG9yIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICBjb25zdCBpbnRlbmRlZFBvcnQgPVxuICAgIChjb25maWcuZGV2U2VydmVyICYmIGNvbmZpZy5kZXZTZXJ2ZXIucG9ydCkgfHwgcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwXG4gIGNvbnN0IHBvcnQgPSBhd2FpdCBmaW5kQXZhaWxhYmxlUG9ydChOdW1iZXIoaW50ZW5kZWRQb3J0KSlcbiAgLy8gRmluZCBhbiBhdmFpbGFibGUgcG9ydCBmb3IgbWVzc2FnZXMsIGFzIGxvbmcgYXMgaXQncyBub3QgdGhlIGRldlNlcnZlciBwb3J0XG4gIGNvbnN0IG1lc3NhZ2VQb3J0ID0gYXdhaXQgZmluZEF2YWlsYWJsZVBvcnQoNDAwMCwgW3BvcnRdKVxuICBpZiAoaW50ZW5kZWRQb3J0ICE9PSBwb3J0KSB7XG4gICAgdGltZShcbiAgICAgIGNoYWxrLnJlZChcbiAgICAgICAgYD0+IFdhcm5pbmchIFBvcnQgJHtpbnRlbmRlZFBvcnR9IGlzIG5vdCBhdmFpbGFibGUuIFVzaW5nIHBvcnQgJHtjaGFsay5ncmVlbihcbiAgICAgICAgICBpbnRlbmRlZFBvcnRcbiAgICAgICAgKX0gaW5zdGVhZCFgXG4gICAgICApXG4gICAgKVxuICB9XG4gIGNvbnN0IGhvc3QgPVxuICAgIChjb25maWcuZGV2U2VydmVyICYmIGNvbmZpZy5kZXZTZXJ2ZXIuaG9zdCkgfHxcbiAgICBwcm9jZXNzLmVudi5IT1NUIHx8XG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3QnXG5cbiAgY29uc3QgZGV2U2VydmVyQ29uZmlnID0ge1xuICAgIGhvdDogdHJ1ZSxcbiAgICBkaXNhYmxlSG9zdENoZWNrOiB0cnVlLFxuICAgIGNvbnRlbnRCYXNlOiBbY29uZmlnLnBhdGhzLlBVQkxJQywgY29uZmlnLnBhdGhzLkRJU1RdLFxuICAgIHB1YmxpY1BhdGg6ICcvJyxcbiAgICBoaXN0b3J5QXBpRmFsbGJhY2s6IHRydWUsXG4gICAgY29tcHJlc3M6IGZhbHNlLFxuICAgIHF1aWV0OiB0cnVlLFxuICAgIC4uLmNvbmZpZy5kZXZTZXJ2ZXIsXG4gICAgd2F0Y2hPcHRpb25zOiB7XG4gICAgICBpZ25vcmVkOiAnbm9kZV9tb2R1bGVzJyxcbiAgICAgIC8vIGlnbm9yZWQ6IG5ldyBSZWdFeHAoYChub2RlX21vZHVsZXN8JHtjb25maWcucGF0aHMuUEFHRVN9KWApLFxuICAgICAgLi4uKGNvbmZpZy5kZXZTZXJ2ZXIgPyBjb25maWcuZGV2U2VydmVyLndhdGNoT3B0aW9ucyB8fCB7fSA6IHt9KSxcbiAgICB9LFxuICAgIGJlZm9yZTogYXBwID0+IHtcbiAgICAgIC8vIFNlcnZlIHRoZSBzaXRlIGRhdGFcbiAgICAgIGFwcC5nZXQoJy9fX3JlYWN0LXN0YXRpY19fL2dldE1lc3NhZ2VQb3J0JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICBwb3J0OiBtZXNzYWdlUG9ydCxcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGFwcC5nZXQoJy9fX3JlYWN0LXN0YXRpY19fL3NpdGVEYXRhJywgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBjb25maWcuZ2V0U2l0ZURhdGEoeyBkZXY6IHRydWUgfSlcbiAgICAgICAgICByZXMuanNvbihzaXRlRGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgICAgcmVzLmpzb24oZXJyKVxuICAgICAgICAgIG5leHQoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBTaW5jZSByb3V0ZXMgbWF5IGNoYW5nZSBkdXJpbmcgZGV2LCB0aGlzIGZ1bmN0aW9uIGNhbiByZWJ1aWxkIGFsbCBvZiB0aGUgY29uZmlnXG4gICAgICAvLyByb3V0ZXMuIEl0IGFsc28gcmVmZXJlbmNlcyB0aGUgb3JpZ2luYWwgY29uZmlnIHdoZW4gcG9zc2libGUsIHRvIG1ha2Ugc3VyZSBpdFxuICAgICAgLy8gdXNlcyBhbnkgdXAgdG8gZGF0ZSBnZXREYXRhIGNhbGxiYWNrIGdlbmVyYXRlZCBmcm9tIG5ldyBvciByZXBsYWNlbWVudCByb3V0ZXMuXG4gICAgICByZWxvYWRXZWJwYWNrUm91dGVzID0gY29uZmlnID0+IHtcbiAgICAgICAgLy8gU2VydmUgZWFjaCByb3V0ZXMgZGF0YVxuICAgICAgICBjb25maWcucm91dGVzLmZvckVhY2goKHsgcGF0aDogcm91dGVQYXRoIH0pID0+IHtcbiAgICAgICAgICBhcHAuZ2V0KFxuICAgICAgICAgICAgYC9fX3JlYWN0LXN0YXRpY19fL3JvdXRlSW5mby8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgcm91dGVQYXRoID09PSAnLycgPyAnJyA6IHJvdXRlUGF0aFxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIHRoZSBtb3N0IHVwIHRvIGRhdGUgcm91dGUgZnJvbSB0aGUgY29uZmlnLCBub3RcbiAgICAgICAgICAgICAgLy8gYW4gb3V0IG9mIGRhdCBvYmplY3QuXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlcy5maW5kKGQgPT4gZC5wYXRoID09PSByb3V0ZVBhdGgpXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZSBjb3VsZCBub3QgYmUgZm91bmQhJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsUHJvcHMgPSByb3V0ZS5nZXREYXRhXG4gICAgICAgICAgICAgICAgICA/IGF3YWl0IHJvdXRlLmdldERhdGEoeyBkZXY6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgIGFsbFByb3BzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICAgICAgICAgIG5leHQoZXJyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZWxvYWRXZWJwYWNrUm91dGVzKGNvbmZpZylcblxuICAgICAgaWYgKGNvbmZpZy5kZXZTZXJ2ZXIgJiYgY29uZmlnLmRldlNlcnZlci5iZWZvcmUpIHtcbiAgICAgICAgY29uZmlnLmRldlNlcnZlci5iZWZvcmUoYXBwKVxuICAgICAgfVxuICAgIH0sXG4gICAgcG9ydCxcbiAgICBob3N0LFxuICB9XG5cbiAgbGV0IGZpcnN0ID0gdHJ1ZVxuICBjb25zb2xlLmxvZygnPT4gQnVpbGRpbmcgQXBwIEJ1bmRsZS4uLicpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBCdWlsZCBDb21wbGV0ZScpKVxuXG4gIGRldkNvbXBpbGVyLmhvb2tzLmludmFsaWQudGFwKFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWFjdC1TdGF0aWMnLFxuICAgIH0sXG4gICAgZmlsZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnPT4gRmlsZSBjaGFuZ2VkOicsIGZpbGUucmVwbGFjZShjb25maWcucGF0aHMuUk9PVCwgJycpKVxuICAgICAgY29uc29sZS5sb2coJz0+IFVwZGF0aW5nIGJ1aWxkLi4uJylcbiAgICAgIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBCdWlsZCBVcGRhdGVkJykpXG4gICAgfVxuICApXG5cbiAgZGV2Q29tcGlsZXIuaG9va3MuZG9uZS50YXAoXG4gICAge1xuICAgICAgbmFtZTogJ1JlYWN0LVN0YXRpYycsXG4gICAgfSxcbiAgICBzdGF0cyA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IGZvcm1hdFdlYnBhY2tNZXNzYWdlcyhzdGF0cy50b0pzb24oe30sIHRydWUpKVxuICAgICAgY29uc3QgaXNTdWNjZXNzZnVsID0gIW1lc3NhZ2VzLmVycm9ycy5sZW5ndGggJiYgIW1lc3NhZ2VzLndhcm5pbmdzLmxlbmd0aFxuXG4gICAgICBpZiAoaXNTdWNjZXNzZnVsKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBCdWlsZCBDb21wbGV0ZScpKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBBcHAgc2VydmluZyBhdCcpLFxuICAgICAgICAgICAgYCR7aG9zdH06JHtwb3J0fWBcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIEJ1aWxkIFVwZGF0ZWQnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3QgJiYgY29uZmlnLm9uU3RhcnQpIHtcbiAgICAgICAgICBjb25maWcub25TdGFydCh7IGRldlNlcnZlckNvbmZpZyB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpcnN0ID0gZmFsc2VcblxuICAgICAgaWYgKG1lc3NhZ2VzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkKCdGYWlsZWQgdG8gYnVpbGQhIEZpeCBhbnkgZXJyb3JzIGFuZCB0cnkgYWdhaW4hJykpXG4gICAgICAgIG1lc3NhZ2VzLmVycm9ycy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZXMud2FybmluZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnllbGxvdygnQnVpbGQgY29tcGxldGUgd2l0aCB3YXJuaW5ncy4nKSlcbiAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgICBtZXNzYWdlcy53YXJuaW5ncy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIC8vIFN0YXJ0IHRoZSB3ZWJwYWNrIGRldiBzZXJ2ZXJcbiAgZGV2U2VydmVyID0gbmV3IFdlYnBhY2tEZXZTZXJ2ZXIoZGV2Q29tcGlsZXIsIGRldlNlcnZlckNvbmZpZylcblxuICAvLyBTdGFydCB0aGUgbWVzc2FnZXMgc29ja2V0XG4gIGNvbnN0IHNvY2tldCA9IGlvKClcbiAgc29ja2V0Lmxpc3RlbihtZXNzYWdlUG9ydClcblxuICByZXNvbHZlZFJlbG9hZFJvdXRlcyA9IGFzeW5jIChwYXRocywgZGF0YSkgPT4ge1xuICAgIGF3YWl0IHByZXBhcmVSb3V0ZXMoXG4gICAgICB7IGNvbmZpZywgb3B0czogeyBkZXY6IHRydWUsIGRhdGEgfSwgc2lsZW50OiB0cnVlIH0sXG4gICAgICBhc3luYyBjb25maWcgPT4ge1xuICAgICAgICBpZiAoIXBhdGhzKSB7XG4gICAgICAgICAgcGF0aHMgPSBjb25maWcucm91dGVzLm1hcChyb3V0ZSA9PiByb3V0ZS5wYXRoKVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzID0gcGF0aHMubWFwKGNsZWFuUGF0aClcbiAgICAgICAgcmVsb2FkV2VicGFja1JvdXRlcyhjb25maWcpXG4gICAgICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgeyB0eXBlOiAncmVsb2FkUm91dGVzJywgcGF0aHMgfSlcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZGV2U2VydmVyLmxpc3Rlbihwb3J0LCBudWxsLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGRldlNlcnZlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVpbGRQcm9kdWN0aW9uQnVuZGxlcyh7IGNvbmZpZyB9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd2VicGFjayhbXG4gICAgICB3ZWJwYWNrQ29uZmlnKHsgY29uZmlnLCBzdGFnZTogJ3Byb2QnIH0pLFxuICAgICAgd2VicGFja0NvbmZpZyh7IGNvbmZpZywgc3RhZ2U6ICdub2RlJyB9KSxcbiAgICBdKS5ydW4oKGVyciwgc3RhdHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkKGVyci5zdGFjayB8fCBlcnIpKVxuICAgICAgICBpZiAoZXJyLmRldGFpbHMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoZXJyLmRldGFpbHMpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgfVxuXG4gICAgICBzdGF0cy50b0pzb24oJ3ZlcmJvc2UnKVxuXG4gICAgICBjb25zdCBbcHJvZFN0YXRzLCBub2RlU3RhdHNdID0gc3RhdHMuc3RhdHNcblxuICAgICAgY2hlY2tCdWlsZFN0YXRzKCdwcm9kJywgcHJvZFN0YXRzKVxuICAgICAgY2hlY2tCdWlsZFN0YXRzKCdub2RlJywgbm9kZVN0YXRzKVxuXG4gICAgICBmdW5jdGlvbiBjaGVja0J1aWxkU3RhdHMoc3RhZ2UsIHN0YWdlU3RhdHMpIHtcbiAgICAgICAgY29uc3QgYnVpbGRFcnJvcnMgPSBzdGFnZVN0YXRzLmhhc0Vycm9ycygpXG4gICAgICAgIGNvbnN0IGJ1aWxkV2FybmluZ3MgPSBzdGFnZVN0YXRzLmhhc1dhcm5pbmdzKClcblxuICAgICAgICBpZiAoYnVpbGRFcnJvcnMgfHwgYnVpbGRXYXJuaW5ncykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgc3RhZ2VTdGF0cy50b1N0cmluZyh7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNvbmZpZy5jb250ZXh0LFxuICAgICAgICAgICAgICBwZXJmb3JtYW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgIGhhc2g6IGZhbHNlLFxuICAgICAgICAgICAgICB0aW1pbmdzOiB0cnVlLFxuICAgICAgICAgICAgICBlbnRyeXBvaW50czogZmFsc2UsXG4gICAgICAgICAgICAgIGNodW5rT3JpZ2luczogZmFsc2UsXG4gICAgICAgICAgICAgIGNodW5rTW9kdWxlczogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbG9yczogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChidWlsZEVycm9ycykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGNoYWxrLnJlZC5ib2xkKGBcbiAgICAgICAgICAgICAgICA9PiBUaGVyZSB3ZXJlIEVSUk9SUyBkdXJpbmcgdGhlICR7c3RhZ2V9IGJ1aWxkIHN0YWdlISA6KFxuICAgICAgICAgICAgICAgID0+IEZpeCB0aGVtIGFuZCB0cnkgYWdhaW4hXG4gICAgICAgICAgICAgIGApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChidWlsZFdhcm5pbmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgY2hhbGsueWVsbG93KGBcbj0+IFRoZXJlIHdlcmUgV0FSTklOR1MgZHVyaW5nIHRoZSAke3N0YWdlfSBidWlsZCBzdGFnZS4gWW91ciBzaXRlIHdpbGwgc3RpbGwgZnVuY3Rpb24sIGJ1dCB5b3UgbWF5IGFjaGlldmUgYmV0dGVyIHBlcmZvcm1hbmNlIGJ5IGFkZHJlc3NpbmcgdGhlIHdhcm5pbmdzIGFib3ZlLlxuYClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZFN0YXRzSnNvbiA9IHByb2RTdGF0cy50b0pzb24oKVxuXG4gICAgICBmcy5vdXRwdXRGaWxlU3luYyhcbiAgICAgICAgcGF0aC5qb2luKGNvbmZpZy5wYXRocy5URU1QLCAnY2xpZW50LXN0YXRzLmpzb24nKSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvZFN0YXRzSnNvbiwgbnVsbCwgMilcbiAgICAgIClcblxuICAgICAgZnMub3V0cHV0RmlsZVN5bmMoXG4gICAgICAgIHBhdGguam9pbihjb25maWcucGF0aHMuVEVNUCwgJ2J1bmRsZS1lbnZpcm9ubWVudC5qc29uJyksXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LCBudWxsLCAyKVxuICAgICAgKVxuXG4gICAgICByZXNvbHZlKHByb2RTdGF0c0pzb24pXG4gICAgfSlcbiAgfSlcbn1cbiJdfQ==