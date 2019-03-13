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
                        return _context6.abrupt("return", (0, _.prepareRoutes)({
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
                        }()));

                      case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlZFJlbG9hZFJvdXRlcyIsInJlbG9hZFdlYnBhY2tSb3V0ZXMiLCJkZXZTZXJ2ZXIiLCJyZWxvYWRSb3V0ZXMiLCJ3ZWJwYWNrQ29uZmlnIiwiY29uZmlnIiwic3RhZ2UiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImlzTm9kZSIsIkVycm9yIiwiZGVmYXVsdExvYWRlcnMiLCJ0cmFuc2Zvcm1lcnMiLCJyZWR1Y2UiLCJhbGwiLCJjdXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInRyYW5zZm9ybWVyIiwibW9kaWZpZWRDb25maWciLCJidWlsZENvbXBpbGVyIiwic3RhcnREZXZTZXJ2ZXIiLCJkZXZDb21waWxlciIsImludGVuZGVkUG9ydCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsIk51bWJlciIsIm1lc3NhZ2VQb3J0IiwiY2hhbGsiLCJyZWQiLCJncmVlbiIsImhvc3QiLCJIT1NUIiwiZGV2U2VydmVyQ29uZmlnIiwiaG90IiwiZGlzYWJsZUhvc3RDaGVjayIsImNvbnRlbnRCYXNlIiwicGF0aHMiLCJQVUJMSUMiLCJESVNUIiwicHVibGljUGF0aCIsImhpc3RvcnlBcGlGYWxsYmFjayIsImNvbXByZXNzIiwicXVpZXQiLCJ3YXRjaE9wdGlvbnMiLCJpZ25vcmVkIiwiYmVmb3JlIiwiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsIm5leHQiLCJnZXRTaXRlRGF0YSIsImRldiIsInNpdGVEYXRhIiwic3RhdHVzIiwicm91dGVzIiwicm91dGVQYXRoIiwicGF0aCIsImVuY29kZVVSSSIsInJvdXRlIiwiZmluZCIsImQiLCJnZXREYXRhIiwiYWxsUHJvcHMiLCJmaXJzdCIsImNvbnNvbGUiLCJsb2ciLCJob29rcyIsImludmFsaWQiLCJ0YXAiLCJuYW1lIiwiZmlsZSIsInJlcGxhY2UiLCJST09UIiwiZG9uZSIsInN0YXRzIiwibWVzc2FnZXMiLCJ0b0pzb24iLCJpc1N1Y2Nlc3NmdWwiLCJlcnJvcnMiLCJsZW5ndGgiLCJ3YXJuaW5ncyIsIm9uU3RhcnQiLCJtZXNzYWdlIiwieWVsbG93IiwiV2VicGFja0RldlNlcnZlciIsInNvY2tldCIsImxpc3RlbiIsImRhdGEiLCJvcHRzIiwic2lsZW50IiwibWFwIiwiY2xlYW5QYXRoIiwiZW1pdCIsInR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMiLCJydW4iLCJzdGFjayIsImRldGFpbHMiLCJwcm9kU3RhdHMiLCJub2RlU3RhdHMiLCJjaGVja0J1aWxkU3RhdHMiLCJzdGFnZVN0YXRzIiwiYnVpbGRFcnJvcnMiLCJoYXNFcnJvcnMiLCJidWlsZFdhcm5pbmdzIiwiaGFzV2FybmluZ3MiLCJ0b1N0cmluZyIsImNvbnRleHQiLCJwZXJmb3JtYW5jZSIsImhhc2giLCJ0aW1pbmdzIiwiZW50cnlwb2ludHMiLCJjaHVua09yaWdpbnMiLCJjaHVua01vZHVsZXMiLCJjb2xvcnMiLCJib2xkIiwicHJvZFN0YXRzSnNvbiIsImZzIiwib3V0cHV0RmlsZVN5bmMiLCJqb2luIiwiVEVNUCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFNQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLG9CQUFKO0FBQ0EsSUFBSUMsbUJBQUo7QUFFQSxJQUFJQyxTQUFKOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWE7QUFDaEMsTUFBSSxDQUFDSCxvQkFBTCxFQUEyQjtBQUN6QjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBT0Esb0JBQW9CLE1BQXBCLG1CQUFQO0FBQ0QsQ0FORDs7OztBQVVBO0FBQ0E7QUFDTyxTQUFTSSxhQUFULE9BQTBDO0FBQUEsTUFBakJD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QUFZLEVBQUUsS0FQSTtBQVFsQkMsc0JBQUFBLE1BQU0sRUFBRTtBQVJVLHFCQUFwQixDQURGOztBQVlBLHdCQUFJWixXQUFKLEVBQWlCO0FBQ2YxQyxzQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQ0V4QyxlQUFNQyxHQUFOLENBQVU2RixJQUFWLDZEQUNvQ3ZILEtBRHBDLGtGQURGO0FBTUQscUJBUEQsTUFPTyxJQUFJNEcsYUFBSixFQUFtQjtBQUN4QjVDLHNCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRXhDLGVBQU0wRCxNQUFOLCtDQUNzQm5GLEtBRHRCLDZIQURGO0FBS0Q7QUFDRjtBQUNGOztBQUVELG9CQUFNd0gsYUFBYSxHQUFHbEIsU0FBUyxDQUFDMUIsTUFBVixFQUF0Qjs7QUFFQTZDLGlDQUFHQyxjQUFILENBQ0VsRSxjQUFLbUUsSUFBTCxDQUFVNUgsTUFBTSxDQUFDbUMsS0FBUCxDQUFhMEYsSUFBdkIsRUFBNkIsbUJBQTdCLENBREYsRUFFRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLGFBQWYsRUFBOEIsSUFBOUIsRUFBb0MsQ0FBcEMsQ0FGRjs7QUFLQUMsaUNBQUdDLGNBQUgsQ0FDRWxFLGNBQUttRSxJQUFMLENBQVU1SCxNQUFNLENBQUNtQyxLQUFQLENBQWEwRixJQUF2QixFQUE2Qix5QkFBN0IsQ0FERixFQUVFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTFHLE9BQU8sQ0FBQ0MsR0FBdkIsRUFBNEIsSUFBNUIsRUFBa0MsQ0FBbEMsQ0FGRjs7QUFLQTBFLGdCQUFBQSxPQUFPLENBQUN5QixhQUFELENBQVA7QUFDRCxlQWxFRDtBQW1FRCxhQXBFTSxDQURGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlLCByZWFjdC9uby1kYW5nZXIsIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbmltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZvcm1hdFdlYnBhY2tNZXNzYWdlcyBmcm9tICdyZWFjdC1kZXYtdXRpbHMvZm9ybWF0V2VicGFja01lc3NhZ2VzJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IFdlYnBhY2tEZXZTZXJ2ZXIgZnJvbSAnd2VicGFjay1kZXYtc2VydmVyJ1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pbydcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbi8vIGltcG9ydCBlcnJvck92ZXJsYXlNaWRkbGV3YXJlIGZyb20gJ3JlYWN0LWRldi11dGlscy9lcnJvck92ZXJsYXlNaWRkbGV3YXJlJ1xuLy9cbmltcG9ydCB7IGdldFN0YWdlZFJ1bGVzIH0gZnJvbSAnLi9ydWxlcydcbmltcG9ydCB7XG4gIGZpbmRBdmFpbGFibGVQb3J0LFxuICB0aW1lLFxuICB0aW1lRW5kLFxuICBnZXRDb25maWdQbHVnaW5Ib29rcyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQnXG5pbXBvcnQgeyBwcmVwYXJlUm91dGVzIH0gZnJvbSBcIi4uXCJcblxubGV0IHJlc29sdmVkUmVsb2FkUm91dGVzXG5sZXQgcmVsb2FkV2VicGFja1JvdXRlc1xuXG5sZXQgZGV2U2VydmVyXG5cbmNvbnN0IHJlbG9hZFJvdXRlcyA9ICguLi5hcmdzKSA9PiB7XG4gIGlmICghcmVzb2x2ZWRSZWxvYWRSb3V0ZXMpIHtcbiAgICAvLyBOb3QgcmVhZHkgeWV0LCBzbyBqdXN0IHdhaXRcbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gcmVzb2x2ZWRSZWxvYWRSb3V0ZXMoLi4uYXJncylcbn1cblxuZXhwb3J0IHsgcmVsb2FkUm91dGVzIH1cblxuLy8gQnVpbGRzIGEgY29tcGlsZXIgdXNpbmcgYSBzdGFnZSBwcmVzZXQsIHRoZW4gYWxsb3dzIGV4dGVuc2lvbiB2aWFcbi8vIHdlYnBhY2tDb25maWd1cmF0b3JcbmV4cG9ydCBmdW5jdGlvbiB3ZWJwYWNrQ29uZmlnKHsgY29uZmlnLCBzdGFnZSB9KSB7XG4gIGxldCB3ZWJwYWNrQ29uZmlnXG4gIGlmIChzdGFnZSA9PT0gJ2RldicpIHtcbiAgICB3ZWJwYWNrQ29uZmlnID0gcmVxdWlyZSgnLi93ZWJwYWNrLmNvbmZpZy5kZXYnKS5kZWZhdWx0KHsgY29uZmlnIH0pXG4gIH0gZWxzZSBpZiAoc3RhZ2UgPT09ICdwcm9kJykge1xuICAgIHdlYnBhY2tDb25maWcgPSByZXF1aXJlKCcuL3dlYnBhY2suY29uZmlnLnByb2QnKS5kZWZhdWx0KHtcbiAgICAgIGNvbmZpZyxcbiAgICB9KVxuICB9IGVsc2UgaWYgKHN0YWdlID09PSAnbm9kZScpIHtcbiAgICB3ZWJwYWNrQ29uZmlnID0gcmVxdWlyZSgnLi93ZWJwYWNrLmNvbmZpZy5wcm9kJykuZGVmYXVsdCh7XG4gICAgICBjb25maWcsXG4gICAgICBpc05vZGU6IHRydWUsXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc3RhZ2UgaXMgcmVxdWlyZWQgd2hlbiBidWlsZGluZyBhIGNvbXBpbGVyLicpXG4gIH1cblxuICBjb25zdCBkZWZhdWx0TG9hZGVycyA9IGdldFN0YWdlZFJ1bGVzKHsgY29uZmlnLCBzdGFnZSB9KVxuXG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IGdldENvbmZpZ1BsdWdpbkhvb2tzKGNvbmZpZywgJ3dlYnBhY2snKS5yZWR1Y2UoXG4gICAgKGFsbCwgY3VycikgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycikpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hbGwsIC4uLmN1cnJdXG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLmFsbCwgY3Vycl1cbiAgICB9LFxuICAgIFtdXG4gIClcblxuICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgY29uc3QgbW9kaWZpZWRDb25maWcgPSB0cmFuc2Zvcm1lcih3ZWJwYWNrQ29uZmlnLCB7XG4gICAgICBzdGFnZSxcbiAgICAgIGRlZmF1bHRMb2FkZXJzLFxuICAgIH0pXG4gICAgaWYgKG1vZGlmaWVkQ29uZmlnKSB7XG4gICAgICB3ZWJwYWNrQ29uZmlnID0gbW9kaWZpZWRDb25maWdcbiAgICB9XG4gIH0pXG4gIHJldHVybiB3ZWJwYWNrQ29uZmlnXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZENvbXBpbGVyKHsgY29uZmlnLCBzdGFnZSB9KSB7XG4gIHJldHVybiB3ZWJwYWNrKHdlYnBhY2tDb25maWcoeyBjb25maWcsIHN0YWdlIH0pKVxufVxuXG4vLyBTdGFydHMgdGhlIGRldmVsb3BtZW50IHNlcnZlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0RGV2U2VydmVyKHsgY29uZmlnIH0pIHtcbiAgaWYgKGRldlNlcnZlcikge1xuICAgIHJldHVybiBkZXZTZXJ2ZXJcbiAgfVxuXG4gIGNvbnN0IGRldkNvbXBpbGVyID0gYXdhaXQgYnVpbGRDb21waWxlcih7IGNvbmZpZywgc3RhZ2U6ICdkZXYnIH0pXG5cbiAgLy8gRGVmYXVsdCB0byBsb2NhbGhvc3Q6MzAwMCwgb3IgdXNlIGEgY3VzdG9tIGNvbWJvIGlmIGRlZmluZWQgaW4gc3RhdGljLmNvbmZpZy5qc1xuICAvLyBvciBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgY29uc3QgaW50ZW5kZWRQb3J0ID1cbiAgICAoY29uZmlnLmRldlNlcnZlciAmJiBjb25maWcuZGV2U2VydmVyLnBvcnQpIHx8IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxuICBjb25zdCBwb3J0ID0gYXdhaXQgZmluZEF2YWlsYWJsZVBvcnQoTnVtYmVyKGludGVuZGVkUG9ydCkpXG4gIC8vIEZpbmQgYW4gYXZhaWxhYmxlIHBvcnQgZm9yIG1lc3NhZ2VzLCBhcyBsb25nIGFzIGl0J3Mgbm90IHRoZSBkZXZTZXJ2ZXIgcG9ydFxuICBjb25zdCBtZXNzYWdlUG9ydCA9IGF3YWl0IGZpbmRBdmFpbGFibGVQb3J0KDQwMDAsIFtwb3J0XSlcbiAgaWYgKGludGVuZGVkUG9ydCAhPT0gcG9ydCkge1xuICAgIHRpbWUoXG4gICAgICBjaGFsay5yZWQoXG4gICAgICAgIGA9PiBXYXJuaW5nISBQb3J0ICR7aW50ZW5kZWRQb3J0fSBpcyBub3QgYXZhaWxhYmxlLiBVc2luZyBwb3J0ICR7Y2hhbGsuZ3JlZW4oXG4gICAgICAgICAgaW50ZW5kZWRQb3J0XG4gICAgICAgICl9IGluc3RlYWQhYFxuICAgICAgKVxuICAgIClcbiAgfVxuICBjb25zdCBob3N0ID1cbiAgICAoY29uZmlnLmRldlNlcnZlciAmJiBjb25maWcuZGV2U2VydmVyLmhvc3QpIHx8XG4gICAgcHJvY2Vzcy5lbnYuSE9TVCB8fFxuICAgICdodHRwOi8vbG9jYWxob3N0J1xuXG4gIGNvbnN0IGRldlNlcnZlckNvbmZpZyA9IHtcbiAgICBob3Q6IHRydWUsXG4gICAgZGlzYWJsZUhvc3RDaGVjazogdHJ1ZSxcbiAgICBjb250ZW50QmFzZTogW2NvbmZpZy5wYXRocy5QVUJMSUMsIGNvbmZpZy5wYXRocy5ESVNUXSxcbiAgICBwdWJsaWNQYXRoOiAnLycsXG4gICAgaGlzdG9yeUFwaUZhbGxiYWNrOiB0cnVlLFxuICAgIGNvbXByZXNzOiBmYWxzZSxcbiAgICBxdWlldDogdHJ1ZSxcbiAgICAuLi5jb25maWcuZGV2U2VydmVyLFxuICAgIHdhdGNoT3B0aW9uczoge1xuICAgICAgaWdub3JlZDogJ25vZGVfbW9kdWxlcycsXG4gICAgICAvLyBpZ25vcmVkOiBuZXcgUmVnRXhwKGAobm9kZV9tb2R1bGVzfCR7Y29uZmlnLnBhdGhzLlBBR0VTfSlgKSxcbiAgICAgIC4uLihjb25maWcuZGV2U2VydmVyID8gY29uZmlnLmRldlNlcnZlci53YXRjaE9wdGlvbnMgfHwge30gOiB7fSksXG4gICAgfSxcbiAgICBiZWZvcmU6IGFwcCA9PiB7XG4gICAgICAvLyBTZXJ2ZSB0aGUgc2l0ZSBkYXRhXG4gICAgICBhcHAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9nZXRNZXNzYWdlUG9ydCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgcG9ydDogbWVzc2FnZVBvcnQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBhcHAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9zaXRlRGF0YScsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNpdGVEYXRhID0gYXdhaXQgY29uZmlnLmdldFNpdGVEYXRhKHsgZGV2OiB0cnVlIH0pXG4gICAgICAgICAgcmVzLmpzb24oc2l0ZURhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICAgIHJlcy5qc29uKGVycilcbiAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gU2luY2Ugcm91dGVzIG1heSBjaGFuZ2UgZHVyaW5nIGRldiwgdGhpcyBmdW5jdGlvbiBjYW4gcmVidWlsZCBhbGwgb2YgdGhlIGNvbmZpZ1xuICAgICAgLy8gcm91dGVzLiBJdCBhbHNvIHJlZmVyZW5jZXMgdGhlIG9yaWdpbmFsIGNvbmZpZyB3aGVuIHBvc3NpYmxlLCB0byBtYWtlIHN1cmUgaXRcbiAgICAgIC8vIHVzZXMgYW55IHVwIHRvIGRhdGUgZ2V0RGF0YSBjYWxsYmFjayBnZW5lcmF0ZWQgZnJvbSBuZXcgb3IgcmVwbGFjZW1lbnQgcm91dGVzLlxuICAgICAgcmVsb2FkV2VicGFja1JvdXRlcyA9IGNvbmZpZyA9PiB7XG4gICAgICAgIC8vIFNlcnZlIGVhY2ggcm91dGVzIGRhdGFcbiAgICAgICAgY29uZmlnLnJvdXRlcy5mb3JFYWNoKCh7IHBhdGg6IHJvdXRlUGF0aCB9KSA9PiB7XG4gICAgICAgICAgYXBwLmdldChcbiAgICAgICAgICAgIGAvX19yZWFjdC1zdGF0aWNfXy9yb3V0ZUluZm8vJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIHJvdXRlUGF0aCA9PT0gJy8nID8gJycgOiByb3V0ZVBhdGhcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSB0aGUgbW9zdCB1cCB0byBkYXRlIHJvdXRlIGZyb20gdGhlIGNvbmZpZywgbm90XG4gICAgICAgICAgICAgIC8vIGFuIG91dCBvZiBkYXQgb2JqZWN0LlxuICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZXMuZmluZChkID0+IGQucGF0aCA9PT0gcm91dGVQYXRoKVxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGUgY291bGQgbm90IGJlIGZvdW5kIScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFByb3BzID0gcm91dGUuZ2V0RGF0YVxuICAgICAgICAgICAgICAgICAgPyBhd2FpdCByb3V0ZS5nZXREYXRhKHsgZGV2OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgICAgICAgICBhbGxQcm9wcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVsb2FkV2VicGFja1JvdXRlcyhjb25maWcpXG5cbiAgICAgIGlmIChjb25maWcuZGV2U2VydmVyICYmIGNvbmZpZy5kZXZTZXJ2ZXIuYmVmb3JlKSB7XG4gICAgICAgIGNvbmZpZy5kZXZTZXJ2ZXIuYmVmb3JlKGFwcClcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvcnQsXG4gICAgaG9zdCxcbiAgfVxuXG4gIGxldCBmaXJzdCA9IHRydWVcbiAgY29uc29sZS5sb2coJz0+IEJ1aWxkaW5nIEFwcCBCdW5kbGUuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQnVpbGQgQ29tcGxldGUnKSlcblxuICBkZXZDb21waWxlci5ob29rcy5pbnZhbGlkLnRhcChcbiAgICB7XG4gICAgICBuYW1lOiAnUmVhY3QtU3RhdGljJyxcbiAgICB9LFxuICAgIGZpbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJz0+IEZpbGUgY2hhbmdlZDonLCBmaWxlLnJlcGxhY2UoY29uZmlnLnBhdGhzLlJPT1QsICcnKSlcbiAgICAgIGNvbnNvbGUubG9nKCc9PiBVcGRhdGluZyBidWlsZC4uLicpXG4gICAgICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQnVpbGQgVXBkYXRlZCcpKVxuICAgIH1cbiAgKVxuXG4gIGRldkNvbXBpbGVyLmhvb2tzLmRvbmUudGFwKFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWFjdC1TdGF0aWMnLFxuICAgIH0sXG4gICAgc3RhdHMgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBmb3JtYXRXZWJwYWNrTWVzc2FnZXMoc3RhdHMudG9Kc29uKHt9LCB0cnVlKSlcbiAgICAgIGNvbnN0IGlzU3VjY2Vzc2Z1bCA9ICFtZXNzYWdlcy5lcnJvcnMubGVuZ3RoICYmICFtZXNzYWdlcy53YXJuaW5ncy5sZW5ndGhcblxuICAgICAgaWYgKGlzU3VjY2Vzc2Z1bCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQnVpbGQgQ29tcGxldGUnKSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gQXBwIHNlcnZpbmcgYXQnKSxcbiAgICAgICAgICAgIGAke2hvc3R9OiR7cG9ydH1gXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBCdWlsZCBVcGRhdGVkJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0ICYmIGNvbmZpZy5vblN0YXJ0KSB7XG4gICAgICAgICAgY29uZmlnLm9uU3RhcnQoeyBkZXZTZXJ2ZXJDb25maWcgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaXJzdCA9IGZhbHNlXG5cbiAgICAgIGlmIChtZXNzYWdlcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnRmFpbGVkIHRvIGJ1aWxkISBGaXggYW55IGVycm9ycyBhbmQgdHJ5IGFnYWluIScpKVxuICAgICAgICBtZXNzYWdlcy5lcnJvcnMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2VzLndhcm5pbmdzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay55ZWxsb3coJ0J1aWxkIGNvbXBsZXRlIHdpdGggd2FybmluZ3MuJykpXG4gICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgbWVzc2FnZXMud2FybmluZ3MuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICAvLyBTdGFydCB0aGUgd2VicGFjayBkZXYgc2VydmVyXG4gIGRldlNlcnZlciA9IG5ldyBXZWJwYWNrRGV2U2VydmVyKGRldkNvbXBpbGVyLCBkZXZTZXJ2ZXJDb25maWcpXG5cbiAgLy8gU3RhcnQgdGhlIG1lc3NhZ2VzIHNvY2tldFxuICBjb25zdCBzb2NrZXQgPSBpbygpXG4gIHNvY2tldC5saXN0ZW4obWVzc2FnZVBvcnQpXG5cbiAgcmVzb2x2ZWRSZWxvYWRSb3V0ZXMgPSBhc3luYyAocGF0aHMsIGRhdGEpID0+IHByZXBhcmVSb3V0ZXMoXG4gICAgICB7IGNvbmZpZywgb3B0czogeyBkZXY6IHRydWUsIGRhdGEgfSwgc2lsZW50OiB0cnVlIH0sXG4gICAgICBhc3luYyBjb25maWcgPT4ge1xuICAgICAgICBpZiAoIXBhdGhzKSB7XG4gICAgICAgICAgcGF0aHMgPSBjb25maWcucm91dGVzLm1hcChyb3V0ZSA9PiByb3V0ZS5wYXRoKVxuICAgICAgICB9XG4gICAgICAgIHBhdGhzID0gcGF0aHMubWFwKGNsZWFuUGF0aClcbiAgICAgICAgcmVsb2FkV2VicGFja1JvdXRlcyhjb25maWcpXG4gICAgICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgeyB0eXBlOiAncmVsb2FkUm91dGVzJywgcGF0aHMgfSlcbiAgICAgIH1cbiAgICApXG5cbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRldlNlcnZlci5saXN0ZW4ocG9ydCwgbnVsbCwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgICByZXNvbHZlKClcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBkZXZTZXJ2ZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMoeyBjb25maWcgfSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdlYnBhY2soW1xuICAgICAgd2VicGFja0NvbmZpZyh7IGNvbmZpZywgc3RhZ2U6ICdwcm9kJyB9KSxcbiAgICAgIHdlYnBhY2tDb25maWcoeyBjb25maWcsIHN0YWdlOiAnbm9kZScgfSksXG4gICAgXSkucnVuKChlcnIsIHN0YXRzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChlcnIuc3RhY2sgfHwgZXJyKSlcbiAgICAgICAgaWYgKGVyci5kZXRhaWxzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkKGVyci5kZXRhaWxzKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgICAgc3RhdHMudG9Kc29uKCd2ZXJib3NlJylcblxuICAgICAgY29uc3QgW3Byb2RTdGF0cywgbm9kZVN0YXRzXSA9IHN0YXRzLnN0YXRzXG5cbiAgICAgIGNoZWNrQnVpbGRTdGF0cygncHJvZCcsIHByb2RTdGF0cylcbiAgICAgIGNoZWNrQnVpbGRTdGF0cygnbm9kZScsIG5vZGVTdGF0cylcblxuICAgICAgZnVuY3Rpb24gY2hlY2tCdWlsZFN0YXRzKHN0YWdlLCBzdGFnZVN0YXRzKSB7XG4gICAgICAgIGNvbnN0IGJ1aWxkRXJyb3JzID0gc3RhZ2VTdGF0cy5oYXNFcnJvcnMoKVxuICAgICAgICBjb25zdCBidWlsZFdhcm5pbmdzID0gc3RhZ2VTdGF0cy5oYXNXYXJuaW5ncygpXG5cbiAgICAgICAgaWYgKGJ1aWxkRXJyb3JzIHx8IGJ1aWxkV2FybmluZ3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIHN0YWdlU3RhdHMudG9TdHJpbmcoe1xuICAgICAgICAgICAgICBjb250ZXh0OiBjb25maWcuY29udGV4dCxcbiAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICBoYXNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGltaW5nczogdHJ1ZSxcbiAgICAgICAgICAgICAgZW50cnlwb2ludHM6IGZhbHNlLFxuICAgICAgICAgICAgICBjaHVua09yaWdpbnM6IGZhbHNlLFxuICAgICAgICAgICAgICBjaHVua01vZHVsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICBjb2xvcnM6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoYnVpbGRFcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBjaGFsay5yZWQuYm9sZChgXG4gICAgICAgICAgICAgICAgPT4gVGhlcmUgd2VyZSBFUlJPUlMgZHVyaW5nIHRoZSAke3N0YWdlfSBidWlsZCBzdGFnZSEgOihcbiAgICAgICAgICAgICAgICA9PiBGaXggdGhlbSBhbmQgdHJ5IGFnYWluIVxuICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoYnVpbGRXYXJuaW5ncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGNoYWxrLnllbGxvdyhgXG49PiBUaGVyZSB3ZXJlIFdBUk5JTkdTIGR1cmluZyB0aGUgJHtzdGFnZX0gYnVpbGQgc3RhZ2UuIFlvdXIgc2l0ZSB3aWxsIHN0aWxsIGZ1bmN0aW9uLCBidXQgeW91IG1heSBhY2hpZXZlIGJldHRlciBwZXJmb3JtYW5jZSBieSBhZGRyZXNzaW5nIHRoZSB3YXJuaW5ncyBhYm92ZS5cbmApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2RTdGF0c0pzb24gPSBwcm9kU3RhdHMudG9Kc29uKClcblxuICAgICAgZnMub3V0cHV0RmlsZVN5bmMoXG4gICAgICAgIHBhdGguam9pbihjb25maWcucGF0aHMuVEVNUCwgJ2NsaWVudC1zdGF0cy5qc29uJyksXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHByb2RTdGF0c0pzb24sIG51bGwsIDIpXG4gICAgICApXG5cbiAgICAgIGZzLm91dHB1dEZpbGVTeW5jKFxuICAgICAgICBwYXRoLmpvaW4oY29uZmlnLnBhdGhzLlRFTVAsICdidW5kbGUtZW52aXJvbm1lbnQuanNvbicpLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudiwgbnVsbCwgMilcbiAgICAgIClcblxuICAgICAgcmVzb2x2ZShwcm9kU3RhdHNKc29uKVxuICAgIH0pXG4gIH0pXG59XG4iXX0=