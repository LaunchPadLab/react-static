"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _glob = _interopRequireDefault(require("glob"));

var _path = _interopRequireDefault(require("path"));

var _getConfig = _interopRequireDefault(require("./getConfig"));

var _RootComponents = require("./RootComponents");

var _shared = require("../utils/shared");

var _exportRoute = _interopRequireDefault(require("./exportRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable import/first, import/no-dynamic-require */
require('../utils/binHelper');

process.on('message',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(payload) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.delegateYield(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee2() {
              var oldConfig, routes, config, Comp, DocumentTemplate, tasks, _loop, i;

              return _regenerator.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      oldConfig = payload.config, routes = payload.routes; // Get config again

                      _context2.next = 3;
                      return (0, _getConfig.default)(oldConfig.originalConfig);

                    case 3:
                      config = _context2.sent;
                      // Use the node version of the app created with webpack
                      Comp = require(_glob.default.sync(_path.default.resolve(config.paths.ASSETS, 'static.*.js'))[0]).default; // Retrieve the document template

                      DocumentTemplate = config.Document || _RootComponents.DefaultDocument;
                      tasks = [];

                      _loop = function _loop(i) {
                        var route = routes[i];
                        tasks.push(
                        /*#__PURE__*/
                        _asyncToGenerator(
                        /*#__PURE__*/
                        _regenerator.default.mark(function _callee() {
                          return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return (0, _exportRoute.default)(_objectSpread({}, payload, {
                                    config: config,
                                    route: route,
                                    Comp: Comp,
                                    DocumentTemplate: DocumentTemplate
                                  }));

                                case 2:
                                  if (process.connected) {
                                    process.send({
                                      type: 'tick'
                                    });
                                  }

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        })));
                      };

                      for (i = 0; i < routes.length; i++) {
                        _loop(i);
                      }

                      _context2.next = 11;
                      return (0, _shared.poolAll)(tasks, Number(config.outputFileRate));

                    case 11:
                      if (process.connected) {
                        process.send({
                          type: 'done'
                        });
                      }

                      process.exit();

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            })(), "t0", 2);

          case 2:
            _context3.next = 9;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t1 = _context3["catch"](0);
            console.error(_context3.t1);

            if (process.connected) {
              process.send({
                type: 'error',
                payload: _context3.t1
              });
            }

            process.exit(1);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 4]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvdGhyZWFkZWRFeHBvcnRlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicHJvY2VzcyIsIm9uIiwicGF5bG9hZCIsIm9sZENvbmZpZyIsImNvbmZpZyIsInJvdXRlcyIsIm9yaWdpbmFsQ29uZmlnIiwiQ29tcCIsImdsb2IiLCJzeW5jIiwicGF0aCIsInJlc29sdmUiLCJwYXRocyIsIkFTU0VUUyIsImRlZmF1bHQiLCJEb2N1bWVudFRlbXBsYXRlIiwiRG9jdW1lbnQiLCJEZWZhdWx0RG9jdW1lbnQiLCJ0YXNrcyIsImkiLCJyb3V0ZSIsInB1c2giLCJjb25uZWN0ZWQiLCJzZW5kIiwidHlwZSIsImxlbmd0aCIsIk51bWJlciIsIm91dHB1dEZpbGVSYXRlIiwiZXhpdCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUlBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFWQTtBQUVBQSxPQUFPLENBQUMsb0JBQUQsQ0FBUDs7QUFVQUMsT0FBTyxDQUFDQyxFQUFSLENBQVcsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXNCLGtCQUFNQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLHNCQUFBQSxTQUZFLEdBRW9CRCxPQUZwQixDQUVWRSxNQUZVLEVBRVNDLE1BRlQsR0FFb0JILE9BRnBCLENBRVNHLE1BRlQsRUFHbEI7O0FBSGtCO0FBQUEsNkJBSUcsd0JBQVVGLFNBQVMsQ0FBQ0csY0FBcEIsQ0FKSDs7QUFBQTtBQUlaRixzQkFBQUEsTUFKWTtBQUtsQjtBQUNNRyxzQkFBQUEsSUFOWSxHQU1MUixPQUFPLENBQUNTLGNBQUtDLElBQUwsQ0FDbkJDLGNBQUtDLE9BQUwsQ0FBYVAsTUFBTSxDQUFDUSxLQUFQLENBQWFDLE1BQTFCLEVBQWtDLGFBQWxDLENBRG1CLEVBRW5CLENBRm1CLENBQUQsQ0FBUCxDQUVQQyxPQVJZLEVBU2xCOztBQUNNQyxzQkFBQUEsZ0JBVlksR0FVT1gsTUFBTSxDQUFDWSxRQUFQLElBQW1CQywrQkFWMUI7QUFZWkMsc0JBQUFBLEtBWlksR0FZSixFQVpJOztBQUFBLDZDQWFUQyxDQWJTO0FBY2hCLDRCQUFNQyxLQUFLLEdBQUdmLE1BQU0sQ0FBQ2MsQ0FBRCxDQUFwQjtBQUNBRCx3QkFBQUEsS0FBSyxDQUFDRyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBQ0gsNENBQ0RuQixPQURDO0FBRUpFLG9DQUFBQSxNQUFNLEVBQU5BLE1BRkk7QUFHSmdCLG9DQUFBQSxLQUFLLEVBQUxBLEtBSEk7QUFJSmIsb0NBQUFBLElBQUksRUFBSkEsSUFKSTtBQUtKUSxvQ0FBQUEsZ0JBQWdCLEVBQWhCQTtBQUxJLHFDQURHOztBQUFBO0FBUVQsc0NBQUlmLE9BQU8sQ0FBQ3NCLFNBQVosRUFBdUI7QUFDckJ0QixvQ0FBQUEsT0FBTyxDQUFDdUIsSUFBUixDQUFhO0FBQUVDLHNDQUFBQSxJQUFJLEVBQUU7QUFBUixxQ0FBYjtBQUNEOztBQVZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFYO0FBZmdCOztBQWFsQiwyQkFBU0wsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR2QsTUFBTSxDQUFDb0IsTUFBM0IsRUFBbUNOLENBQUMsRUFBcEMsRUFBd0M7QUFBQSw4QkFBL0JBLENBQStCO0FBY3ZDOztBQTNCaUI7QUFBQSw2QkE0QloscUJBQVFELEtBQVIsRUFBZVEsTUFBTSxDQUFDdEIsTUFBTSxDQUFDdUIsY0FBUixDQUFyQixDQTVCWTs7QUFBQTtBQTZCbEIsMEJBQUkzQixPQUFPLENBQUNzQixTQUFaLEVBQXVCO0FBQ3JCdEIsd0JBQUFBLE9BQU8sQ0FBQ3VCLElBQVIsQ0FBYTtBQUFFQywwQkFBQUEsSUFBSSxFQUFFO0FBQVIseUJBQWI7QUFDRDs7QUFDRHhCLHNCQUFBQSxPQUFPLENBQUM0QixJQUFSOztBQWhDa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtDbEJDLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUjs7QUFDQSxnQkFBSTlCLE9BQU8sQ0FBQ3NCLFNBQVosRUFBdUI7QUFDckJ0QixjQUFBQSxPQUFPLENBQUN1QixJQUFSLENBQWE7QUFBRUMsZ0JBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCdEIsZ0JBQUFBLE9BQU87QUFBeEIsZUFBYjtBQUNEOztBQUNERixZQUFBQSxPQUFPLENBQUM0QixJQUFSLENBQWEsQ0FBYjs7QUF0Q2tCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2ZpcnN0LCBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG5cbnJlcXVpcmUoJy4uL3V0aWxzL2JpbkhlbHBlcicpXG5cbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4vZ2V0Q29uZmlnJ1xuaW1wb3J0IHsgRGVmYXVsdERvY3VtZW50IH0gZnJvbSAnLi9Sb290Q29tcG9uZW50cydcbmltcG9ydCB7IHBvb2xBbGwgfSBmcm9tICcuLi91dGlscy9zaGFyZWQnXG5pbXBvcnQgZXhwb3J0Um91dGUgZnJvbSAnLi9leHBvcnRSb3V0ZSdcblxucHJvY2Vzcy5vbignbWVzc2FnZScsIGFzeW5jIHBheWxvYWQgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgY29uZmlnOiBvbGRDb25maWcsIHJvdXRlcyB9ID0gcGF5bG9hZFxuICAgIC8vIEdldCBjb25maWcgYWdhaW5cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcob2xkQ29uZmlnLm9yaWdpbmFsQ29uZmlnKVxuICAgIC8vIFVzZSB0aGUgbm9kZSB2ZXJzaW9uIG9mIHRoZSBhcHAgY3JlYXRlZCB3aXRoIHdlYnBhY2tcbiAgICBjb25zdCBDb21wID0gcmVxdWlyZShnbG9iLnN5bmMoXG4gICAgICBwYXRoLnJlc29sdmUoY29uZmlnLnBhdGhzLkFTU0VUUywgJ3N0YXRpYy4qLmpzJylcbiAgICApWzBdKS5kZWZhdWx0XG4gICAgLy8gUmV0cmlldmUgdGhlIGRvY3VtZW50IHRlbXBsYXRlXG4gICAgY29uc3QgRG9jdW1lbnRUZW1wbGF0ZSA9IGNvbmZpZy5Eb2N1bWVudCB8fCBEZWZhdWx0RG9jdW1lbnRcblxuICAgIGNvbnN0IHRhc2tzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbaV1cbiAgICAgIHRhc2tzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBleHBvcnRSb3V0ZSh7XG4gICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgQ29tcCxcbiAgICAgICAgICBEb2N1bWVudFRlbXBsYXRlLFxuICAgICAgICB9KVxuICAgICAgICBpZiAocHJvY2Vzcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICBwcm9jZXNzLnNlbmQoeyB0eXBlOiAndGljaycgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgYXdhaXQgcG9vbEFsbCh0YXNrcywgTnVtYmVyKGNvbmZpZy5vdXRwdXRGaWxlUmF0ZSkpXG4gICAgaWYgKHByb2Nlc3MuY29ubmVjdGVkKSB7XG4gICAgICBwcm9jZXNzLnNlbmQoeyB0eXBlOiAnZG9uZScgfSlcbiAgICB9XG4gICAgcHJvY2Vzcy5leGl0KClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgaWYgKHByb2Nlc3MuY29ubmVjdGVkKSB7XG4gICAgICBwcm9jZXNzLnNlbmQoeyB0eXBlOiAnZXJyb3InLCBwYXlsb2FkOiBlcnIgfSlcbiAgICB9XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cbn0pXG4iXX0=