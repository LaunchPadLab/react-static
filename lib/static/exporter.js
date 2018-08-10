"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _glob = _interopRequireDefault(require("glob"));

var _path = _interopRequireDefault(require("path"));

var _RootComponents = require("./RootComponents");

var _shared = require("../utils/shared");

var _exportRoute = _interopRequireDefault(require("./exportRoute"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable import/first, import/no-dynamic-require */
require('../utils/binHelper');

var _default =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref) {
    var config, routes, siteData, clientStats, htmlProgress, Comp, DocumentTemplate, tasks, _loop, i;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = _ref.config, routes = _ref.routes, siteData = _ref.siteData, clientStats = _ref.clientStats;
            htmlProgress = (0, _utils.progress)(routes.length); // Use the node version of the app created with webpack

            Comp = require(_glob.default.sync(_path.default.resolve(config.paths.ASSETS, 'static.*.js'))[0]).default; // Retrieve the document template

            DocumentTemplate = config.Document || _RootComponents.DefaultDocument;
            tasks = [];

            _loop = function _loop(i) {
              var route = routes[i]; // eslint-disable-next-line

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
                        return (0, _exportRoute.default)({
                          config: config,
                          Comp: Comp,
                          DocumentTemplate: DocumentTemplate,
                          route: route,
                          siteData: siteData,
                          clientStats: clientStats
                        });

                      case 2:
                        htmlProgress.tick();

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

            _context2.next = 9;
            return (0, _shared.poolAll)(tasks, Number(config.outputFileRate));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsInJvdXRlcyIsInNpdGVEYXRhIiwiY2xpZW50U3RhdHMiLCJodG1sUHJvZ3Jlc3MiLCJsZW5ndGgiLCJDb21wIiwiZ2xvYiIsInN5bmMiLCJwYXRoIiwicmVzb2x2ZSIsInBhdGhzIiwiQVNTRVRTIiwiZGVmYXVsdCIsIkRvY3VtZW50VGVtcGxhdGUiLCJEb2N1bWVudCIsIkRlZmF1bHREb2N1bWVudCIsInRhc2tzIiwiaSIsInJvdXRlIiwicHVzaCIsInRpY2siLCJOdW1iZXIiLCJvdXRwdXRGaWxlUmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBVkE7QUFFQUEsT0FBTyxDQUFDLG9CQUFELENBQVA7Ozs7Ozs7NEJBVWU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxZQUFBQSxNQUFULFFBQVNBLE1BQVQsRUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQixFQUF5QkMsUUFBekIsUUFBeUJBLFFBQXpCLEVBQW1DQyxXQUFuQyxRQUFtQ0EsV0FBbkM7QUFDUEMsWUFBQUEsWUFETyxHQUNRLHFCQUFTSCxNQUFNLENBQUNJLE1BQWhCLENBRFIsRUFFYjs7QUFDTUMsWUFBQUEsSUFITyxHQUdBUCxPQUFPLENBQUNRLGNBQUtDLElBQUwsQ0FDbkJDLGNBQUtDLE9BQUwsQ0FBYVYsTUFBTSxDQUFDVyxLQUFQLENBQWFDLE1BQTFCLEVBQWtDLGFBQWxDLENBRG1CLEVBRW5CLENBRm1CLENBQUQsQ0FBUCxDQUVQQyxPQUxPLEVBTWI7O0FBQ01DLFlBQUFBLGdCQVBPLEdBT1lkLE1BQU0sQ0FBQ2UsUUFBUCxJQUFtQkMsK0JBUC9CO0FBU1BDLFlBQUFBLEtBVE8sR0FTQyxFQVREOztBQUFBLG1DQVVKQyxDQVZJO0FBV1gsa0JBQU1DLEtBQUssR0FBR2xCLE1BQU0sQ0FBQ2lCLENBQUQsQ0FBcEIsQ0FYVyxDQVlYOztBQUNBRCxjQUFBQSxLQUFLLENBQUNHLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDSCwwQkFBWTtBQUNoQnBCLDBCQUFBQSxNQUFNLEVBQU5BLE1BRGdCO0FBRWhCTSwwQkFBQUEsSUFBSSxFQUFKQSxJQUZnQjtBQUdoQlEsMEJBQUFBLGdCQUFnQixFQUFoQkEsZ0JBSGdCO0FBSWhCSywwQkFBQUEsS0FBSyxFQUFMQSxLQUpnQjtBQUtoQmpCLDBCQUFBQSxRQUFRLEVBQVJBLFFBTGdCO0FBTWhCQywwQkFBQUEsV0FBVyxFQUFYQTtBQU5nQix5QkFBWixDQURHOztBQUFBO0FBU1RDLHdCQUFBQSxZQUFZLENBQUNpQixJQUFiOztBQVRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7QUFiVzs7QUFVYixpQkFBU0gsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR2pCLE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNhLENBQUMsRUFBcEMsRUFBd0M7QUFBQSxvQkFBL0JBLENBQStCO0FBY3ZDOztBQXhCWTtBQUFBLG1CQXlCUCxxQkFBUUQsS0FBUixFQUFlSyxNQUFNLENBQUN0QixNQUFNLENBQUN1QixjQUFSLENBQXJCLENBekJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZmlyc3QsIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUgKi9cblxucmVxdWlyZSgnLi4vdXRpbHMvYmluSGVscGVyJylcblxuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCB7IERlZmF1bHREb2N1bWVudCB9IGZyb20gJy4vUm9vdENvbXBvbmVudHMnXG5pbXBvcnQgeyBwb29sQWxsIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkJ1xuaW1wb3J0IGV4cG9ydFJvdXRlIGZyb20gJy4vZXhwb3J0Um91dGUnXG5pbXBvcnQgeyBwcm9ncmVzcyB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBjb25maWcsIHJvdXRlcywgc2l0ZURhdGEsIGNsaWVudFN0YXRzIH0pID0+IHtcbiAgY29uc3QgaHRtbFByb2dyZXNzID0gcHJvZ3Jlc3Mocm91dGVzLmxlbmd0aClcbiAgLy8gVXNlIHRoZSBub2RlIHZlcnNpb24gb2YgdGhlIGFwcCBjcmVhdGVkIHdpdGggd2VicGFja1xuICBjb25zdCBDb21wID0gcmVxdWlyZShnbG9iLnN5bmMoXG4gICAgcGF0aC5yZXNvbHZlKGNvbmZpZy5wYXRocy5BU1NFVFMsICdzdGF0aWMuKi5qcycpXG4gIClbMF0pLmRlZmF1bHRcbiAgLy8gUmV0cmlldmUgdGhlIGRvY3VtZW50IHRlbXBsYXRlXG4gIGNvbnN0IERvY3VtZW50VGVtcGxhdGUgPSBjb25maWcuRG9jdW1lbnQgfHwgRGVmYXVsdERvY3VtZW50XG5cbiAgY29uc3QgdGFza3MgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW2ldXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdGFza3MucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBleHBvcnRSb3V0ZSh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgQ29tcCxcbiAgICAgICAgRG9jdW1lbnRUZW1wbGF0ZSxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHNpdGVEYXRhLFxuICAgICAgICBjbGllbnRTdGF0cyxcbiAgICAgIH0pXG4gICAgICBodG1sUHJvZ3Jlc3MudGljaygpXG4gICAgfSlcbiAgfVxuICBhd2FpdCBwb29sQWxsKHRhc2tzLCBOdW1iZXIoY29uZmlnLm91dHB1dEZpbGVSYXRlKSlcbn1cbiJdfQ==