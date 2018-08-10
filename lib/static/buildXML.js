"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.generateXML = exports.makeGenerateRouteXML = exports.getPermaLink = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _shared = require("../utils/shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var REGEX_TO_GET_LAST_SLASH = /\/{1,}$/gm;

var getPermaLink = function getPermaLink(_ref) {
  var path = _ref.path,
      prefixPath = _ref.prefixPath;
  var permalink = "".concat(prefixPath).concat((0, _shared.pathJoin)(path));
  return "".concat(permalink, "/").replace(REGEX_TO_GET_LAST_SLASH, '/');
};

exports.getPermaLink = getPermaLink;

var makeGenerateRouteXML = function makeGenerateRouteXML(_ref2) {
  var prefixPath = _ref2.prefixPath;
  return function (route) {
    var path = route.path,
        lastModified = route.lastModified,
        _route$priority = route.priority,
        priority = _route$priority === void 0 ? 0.5 : _route$priority;
    return ['<url>', "<loc>".concat(getPermaLink({
      path: path,
      prefixPath: prefixPath
    }).replace(/[<>&'"]/g, function (c) {
      switch (c) {
        case '<':
          return '&lt;';

        case '>':
          return '&gt;';

        case '&':
          return '&amp;';

        case "'":
          return '&apos;';

        case '"':
          return '&quot;';

        default:
          throw new Error('XML encoding failed');
      }
    }), "</loc>"), lastModified ? "<lastmod>".concat(lastModified, "</lastmod>") : '', "<priority>".concat(priority, "</priority>"), '</url>'].join('');
  };
};

exports.makeGenerateRouteXML = makeGenerateRouteXML;

var generateXML = function generateXML(_ref3) {
  var routes = _ref3.routes,
      prefixPath = _ref3.prefixPath;
  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">".concat(routes.filter(function (r) {
    return r.path !== '404';
  }).filter(function (r) {
    return !r.noindex;
  }).map(makeGenerateRouteXML({
    prefixPath: prefixPath
  })).join(''), "</urlset>");
};

exports.generateXML = generateXML;

