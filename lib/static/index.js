"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "buildXMLandRSS", {
  enumerable: true,
  get: function get() {
    return _buildXML.default;
  }
});
exports.exportRoutes = exports.fetchRoutes = exports.exportSharedRouteData = exports.fetchSiteData = exports.prepareRoutes = exports.extractTemplates = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _shorthash = _interopRequireDefault(require("shorthash"));

var _chalk = _interopRequireDefault(require("chalk"));

var _os = _interopRequireDefault(require("os"));

var _child_process = require("child_process");

var _generateRoutes = _interopRequireDefault(require("./generateRoutes"));

var _getRoutes = _interopRequireDefault(require("./getRoutes"));

var _buildXML = _interopRequireDefault(require("./buildXML"));

var _utils = require("../utils");

var _shared = require("../utils/shared");

var _exporter = _interopRequireDefault(require("./exporter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cores = Math.max(_os.default.cpus().length, 1);

var extractTemplates =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(config) {
    var templates;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('=> Building Templates');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Templates Built")); // Dedupe all templates into an array

            templates = [];
            config.routes.forEach(function (route) {
              if (!route.component) {
                return;
              } // Check if the template has already been added


              var index = templates.indexOf(route.component);

              if (index === -1) {
                // If it's new, add it
                templates.push(route.component); // Assign the templateID

                route.templateID = templates.length - 1;
              } else {
                // Assign the existing templateID
                route.templateID = index;
              }
            });
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Templates Built"));
            config.templates = templates;
            _context.next = 8;
            return (0, _generateRoutes.default)({
              config: config
            });

          case 8:
            return _context.abrupt("return", templates);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function extractTemplates(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.extractTemplates = extractTemplates;

var prepareRoutes =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(_ref2) {
    var config,
        opts,
        silent,
        cb,
        _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            config = _ref2.config, opts = _ref2.opts, silent = _ref2.silent;
            cb = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : function (d) {
              return d;
            };
            if (!silent) console.log('=> Building Routes...'); // set the static routes

            process.env.REACT_STATIC_ROUTES_PATH = _path.default.join(config.paths.DIST, 'react-static-routes.js');
            if (!silent) (0, _utils.time)(_chalk.default.green("=> [\u2713] Routes Built"));
            return _context3.abrupt("return", (0, _getRoutes.default)({
              config: config,
              opts: opts
            },
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(routes) {
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!silent) (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Routes Built"));
                        config.routes = routes;
                        config.templates = extractTemplates(config);
                        return _context2.abrupt("return", cb(config));

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function prepareRoutes(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.prepareRoutes = prepareRoutes;

var fetchSiteData =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(config) {
    var siteData;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('=> Fetching Site Data...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Site Data Downloaded")); // Get the site data

            _context4.next = 4;
            return config.getSiteData({
              dev: false
            });

          case 4:
            siteData = _context4.sent;
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Site Data Downloaded"));
            return _context4.abrupt("return", siteData);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function fetchSiteData(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.fetchSiteData = fetchSiteData;

var exportSharedRouteData =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(config, sharedProps) {
    var sharedPropsArr, jsonProgress;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // Write all shared props to file
            sharedPropsArr = Array.from(sharedProps);

            if (!sharedPropsArr.length) {
              _context6.next = 8;
              break;
            }

            console.log('=> Exporting Shared Route Data...');
            jsonProgress = (0, _utils.progress)(sharedPropsArr.length);
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Shared Route Data Exported"));
            _context6.next = 7;
            return (0, _shared.poolAll)(sharedPropsArr.map(function (cachedProp) {
              return (
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee5() {
                  return _regenerator.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _fsExtra.default.outputFile(_path.default.join(config.paths.STATIC_DATA, "".concat(cachedProp[1].hash, ".json")), cachedProp[1].jsonString || '{}');

                        case 2:
                          jsonProgress.tick();

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }))
              );
            }), Number(config.outputFileRate));

          case 7:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Shared Route Data Exported"));

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function exportSharedRouteData(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.exportSharedRouteData = exportSharedRouteData;

var fetchRoutes =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9(config) {
    var seenProps, sharedProps, dataProgress, downloadTasks, _loop, i, dataWriteProgress, writeTasks, _loop2;

    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            // Set up some scaffolding for automatic data splitting
            seenProps = new Map();
            sharedProps = new Map();
            console.log('=> Fetching Route Data...');
            dataProgress = (0, _utils.progress)(config.routes.length);
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Route Data Downloaded")); // Use a traditional for loop here for perf

            downloadTasks = [];

            _loop = function _loop(i) {
              var route = config.routes[i];
              downloadTasks.push(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee7() {
                return _regenerator.default.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.t0 = !!route.getData;

                        if (!_context7.t0) {
                          _context7.next = 5;
                          break;
                        }

                        _context7.next = 4;
                        return route.getData({
                          route: route,
                          dev: false
                        });

                      case 4:
                        _context7.t0 = _context7.sent;

                      case 5:
                        route.allProps = _context7.t0;

                        // Default allProps (must be an object)
                        if (!route.allProps) {
                          route.allProps = {};
                        } // TODO: check if route.allProps is indeed an object
                        // Loop through the props to find shared props between routes
                        // TODO: expose knobs to tweak these settings, perform them manually,
                        // or simply just turn them off.


                        Object.keys(route.allProps).map(function (k) {
                          return route.allProps[k];
                        }).forEach(function (prop) {
                          // Don't split small strings
                          if (typeof prop === 'string' && prop.length < 100) {
                            return;
                          } // Don't split booleans or undefineds


                          if (['boolean', 'number', 'undefined'].includes(_typeof(prop))) {
                            return;
                          } // Should be an array or object at this point
                          // Have we seen this prop before?


                          if (seenProps.get(prop)) {
                            // Only cache each shared prop once
                            if (sharedProps.get(prop)) {
                              return;
                            } // Cache the prop


                            var jsonString = JSON.stringify(prop);
                            sharedProps.set(prop, {
                              jsonString: jsonString,
                              hash: _shorthash.default.unique(jsonString)
                            });
                          } else {
                            // Mark the prop as seen
                            seenProps.set(prop, true);
                          }
                        });
                        dataProgress.tick();

                      case 9:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              })));
            };

            for (i = 0; i < config.routes.length; i++) {
              _loop(i);
            }

            _context9.next = 10;
            return (0, _shared.poolAll)(downloadTasks, Number(config.outputFileRate));

          case 10:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Route Data Downloaded"));
            console.log('=> Exporting Route Data...');
            (0, _utils.time)(_chalk.default.green("=> [\u2713] Route Data Exported"));
            dataWriteProgress = (0, _utils.progress)(config.routes.length); // Use a traditional for loop for perf here

            writeTasks = [];

            _loop2 = function _loop2(i) {
              var route = config.routes[i];
              writeTasks.push(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee8() {
                return _regenerator.default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        // Loop through the props and build the prop maps
                        route.localProps = {};
                        route.sharedPropsHashes = {};
                        Object.keys(route.allProps).forEach(function (key) {
                          var value = route.allProps[key];
                          var cached = sharedProps.get(value);

                          if (cached) {
                            route.sharedPropsHashes[key] = cached.hash;
                          } else {
                            route.localProps[key] = value;
                          }
                        });
                        dataWriteProgress.tick();

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              })));
            };

            for (i = 0; i < config.routes.length; i++) {
              _loop2(i);
            }

            _context9.next = 19;
            return (0, _shared.poolAll)(writeTasks, Number(config.outputFileRate));

          case 19:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] Route Data Exported"));
            return _context9.abrupt("return", exportSharedRouteData(config, sharedProps));

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function fetchRoutes(_x7) {
    return _ref8.apply(this, arguments);
  };
}();

exports.fetchRoutes = fetchRoutes;

var buildHTML =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(_ref11) {
    var oldConfig, siteData, clientStats, routes, config, threads, htmlProgress, exporters, _i, exporterRoutes;

    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            oldConfig = _ref11.config, siteData = _ref11.siteData, clientStats = _ref11.clientStats;
            routes = oldConfig.routes, config = _objectWithoutProperties(oldConfig, ["routes"]);
            (0, _utils.time)(_chalk.default.green("=> [\u2713] HTML Exported")); // Single threaded export

            if (!(config.maxThreads <= 1)) {
              _context10.next = 9;
              break;
            }

            console.log('=> Exporting HTML...');
            _context10.next = 7;
            return (0, _exporter.default)({
              config: config,
              routes: routes,
              siteData: siteData,
              clientStats: clientStats
            });

          case 7:
            _context10.next = 18;
            break;

          case 9:
            // Multi-threaded export
            threads = Math.min(cores, config.maxThreads);
            htmlProgress = (0, _utils.progress)(routes.length);
            console.log("=> Exporting HTML across ".concat(cores, " threads..."));
            exporters = [];

            for (_i = 0; _i < threads; _i++) {
              exporters.push((0, _child_process.fork)(require.resolve('./threadedExporter'), [], {
                env: _objectSpread({}, process.env, {
                  REACT_STATIC_SLAVE: 'true'
                }),
                stdio: 'inherit'
              }));
            }

            exporterRoutes = exporters.map(function () {
              return [];
            });
            routes.forEach(function (route, i) {
              exporterRoutes[i % exporterRoutes.length].push(route);
            });
            _context10.next = 18;
            return Promise.all(exporters.map(function (exporter, i) {
              var routes = exporterRoutes[i];
              return new Promise(function (resolve, reject) {
                exporter.send({
                  config: config,
                  routes: routes,
                  siteData: siteData,
                  clientStats: clientStats
                });
                exporter.on('message', function (_ref13) {
                  var type = _ref13.type,
                      payload = _ref13.payload;

                  if (type === 'error') {
                    reject(payload);
                  }

                  if (type === 'log') {
                    var _console;

                    (_console = console).log.apply(_console, _toConsumableArray(payload));
                  }

                  if (type === 'tick') {
                    htmlProgress.tick();
                  }

                  if (type === 'done') {
                    resolve();
                  }
                });
              });
            }));

          case 18:
            (0, _utils.timeEnd)(_chalk.default.green("=> [\u2713] HTML Exported"));

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function buildHTML(_x8) {
    return _ref12.apply(this, arguments);
  };
}(); // Exporting route HTML and JSON happens here. It's a big one.


var exportRoutes =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(_ref14) {
    var config, clientStats, siteData;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            config = _ref14.config, clientStats = _ref14.clientStats;
            _context11.next = 3;
            return fetchSiteData(config);

          case 3:
            siteData = _context11.sent;
            _context11.next = 6;
            return fetchRoutes(config);

          case 6:
            _context11.next = 8;
            return buildHTML({
              config: config,
              siteData: siteData,
              clientStats: clientStats
            });

          case 8:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function exportRoutes(_x9) {
    return _ref15.apply(this, arguments);
  };
}();

exports.exportRoutes = exportRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvaW5kZXguanMiXSwibmFtZXMiOlsiY29yZXMiLCJNYXRoIiwibWF4IiwiT1MiLCJjcHVzIiwibGVuZ3RoIiwiZXh0cmFjdFRlbXBsYXRlcyIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImdyZWVuIiwidGVtcGxhdGVzIiwicm91dGVzIiwiZm9yRWFjaCIsInJvdXRlIiwiY29tcG9uZW50IiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInRlbXBsYXRlSUQiLCJwcmVwYXJlUm91dGVzIiwib3B0cyIsInNpbGVudCIsImNiIiwiZCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfUk9VVEVTX1BBVEgiLCJwYXRoIiwiam9pbiIsInBhdGhzIiwiRElTVCIsImZldGNoU2l0ZURhdGEiLCJnZXRTaXRlRGF0YSIsImRldiIsInNpdGVEYXRhIiwiZXhwb3J0U2hhcmVkUm91dGVEYXRhIiwic2hhcmVkUHJvcHMiLCJzaGFyZWRQcm9wc0FyciIsIkFycmF5IiwiZnJvbSIsImpzb25Qcm9ncmVzcyIsIm1hcCIsImNhY2hlZFByb3AiLCJmcyIsIm91dHB1dEZpbGUiLCJTVEFUSUNfREFUQSIsImhhc2giLCJqc29uU3RyaW5nIiwidGljayIsIk51bWJlciIsIm91dHB1dEZpbGVSYXRlIiwiZmV0Y2hSb3V0ZXMiLCJzZWVuUHJvcHMiLCJNYXAiLCJkYXRhUHJvZ3Jlc3MiLCJkb3dubG9hZFRhc2tzIiwiaSIsImdldERhdGEiLCJhbGxQcm9wcyIsIk9iamVjdCIsImtleXMiLCJrIiwicHJvcCIsImluY2x1ZGVzIiwiZ2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldCIsInNob3J0aGFzaCIsInVuaXF1ZSIsImRhdGFXcml0ZVByb2dyZXNzIiwid3JpdGVUYXNrcyIsImxvY2FsUHJvcHMiLCJzaGFyZWRQcm9wc0hhc2hlcyIsImtleSIsInZhbHVlIiwiY2FjaGVkIiwiYnVpbGRIVE1MIiwib2xkQ29uZmlnIiwiY2xpZW50U3RhdHMiLCJtYXhUaHJlYWRzIiwidGhyZWFkcyIsIm1pbiIsImh0bWxQcm9ncmVzcyIsImV4cG9ydGVycyIsInJlcXVpcmUiLCJyZXNvbHZlIiwiUkVBQ1RfU1RBVElDX1NMQVZFIiwic3RkaW8iLCJleHBvcnRlclJvdXRlcyIsIlByb21pc2UiLCJhbGwiLCJleHBvcnRlciIsInJlamVjdCIsInNlbmQiLCJvbiIsInR5cGUiLCJwYXlsb2FkIiwiZXhwb3J0Um91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxZQUFHQyxJQUFILEdBQVVDLE1BQW5CLEVBQTJCLENBQTNCLENBQWQ7O0FBRU8sSUFBTUMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBRyxpQkFBTUMsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsNkJBQUtDLGVBQU1DLEtBQU4sQ0FBWSw2QkFBWixDQUFMLEVBRjhCLENBSTlCOztBQUNNQyxZQUFBQSxTQUx3QixHQUtaLEVBTFk7QUFPOUJMLFlBQUFBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxPQUFkLENBQXNCLFVBQUFDLEtBQUssRUFBSTtBQUM3QixrQkFBSSxDQUFDQSxLQUFLLENBQUNDLFNBQVgsRUFBc0I7QUFDcEI7QUFDRCxlQUg0QixDQUk3Qjs7O0FBQ0Esa0JBQU1DLEtBQUssR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCSCxLQUFLLENBQUNDLFNBQXhCLENBQWQ7O0FBQ0Esa0JBQUlDLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEI7QUFDQUwsZ0JBQUFBLFNBQVMsQ0FBQ08sSUFBVixDQUFlSixL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SUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJWLG9CQUFBQSxPQUFPO0FBQ1I7QUFDRixpQkFiRDtBQWNELGVBckJNLENBQVA7QUFzQkQsYUF4QkQsQ0FESSxDQXRDUTs7QUFBQTtBQW1FaEIsZ0NBQVE5RSxlQUFNQyxLQUFOLENBQVksMkJBQVosQ0FBUjs7QUFuRWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRvRSxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWYsQyxDQXNFQTs7O0FBQ08sSUFBTXFCLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTN0YsWUFBQUEsTUFBVCxVQUFTQSxNQUFULEVBQWlCMEUsV0FBakIsVUFBaUJBLFdBQWpCO0FBQUE7QUFBQSxtQkFFSGhELGFBQWEsQ0FBQzFCLE1BQUQsQ0FGVjs7QUFBQTtBQUVwQjZCLFlBQUFBLFFBRm9CO0FBQUE7QUFBQSxtQkFJcEJpQixXQUFXLENBQUM5QyxNQUFELENBSlM7O0FBQUE7QUFBQTtBQUFBLG1CQU1wQndFLFNBQVMsQ0FBQztBQUNkeEUsY0FBQUEsTUFBTSxFQUFOQSxNQURjO0FBRWQ2QixjQUFBQSxRQUFRLEVBQVJBLFFBRmM7QUFHZDZDLGNBQUFBLFdBQVcsRUFBWEE7QUFIYyxhQUFELENBTlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWm1CLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlLCByZWFjdC9uby1kYW5nZXIgKi9cblxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzaG9ydGhhc2ggZnJvbSAnc2hvcnRoYXNoJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IE9TIGZyb20gJ29zJ1xuaW1wb3J0IHsgZm9yayB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5cbmltcG9ydCBnZW5lcmF0ZVJvdXRlcyBmcm9tICcuL2dlbmVyYXRlUm91dGVzJ1xuaW1wb3J0IGdldFJvdXRlcyBmcm9tICcuL2dldFJvdXRlcydcbmltcG9ydCBidWlsZFhNTGFuZFJTUyBmcm9tICcuL2J1aWxkWE1MJ1xuaW1wb3J0IHsgcHJvZ3Jlc3MsIHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHBvb2xBbGwgfSBmcm9tICcuLi91dGlscy9zaGFyZWQnXG5pbXBvcnQgZXhwb3J0ZXIgZnJvbSAnLi9leHBvcnRlcidcblxuZXhwb3J0IHsgYnVpbGRYTUxhbmRSU1MgfVxuXG5jb25zdCBjb3JlcyA9IE1hdGgubWF4KE9TLmNwdXMoKS5sZW5ndGgsIDEpXG5cbmV4cG9ydCBjb25zdCBleHRyYWN0VGVtcGxhdGVzID0gYXN5bmMgY29uZmlnID0+IHtcbiAgY29uc29sZS5sb2coJz0+IEJ1aWxkaW5nIFRlbXBsYXRlcycpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBUZW1wbGF0ZXMgQnVpbHQnKSlcblxuICAvLyBEZWR1cGUgYWxsIHRlbXBsYXRlcyBpbnRvIGFuIGFycmF5XG4gIGNvbnN0IHRlbXBsYXRlcyA9IFtdXG5cbiAgY29uZmlnLnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICBpZiAoIXJvdXRlLmNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHRoZSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkXG4gICAgY29uc3QgaW5kZXggPSB0ZW1wbGF0ZXMuaW5kZXhPZihyb3V0ZS5jb21wb25lbnQpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgLy8gSWYgaXQncyBuZXcsIGFkZCBpdFxuICAgICAgdGVtcGxhdGVzLnB1c2gocm91dGUuY29tcG9uZW50KVxuICAgICAgLy8gQXNzaWduIHRoZSB0ZW1wbGF0ZUlEXG4gICAgICByb3V0ZS50ZW1wbGF0ZUlEID0gdGVtcGxhdGVzLmxlbmd0aCAtIDFcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzaWduIHRoZSBleGlzdGluZyB0ZW1wbGF0ZUlEXG4gICAgICByb3V0ZS50ZW1wbGF0ZUlEID0gaW5kZXhcbiAgICB9XG4gIH0pXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBUZW1wbGF0ZXMgQnVpbHQnKSlcblxuICBjb25maWcudGVtcGxhdGVzID0gdGVtcGxhdGVzXG5cbiAgYXdhaXQgZ2VuZXJhdGVSb3V0ZXMoe1xuICAgIGNvbmZpZyxcbiAgfSlcblxuICByZXR1cm4gdGVtcGxhdGVzXG59XG5cbmV4cG9ydCBjb25zdCBwcmVwYXJlUm91dGVzID0gYXN5bmMgKHsgY29uZmlnLCBvcHRzLCBzaWxlbnQgfSwgY2IgPSBkID0+IGQpID0+IHtcbiAgaWYgKCFzaWxlbnQpIGNvbnNvbGUubG9nKCc9PiBCdWlsZGluZyBSb3V0ZXMuLi4nKVxuICAvLyBzZXQgdGhlIHN0YXRpYyByb3V0ZXNcbiAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1JPVVRFU19QQVRIID0gcGF0aC5qb2luKFxuICAgIGNvbmZpZy5wYXRocy5ESVNULFxuICAgICdyZWFjdC1zdGF0aWMtcm91dGVzLmpzJ1xuICApXG5cbiAgaWYgKCFzaWxlbnQpIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBSb3V0ZXMgQnVpbHQnKSlcbiAgcmV0dXJuIGdldFJvdXRlcyhcbiAgICB7XG4gICAgICBjb25maWcsXG4gICAgICBvcHRzLFxuICAgIH0sXG4gICAgYXN5bmMgcm91dGVzID0+IHtcbiAgICAgIGlmICghc2lsZW50KSB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUm91dGVzIEJ1aWx0JykpXG4gICAgICBjb25maWcucm91dGVzID0gcm91dGVzXG4gICAgICBjb25maWcudGVtcGxhdGVzID0gZXh0cmFjdFRlbXBsYXRlcyhjb25maWcpXG4gICAgICByZXR1cm4gY2IoY29uZmlnKVxuICAgIH1cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTaXRlRGF0YSA9IGFzeW5jIGNvbmZpZyA9PiB7XG4gIGNvbnNvbGUubG9nKCc9PiBGZXRjaGluZyBTaXRlIERhdGEuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gU2l0ZSBEYXRhIERvd25sb2FkZWQnKSlcbiAgLy8gR2V0IHRoZSBzaXRlIGRhdGFcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBjb25maWcuZ2V0U2l0ZURhdGEoeyBkZXY6IGZhbHNlIH0pXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBTaXRlIERhdGEgRG93bmxvYWRlZCcpKVxuICByZXR1cm4gc2l0ZURhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGV4cG9ydFNoYXJlZFJvdXRlRGF0YSA9IGFzeW5jIChjb25maWcsIHNoYXJlZFByb3BzKSA9PiB7XG4gIC8vIFdyaXRlIGFsbCBzaGFyZWQgcHJvcHMgdG8gZmlsZVxuICBjb25zdCBzaGFyZWRQcm9wc0FyciA9IEFycmF5LmZyb20oc2hhcmVkUHJvcHMpXG5cbiAgaWYgKHNoYXJlZFByb3BzQXJyLmxlbmd0aCkge1xuICAgIGNvbnNvbGUubG9nKCc9PiBFeHBvcnRpbmcgU2hhcmVkIFJvdXRlIERhdGEuLi4nKVxuICAgIGNvbnN0IGpzb25Qcm9ncmVzcyA9IHByb2dyZXNzKHNoYXJlZFByb3BzQXJyLmxlbmd0aClcbiAgICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gU2hhcmVkIFJvdXRlIERhdGEgRXhwb3J0ZWQnKSlcblxuICAgIGF3YWl0IHBvb2xBbGwoXG4gICAgICBzaGFyZWRQcm9wc0Fyci5tYXAoY2FjaGVkUHJvcCA9PiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZzLm91dHB1dEZpbGUoXG4gICAgICAgICAgcGF0aC5qb2luKGNvbmZpZy5wYXRocy5TVEFUSUNfREFUQSwgYCR7Y2FjaGVkUHJvcFsxXS5oYXNofS5qc29uYCksXG4gICAgICAgICAgY2FjaGVkUHJvcFsxXS5qc29uU3RyaW5nIHx8ICd7fSdcbiAgICAgICAgKVxuICAgICAgICBqc29uUHJvZ3Jlc3MudGljaygpXG4gICAgICB9KSxcbiAgICAgIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpXG4gICAgKVxuICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBTaGFyZWQgUm91dGUgRGF0YSBFeHBvcnRlZCcpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJvdXRlcyA9IGFzeW5jIGNvbmZpZyA9PiB7XG4gIC8vIFNldCB1cCBzb21lIHNjYWZmb2xkaW5nIGZvciBhdXRvbWF0aWMgZGF0YSBzcGxpdHRpbmdcbiAgY29uc3Qgc2VlblByb3BzID0gbmV3IE1hcCgpXG4gIGNvbnN0IHNoYXJlZFByb3BzID0gbmV3IE1hcCgpXG5cbiAgY29uc29sZS5sb2coJz0+IEZldGNoaW5nIFJvdXRlIERhdGEuLi4nKVxuICBjb25zdCBkYXRhUHJvZ3Jlc3MgPSBwcm9ncmVzcyhjb25maWcucm91dGVzLmxlbmd0aClcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFJvdXRlIERhdGEgRG93bmxvYWRlZCcpKVxuXG4gIC8vIFVzZSBhIHRyYWRpdGlvbmFsIGZvciBsb29wIGhlcmUgZm9yIHBlcmZcbiAgY29uc3QgZG93bmxvYWRUYXNrcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLnJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlc1tpXVxuICAgIGRvd25sb2FkVGFza3MucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAvLyBGZXRjaCBhbGxQcm9wcyBmcm9tIGVhY2ggcm91dGVcbiAgICAgIHJvdXRlLmFsbFByb3BzID1cbiAgICAgICAgISFyb3V0ZS5nZXREYXRhICYmIChhd2FpdCByb3V0ZS5nZXREYXRhKHsgcm91dGUsIGRldjogZmFsc2UgfSkpXG4gICAgICAvLyBEZWZhdWx0IGFsbFByb3BzIChtdXN0IGJlIGFuIG9iamVjdClcbiAgICAgIGlmICghcm91dGUuYWxsUHJvcHMpIHtcbiAgICAgICAgcm91dGUuYWxsUHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBjaGVjayBpZiByb3V0ZS5hbGxQcm9wcyBpcyBpbmRlZWQgYW4gb2JqZWN0XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgcHJvcHMgdG8gZmluZCBzaGFyZWQgcHJvcHMgYmV0d2VlbiByb3V0ZXNcbiAgICAgIC8vIFRPRE86IGV4cG9zZSBrbm9icyB0byB0d2VhayB0aGVzZSBzZXR0aW5ncywgcGVyZm9ybSB0aGVtIG1hbnVhbGx5LFxuICAgICAgLy8gb3Igc2ltcGx5IGp1c3QgdHVybiB0aGVtIG9mZi5cbiAgICAgIE9iamVjdC5rZXlzKHJvdXRlLmFsbFByb3BzKVxuICAgICAgICAubWFwKGsgPT4gcm91dGUuYWxsUHJvcHNba10pXG4gICAgICAgIC5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgIC8vIERvbid0IHNwbGl0IHNtYWxsIHN0cmluZ3NcbiAgICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnICYmIHByb3AubGVuZ3RoIDwgMTAwKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRG9uJ3Qgc3BsaXQgYm9vbGVhbnMgb3IgdW5kZWZpbmVkc1xuICAgICAgICAgIGlmIChbJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3VuZGVmaW5lZCddLmluY2x1ZGVzKHR5cGVvZiBwcm9wKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNob3VsZCBiZSBhbiBhcnJheSBvciBvYmplY3QgYXQgdGhpcyBwb2ludFxuICAgICAgICAgIC8vIEhhdmUgd2Ugc2VlbiB0aGlzIHByb3AgYmVmb3JlP1xuICAgICAgICAgIGlmIChzZWVuUHJvcHMuZ2V0KHByb3ApKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGNhY2hlIGVhY2ggc2hhcmVkIHByb3Agb25jZVxuICAgICAgICAgICAgaWYgKHNoYXJlZFByb3BzLmdldChwcm9wKSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhY2hlIHRoZSBwcm9wXG4gICAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJvcClcbiAgICAgICAgICAgIHNoYXJlZFByb3BzLnNldChwcm9wLCB7XG4gICAgICAgICAgICAgIGpzb25TdHJpbmcsXG4gICAgICAgICAgICAgIGhhc2g6IHNob3J0aGFzaC51bmlxdWUoanNvblN0cmluZyksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNYXJrIHRoZSBwcm9wIGFzIHNlZW5cbiAgICAgICAgICAgIHNlZW5Qcm9wcy5zZXQocHJvcCwgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBkYXRhUHJvZ3Jlc3MudGljaygpXG4gICAgfSlcbiAgfVxuICBhd2FpdCBwb29sQWxsKGRvd25sb2FkVGFza3MsIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpKVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUm91dGUgRGF0YSBEb3dubG9hZGVkJykpXG5cbiAgY29uc29sZS5sb2coJz0+IEV4cG9ydGluZyBSb3V0ZSBEYXRhLi4uJylcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFJvdXRlIERhdGEgRXhwb3J0ZWQnKSlcbiAgY29uc3QgZGF0YVdyaXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcyhjb25maWcucm91dGVzLmxlbmd0aClcbiAgLy8gVXNlIGEgdHJhZGl0aW9uYWwgZm9yIGxvb3AgZm9yIHBlcmYgaGVyZVxuICBjb25zdCB3cml0ZVRhc2tzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcucm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGVzW2ldXG4gICAgd3JpdGVUYXNrcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgcHJvcHMgYW5kIGJ1aWxkIHRoZSBwcm9wIG1hcHNcbiAgICAgIHJvdXRlLmxvY2FsUHJvcHMgPSB7fVxuICAgICAgcm91dGUuc2hhcmVkUHJvcHNIYXNoZXMgPSB7fVxuICAgICAgT2JqZWN0LmtleXMocm91dGUuYWxsUHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByb3V0ZS5hbGxQcm9wc1trZXldXG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IHNoYXJlZFByb3BzLmdldCh2YWx1ZSlcbiAgICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICAgIHJvdXRlLnNoYXJlZFByb3BzSGFzaGVzW2tleV0gPSBjYWNoZWQuaGFzaFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlLmxvY2FsUHJvcHNba2V5XSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBkYXRhV3JpdGVQcm9ncmVzcy50aWNrKClcbiAgICB9KVxuICB9XG4gIGF3YWl0IHBvb2xBbGwod3JpdGVUYXNrcywgTnVtYmVyKGNvbmZpZy5vdXRwdXRGaWxlUmF0ZSkpXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBSb3V0ZSBEYXRhIEV4cG9ydGVkJykpXG5cbiAgcmV0dXJuIGV4cG9ydFNoYXJlZFJvdXRlRGF0YShjb25maWcsIHNoYXJlZFByb3BzKVxufVxuXG5jb25zdCBidWlsZEhUTUwgPSBhc3luYyAoeyBjb25maWc6IG9sZENvbmZpZywgc2l0ZURhdGEsIGNsaWVudFN0YXRzIH0pID0+IHtcbiAgY29uc3QgeyByb3V0ZXMsIC4uLmNvbmZpZyB9ID0gb2xkQ29uZmlnXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBIVE1MIEV4cG9ydGVkJykpXG5cbiAgLy8gU2luZ2xlIHRocmVhZGVkIGV4cG9ydFxuICBpZiAoY29uZmlnLm1heFRocmVhZHMgPD0gMSkge1xuICAgIGNvbnNvbGUubG9nKCc9PiBFeHBvcnRpbmcgSFRNTC4uLicpXG4gICAgYXdhaXQgZXhwb3J0ZXIoe1xuICAgICAgY29uZmlnLFxuICAgICAgcm91dGVzLFxuICAgICAgc2l0ZURhdGEsXG4gICAgICBjbGllbnRTdGF0cyxcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIE11bHRpLXRocmVhZGVkIGV4cG9ydFxuICAgIGNvbnN0IHRocmVhZHMgPSBNYXRoLm1pbihjb3JlcywgY29uZmlnLm1heFRocmVhZHMpXG4gICAgY29uc3QgaHRtbFByb2dyZXNzID0gcHJvZ3Jlc3Mocm91dGVzLmxlbmd0aClcbiAgICBjb25zb2xlLmxvZyhgPT4gRXhwb3J0aW5nIEhUTUwgYWNyb3NzICR7Y29yZXN9IHRocmVhZHMuLi5gKVxuXG4gICAgY29uc3QgZXhwb3J0ZXJzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRocmVhZHM7IGkrKykge1xuICAgICAgZXhwb3J0ZXJzLnB1c2goXG4gICAgICAgIGZvcmsocmVxdWlyZS5yZXNvbHZlKCcuL3RocmVhZGVkRXhwb3J0ZXInKSwgW10sIHtcbiAgICAgICAgICBlbnY6IHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgICAgICAgUkVBQ1RfU1RBVElDX1NMQVZFOiAndHJ1ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGRpbzogJ2luaGVyaXQnLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydGVyUm91dGVzID0gZXhwb3J0ZXJzLm1hcCgoKSA9PiBbXSlcblxuICAgIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSwgaSkgPT4ge1xuICAgICAgZXhwb3J0ZXJSb3V0ZXNbaSAlIGV4cG9ydGVyUm91dGVzLmxlbmd0aF0ucHVzaChyb3V0ZSlcbiAgICB9KVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBleHBvcnRlcnMubWFwKChleHBvcnRlciwgaSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSBleHBvcnRlclJvdXRlc1tpXVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGV4cG9ydGVyLnNlbmQoe1xuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgcm91dGVzLFxuICAgICAgICAgICAgc2l0ZURhdGEsXG4gICAgICAgICAgICBjbGllbnRTdGF0cyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGV4cG9ydGVyLm9uKCdtZXNzYWdlJywgKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICByZWplY3QocGF5bG9hZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbG9nJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5wYXlsb2FkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0aWNrJykge1xuICAgICAgICAgICAgICBodG1sUHJvZ3Jlc3MudGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBIVE1MIEV4cG9ydGVkJykpXG59XG5cbi8vIEV4cG9ydGluZyByb3V0ZSBIVE1MIGFuZCBKU09OIGhhcHBlbnMgaGVyZS4gSXQncyBhIGJpZyBvbmUuXG5leHBvcnQgY29uc3QgZXhwb3J0Um91dGVzID0gYXN5bmMgKHsgY29uZmlnLCBjbGllbnRTdGF0cyB9KSA9PiB7XG4gIC8vIHdlIG1vZGlmeSBjb25maWcgaW4gZmV0Y2hTaXRlRGF0YVxuICBjb25zdCBzaXRlRGF0YSA9IGF3YWl0IGZldGNoU2l0ZURhdGEoY29uZmlnKVxuICAvLyB3ZSBtb2RpZnkgY29uZmlnIGluIGZldGNoUm91dGVzXG4gIGF3YWl0IGZldGNoUm91dGVzKGNvbmZpZylcblxuICBhd2FpdCBidWlsZEhUTUwoe1xuICAgIGNvbmZpZyxcbiAgICBzaXRlRGF0YSxcbiAgICBjbGllbnRTdGF0cyxcbiAgfSlcbn1cbiJdfQ==