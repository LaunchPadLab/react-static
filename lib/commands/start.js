"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _static = require("../static");

var _RootComponents = require("../static/RootComponents");

var _webpack = require("../static/webpack");

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
var cleaned;
var indexCreated;

var _default =
/*#__PURE__*/
function () {
  var _start = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var _ref,
        config,
        debug,
        _args3 = arguments;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, config = _ref.config, debug = _ref.debug;

            // ensure ENV variables are set
            if (typeof process.env.NODE_ENV === 'undefined') {
              process.env.NODE_ENV = 'development';
            }

            process.env.REACT_STATIC_ENV = 'development';
            process.env.BABEL_ENV = 'development'; // Use callback style to subscribe to changes

            _context3.next = 6;
            return (0, _getConfig.default)(config,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(config) {
                var siteData, Component;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (debug) {
                          console.log('DEBUG - Resolved static.config.js:');
                          console.log(config);
                        }

                        if (cleaned) {
                          _context2.next = 5;
                          break;
                        }

                        cleaned = true; // Clean the dist folder

                        _context2.next = 5;
                        return _fsExtra.default.remove(config.paths.DIST);

                      case 5:
                        _context2.next = 7;
                        return config.getSiteData({
                          dev: true
                        });

                      case 7:
                        siteData = _context2.sent;
                        // Resolve the base HTML template
                        Component = config.Document || _RootComponents.DefaultDocument;

                        if (indexCreated) {
                          _context2.next = 13;
                          break;
                        }

                        indexCreated = true; // Render an index.html placeholder

                        _context2.next = 13;
                        return (0, _utils.createIndexFilePlaceholder)({
                          config: config,
                          Component: Component,
                          siteData: siteData
                        });

                      case 13:
                        _context2.next = 15;
                        return (0, _static.prepareRoutes)({
                          config: config,
                          opts: {
                            dev: true
                          }
                        },
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          _regenerator.default.mark(function _callee(config) {
                            return _regenerator.default.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    (0, _webpack.reloadRoutes)(); // Build the JS bundle

                                    _context.next = 3;
                                    return (0, _webpack.startDevServer)({
                                      config: config
                                    });

                                  case 3:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));

                          return function (_x2) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 6:
            _context3.next = 8;
            return new Promise(function () {});

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  function start() {
    return _start.apply(this, arguments);
  }

  return start;
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdGFydC5qcyJdLCJuYW1lcyI6WyJjbGVhbmVkIiwiaW5kZXhDcmVhdGVkIiwiY29uZmlnIiwiZGVidWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9TVEFUSUNfRU5WIiwiQkFCRUxfRU5WIiwiY29uc29sZSIsImxvZyIsImZzIiwicmVtb3ZlIiwicGF0aHMiLCJESVNUIiwiZ2V0U2l0ZURhdGEiLCJkZXYiLCJzaXRlRGF0YSIsIkNvbXBvbmVudCIsIkRvY3VtZW50IiwiRGVmYXVsdERvY3VtZW50Iiwib3B0cyIsIlByb21pc2UiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQSxJQUFJQSxPQUFKO0FBQ0EsSUFBSUMsWUFBSjs7Ozs7Ozs0QkFFZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQUF5QyxFQUF6QyxFQUF1QkMsTUFBdkIsUUFBdUJBLE1BQXZCLEVBQStCQyxLQUEvQixRQUErQkEsS0FBL0I7O0FBQ2Q7QUFDQSxnQkFBSSxPQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBbkIsS0FBZ0MsV0FBcEMsRUFBaUQ7QUFDL0NGLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEdBQXVCLGFBQXZCO0FBQ0Q7O0FBQ0RGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxnQkFBWixHQUErQixhQUEvQjtBQUNBSCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsU0FBWixHQUF3QixhQUF4QixDQU5jLENBUWQ7O0FBUmM7QUFBQSxtQkFTUix3QkFBVU4sTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQWtCLGtCQUFNQSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0Qiw0QkFBSUMsS0FBSixFQUFXO0FBQ1RNLDBCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBRCwwQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQVo7QUFDRDs7QUFKcUIsNEJBTWpCRixPQU5pQjtBQUFBO0FBQUE7QUFBQTs7QUFPcEJBLHdCQUFBQSxPQUFPLEdBQUcsSUFBVixDQVBvQixDQVFwQjs7QUFSb0I7QUFBQSwrQkFTZFcsaUJBQUdDLE1BQUgsQ0FBVVYsTUFBTSxDQUFDVyxLQUFQLENBQWFDLElBQXZCLENBVGM7O0FBQUE7QUFBQTtBQUFBLCtCQWFDWixNQUFNLENBQUNhLFdBQVAsQ0FBbUI7QUFBRUMsMEJBQUFBLEdBQUcsRUFBRTtBQUFQLHlCQUFuQixDQWJEOztBQUFBO0FBYWhCQyx3QkFBQUEsUUFiZ0I7QUFldEI7QUFDTUMsd0JBQUFBLFNBaEJnQixHQWdCSmhCLE1BQU0sQ0FBQ2lCLFFBQVAsSUFBbUJDLCtCQWhCZjs7QUFBQSw0QkFrQmpCbkIsWUFsQmlCO0FBQUE7QUFBQTtBQUFBOztBQW1CcEJBLHdCQUFBQSxZQUFZLEdBQUcsSUFBZixDQW5Cb0IsQ0FvQnBCOztBQXBCb0I7QUFBQSwrQkFxQmQsdUNBQTJCO0FBQy9CQywwQkFBQUEsTUFBTSxFQUFOQSxNQUQrQjtBQUUvQmdCLDBCQUFBQSxTQUFTLEVBQVRBLFNBRitCO0FBRy9CRCwwQkFBQUEsUUFBUSxFQUFSQTtBQUgrQix5QkFBM0IsQ0FyQmM7O0FBQUE7QUFBQTtBQUFBLCtCQTRCaEIsMkJBQWM7QUFBRWYsMEJBQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVbUIsMEJBQUFBLElBQUksRUFBRTtBQUFFTCw0QkFBQUEsR0FBRyxFQUFFO0FBQVA7QUFBaEIseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUErQyxpQkFBTWQsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25ELGlFQURtRCxDQUduRDs7QUFIbUQ7QUFBQSwyQ0FJN0MsNkJBQWU7QUFBRUEsc0NBQUFBLE1BQU0sRUFBTkE7QUFBRixxQ0FBZixDQUo2Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBL0M7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBNUJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUUTs7QUFBQTtBQUFBO0FBQUEsbUJBNkNSLElBQUlvQixPQUFKLENBQVksWUFBTSxDQUV2QixDQUZLLENBN0NROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVDLEs7Ozs7U0FBQUEsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbi8vXG5pbXBvcnQgeyBwcmVwYXJlUm91dGVzIH0gZnJvbSAnLi4vc3RhdGljJ1xuaW1wb3J0IHsgRGVmYXVsdERvY3VtZW50IH0gZnJvbSAnLi4vc3RhdGljL1Jvb3RDb21wb25lbnRzJ1xuaW1wb3J0IHsgc3RhcnREZXZTZXJ2ZXIsIHJlbG9hZFJvdXRlcyB9IGZyb20gJy4uL3N0YXRpYy93ZWJwYWNrJ1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICcuLi9zdGF0aWMvZ2V0Q29uZmlnJ1xuaW1wb3J0IHsgY3JlYXRlSW5kZXhGaWxlUGxhY2Vob2xkZXIgfSBmcm9tICcuLi91dGlscydcbi8vXG5cbmxldCBjbGVhbmVkXG5sZXQgaW5kZXhDcmVhdGVkXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBzdGFydCh7IGNvbmZpZywgZGVidWcgfSA9IHt9KSB7XG4gIC8vIGVuc3VyZSBFTlYgdmFyaWFibGVzIGFyZSBzZXRcbiAgaWYgKHR5cGVvZiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9ICdkZXZlbG9wbWVudCdcbiAgfVxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID0gJ2RldmVsb3BtZW50J1xuICBwcm9jZXNzLmVudi5CQUJFTF9FTlYgPSAnZGV2ZWxvcG1lbnQnXG5cbiAgLy8gVXNlIGNhbGxiYWNrIHN0eWxlIHRvIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gIGF3YWl0IGdldENvbmZpZyhjb25maWcsIGFzeW5jIGNvbmZpZyA9PiB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnREVCVUcgLSBSZXNvbHZlZCBzdGF0aWMuY29uZmlnLmpzOicpXG4gICAgICBjb25zb2xlLmxvZyhjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKCFjbGVhbmVkKSB7XG4gICAgICBjbGVhbmVkID0gdHJ1ZVxuICAgICAgLy8gQ2xlYW4gdGhlIGRpc3QgZm9sZGVyXG4gICAgICBhd2FpdCBmcy5yZW1vdmUoY29uZmlnLnBhdGhzLkRJU1QpXG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBzaXRlIHByb3BzXG4gICAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBjb25maWcuZ2V0U2l0ZURhdGEoeyBkZXY6IHRydWUgfSlcblxuICAgIC8vIFJlc29sdmUgdGhlIGJhc2UgSFRNTCB0ZW1wbGF0ZVxuICAgIGNvbnN0IENvbXBvbmVudCA9IGNvbmZpZy5Eb2N1bWVudCB8fCBEZWZhdWx0RG9jdW1lbnRcblxuICAgIGlmICghaW5kZXhDcmVhdGVkKSB7XG4gICAgICBpbmRleENyZWF0ZWQgPSB0cnVlXG4gICAgICAvLyBSZW5kZXIgYW4gaW5kZXguaHRtbCBwbGFjZWhvbGRlclxuICAgICAgYXdhaXQgY3JlYXRlSW5kZXhGaWxlUGxhY2Vob2xkZXIoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc2l0ZURhdGEsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGF3YWl0IHByZXBhcmVSb3V0ZXMoeyBjb25maWcsIG9wdHM6IHsgZGV2OiB0cnVlIH0gfSwgYXN5bmMgY29uZmlnID0+IHtcbiAgICAgIHJlbG9hZFJvdXRlcygpXG5cbiAgICAgIC8vIEJ1aWxkIHRoZSBKUyBidW5kbGVcbiAgICAgIGF3YWl0IHN0YXJ0RGV2U2VydmVyKHsgY29uZmlnIH0pXG4gICAgfSlcbiAgfSlcblxuICBhd2FpdCBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgLy8gRG8gbm90aGluZywgdGhlIHVzZXIgbXVzdCBleGl0IHRoaXMgY29tbWFuZFxuICB9KVxufSlcbiJdfQ==