var _default =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref4) {
    var config, routes, _config$paths, paths, disableRoutePrefixing, DIST, prefixPath, xml;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref4.config;
            routes = config.routes, _config$paths = config.paths, paths = _config$paths === void 0 ? {} : _config$paths, disableRoutePrefixing = config.disableRoutePrefixing;
            DIST = paths.DIST;
            prefixPath = disableRoutePrefixing ? config.siteRoot : process.env.REACT_STATIC_PUBLIC_PATH;

            if (config.siteRoot) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            xml = generateXML({
              routes: routes,
              prefixPath: prefixPath
            });
            _context.next = 9;
            return _fsExtra.default.writeFile(_path.default.join(DIST, 'sitemap.xml'), xml);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvYnVpbGRYTUwuanMiXSwibmFtZXMiOlsiUkVHRVhfVE9fR0VUX0xBU1RfU0xBU0giLCJnZXRQZXJtYUxpbmsiLCJwYXRoIiwicHJlZml4UGF0aCIsInBlcm1hbGluayIsInJlcGxhY2UiLCJtYWtlR2VuZXJhdGVSb3V0ZVhNTCIsInJvdXRlIiwibGFzdE1vZGlmaWVkIiwicHJpb3JpdHkiLCJjIiwiRXJyb3IiLCJqb2luIiwiZ2VuZXJhdGVYTUwiLCJyb3V0ZXMiLCJmaWx0ZXIiLCJyIiwibm9pbmRleCIsIm1hcCIsImNvbmZpZyIsInBhdGhzIiwiZGlzYWJsZVJvdXRlUHJlZml4aW5nIiwiRElTVCIsInNpdGVSb290IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSCIsInhtbCIsImZzIiwid3JpdGVGaWxlIiwibm9kZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFdBQWhDOztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTBCO0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDcEQsTUFBTUMsU0FBUyxhQUFNRCxVQUFOLFNBQW1CLHNCQUFTRCxJQUFULENBQW5CLENBQWY7QUFDQSxTQUFPLFVBQUdFLFNBQUgsT0FBZ0JDLE9BQWhCLENBQXdCTCx1QkFBeEIsRUFBaUQsR0FBakQsQ0FBUDtBQUNELENBSE07Ozs7QUFLQSxJQUFNTSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCO0FBQUEsTUFBR0gsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBb0IsVUFBQUksS0FBSyxFQUFJO0FBQUEsUUFDdkRMLElBRHVELEdBQ2hCSyxLQURnQixDQUN2REwsSUFEdUQ7QUFBQSxRQUNqRE0sWUFEaUQsR0FDaEJELEtBRGdCLENBQ2pEQyxZQURpRDtBQUFBLDBCQUNoQkQsS0FEZ0IsQ0FDbkNFLFFBRG1DO0FBQUEsUUFDbkNBLFFBRG1DLGdDQUN4QixHQUR3QjtBQUUvRCxXQUFPLENBQ0wsT0FESyxpQkFFR1IsWUFBWSxDQUFDO0FBQUVDLE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxNQUFBQSxVQUFVLEVBQVZBO0FBQVIsS0FBRCxDQUFaLENBQW1DRSxPQUFuQyxDQUEyQyxVQUEzQyxFQUF1RCxVQUFBSyxDQUFDLEVBQUk7QUFDbEUsY0FBUUEsQ0FBUjtBQUNFLGFBQUssR0FBTDtBQUNFLGlCQUFPLE1BQVA7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sTUFBUDs7QUFDRixhQUFLLEdBQUw7QUFDRSxpQkFBTyxPQUFQOztBQUNGLGFBQUssR0FBTDtBQUNFLGlCQUFPLFFBQVA7O0FBQ0YsYUFBSyxHQUFMO0FBQ0UsaUJBQU8sUUFBUDs7QUFDRjtBQUNFLGdCQUFNLElBQUlDLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBWko7QUFjRCxLQWZPLENBRkgsYUFrQkxILFlBQVksc0JBQWVBLFlBQWYsa0JBQTBDLEVBbEJqRCxzQkFtQlFDLFFBbkJSLGtCQW9CTCxRQXBCSyxFQXFCTEcsSUFyQkssQ0FxQkEsRUFyQkEsQ0FBUDtBQXNCRCxHQXhCbUM7QUFBQSxDQUE3Qjs7OztBQTBCQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQVdYLFVBQVgsU0FBV0EsVUFBWDtBQUFBLDJIQUM0RVcsTUFBTSxDQUN4R0MsTUFEa0csQ0FDM0YsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2QsSUFBRixLQUFXLEtBQWY7QUFBQSxHQUQwRixFQUVsR2EsTUFGa0csQ0FFM0YsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxPQUFQO0FBQUEsR0FGMEYsRUFHbEdDLEdBSGtHLENBRzlGWixvQkFBb0IsQ0FBQztBQUFFSCxJQUFBQSxVQUFVLEVBQVZBO0FBQUYsR0FBRCxDQUgwRSxFQUlsR1MsSUFKa0csQ0FJN0YsRUFKNkYsQ0FENUU7QUFBQSxDQUFwQjs7Ozs7Ozs7OzRCQU9RO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU08sWUFBQUEsTUFBVCxTQUFTQSxNQUFUO0FBQ0xMLFlBQUFBLE1BREssR0FDeUNLLE1BRHpDLENBQ0xMLE1BREssa0JBQ3lDSyxNQUR6QyxDQUNHQyxLQURILEVBQ0dBLEtBREgsOEJBQ1csRUFEWCxrQkFDZUMscUJBRGYsR0FDeUNGLE1BRHpDLENBQ2VFLHFCQURmO0FBR0xDLFlBQUFBLElBSEssR0FHSUYsS0FISixDQUdMRSxJQUhLO0FBSVBuQixZQUFBQSxVQUpPLEdBSU1rQixxQkFBcUIsR0FDcENGLE1BQU0sQ0FBQ0ksUUFENkIsR0FFcENDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx3QkFOSDs7QUFBQSxnQkFRUlAsTUFBTSxDQUFDSSxRQVJDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBWVBJLFlBQUFBLEdBWk8sR0FZRGQsV0FBVyxDQUFDO0FBQUVDLGNBQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVWCxjQUFBQSxVQUFVLEVBQVZBO0FBQVYsYUFBRCxDQVpWO0FBQUE7QUFBQSxtQkFjUHlCLGlCQUFHQyxTQUFILENBQWFDLGNBQVNsQixJQUFULENBQWNVLElBQWQsRUFBb0IsYUFBcEIsQ0FBYixFQUFpREssR0FBakQsQ0FkTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuaW1wb3J0IG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCB7IHBhdGhKb2luIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkJ1xuXG5jb25zdCBSRUdFWF9UT19HRVRfTEFTVF9TTEFTSCA9IC9cXC97MSx9JC9nbVxuXG5leHBvcnQgY29uc3QgZ2V0UGVybWFMaW5rID0gKHsgcGF0aCwgcHJlZml4UGF0aCB9KSA9PiB7XG4gIGNvbnN0IHBlcm1hbGluayA9IGAke3ByZWZpeFBhdGh9JHtwYXRoSm9pbihwYXRoKX1gXG4gIHJldHVybiBgJHtwZXJtYWxpbmt9L2AucmVwbGFjZShSRUdFWF9UT19HRVRfTEFTVF9TTEFTSCwgJy8nKVxufVxuXG5leHBvcnQgY29uc3QgbWFrZUdlbmVyYXRlUm91dGVYTUwgPSAoeyBwcmVmaXhQYXRoIH0pID0+IHJvdXRlID0+IHtcbiAgY29uc3QgeyBwYXRoLCBsYXN0TW9kaWZpZWQsIHByaW9yaXR5ID0gMC41IH0gPSByb3V0ZVxuICByZXR1cm4gW1xuICAgICc8dXJsPicsXG4gICAgYDxsb2M+JHtnZXRQZXJtYUxpbmsoeyBwYXRoLCBwcmVmaXhQYXRoIH0pLnJlcGxhY2UoL1s8PiYnXCJdL2csIGMgPT4ge1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIHJldHVybiAnJmx0OydcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgcmV0dXJuICcmZ3Q7J1xuICAgICAgICBjYXNlICcmJzpcbiAgICAgICAgICByZXR1cm4gJyZhbXA7J1xuICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgIHJldHVybiAnJmFwb3M7J1xuICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgcmV0dXJuICcmcXVvdDsnXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdYTUwgZW5jb2RpbmcgZmFpbGVkJylcbiAgICAgIH1cbiAgICB9KX08L2xvYz5gLFxuICAgIGxhc3RNb2RpZmllZCA/IGA8bGFzdG1vZD4ke2xhc3RNb2RpZmllZH08L2xhc3Rtb2Q+YCA6ICcnLFxuICAgIGA8cHJpb3JpdHk+JHtwcmlvcml0eX08L3ByaW9yaXR5PmAsXG4gICAgJzwvdXJsPicsXG4gIF0uam9pbignJylcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlWE1MID0gKHsgcm91dGVzLCBwcmVmaXhQYXRoIH0pID0+XG4gIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPiR7cm91dGVzXG4gICAgLmZpbHRlcihyID0+IHIucGF0aCAhPT0gJzQwNCcpXG4gICAgLmZpbHRlcihyID0+ICFyLm5vaW5kZXgpXG4gICAgLm1hcChtYWtlR2VuZXJhdGVSb3V0ZVhNTCh7IHByZWZpeFBhdGggfSkpXG4gICAgLmpvaW4oJycpfTwvdXJsc2V0PmBcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgY29uZmlnIH0pID0+IHtcbiAgY29uc3QgeyByb3V0ZXMsIHBhdGhzID0ge30sIGRpc2FibGVSb3V0ZVByZWZpeGluZyB9ID0gY29uZmlnXG5cbiAgY29uc3QgeyBESVNUIH0gPSBwYXRoc1xuICBjb25zdCBwcmVmaXhQYXRoID0gZGlzYWJsZVJvdXRlUHJlZml4aW5nXG4gICAgPyBjb25maWcuc2l0ZVJvb3RcbiAgICA6IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSFxuXG4gIGlmICghY29uZmlnLnNpdGVSb290KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB4bWwgPSBnZW5lcmF0ZVhNTCh7IHJvdXRlcywgcHJlZml4UGF0aCB9KVxuXG4gIGF3YWl0IGZzLndyaXRlRmlsZShub2RlUGF0aC5qb2luKERJU1QsICdzaXRlbWFwLnhtbCcpLCB4bWwpXG59XG4iXX0=