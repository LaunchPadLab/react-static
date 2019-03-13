"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _server = require("react-dom/server");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _reactUniversalComponent = require("react-universal-component");

var _webpackFlushChunks = _interopRequireDefault(require("webpack-flush-chunks"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _Redirect = _interopRequireDefault(require("../client/components/Redirect"));

var _utils = require("../utils");

var _shared = require("../utils/shared");

var _HtmlWithMeta = require("./components/HtmlWithMeta");

var _HeadWithMeta = require("./components/HeadWithMeta");

var _BodyWithMeta = require("./components/BodyWithMeta");

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/static/exportRoute.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var cachedBasePath;
var cachedHrefReplace;
var cachedSrcReplace; // Inject allProps into static build

var InitialPropsContext =
/*#__PURE__*/
function (_Component) {
  _inherits(InitialPropsContext, _Component);

  function InitialPropsContext() {
    _classCallCheck(this, InitialPropsContext);

    return _possibleConstructorReturn(this, _getPrototypeOf(InitialPropsContext).apply(this, arguments));
  }

  _createClass(InitialPropsContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props = this.props,
          embeddedRouteInfo = _this$props.embeddedRouteInfo,
          route = _this$props.route;
      return {
        routeInfo: embeddedRouteInfo,
        staticURL: route.path === '/' ? route.path : "/".concat(route.path)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return InitialPropsContext;
}(_react.Component);

_defineProperty(InitialPropsContext, "childContextTypes", {
  routeInfo: _propTypes.default.object,
  staticURL: _propTypes.default.string
});

var _default =
/*#__PURE__*/
function () {
  var _exportRoute = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var config, Comp, DocumentTemplate, route, siteData, clientStats, sharedPropsHashes, templateID, localProps, allProps, routePath, basePath, hrefReplace, srcReplace, routeInfo, embeddedRouteInfo, renderMeta, chunkNames, head, clientScripts, clientStyleSheets, clientCss, FinalComp, renderToStringAndExtract, appHtml, RenderedComp, DocumentHtml, html, publicPath, htmlFilename, routeInfoFilename, res;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ref.config, Comp = _ref.Comp, DocumentTemplate = _ref.DocumentTemplate, route = _ref.route, siteData = _ref.siteData, clientStats = _ref.clientStats;
            sharedPropsHashes = route.sharedPropsHashes, templateID = route.templateID, localProps = route.localProps, allProps = route.allProps, routePath = route.path;
            basePath = cachedBasePath || (cachedBasePath = config.basePath);
            hrefReplace = cachedHrefReplace || (cachedHrefReplace = new RegExp("(href=[\"'])\\/(".concat(basePath ? "".concat(basePath, "\\/") : '', ")?([^\\/])"), 'gm'));
            srcReplace = cachedSrcReplace || (cachedSrcReplace = new RegExp("(src=[\"'])\\/(".concat(basePath ? "".concat(basePath, "\\/") : '', ")?([^\\/])"), 'gm')); // This routeInfo will be saved to disk. It should only include the
            // localProps and hashes to construct all of the props later.

            routeInfo = {
              path: routePath,
              templateID: templateID,
              sharedPropsHashes: sharedPropsHashes,
              localProps: localProps // This embeddedRouteInfo will be inlined into the HTML for this route.
              // It should only include the full props, not the partials.

            };
            embeddedRouteInfo = _objectSpread({}, routeInfo, {
              localProps: null,
              allProps: allProps,
              siteData: siteData // Make a place to collect chunks, meta info and head tags

            });
            renderMeta = {};
            chunkNames = [];
            head = {};
            clientScripts = [];
            clientStyleSheets = [];
            clientCss = {};

            if (route.redirect) {
              FinalComp = function FinalComp() {
                return _react.default.createElement(_Redirect.default, {
                  fromPath: route.path,
                  to: route.redirect,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  },
                  __self: this
                });
              };
            } else {
              FinalComp = function FinalComp(props) {
                return _react.default.createElement(_reactUniversalComponent.ReportChunks, {
                  report: function report(chunkName) {
                    return chunkNames.push(chunkName);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: this
                }, _react.default.createElement(InitialPropsContext, {
                  embeddedRouteInfo: embeddedRouteInfo,
                  route: route,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  },
                  __self: this
                }, _react.default.createElement(Comp, _extends({}, props, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                  },
                  __self: this
                }))));
              };
            }

            renderToStringAndExtract = function renderToStringAndExtract(comp) {
              // Rend the app to string!
              var appHtml = (0, _server.renderToString)(comp);

              var _flushChunks = (0, _webpackFlushChunks.default)(clientStats, {
                chunkNames: chunkNames
              }),
                  scripts = _flushChunks.scripts,
                  stylesheets = _flushChunks.stylesheets,
                  css = _flushChunks.css;

              clientScripts = scripts;
              clientStyleSheets = stylesheets;
              clientCss = css; // Extract head calls using Helmet synchronously right after renderToString
              // to not introduce any race conditions in the meta data rendering

              var helmet = _reactHelmet.default.renderStatic();

              head = {
                htmlProps: helmet.htmlAttributes.toComponent(),
                bodyProps: helmet.bodyAttributes.toComponent(),
                base: helmet.base.toComponent(),
                link: helmet.link.toComponent(),
                meta: helmet.meta.toComponent(),
                noscript: helmet.noscript.toComponent(),
                script: helmet.script.toComponent(),
                style: helmet.style.toComponent(),
                title: helmet.title.toComponent()
              };
              return appHtml;
            };

            _context.prev = 15;
            // Run the beforeRenderToComponent hook // TODO: document this
            FinalComp = (0, _utils.getConfigPluginHooks)(config, 'beforeRenderToComponent').reduce(function (curr, beforeRenderToComponent) {
              return beforeRenderToComponent(curr, {
                meta: renderMeta
              });
            }, FinalComp); // Run the configs renderToComponent function

            _context.next = 19;
            return config.renderToComponent(FinalComp, {
              meta: renderMeta,
              clientStats: clientStats
            });

          case 19:
            RenderedComp = _context.sent;
            // Run the beforeRenderToHtml hook
            // Rum the Html hook
            RenderedComp = (0, _utils.getConfigPluginHooks)(config, 'beforeRenderToHtml').reduce(function (curr, beforeRenderToHtml) {
              return beforeRenderToHtml(curr, {
                meta: renderMeta
              });
            }, RenderedComp); // Run the configs renderToHtml function

            _context.next = 23;
            return config.renderToHtml(renderToStringAndExtract, RenderedComp, {
              meta: renderMeta,
              clientStats: clientStats
            });

          case 23:
            appHtml = _context.sent;
            // Rum the beforeHtmlToDocument hook
            appHtml = (0, _utils.getConfigPluginHooks)(config, 'beforeHtmlToDocument').reduce(function (curr, beforeHtmlToDocument) {
              return beforeHtmlToDocument(curr, {
                meta: renderMeta
              });
            }, appHtml);
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](15);
            _context.t0.message = "Failed exporting HTML for URL ".concat(route.path, " (").concat(route.component, "): ").concat(_context.t0.message);
            throw _context.t0;

          case 31:
            DocumentHtml = (0, _server.renderToStaticMarkup)(_react.default.createElement(DocumentTemplate, {
              Html: (0, _HtmlWithMeta.makeHtmlWithMeta)({
                head: head
              }),
              Head: (0, _HeadWithMeta.makeHeadWithMeta)({
                head: head,
                route: route,
                clientScripts: clientScripts,
                config: config,
                clientStyleSheets: clientStyleSheets,
                clientCss: clientCss,
                meta: renderMeta
              }),
              Body: (0, _BodyWithMeta.makeBodyWithMeta)({
                head: head,
                route: route,
                embeddedRouteInfo: embeddedRouteInfo,
                clientScripts: clientScripts,
                config: config
              }),
              siteData: siteData,
              routeInfo: embeddedRouteInfo,
              renderMeta: renderMeta,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            }, _react.default.createElement("div", {
              id: "root",
              dangerouslySetInnerHTML: {
                __html: appHtml
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 215
              },
              __self: this
            }))); // Render the html for the page inside of the base document.

            html = "<!DOCTYPE html>".concat(DocumentHtml); // Rum the beforeDocumentToFile hook

            html = (0, _utils.getConfigPluginHooks)(config, 'beforeDocumentToFile').reduce(function (curr, beforeDocumentToFile) {
              return beforeDocumentToFile(curr, {
                meta: renderMeta
              });
            }, html); // If the siteRoot is set and we're not in staging, prefix all absolute URL's
            // with the siteRoot

            publicPath = (0, _shared.makePathAbsolute)(process.env.REACT_STATIC_PUBLIC_PATH);

            if (process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING !== 'true') {
              html = html.replace(hrefReplace, "$1".concat(publicPath, "$3"));
            }

            html = html.replace(srcReplace, "$1".concat(publicPath, "$3")); // If the route is a 404 page, write it directly to 404.html, instead of
            // inside a directory.

            htmlFilename = route.path === '404' ? _path.default.join(config.paths.DIST, '404.html') : _path.default.join(config.paths.DIST, route.path, 'index.html'); // Make the routeInfo sit right next to its companion html file

            routeInfoFilename = _path.default.join(config.paths.DIST, route.path, 'routeInfo.json');
            _context.next = 41;
            return Promise.all([_fsExtra.default.outputFile(htmlFilename, html), !route.redirect ? _fsExtra.default.outputJson(routeInfoFilename, routeInfo) : Promise.resolve()]);

          case 41:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[15, 27]]);
  }));

  function exportRoute(_x) {
    return _exportRoute.apply(this, arguments);
  }

  return exportRoute;
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0Um91dGUuanMiXSwibmFtZXMiOlsiY2FjaGVkQmFzZVBhdGgiLCJjYWNoZWRIcmVmUmVwbGFjZSIsImNhY2hlZFNyY1JlcGxhY2UiLCJJbml0aWFsUHJvcHNDb250ZXh0IiwicHJvcHMiLCJlbWJlZGRlZFJvdXRlSW5mbyIsInJvdXRlIiwicm91dGVJbmZvIiwic3RhdGljVVJMIiwicGF0aCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiY29uZmlnIiwiQ29tcCIsIkRvY3VtZW50VGVtcGxhdGUiLCJzaXRlRGF0YSIsImNsaWVudFN0YXRzIiwic2hhcmVkUHJvcHNIYXNoZXMiLCJ0ZW1wbGF0ZUlEIiwibG9jYWxQcm9wcyIsImFsbFByb3BzIiwicm91dGVQYXRoIiwiYmFzZVBhdGgiLCJocmVmUmVwbGFjZSIsIlJlZ0V4cCIsInNyY1JlcGxhY2UiLCJyZW5kZXJNZXRhIiwiY2h1bmtOYW1lcyIsImhlYWQiLCJjbGllbnRTY3JpcHRzIiwiY2xpZW50U3R5bGVTaGVldHMiLCJjbGllbnRDc3MiLCJyZWRpcmVjdCIsIkZpbmFsQ29tcCIsImNodW5rTmFtZSIsInB1c2giLCJyZW5kZXJUb1N0cmluZ0FuZEV4dHJhY3QiLCJjb21wIiwiYXBwSHRtbCIsInNjcmlwdHMiLCJzdHlsZXNoZWV0cyIsImNzcyIsImhlbG1ldCIsIkhlbG1ldCIsInJlbmRlclN0YXRpYyIsImh0bWxQcm9wcyIsImh0bWxBdHRyaWJ1dGVzIiwidG9Db21wb25lbnQiLCJib2R5UHJvcHMiLCJib2R5QXR0cmlidXRlcyIsImJhc2UiLCJsaW5rIiwibWV0YSIsIm5vc2NyaXB0Iiwic2NyaXB0Iiwic3R5bGUiLCJ0aXRsZSIsInJlZHVjZSIsImN1cnIiLCJiZWZvcmVSZW5kZXJUb0NvbXBvbmVudCIsInJlbmRlclRvQ29tcG9uZW50IiwiUmVuZGVyZWRDb21wIiwiYmVmb3JlUmVuZGVyVG9IdG1sIiwicmVuZGVyVG9IdG1sIiwiYmVmb3JlSHRtbFRvRG9jdW1lbnQiLCJtZXNzYWdlIiwiY29tcG9uZW50IiwiRG9jdW1lbnRIdG1sIiwiX19odG1sIiwiaHRtbCIsImJlZm9yZURvY3VtZW50VG9GaWxlIiwicHVibGljUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfUFVCTElDX1BBVEgiLCJSRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkciLCJyZXBsYWNlIiwiaHRtbEZpbGVuYW1lIiwibm9kZVBhdGgiLCJqb2luIiwicGF0aHMiLCJESVNUIiwicm91dGVJbmZvRmlsZW5hbWUiLCJQcm9taXNlIiwiYWxsIiwiZnMiLCJvdXRwdXRGaWxlIiwib3V0cHV0SnNvbiIsInJlc29sdmUiLCJyZXMiLCJleHBvcnRSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBSUEsY0FBSjtBQUNBLElBQUlDLGlCQUFKO0FBQ0EsSUFBSUMsZ0JBQUosQyxDQUVBOztJQUNNQyxtQjs7Ozs7Ozs7Ozs7OztzQ0FLYztBQUFBLHdCQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ1JDLGlCQURRLGVBQ1JBLGlCQURRO0FBQUEsVUFDV0MsS0FEWCxlQUNXQSxLQURYO0FBRWhCLGFBQU87QUFDTEMsUUFBQUEsU0FBUyxFQUFFRixpQkFETjtBQUVMRyxRQUFBQSxTQUFTLEVBQUVGLEtBQUssQ0FBQ0csSUFBTixLQUFlLEdBQWYsR0FBcUJILEtBQUssQ0FBQ0csSUFBM0IsY0FBc0NILEtBQUssQ0FBQ0csSUFBNUM7QUFGTixPQUFQO0FBSUQ7Ozs2QkFDUTtBQUNQLGFBQU8sS0FBS0wsS0FBTCxDQUFXTSxRQUFsQjtBQUNEOzs7O0VBZCtCQyxnQjs7Z0JBQTVCUixtQix1QkFD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QUFDb0UsS0FBUCxDQUFhQyxJQUEzQixFQUFpQyxVQUFqQyxDQURKLEdBRUlILGNBQVNDLElBQVQsQ0FBY25FLE1BQU0sQ0FBQ29FLEtBQVAsQ0FBYUMsSUFBM0IsRUFBaUM5RSxLQUFLLENBQUNHLElBQXZDLEVBQTZDLFlBQTdDLENBek1RLEVBMk1kOztBQUNNNEUsWUFBQUEsaUJBNU1RLEdBNE1ZSixjQUFTQyxJQUFULENBQ3hCbkUsTUFBTSxDQUFDb0UsS0FBUCxDQUFhQyxJQURXLEVBRXhCOUUsS0FBSyxDQUFDRyxJQUZrQixFQUd4QixnQkFId0IsQ0E1TVo7QUFBQTtBQUFBLG1CQWtOSTZFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQzVCQyxpQkFBR0MsVUFBSCxDQUFjVCxZQUFkLEVBQTRCUixJQUE1QixDQUQ0QixFQUU1QixDQUFDbEUsS0FBSyxDQUFDNkIsUUFBUCxHQUNJcUQsaUJBQUdFLFVBQUgsQ0FBY0wsaUJBQWQsRUFBaUM5RSxTQUFqQyxDQURKLEdBRUkrRSxPQUFPLENBQUNLLE9BQVIsRUFKd0IsQ0FBWixDQWxOSjs7QUFBQTtBQWtOUkMsWUFBQUEsR0FsTlE7QUFBQSw2Q0F3TlBBLEdBeE5POztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVDLFc7Ozs7U0FBQUEsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7IFJlcG9ydENodW5rcyB9IGZyb20gJ3JlYWN0LXVuaXZlcnNhbC1jb21wb25lbnQnXG5pbXBvcnQgZmx1c2hDaHVua3MgZnJvbSAnd2VicGFjay1mbHVzaC1jaHVua3MnXG5pbXBvcnQgbm9kZVBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcblxuaW1wb3J0IFJlZGlyZWN0IGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL1JlZGlyZWN0J1xuaW1wb3J0IHsgZ2V0Q29uZmlnUGx1Z2luSG9va3MgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IG1ha2VQYXRoQWJzb2x1dGUgfSBmcm9tICcuLi91dGlscy9zaGFyZWQnXG5cbmltcG9ydCB7IG1ha2VIdG1sV2l0aE1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvSHRtbFdpdGhNZXRhJ1xuaW1wb3J0IHsgbWFrZUhlYWRXaXRoTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkV2l0aE1ldGEnXG5pbXBvcnQgeyBtYWtlQm9keVdpdGhNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0JvZHlXaXRoTWV0YSdcblxuLy9cblxubGV0IGNhY2hlZEJhc2VQYXRoXG5sZXQgY2FjaGVkSHJlZlJlcGxhY2VcbmxldCBjYWNoZWRTcmNSZXBsYWNlXG5cbi8vIEluamVjdCBhbGxQcm9wcyBpbnRvIHN0YXRpYyBidWlsZFxuY2xhc3MgSW5pdGlhbFByb3BzQ29udGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICByb3V0ZUluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RhdGljVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCB7IGVtYmVkZGVkUm91dGVJbmZvLCByb3V0ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZUluZm86IGVtYmVkZGVkUm91dGVJbmZvLFxuICAgICAgc3RhdGljVVJMOiByb3V0ZS5wYXRoID09PSAnLycgPyByb3V0ZS5wYXRoIDogYC8ke3JvdXRlLnBhdGh9YCxcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIGV4cG9ydFJvdXRlKHtcbiAgY29uZmlnLFxuICBDb21wLFxuICBEb2N1bWVudFRlbXBsYXRlLFxuICByb3V0ZSxcbiAgc2l0ZURhdGEsXG4gIGNsaWVudFN0YXRzLFxufSkge1xuICBjb25zdCB7XG4gICAgc2hhcmVkUHJvcHNIYXNoZXMsXG4gICAgdGVtcGxhdGVJRCxcbiAgICBsb2NhbFByb3BzLFxuICAgIGFsbFByb3BzLFxuICAgIHBhdGg6IHJvdXRlUGF0aCxcbiAgfSA9IHJvdXRlXG5cbiAgY29uc3QgYmFzZVBhdGggPSBjYWNoZWRCYXNlUGF0aCB8fCAoY2FjaGVkQmFzZVBhdGggPSBjb25maWcuYmFzZVBhdGgpXG5cbiAgY29uc3QgaHJlZlJlcGxhY2UgPVxuICAgIGNhY2hlZEhyZWZSZXBsYWNlIHx8XG4gICAgKGNhY2hlZEhyZWZSZXBsYWNlID0gbmV3IFJlZ0V4cChcbiAgICAgIGAoaHJlZj1bXCInXSlcXFxcLygke2Jhc2VQYXRoID8gYCR7YmFzZVBhdGh9XFxcXC9gIDogJyd9KT8oW15cXFxcL10pYCxcbiAgICAgICdnbSdcbiAgICApKVxuXG4gIGNvbnN0IHNyY1JlcGxhY2UgPVxuICAgIGNhY2hlZFNyY1JlcGxhY2UgfHxcbiAgICAoY2FjaGVkU3JjUmVwbGFjZSA9IG5ldyBSZWdFeHAoXG4gICAgICBgKHNyYz1bXCInXSlcXFxcLygke2Jhc2VQYXRoID8gYCR7YmFzZVBhdGh9XFxcXC9gIDogJyd9KT8oW15cXFxcL10pYCxcbiAgICAgICdnbSdcbiAgICApKVxuXG4gIC8vIFRoaXMgcm91dGVJbmZvIHdpbGwgYmUgc2F2ZWQgdG8gZGlzay4gSXQgc2hvdWxkIG9ubHkgaW5jbHVkZSB0aGVcbiAgLy8gbG9jYWxQcm9wcyBhbmQgaGFzaGVzIHRvIGNvbnN0cnVjdCBhbGwgb2YgdGhlIHByb3BzIGxhdGVyLlxuICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgcGF0aDogcm91dGVQYXRoLFxuICAgIHRlbXBsYXRlSUQsXG4gICAgc2hhcmVkUHJvcHNIYXNoZXMsXG4gICAgbG9jYWxQcm9wcyxcbiAgfVxuXG4gIC8vIFRoaXMgZW1iZWRkZWRSb3V0ZUluZm8gd2lsbCBiZSBpbmxpbmVkIGludG8gdGhlIEhUTUwgZm9yIHRoaXMgcm91dGUuXG4gIC8vIEl0IHNob3VsZCBvbmx5IGluY2x1ZGUgdGhlIGZ1bGwgcHJvcHMsIG5vdCB0aGUgcGFydGlhbHMuXG4gIGNvbnN0IGVtYmVkZGVkUm91dGVJbmZvID0ge1xuICAgIC4uLnJvdXRlSW5mbyxcbiAgICBsb2NhbFByb3BzOiBudWxsLFxuICAgIGFsbFByb3BzLFxuICAgIHNpdGVEYXRhLFxuICB9XG5cbiAgLy8gTWFrZSBhIHBsYWNlIHRvIGNvbGxlY3QgY2h1bmtzLCBtZXRhIGluZm8gYW5kIGhlYWQgdGFnc1xuICBjb25zdCByZW5kZXJNZXRhID0ge31cbiAgY29uc3QgY2h1bmtOYW1lcyA9IFtdXG4gIGxldCBoZWFkID0ge31cbiAgbGV0IGNsaWVudFNjcmlwdHMgPSBbXVxuICBsZXQgY2xpZW50U3R5bGVTaGVldHMgPSBbXVxuICBsZXQgY2xpZW50Q3NzID0ge31cblxuICBsZXQgRmluYWxDb21wXG5cbiAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XG4gICAgRmluYWxDb21wID0gKCkgPT4gPFJlZGlyZWN0IGZyb21QYXRoPXtyb3V0ZS5wYXRofSB0bz17cm91dGUucmVkaXJlY3R9IC8+XG4gIH0gZWxzZSB7XG4gICAgRmluYWxDb21wID0gcHJvcHMgPT4gKFxuICAgICAgPFJlcG9ydENodW5rcyByZXBvcnQ9e2NodW5rTmFtZSA9PiBjaHVua05hbWVzLnB1c2goY2h1bmtOYW1lKX0+XG4gICAgICAgIDxJbml0aWFsUHJvcHNDb250ZXh0XG4gICAgICAgICAgZW1iZWRkZWRSb3V0ZUluZm89e2VtYmVkZGVkUm91dGVJbmZvfVxuICAgICAgICAgIHJvdXRlPXtyb3V0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9Jbml0aWFsUHJvcHNDb250ZXh0PlxuICAgICAgPC9SZXBvcnRDaHVua3M+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyVG9TdHJpbmdBbmRFeHRyYWN0ID0gY29tcCA9PiB7XG4gICAgLy8gUmVuZCB0aGUgYXBwIHRvIHN0cmluZyFcbiAgICBjb25zdCBhcHBIdG1sID0gcmVuZGVyVG9TdHJpbmcoY29tcClcbiAgICBjb25zdCB7IHNjcmlwdHMsIHN0eWxlc2hlZXRzLCBjc3MgfSA9IGZsdXNoQ2h1bmtzKGNsaWVudFN0YXRzLCB7XG4gICAgICBjaHVua05hbWVzLFxuICAgIH0pXG5cbiAgICBjbGllbnRTY3JpcHRzID0gc2NyaXB0c1xuICAgIGNsaWVudFN0eWxlU2hlZXRzID0gc3R5bGVzaGVldHNcbiAgICBjbGllbnRDc3MgPSBjc3NcbiAgICAvLyBFeHRyYWN0IGhlYWQgY2FsbHMgdXNpbmcgSGVsbWV0IHN5bmNocm9ub3VzbHkgcmlnaHQgYWZ0ZXIgcmVuZGVyVG9TdHJpbmdcbiAgICAvLyB0byBub3QgaW50cm9kdWNlIGFueSByYWNlIGNvbmRpdGlvbnMgaW4gdGhlIG1ldGEgZGF0YSByZW5kZXJpbmdcbiAgICBjb25zdCBoZWxtZXQgPSBIZWxtZXQucmVuZGVyU3RhdGljKClcbiAgICBoZWFkID0ge1xuICAgICAgaHRtbFByb3BzOiBoZWxtZXQuaHRtbEF0dHJpYnV0ZXMudG9Db21wb25lbnQoKSxcbiAgICAgIGJvZHlQcm9wczogaGVsbWV0LmJvZHlBdHRyaWJ1dGVzLnRvQ29tcG9uZW50KCksXG4gICAgICBiYXNlOiBoZWxtZXQuYmFzZS50b0NvbXBvbmVudCgpLFxuICAgICAgbGluazogaGVsbWV0LmxpbmsudG9Db21wb25lbnQoKSxcbiAgICAgIG1ldGE6IGhlbG1ldC5tZXRhLnRvQ29tcG9uZW50KCksXG4gICAgICBub3NjcmlwdDogaGVsbWV0Lm5vc2NyaXB0LnRvQ29tcG9uZW50KCksXG4gICAgICBzY3JpcHQ6IGhlbG1ldC5zY3JpcHQudG9Db21wb25lbnQoKSxcbiAgICAgIHN0eWxlOiBoZWxtZXQuc3R5bGUudG9Db21wb25lbnQoKSxcbiAgICAgIHRpdGxlOiBoZWxtZXQudGl0bGUudG9Db21wb25lbnQoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gYXBwSHRtbFxuICB9XG5cbiAgbGV0IGFwcEh0bWxcblxuICB0cnkge1xuICAgIC8vIFJ1biB0aGUgYmVmb3JlUmVuZGVyVG9Db21wb25lbnQgaG9vayAvLyBUT0RPOiBkb2N1bWVudCB0aGlzXG4gICAgRmluYWxDb21wID0gZ2V0Q29uZmlnUGx1Z2luSG9va3MoY29uZmlnLCAnYmVmb3JlUmVuZGVyVG9Db21wb25lbnQnKS5yZWR1Y2UoXG4gICAgICAoY3VyciwgYmVmb3JlUmVuZGVyVG9Db21wb25lbnQpID0+XG4gICAgICAgIGJlZm9yZVJlbmRlclRvQ29tcG9uZW50KGN1cnIsIHsgbWV0YTogcmVuZGVyTWV0YSB9KSxcbiAgICAgIEZpbmFsQ29tcFxuICAgIClcblxuICAgIC8vIFJ1biB0aGUgY29uZmlncyByZW5kZXJUb0NvbXBvbmVudCBmdW5jdGlvblxuICAgIGxldCBSZW5kZXJlZENvbXAgPSBhd2FpdCBjb25maWcucmVuZGVyVG9Db21wb25lbnQoRmluYWxDb21wLCB7XG4gICAgICBtZXRhOiByZW5kZXJNZXRhLFxuICAgICAgY2xpZW50U3RhdHMsXG4gICAgfSlcblxuICAgIC8vIFJ1biB0aGUgYmVmb3JlUmVuZGVyVG9IdG1sIGhvb2tcbiAgICAvLyBSdW0gdGhlIEh0bWwgaG9va1xuICAgIFJlbmRlcmVkQ29tcCA9IGdldENvbmZpZ1BsdWdpbkhvb2tzKGNvbmZpZywgJ2JlZm9yZVJlbmRlclRvSHRtbCcpLnJlZHVjZShcbiAgICAgIChjdXJyLCBiZWZvcmVSZW5kZXJUb0h0bWwpID0+XG4gICAgICAgIGJlZm9yZVJlbmRlclRvSHRtbChjdXJyLCB7IG1ldGE6IHJlbmRlck1ldGEgfSksXG4gICAgICBSZW5kZXJlZENvbXBcbiAgICApXG5cbiAgICAvLyBSdW4gdGhlIGNvbmZpZ3MgcmVuZGVyVG9IdG1sIGZ1bmN0aW9uXG4gICAgYXBwSHRtbCA9IGF3YWl0IGNvbmZpZy5yZW5kZXJUb0h0bWwoXG4gICAgICByZW5kZXJUb1N0cmluZ0FuZEV4dHJhY3QsXG4gICAgICBSZW5kZXJlZENvbXAsXG4gICAgICB7XG4gICAgICAgIG1ldGE6IHJlbmRlck1ldGEsXG4gICAgICAgIGNsaWVudFN0YXRzLFxuICAgICAgfVxuICAgIClcblxuICAgIC8vIFJ1bSB0aGUgYmVmb3JlSHRtbFRvRG9jdW1lbnQgaG9va1xuICAgIGFwcEh0bWwgPSBnZXRDb25maWdQbHVnaW5Ib29rcyhjb25maWcsICdiZWZvcmVIdG1sVG9Eb2N1bWVudCcpLnJlZHVjZShcbiAgICAgIChjdXJyLCBiZWZvcmVIdG1sVG9Eb2N1bWVudCkgPT5cbiAgICAgICAgYmVmb3JlSHRtbFRvRG9jdW1lbnQoY3VyciwgeyBtZXRhOiByZW5kZXJNZXRhIH0pLFxuICAgICAgYXBwSHRtbFxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvci5tZXNzYWdlID0gYEZhaWxlZCBleHBvcnRpbmcgSFRNTCBmb3IgVVJMICR7cm91dGUucGF0aH0gKCR7XG4gICAgICByb3V0ZS5jb21wb25lbnRcbiAgICB9KTogJHtlcnJvci5tZXNzYWdlfWBcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgY29uc3QgRG9jdW1lbnRIdG1sID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgPERvY3VtZW50VGVtcGxhdGVcbiAgICAgIEh0bWw9e21ha2VIdG1sV2l0aE1ldGEoeyBoZWFkIH0pfVxuICAgICAgSGVhZD17bWFrZUhlYWRXaXRoTWV0YSh7XG4gICAgICAgIGhlYWQsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBjbGllbnRTY3JpcHRzLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGNsaWVudFN0eWxlU2hlZXRzLFxuICAgICAgICBjbGllbnRDc3MsXG4gICAgICAgIG1ldGE6IHJlbmRlck1ldGEsXG4gICAgICB9KX1cbiAgICAgIEJvZHk9e21ha2VCb2R5V2l0aE1ldGEoe1xuICAgICAgICBoZWFkLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgZW1iZWRkZWRSb3V0ZUluZm8sXG4gICAgICAgIGNsaWVudFNjcmlwdHMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0pfVxuICAgICAgc2l0ZURhdGE9e3NpdGVEYXRhfVxuICAgICAgcm91dGVJbmZvPXtlbWJlZGRlZFJvdXRlSW5mb31cbiAgICAgIHJlbmRlck1ldGE9e3JlbmRlck1ldGF9XG4gICAgPlxuICAgICAgPGRpdiBpZD1cInJvb3RcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFwcEh0bWwgfX0gLz5cbiAgICA8L0RvY3VtZW50VGVtcGxhdGU+XG4gIClcblxuICAvLyBSZW5kZXIgdGhlIGh0bWwgZm9yIHRoZSBwYWdlIGluc2lkZSBvZiB0aGUgYmFzZSBkb2N1bWVudC5cbiAgbGV0IGh0bWwgPSBgPCFET0NUWVBFIGh0bWw+JHtEb2N1bWVudEh0bWx9YFxuXG4gIC8vIFJ1bSB0aGUgYmVmb3JlRG9jdW1lbnRUb0ZpbGUgaG9va1xuICBodG1sID0gZ2V0Q29uZmlnUGx1Z2luSG9va3MoY29uZmlnLCAnYmVmb3JlRG9jdW1lbnRUb0ZpbGUnKS5yZWR1Y2UoXG4gICAgKGN1cnIsIGJlZm9yZURvY3VtZW50VG9GaWxlKSA9PlxuICAgICAgYmVmb3JlRG9jdW1lbnRUb0ZpbGUoY3VyciwgeyBtZXRhOiByZW5kZXJNZXRhIH0pLFxuICAgIGh0bWxcbiAgKVxuXG4gIC8vIElmIHRoZSBzaXRlUm9vdCBpcyBzZXQgYW5kIHdlJ3JlIG5vdCBpbiBzdGFnaW5nLCBwcmVmaXggYWxsIGFic29sdXRlIFVSTCdzXG4gIC8vIHdpdGggdGhlIHNpdGVSb290XG4gIGNvbnN0IHB1YmxpY1BhdGggPSBtYWtlUGF0aEFic29sdXRlKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSClcbiAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyAhPT0gJ3RydWUnKSB7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZShocmVmUmVwbGFjZSwgYCQxJHtwdWJsaWNQYXRofSQzYClcbiAgfVxuXG4gIGh0bWwgPSBodG1sLnJlcGxhY2Uoc3JjUmVwbGFjZSwgYCQxJHtwdWJsaWNQYXRofSQzYClcblxuICAvLyBJZiB0aGUgcm91dGUgaXMgYSA0MDQgcGFnZSwgd3JpdGUgaXQgZGlyZWN0bHkgdG8gNDA0Lmh0bWwsIGluc3RlYWQgb2ZcbiAgLy8gaW5zaWRlIGEgZGlyZWN0b3J5LlxuICBjb25zdCBodG1sRmlsZW5hbWUgPVxuICAgIHJvdXRlLnBhdGggPT09ICc0MDQnXG4gICAgICA/IG5vZGVQYXRoLmpvaW4oY29uZmlnLnBhdGhzLkRJU1QsICc0MDQuaHRtbCcpXG4gICAgICA6IG5vZGVQYXRoLmpvaW4oY29uZmlnLnBhdGhzLkRJU1QsIHJvdXRlLnBhdGgsICdpbmRleC5odG1sJylcblxuICAvLyBNYWtlIHRoZSByb3V0ZUluZm8gc2l0IHJpZ2h0IG5leHQgdG8gaXRzIGNvbXBhbmlvbiBodG1sIGZpbGVcbiAgY29uc3Qgcm91dGVJbmZvRmlsZW5hbWUgPSBub2RlUGF0aC5qb2luKFxuICAgIGNvbmZpZy5wYXRocy5ESVNULFxuICAgIHJvdXRlLnBhdGgsXG4gICAgJ3JvdXRlSW5mby5qc29uJ1xuICApXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZzLm91dHB1dEZpbGUoaHRtbEZpbGVuYW1lLCBodG1sKSxcbiAgICAhcm91dGUucmVkaXJlY3RcbiAgICAgID8gZnMub3V0cHV0SnNvbihyb3V0ZUluZm9GaWxlbmFtZSwgcm91dGVJbmZvKVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUoKSxcbiAgXSlcbiAgcmV0dXJuIHJlc1xufSlcbiJdfQ==