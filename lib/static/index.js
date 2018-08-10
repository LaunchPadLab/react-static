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
    var oldConfig, siteData, clientStats, routes, config, threads, htmlProgress, exporters, i, exporterRoutes;
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

            for (i = 0; i < threads; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvaW5kZXguanMiXSwibmFtZXMiOlsiY29yZXMiLCJNYXRoIiwibWF4IiwiT1MiLCJjcHVzIiwibGVuZ3RoIiwiZXh0cmFjdFRlbXBsYXRlcyIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImdyZWVuIiwidGVtcGxhdGVzIiwicm91dGVzIiwiZm9yRWFjaCIsInJvdXRlIiwiY29tcG9uZW50IiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInRlbXBsYXRlSUQiLCJwcmVwYXJlUm91dGVzIiwib3B0cyIsInNpbGVudCIsImNiIiwiZCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfUk9VVEVTX1BBVEgiLCJwYXRoIiwiam9pbiIsInBhdGhzIiwiRElTVCIsImZldGNoU2l0ZURhdGEiLCJnZXRTaXRlRGF0YSIsImRldiIsInNpdGVEYXRhIiwiZXhwb3J0U2hhcmVkUm91dGVEYXRhIiwic2hhcmVkUHJvcHMiLCJzaGFyZWRQcm9wc0FyciIsIkFycmF5IiwiZnJvbSIsImpzb25Qcm9ncmVzcyIsIm1hcCIsImNhY2hlZFByb3AiLCJmcyIsIm91dHB1dEZpbGUiLCJTVEFUSUNfREFUQSIsImhhc2giLCJqc29uU3RyaW5nIiwidGljayIsIk51bWJlciIsIm91dHB1dEZpbGVSYXRlIiwiZmV0Y2hSb3V0ZXMiLCJzZWVuUHJvcHMiLCJNYXAiLCJkYXRhUHJvZ3Jlc3MiLCJkb3dubG9hZFRhc2tzIiwiaSIsImdldERhdGEiLCJhbGxQcm9wcyIsIk9iamVjdCIsImtleXMiLCJrIiwicHJvcCIsImluY2x1ZGVzIiwiZ2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldCIsInNob3J0aGFzaCIsInVuaXF1ZSIsImRhdGFXcml0ZVByb2dyZXNzIiwid3JpdGVUYXNrcyIsImxvY2FsUHJvcHMiLCJzaGFyZWRQcm9wc0hhc2hlcyIsImtleSIsInZhbHVlIiwiY2FjaGVkIiwiYnVpbGRIVE1MIiwib2xkQ29uZmlnIiwiY2xpZW50U3RhdHMiLCJtYXhUaHJlYWRzIiwidGhyZWFkcyIsIm1pbiIsImh0bWxQcm9ncmVzcyIsImV4cG9ydGVycyIsInJlcXVpcmUiLCJyZXNvbHZlIiwiUkVBQ1RfU1RBVElDX1NMQVZFIiwic3RkaW8iLCJleHBvcnRlclJvdXRlcyIsIlByb21pc2UiLCJhbGwiLCJleHBvcnRlciIsInJlamVjdCIsInNlbmQiLCJvbiIsInR5cGUiLCJwYXlsb2FkIiwiZXhwb3J0Um91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxZQUFHQyxJQUFILEdBQVVDLE1BQW5CLEVBQTJCLENBQTNCLENBQWQ7O0FBRU8sSUFBTUMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBRyxpQkFBTUMsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOUJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsNkJBQUtDLGVBQU1DLEtBQU4sQ0FBWSw2QkFBWixDQUFMLEVBRjhCLENBSTlCOztBQUNNQyxZQUFBQSxTQUx3QixHQUtaLEVBTFk7QUFPOUJMLFlBQUFBLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxPQUFkLENBQXNCLFVBQUFDLEtBQUssRUFBSTtBQUM3QixrQkFBSSxDQUFDQSxLQUFLLENBQUNDLFNBQVgsRUFBc0I7QUFDcEI7QUFDRCxlQUg0QixDQUk3Qjs7O0FBQ0Esa0JBQU1DLEtBQUssR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCSCxLQUFLLENBQUNDLFNBQXhCLENBQWQ7O0FBQ0Esa0JBQUlDLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEI7QUFDQUwsZ0JBQUFBLFNBQVMsQ0FBQ08sSUFBVixDQUFlSixL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QUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQlYsb0JBQUFBLE9BQU87QUFDUjtBQUNGLGlCQWJEO0FBY0QsZUFyQk0sQ0FBUDtBQXNCRCxhQXhCRCxDQURJLENBdENROztBQUFBO0FBbUVoQixnQ0FBUTlFLGVBQU1DLEtBQU4sQ0FBWSwyQkFBWixDQUFSOztBQW5FZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVG9FLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZixDLENBc0VBOzs7QUFDTyxJQUFNcUIsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVM3RixZQUFBQSxNQUFULFVBQVNBLE1BQVQsRUFBaUIwRSxXQUFqQixVQUFpQkEsV0FBakI7QUFBQTtBQUFBLG1CQUVIaEQsYUFBYSxDQUFDMUIsTUFBRCxDQUZWOztBQUFBO0FBRXBCNkIsWUFBQUEsUUFGb0I7QUFBQTtBQUFBLG1CQUlwQmlCLFdBQVcsQ0FBQzlDLE1BQUQsQ0FKUzs7QUFBQTtBQUFBO0FBQUEsbUJBTXBCd0UsU0FBUyxDQUFDO0FBQ2R4RSxjQUFBQSxNQUFNLEVBQU5BLE1BRGM7QUFFZDZCLGNBQUFBLFFBQVEsRUFBUkEsUUFGYztBQUdkNkMsY0FBQUEsV0FBVyxFQUFYQTtBQUhjLGFBQUQsQ0FOVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFabUIsWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUsIHJlYWN0L25vLWRhbmdlciAqL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHNob3J0aGFzaCBmcm9tICdzaG9ydGhhc2gnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgT1MgZnJvbSAnb3MnXG5pbXBvcnQgeyBmb3JrIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcblxuaW1wb3J0IGdlbmVyYXRlUm91dGVzIGZyb20gJy4vZ2VuZXJhdGVSb3V0ZXMnXG5pbXBvcnQgZ2V0Um91dGVzIGZyb20gJy4vZ2V0Um91dGVzJ1xuaW1wb3J0IGJ1aWxkWE1MYW5kUlNTIGZyb20gJy4vYnVpbGRYTUwnXG5pbXBvcnQgeyBwcm9ncmVzcywgdGltZSwgdGltZUVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgcG9vbEFsbCB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZCdcbmltcG9ydCBleHBvcnRlciBmcm9tICcuL2V4cG9ydGVyJ1xuXG5leHBvcnQgeyBidWlsZFhNTGFuZFJTUyB9XG5cbmNvbnN0IGNvcmVzID0gTWF0aC5tYXgoT1MuY3B1cygpLmxlbmd0aCwgMSlcblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RUZW1wbGF0ZXMgPSBhc3luYyBjb25maWcgPT4ge1xuICBjb25zb2xlLmxvZygnPT4gQnVpbGRpbmcgVGVtcGxhdGVzJylcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFRlbXBsYXRlcyBCdWlsdCcpKVxuXG4gIC8vIERlZHVwZSBhbGwgdGVtcGxhdGVzIGludG8gYW4gYXJyYXlcbiAgY29uc3QgdGVtcGxhdGVzID0gW11cblxuICBjb25maWcucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgIGlmICghcm91dGUuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWRcbiAgICBjb25zdCBpbmRleCA9IHRlbXBsYXRlcy5pbmRleE9mKHJvdXRlLmNvbXBvbmVudClcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAvLyBJZiBpdCdzIG5ldywgYWRkIGl0XG4gICAgICB0ZW1wbGF0ZXMucHVzaChyb3V0ZS5jb21wb25lbnQpXG4gICAgICAvLyBBc3NpZ24gdGhlIHRlbXBsYXRlSURcbiAgICAgIHJvdXRlLnRlbXBsYXRlSUQgPSB0ZW1wbGF0ZXMubGVuZ3RoIC0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIGV4aXN0aW5nIHRlbXBsYXRlSURcbiAgICAgIHJvdXRlLnRlbXBsYXRlSUQgPSBpbmRleFxuICAgIH1cbiAgfSlcbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFRlbXBsYXRlcyBCdWlsdCcpKVxuXG4gIGNvbmZpZy50ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNcblxuICBhd2FpdCBnZW5lcmF0ZVJvdXRlcyh7XG4gICAgY29uZmlnLFxuICB9KVxuXG4gIHJldHVybiB0ZW1wbGF0ZXNcbn1cblxuZXhwb3J0IGNvbnN0IHByZXBhcmVSb3V0ZXMgPSBhc3luYyAoeyBjb25maWcsIG9wdHMsIHNpbGVudCB9LCBjYiA9IGQgPT4gZCkgPT4ge1xuICBpZiAoIXNpbGVudCkgY29uc29sZS5sb2coJz0+IEJ1aWxkaW5nIFJvdXRlcy4uLicpXG4gIC8vIHNldCB0aGUgc3RhdGljIHJvdXRlc1xuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfUk9VVEVTX1BBVEggPSBwYXRoLmpvaW4oXG4gICAgY29uZmlnLnBhdGhzLkRJU1QsXG4gICAgJ3JlYWN0LXN0YXRpYy1yb3V0ZXMuanMnXG4gIClcblxuICBpZiAoIXNpbGVudCkgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFJvdXRlcyBCdWlsdCcpKVxuICByZXR1cm4gZ2V0Um91dGVzKFxuICAgIHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIG9wdHMsXG4gICAgfSxcbiAgICBhc3luYyByb3V0ZXMgPT4ge1xuICAgICAgaWYgKCFzaWxlbnQpIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBSb3V0ZXMgQnVpbHQnKSlcbiAgICAgIGNvbmZpZy5yb3V0ZXMgPSByb3V0ZXNcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZXMgPSBleHRyYWN0VGVtcGxhdGVzKGNvbmZpZylcbiAgICAgIHJldHVybiBjYihjb25maWcpXG4gICAgfVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNpdGVEYXRhID0gYXN5bmMgY29uZmlnID0+IHtcbiAgY29uc29sZS5sb2coJz0+IEZldGNoaW5nIFNpdGUgRGF0YS4uLicpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBTaXRlIERhdGEgRG93bmxvYWRlZCcpKVxuICAvLyBHZXQgdGhlIHNpdGUgZGF0YVxuICBjb25zdCBzaXRlRGF0YSA9IGF3YWl0IGNvbmZpZy5nZXRTaXRlRGF0YSh7IGRldjogZmFsc2UgfSlcbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFNpdGUgRGF0YSBEb3dubG9hZGVkJykpXG4gIHJldHVybiBzaXRlRGF0YVxufVxuXG5leHBvcnQgY29uc3QgZXhwb3J0U2hhcmVkUm91dGVEYXRhID0gYXN5bmMgKGNvbmZpZywgc2hhcmVkUHJvcHMpID0+IHtcbiAgLy8gV3JpdGUgYWxsIHNoYXJlZCBwcm9wcyB0byBmaWxlXG4gIGNvbnN0IHNoYXJlZFByb3BzQXJyID0gQXJyYXkuZnJvbShzaGFyZWRQcm9wcylcblxuICBpZiAoc2hhcmVkUHJvcHNBcnIubGVuZ3RoKSB7XG4gICAgY29uc29sZS5sb2coJz0+IEV4cG9ydGluZyBTaGFyZWQgUm91dGUgRGF0YS4uLicpXG4gICAgY29uc3QganNvblByb2dyZXNzID0gcHJvZ3Jlc3Moc2hhcmVkUHJvcHNBcnIubGVuZ3RoKVxuICAgIHRpbWUoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBTaGFyZWQgUm91dGUgRGF0YSBFeHBvcnRlZCcpKVxuXG4gICAgYXdhaXQgcG9vbEFsbChcbiAgICAgIHNoYXJlZFByb3BzQXJyLm1hcChjYWNoZWRQcm9wID0+IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZnMub3V0cHV0RmlsZShcbiAgICAgICAgICBwYXRoLmpvaW4oY29uZmlnLnBhdGhzLlNUQVRJQ19EQVRBLCBgJHtjYWNoZWRQcm9wWzFdLmhhc2h9Lmpzb25gKSxcbiAgICAgICAgICBjYWNoZWRQcm9wWzFdLmpzb25TdHJpbmcgfHwgJ3t9J1xuICAgICAgICApXG4gICAgICAgIGpzb25Qcm9ncmVzcy50aWNrKClcbiAgICAgIH0pLFxuICAgICAgTnVtYmVyKGNvbmZpZy5vdXRwdXRGaWxlUmF0ZSlcbiAgICApXG4gICAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFNoYXJlZCBSb3V0ZSBEYXRhIEV4cG9ydGVkJykpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUm91dGVzID0gYXN5bmMgY29uZmlnID0+IHtcbiAgLy8gU2V0IHVwIHNvbWUgc2NhZmZvbGRpbmcgZm9yIGF1dG9tYXRpYyBkYXRhIHNwbGl0dGluZ1xuICBjb25zdCBzZWVuUHJvcHMgPSBuZXcgTWFwKClcbiAgY29uc3Qgc2hhcmVkUHJvcHMgPSBuZXcgTWFwKClcblxuICBjb25zb2xlLmxvZygnPT4gRmV0Y2hpbmcgUm91dGUgRGF0YS4uLicpXG4gIGNvbnN0IGRhdGFQcm9ncmVzcyA9IHByb2dyZXNzKGNvbmZpZy5yb3V0ZXMubGVuZ3RoKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUm91dGUgRGF0YSBEb3dubG9hZGVkJykpXG5cbiAgLy8gVXNlIGEgdHJhZGl0aW9uYWwgZm9yIGxvb3AgaGVyZSBmb3IgcGVyZlxuICBjb25zdCBkb3dubG9hZFRhc2tzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcucm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGVzW2ldXG4gICAgZG93bmxvYWRUYXNrcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEZldGNoIGFsbFByb3BzIGZyb20gZWFjaCByb3V0ZVxuICAgICAgcm91dGUuYWxsUHJvcHMgPVxuICAgICAgICAhIXJvdXRlLmdldERhdGEgJiYgKGF3YWl0IHJvdXRlLmdldERhdGEoeyByb3V0ZSwgZGV2OiBmYWxzZSB9KSlcbiAgICAgIC8vIERlZmF1bHQgYWxsUHJvcHMgKG11c3QgYmUgYW4gb2JqZWN0KVxuICAgICAgaWYgKCFyb3V0ZS5hbGxQcm9wcykge1xuICAgICAgICByb3V0ZS5hbGxQcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHJvdXRlLmFsbFByb3BzIGlzIGluZGVlZCBhbiBvYmplY3RcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBwcm9wcyB0byBmaW5kIHNoYXJlZCBwcm9wcyBiZXR3ZWVuIHJvdXRlc1xuICAgICAgLy8gVE9ETzogZXhwb3NlIGtub2JzIHRvIHR3ZWFrIHRoZXNlIHNldHRpbmdzLCBwZXJmb3JtIHRoZW0gbWFudWFsbHksXG4gICAgICAvLyBvciBzaW1wbHkganVzdCB0dXJuIHRoZW0gb2ZmLlxuICAgICAgT2JqZWN0LmtleXMocm91dGUuYWxsUHJvcHMpXG4gICAgICAgIC5tYXAoayA9PiByb3V0ZS5hbGxQcm9wc1trXSlcbiAgICAgICAgLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgLy8gRG9uJ3Qgc3BsaXQgc21hbGwgc3RyaW5nc1xuICAgICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycgJiYgcHJvcC5sZW5ndGggPCAxMDApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBEb24ndCBzcGxpdCBib29sZWFucyBvciB1bmRlZmluZWRzXG4gICAgICAgICAgaWYgKFsnYm9vbGVhbicsICdudW1iZXInLCAndW5kZWZpbmVkJ10uaW5jbHVkZXModHlwZW9mIHByb3ApKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2hvdWxkIGJlIGFuIGFycmF5IG9yIG9iamVjdCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgLy8gSGF2ZSB3ZSBzZWVuIHRoaXMgcHJvcCBiZWZvcmU/XG4gICAgICAgICAgaWYgKHNlZW5Qcm9wcy5nZXQocHJvcCkpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgY2FjaGUgZWFjaCBzaGFyZWQgcHJvcCBvbmNlXG4gICAgICAgICAgICBpZiAoc2hhcmVkUHJvcHMuZ2V0KHByb3ApKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIHByb3BcbiAgICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwcm9wKVxuICAgICAgICAgICAgc2hhcmVkUHJvcHMuc2V0KHByb3AsIHtcbiAgICAgICAgICAgICAganNvblN0cmluZyxcbiAgICAgICAgICAgICAgaGFzaDogc2hvcnRoYXNoLnVuaXF1ZShqc29uU3RyaW5nKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1hcmsgdGhlIHByb3AgYXMgc2VlblxuICAgICAgICAgICAgc2VlblByb3BzLnNldChwcm9wLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIGRhdGFQcm9ncmVzcy50aWNrKClcbiAgICB9KVxuICB9XG4gIGF3YWl0IHBvb2xBbGwoZG93bmxvYWRUYXNrcywgTnVtYmVyKGNvbmZpZy5vdXRwdXRGaWxlUmF0ZSkpXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJz0+IFtcXHUyNzEzXSBSb3V0ZSBEYXRhIERvd25sb2FkZWQnKSlcblxuICBjb25zb2xlLmxvZygnPT4gRXhwb3J0aW5nIFJvdXRlIERhdGEuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCc9PiBbXFx1MjcxM10gUm91dGUgRGF0YSBFeHBvcnRlZCcpKVxuICBjb25zdCBkYXRhV3JpdGVQcm9ncmVzcyA9IHByb2dyZXNzKGNvbmZpZy5yb3V0ZXMubGVuZ3RoKVxuICAvLyBVc2UgYSB0cmFkaXRpb25hbCBmb3IgbG9vcCBmb3IgcGVyZiBoZXJlXG4gIGNvbnN0IHdyaXRlVGFza3MgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5yb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZXNbaV1cbiAgICB3cml0ZVRhc2tzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBwcm9wcyBhbmQgYnVpbGQgdGhlIHByb3AgbWFwc1xuICAgICAgcm91dGUubG9jYWxQcm9wcyA9IHt9XG4gICAgICByb3V0ZS5zaGFyZWRQcm9wc0hhc2hlcyA9IHt9XG4gICAgICBPYmplY3Qua2V5cyhyb3V0ZS5hbGxQcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJvdXRlLmFsbFByb3BzW2tleV1cbiAgICAgICAgY29uc3QgY2FjaGVkID0gc2hhcmVkUHJvcHMuZ2V0KHZhbHVlKVxuICAgICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgICAgcm91dGUuc2hhcmVkUHJvcHNIYXNoZXNba2V5XSA9IGNhY2hlZC5oYXNoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGUubG9jYWxQcm9wc1trZXldID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGRhdGFXcml0ZVByb2dyZXNzLnRpY2soKVxuICAgIH0pXG4gIH1cbiAgYXdhaXQgcG9vbEFsbCh3cml0ZVRhc2tzLCBOdW1iZXIoY29uZmlnLm91dHB1dEZpbGVSYXRlKSlcbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIFJvdXRlIERhdGEgRXhwb3J0ZWQnKSlcblxuICByZXR1cm4gZXhwb3J0U2hhcmVkUm91dGVEYXRhKGNvbmZpZywgc2hhcmVkUHJvcHMpXG59XG5cbmNvbnN0IGJ1aWxkSFRNTCA9IGFzeW5jICh7IGNvbmZpZzogb2xkQ29uZmlnLCBzaXRlRGF0YSwgY2xpZW50U3RhdHMgfSkgPT4ge1xuICBjb25zdCB7IHJvdXRlcywgLi4uY29uZmlnIH0gPSBvbGRDb25maWdcbiAgdGltZShjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIEhUTUwgRXhwb3J0ZWQnKSlcblxuICAvLyBTaW5nbGUgdGhyZWFkZWQgZXhwb3J0XG4gIGlmIChjb25maWcubWF4VGhyZWFkcyA8PSAxKSB7XG4gICAgY29uc29sZS5sb2coJz0+IEV4cG9ydGluZyBIVE1MLi4uJylcbiAgICBhd2FpdCBleHBvcnRlcih7XG4gICAgICBjb25maWcsXG4gICAgICByb3V0ZXMsXG4gICAgICBzaXRlRGF0YSxcbiAgICAgIGNsaWVudFN0YXRzLFxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gTXVsdGktdGhyZWFkZWQgZXhwb3J0XG4gICAgY29uc3QgdGhyZWFkcyA9IE1hdGgubWluKGNvcmVzLCBjb25maWcubWF4VGhyZWFkcylcbiAgICBjb25zdCBodG1sUHJvZ3Jlc3MgPSBwcm9ncmVzcyhyb3V0ZXMubGVuZ3RoKVxuICAgIGNvbnNvbGUubG9nKGA9PiBFeHBvcnRpbmcgSFRNTCBhY3Jvc3MgJHtjb3Jlc30gdGhyZWFkcy4uLmApXG5cbiAgICBjb25zdCBleHBvcnRlcnMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhyZWFkczsgaSsrKSB7XG4gICAgICBleHBvcnRlcnMucHVzaChcbiAgICAgICAgZm9yayhyZXF1aXJlLnJlc29sdmUoJy4vdGhyZWFkZWRFeHBvcnRlcicpLCBbXSwge1xuICAgICAgICAgIGVudjoge1xuICAgICAgICAgICAgLi4ucHJvY2Vzcy5lbnYsXG4gICAgICAgICAgICBSRUFDVF9TVEFUSUNfU0xBVkU6ICd0cnVlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0ZGlvOiAnaW5oZXJpdCcsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0ZXJSb3V0ZXMgPSBleHBvcnRlcnMubWFwKCgpID0+IFtdKVxuXG4gICAgcm91dGVzLmZvckVhY2goKHJvdXRlLCBpKSA9PiB7XG4gICAgICBleHBvcnRlclJvdXRlc1tpICUgZXhwb3J0ZXJSb3V0ZXMubGVuZ3RoXS5wdXNoKHJvdXRlKVxuICAgIH0pXG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGV4cG9ydGVycy5tYXAoKGV4cG9ydGVyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IGV4cG9ydGVyUm91dGVzW2ldXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgZXhwb3J0ZXIuc2VuZCh7XG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICByb3V0ZXMsXG4gICAgICAgICAgICBzaXRlRGF0YSxcbiAgICAgICAgICAgIGNsaWVudFN0YXRzLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgZXhwb3J0ZXIub24oJ21lc3NhZ2UnLCAoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdsb2cnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLnBheWxvYWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RpY2snKSB7XG4gICAgICAgICAgICAgIGh0bWxQcm9ncmVzcy50aWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgdGltZUVuZChjaGFsay5ncmVlbignPT4gW1xcdTI3MTNdIEhUTUwgRXhwb3J0ZWQnKSlcbn1cblxuLy8gRXhwb3J0aW5nIHJvdXRlIEhUTUwgYW5kIEpTT04gaGFwcGVucyBoZXJlLiBJdCdzIGEgYmlnIG9uZS5cbmV4cG9ydCBjb25zdCBleHBvcnRSb3V0ZXMgPSBhc3luYyAoeyBjb25maWcsIGNsaWVudFN0YXRzIH0pID0+IHtcbiAgLy8gd2UgbW9kaWZ5IGNvbmZpZyBpbiBmZXRjaFNpdGVEYXRhXG4gIGNvbnN0IHNpdGVEYXRhID0gYXdhaXQgZmV0Y2hTaXRlRGF0YShjb25maWcpXG4gIC8vIHdlIG1vZGlmeSBjb25maWcgaW4gZmV0Y2hSb3V0ZXNcbiAgYXdhaXQgZmV0Y2hSb3V0ZXMoY29uZmlnKVxuXG4gIGF3YWl0IGJ1aWxkSFRNTCh7XG4gICAgY29uZmlnLFxuICAgIHNpdGVEYXRhLFxuICAgIGNsaWVudFN0YXRzLFxuICB9KVxufVxuIl19