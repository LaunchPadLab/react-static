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

  return function exportRoute(_x) {
    return _exportRoute.apply(this, arguments);
  };
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0Um91dGUuanMiXSwibmFtZXMiOlsiY2FjaGVkQmFzZVBhdGgiLCJjYWNoZWRIcmVmUmVwbGFjZSIsImNhY2hlZFNyY1JlcGxhY2UiLCJJbml0aWFsUHJvcHNDb250ZXh0IiwicHJvcHMiLCJlbWJlZGRlZFJvdXRlSW5mbyIsInJvdXRlIiwicm91dGVJbmZvIiwic3RhdGljVVJMIiwicGF0aCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiY29uZmlnIiwiQ29tcCIsIkRvY3VtZW50VGVtcGxhdGUiLCJzaXRlRGF0YSIsImNsaWVudFN0YXRzIiwic2hhcmVkUHJvcHNIYXNoZXMiLCJ0ZW1wbGF0ZUlEIiwibG9jYWxQcm9wcyIsImFsbFByb3BzIiwicm91dGVQYXRoIiwiYmFzZVBhdGgiLCJocmVmUmVwbGFjZSIsIlJlZ0V4cCIsInNyY1JlcGxhY2UiLCJyZW5kZXJNZXRhIiwiY2h1bmtOYW1lcyIsImhlYWQiLCJjbGllbnRTY3JpcHRzIiwiY2xpZW50U3R5bGVTaGVldHMiLCJjbGllbnRDc3MiLCJyZWRpcmVjdCIsIkZpbmFsQ29tcCIsImNodW5rTmFtZSIsInB1c2giLCJyZW5kZXJUb1N0cmluZ0FuZEV4dHJhY3QiLCJjb21wIiwiYXBwSHRtbCIsInNjcmlwdHMiLCJzdHlsZXNoZWV0cyIsImNzcyIsImhlbG1ldCIsIkhlbG1ldCIsInJlbmRlclN0YXRpYyIsImh0bWxQcm9wcyIsImh0bWxBdHRyaWJ1dGVzIiwidG9Db21wb25lbnQiLCJib2R5UHJvcHMiLCJib2R5QXR0cmlidXRlcyIsImJhc2UiLCJsaW5rIiwibWV0YSIsIm5vc2NyaXB0Iiwic2NyaXB0Iiwic3R5bGUiLCJ0aXRsZSIsInJlZHVjZSIsImN1cnIiLCJiZWZvcmVSZW5kZXJUb0NvbXBvbmVudCIsInJlbmRlclRvQ29tcG9uZW50IiwiUmVuZGVyZWRDb21wIiwiYmVmb3JlUmVuZGVyVG9IdG1sIiwicmVuZGVyVG9IdG1sIiwiYmVmb3JlSHRtbFRvRG9jdW1lbnQiLCJtZXNzYWdlIiwiY29tcG9uZW50IiwiRG9jdW1lbnRIdG1sIiwiX19odG1sIiwiaHRtbCIsImJlZm9yZURvY3VtZW50VG9GaWxlIiwicHVibGljUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfUFVCTElDX1BBVEgiLCJSRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkciLCJyZXBsYWNlIiwiaHRtbEZpbGVuYW1lIiwibm9kZVBhdGgiLCJqb2luIiwicGF0aHMiLCJESVNUIiwicm91dGVJbmZvRmlsZW5hbWUiLCJQcm9taXNlIiwiYWxsIiwiZnMiLCJvdXRwdXRGaWxlIiwib3V0cHV0SnNvbiIsInJlc29sdmUiLCJyZXMiLCJleHBvcnRSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBSUEsY0FBSjtBQUNBLElBQUlDLGlCQUFKO0FBQ0EsSUFBSUMsZ0JBQUosQyxDQUVBOztJQUNNQyxtQjs7Ozs7Ozs7Ozs7OztzQ0FLYztBQUFBLHdCQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ1JDLGlCQURRLGVBQ1JBLGlCQURRO0FBQUEsVUFDV0MsS0FEWCxlQUNXQSxLQURYO0FBRWhCLGFBQU87QUFDTEMsUUFBQUEsU0FBUyxFQUFFRixpQkFETjtBQUVMRyxRQUFBQSxTQUFTLEVBQUVGLEtBQUssQ0FBQ0csSUFBTixLQUFlLEdBQWYsR0FBcUJILEtBQUssQ0FBQ0csSUFBM0IsY0FBc0NILEtBQUssQ0FBQ0csSUFBNUM7QUFGTixPQUFQO0FBSUQ7Ozs2QkFDUTtBQUNQLGFBQU8sS0FBS0wsS0FBTCxDQUFXTSxRQUFsQjtBQUNEOzs7O0VBZCtCQyxnQjs7Z0JBQTVCUixtQix1QkFD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QUFDb0UsS0FBUCxDQUFhQyxJQUEzQixFQUFpQyxVQUFqQyxDQURKLEdBRUlILGNBQVNDLElBQVQsQ0FBY25FLE1BQU0sQ0FBQ29FLEtBQVAsQ0FBYUMsSUFBM0IsRUFBaUM5RSxLQUFLLENBQUNHLElBQXZDLEVBQTZDLFlBQTdDLENBek1RLEVBMk1kOztBQUNNNEUsWUFBQUEsaUJBNU1RLEdBNE1ZSixjQUFTQyxJQUFULENBQ3hCbkUsTUFBTSxDQUFDb0UsS0FBUCxDQUFhQyxJQURXLEVBRXhCOUUsS0FBSyxDQUFDRyxJQUZrQixFQUd4QixnQkFId0IsQ0E1TVo7QUFBQTtBQUFBLG1CQWtOSTZFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQzVCQyxpQkFBR0MsVUFBSCxDQUFjVCxZQUFkLEVBQTRCUixJQUE1QixDQUQ0QixFQUU1QixDQUFDbEUsS0FBSyxDQUFDNkIsUUFBUCxHQUNJcUQsaUJBQUdFLFVBQUgsQ0FBY0wsaUJBQWQsRUFBaUM5RSxTQUFqQyxDQURKLEdBRUkrRSxPQUFPLENBQUNLLE9BQVIsRUFKd0IsQ0FBWixDQWxOSjs7QUFBQTtBQWtOUkMsWUFBQUEsR0FsTlE7QUFBQSw2Q0F3TlBBLEdBeE5POztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlQyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcsIHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHsgUmVwb3J0Q2h1bmtzIH0gZnJvbSAncmVhY3QtdW5pdmVyc2FsLWNvbXBvbmVudCdcbmltcG9ydCBmbHVzaENodW5rcyBmcm9tICd3ZWJwYWNrLWZsdXNoLWNodW5rcydcbmltcG9ydCBub2RlUGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuXG5pbXBvcnQgUmVkaXJlY3QgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvUmVkaXJlY3QnXG5pbXBvcnQgeyBnZXRDb25maWdQbHVnaW5Ib29rcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgbWFrZVBhdGhBYnNvbHV0ZSB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZCdcblxuaW1wb3J0IHsgbWFrZUh0bWxXaXRoTWV0YSB9IGZyb20gJy4vY29tcG9uZW50cy9IdG1sV2l0aE1ldGEnXG5pbXBvcnQgeyBtYWtlSGVhZFdpdGhNZXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRXaXRoTWV0YSdcbmltcG9ydCB7IG1ha2VCb2R5V2l0aE1ldGEgfSBmcm9tICcuL2NvbXBvbmVudHMvQm9keVdpdGhNZXRhJ1xuXG4vL1xuXG5sZXQgY2FjaGVkQmFzZVBhdGhcbmxldCBjYWNoZWRIcmVmUmVwbGFjZVxubGV0IGNhY2hlZFNyY1JlcGxhY2VcblxuLy8gSW5qZWN0IGFsbFByb3BzIGludG8gc3RhdGljIGJ1aWxkXG5jbGFzcyBJbml0aWFsUHJvcHNDb250ZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHJvdXRlSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdGF0aWNVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgZW1iZWRkZWRSb3V0ZUluZm8sIHJvdXRlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlSW5mbzogZW1iZWRkZWRSb3V0ZUluZm8sXG4gICAgICBzdGF0aWNVUkw6IHJvdXRlLnBhdGggPT09ICcvJyA/IHJvdXRlLnBhdGggOiBgLyR7cm91dGUucGF0aH1gLFxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gZXhwb3J0Um91dGUoe1xuICBjb25maWcsXG4gIENvbXAsXG4gIERvY3VtZW50VGVtcGxhdGUsXG4gIHJvdXRlLFxuICBzaXRlRGF0YSxcbiAgY2xpZW50U3RhdHMsXG59KSB7XG4gIGNvbnN0IHtcbiAgICBzaGFyZWRQcm9wc0hhc2hlcyxcbiAgICB0ZW1wbGF0ZUlELFxuICAgIGxvY2FsUHJvcHMsXG4gICAgYWxsUHJvcHMsXG4gICAgcGF0aDogcm91dGVQYXRoLFxuICB9ID0gcm91dGVcblxuICBjb25zdCBiYXNlUGF0aCA9IGNhY2hlZEJhc2VQYXRoIHx8IChjYWNoZWRCYXNlUGF0aCA9IGNvbmZpZy5iYXNlUGF0aClcblxuICBjb25zdCBocmVmUmVwbGFjZSA9XG4gICAgY2FjaGVkSHJlZlJlcGxhY2UgfHxcbiAgICAoY2FjaGVkSHJlZlJlcGxhY2UgPSBuZXcgUmVnRXhwKFxuICAgICAgYChocmVmPVtcIiddKVxcXFwvKCR7YmFzZVBhdGggPyBgJHtiYXNlUGF0aH1cXFxcL2AgOiAnJ30pPyhbXlxcXFwvXSlgLFxuICAgICAgJ2dtJ1xuICAgICkpXG5cbiAgY29uc3Qgc3JjUmVwbGFjZSA9XG4gICAgY2FjaGVkU3JjUmVwbGFjZSB8fFxuICAgIChjYWNoZWRTcmNSZXBsYWNlID0gbmV3IFJlZ0V4cChcbiAgICAgIGAoc3JjPVtcIiddKVxcXFwvKCR7YmFzZVBhdGggPyBgJHtiYXNlUGF0aH1cXFxcL2AgOiAnJ30pPyhbXlxcXFwvXSlgLFxuICAgICAgJ2dtJ1xuICAgICkpXG5cbiAgLy8gVGhpcyByb3V0ZUluZm8gd2lsbCBiZSBzYXZlZCB0byBkaXNrLiBJdCBzaG91bGQgb25seSBpbmNsdWRlIHRoZVxuICAvLyBsb2NhbFByb3BzIGFuZCBoYXNoZXMgdG8gY29uc3RydWN0IGFsbCBvZiB0aGUgcHJvcHMgbGF0ZXIuXG4gIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICBwYXRoOiByb3V0ZVBhdGgsXG4gICAgdGVtcGxhdGVJRCxcbiAgICBzaGFyZWRQcm9wc0hhc2hlcyxcbiAgICBsb2NhbFByb3BzLFxuICB9XG5cbiAgLy8gVGhpcyBlbWJlZGRlZFJvdXRlSW5mbyB3aWxsIGJlIGlubGluZWQgaW50byB0aGUgSFRNTCBmb3IgdGhpcyByb3V0ZS5cbiAgLy8gSXQgc2hvdWxkIG9ubHkgaW5jbHVkZSB0aGUgZnVsbCBwcm9wcywgbm90IHRoZSBwYXJ0aWFscy5cbiAgY29uc3QgZW1iZWRkZWRSb3V0ZUluZm8gPSB7XG4gICAgLi4ucm91dGVJbmZvLFxuICAgIGxvY2FsUHJvcHM6IG51bGwsXG4gICAgYWxsUHJvcHMsXG4gICAgc2l0ZURhdGEsXG4gIH1cblxuICAvLyBNYWtlIGEgcGxhY2UgdG8gY29sbGVjdCBjaHVua3MsIG1ldGEgaW5mbyBhbmQgaGVhZCB0YWdzXG4gIGNvbnN0IHJlbmRlck1ldGEgPSB7fVxuICBjb25zdCBjaHVua05hbWVzID0gW11cbiAgbGV0IGhlYWQgPSB7fVxuICBsZXQgY2xpZW50U2NyaXB0cyA9IFtdXG4gIGxldCBjbGllbnRTdHlsZVNoZWV0cyA9IFtdXG4gIGxldCBjbGllbnRDc3MgPSB7fVxuXG4gIGxldCBGaW5hbENvbXBcblxuICBpZiAocm91dGUucmVkaXJlY3QpIHtcbiAgICBGaW5hbENvbXAgPSAoKSA9PiA8UmVkaXJlY3QgZnJvbVBhdGg9e3JvdXRlLnBhdGh9IHRvPXtyb3V0ZS5yZWRpcmVjdH0gLz5cbiAgfSBlbHNlIHtcbiAgICBGaW5hbENvbXAgPSBwcm9wcyA9PiAoXG4gICAgICA8UmVwb3J0Q2h1bmtzIHJlcG9ydD17Y2h1bmtOYW1lID0+IGNodW5rTmFtZXMucHVzaChjaHVua05hbWUpfT5cbiAgICAgICAgPEluaXRpYWxQcm9wc0NvbnRleHRcbiAgICAgICAgICBlbWJlZGRlZFJvdXRlSW5mbz17ZW1iZWRkZWRSb3V0ZUluZm99XG4gICAgICAgICAgcm91dGU9e3JvdXRlfVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXAgey4uLnByb3BzfSAvPlxuICAgICAgICA8L0luaXRpYWxQcm9wc0NvbnRleHQ+XG4gICAgICA8L1JlcG9ydENodW5rcz5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJUb1N0cmluZ0FuZEV4dHJhY3QgPSBjb21wID0+IHtcbiAgICAvLyBSZW5kIHRoZSBhcHAgdG8gc3RyaW5nIVxuICAgIGNvbnN0IGFwcEh0bWwgPSByZW5kZXJUb1N0cmluZyhjb21wKVxuICAgIGNvbnN0IHsgc2NyaXB0cywgc3R5bGVzaGVldHMsIGNzcyB9ID0gZmx1c2hDaHVua3MoY2xpZW50U3RhdHMsIHtcbiAgICAgIGNodW5rTmFtZXMsXG4gICAgfSlcblxuICAgIGNsaWVudFNjcmlwdHMgPSBzY3JpcHRzXG4gICAgY2xpZW50U3R5bGVTaGVldHMgPSBzdHlsZXNoZWV0c1xuICAgIGNsaWVudENzcyA9IGNzc1xuICAgIC8vIEV4dHJhY3QgaGVhZCBjYWxscyB1c2luZyBIZWxtZXQgc3luY2hyb25vdXNseSByaWdodCBhZnRlciByZW5kZXJUb1N0cmluZ1xuICAgIC8vIHRvIG5vdCBpbnRyb2R1Y2UgYW55IHJhY2UgY29uZGl0aW9ucyBpbiB0aGUgbWV0YSBkYXRhIHJlbmRlcmluZ1xuICAgIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKVxuICAgIGhlYWQgPSB7XG4gICAgICBodG1sUHJvcHM6IGhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpLFxuICAgICAgYm9keVByb3BzOiBoZWxtZXQuYm9keUF0dHJpYnV0ZXMudG9Db21wb25lbnQoKSxcbiAgICAgIGJhc2U6IGhlbG1ldC5iYXNlLnRvQ29tcG9uZW50KCksXG4gICAgICBsaW5rOiBoZWxtZXQubGluay50b0NvbXBvbmVudCgpLFxuICAgICAgbWV0YTogaGVsbWV0Lm1ldGEudG9Db21wb25lbnQoKSxcbiAgICAgIG5vc2NyaXB0OiBoZWxtZXQubm9zY3JpcHQudG9Db21wb25lbnQoKSxcbiAgICAgIHNjcmlwdDogaGVsbWV0LnNjcmlwdC50b0NvbXBvbmVudCgpLFxuICAgICAgc3R5bGU6IGhlbG1ldC5zdHlsZS50b0NvbXBvbmVudCgpLFxuICAgICAgdGl0bGU6IGhlbG1ldC50aXRsZS50b0NvbXBvbmVudCgpLFxuICAgIH1cblxuICAgIHJldHVybiBhcHBIdG1sXG4gIH1cblxuICBsZXQgYXBwSHRtbFxuXG4gIHRyeSB7XG4gICAgLy8gUnVuIHRoZSBiZWZvcmVSZW5kZXJUb0NvbXBvbmVudCBob29rIC8vIFRPRE86IGRvY3VtZW50IHRoaXNcbiAgICBGaW5hbENvbXAgPSBnZXRDb25maWdQbHVnaW5Ib29rcyhjb25maWcsICdiZWZvcmVSZW5kZXJUb0NvbXBvbmVudCcpLnJlZHVjZShcbiAgICAgIChjdXJyLCBiZWZvcmVSZW5kZXJUb0NvbXBvbmVudCkgPT5cbiAgICAgICAgYmVmb3JlUmVuZGVyVG9Db21wb25lbnQoY3VyciwgeyBtZXRhOiByZW5kZXJNZXRhIH0pLFxuICAgICAgRmluYWxDb21wXG4gICAgKVxuXG4gICAgLy8gUnVuIHRoZSBjb25maWdzIHJlbmRlclRvQ29tcG9uZW50IGZ1bmN0aW9uXG4gICAgbGV0IFJlbmRlcmVkQ29tcCA9IGF3YWl0IGNvbmZpZy5yZW5kZXJUb0NvbXBvbmVudChGaW5hbENvbXAsIHtcbiAgICAgIG1ldGE6IHJlbmRlck1ldGEsXG4gICAgICBjbGllbnRTdGF0cyxcbiAgICB9KVxuXG4gICAgLy8gUnVuIHRoZSBiZWZvcmVSZW5kZXJUb0h0bWwgaG9va1xuICAgIC8vIFJ1bSB0aGUgSHRtbCBob29rXG4gICAgUmVuZGVyZWRDb21wID0gZ2V0Q29uZmlnUGx1Z2luSG9va3MoY29uZmlnLCAnYmVmb3JlUmVuZGVyVG9IdG1sJykucmVkdWNlKFxuICAgICAgKGN1cnIsIGJlZm9yZVJlbmRlclRvSHRtbCkgPT5cbiAgICAgICAgYmVmb3JlUmVuZGVyVG9IdG1sKGN1cnIsIHsgbWV0YTogcmVuZGVyTWV0YSB9KSxcbiAgICAgIFJlbmRlcmVkQ29tcFxuICAgIClcblxuICAgIC8vIFJ1biB0aGUgY29uZmlncyByZW5kZXJUb0h0bWwgZnVuY3Rpb25cbiAgICBhcHBIdG1sID0gYXdhaXQgY29uZmlnLnJlbmRlclRvSHRtbChcbiAgICAgIHJlbmRlclRvU3RyaW5nQW5kRXh0cmFjdCxcbiAgICAgIFJlbmRlcmVkQ29tcCxcbiAgICAgIHtcbiAgICAgICAgbWV0YTogcmVuZGVyTWV0YSxcbiAgICAgICAgY2xpZW50U3RhdHMsXG4gICAgICB9XG4gICAgKVxuXG4gICAgLy8gUnVtIHRoZSBiZWZvcmVIdG1sVG9Eb2N1bWVudCBob29rXG4gICAgYXBwSHRtbCA9IGdldENvbmZpZ1BsdWdpbkhvb2tzKGNvbmZpZywgJ2JlZm9yZUh0bWxUb0RvY3VtZW50JykucmVkdWNlKFxuICAgICAgKGN1cnIsIGJlZm9yZUh0bWxUb0RvY3VtZW50KSA9PlxuICAgICAgICBiZWZvcmVIdG1sVG9Eb2N1bWVudChjdXJyLCB7IG1ldGE6IHJlbmRlck1ldGEgfSksXG4gICAgICBhcHBIdG1sXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yLm1lc3NhZ2UgPSBgRmFpbGVkIGV4cG9ydGluZyBIVE1MIGZvciBVUkwgJHtyb3V0ZS5wYXRofSAoJHtcbiAgICAgIHJvdXRlLmNvbXBvbmVudFxuICAgIH0pOiAke2Vycm9yLm1lc3NhZ2V9YFxuICAgIHRocm93IGVycm9yXG4gIH1cblxuICBjb25zdCBEb2N1bWVudEh0bWwgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICA8RG9jdW1lbnRUZW1wbGF0ZVxuICAgICAgSHRtbD17bWFrZUh0bWxXaXRoTWV0YSh7IGhlYWQgfSl9XG4gICAgICBIZWFkPXttYWtlSGVhZFdpdGhNZXRhKHtcbiAgICAgICAgaGVhZCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGNsaWVudFNjcmlwdHMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgY2xpZW50U3R5bGVTaGVldHMsXG4gICAgICAgIGNsaWVudENzcyxcbiAgICAgICAgbWV0YTogcmVuZGVyTWV0YSxcbiAgICAgIH0pfVxuICAgICAgQm9keT17bWFrZUJvZHlXaXRoTWV0YSh7XG4gICAgICAgIGhlYWQsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBlbWJlZGRlZFJvdXRlSW5mbyxcbiAgICAgICAgY2xpZW50U2NyaXB0cyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgfSl9XG4gICAgICBzaXRlRGF0YT17c2l0ZURhdGF9XG4gICAgICByb3V0ZUluZm89e2VtYmVkZGVkUm91dGVJbmZvfVxuICAgICAgcmVuZGVyTWV0YT17cmVuZGVyTWV0YX1cbiAgICA+XG4gICAgICA8ZGl2IGlkPVwicm9vdFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXBwSHRtbCB9fSAvPlxuICAgIDwvRG9jdW1lbnRUZW1wbGF0ZT5cbiAgKVxuXG4gIC8vIFJlbmRlciB0aGUgaHRtbCBmb3IgdGhlIHBhZ2UgaW5zaWRlIG9mIHRoZSBiYXNlIGRvY3VtZW50LlxuICBsZXQgaHRtbCA9IGA8IURPQ1RZUEUgaHRtbD4ke0RvY3VtZW50SHRtbH1gXG5cbiAgLy8gUnVtIHRoZSBiZWZvcmVEb2N1bWVudFRvRmlsZSBob29rXG4gIGh0bWwgPSBnZXRDb25maWdQbHVnaW5Ib29rcyhjb25maWcsICdiZWZvcmVEb2N1bWVudFRvRmlsZScpLnJlZHVjZShcbiAgICAoY3VyciwgYmVmb3JlRG9jdW1lbnRUb0ZpbGUpID0+XG4gICAgICBiZWZvcmVEb2N1bWVudFRvRmlsZShjdXJyLCB7IG1ldGE6IHJlbmRlck1ldGEgfSksXG4gICAgaHRtbFxuICApXG5cbiAgLy8gSWYgdGhlIHNpdGVSb290IGlzIHNldCBhbmQgd2UncmUgbm90IGluIHN0YWdpbmcsIHByZWZpeCBhbGwgYWJzb2x1dGUgVVJMJ3NcbiAgLy8gd2l0aCB0aGUgc2l0ZVJvb3RcbiAgY29uc3QgcHVibGljUGF0aCA9IG1ha2VQYXRoQWJzb2x1dGUocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIKVxuICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0RJU0FCTEVfUk9VVEVfUFJFRklYSU5HICE9PSAndHJ1ZScpIHtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKGhyZWZSZXBsYWNlLCBgJDEke3B1YmxpY1BhdGh9JDNgKVxuICB9XG5cbiAgaHRtbCA9IGh0bWwucmVwbGFjZShzcmNSZXBsYWNlLCBgJDEke3B1YmxpY1BhdGh9JDNgKVxuXG4gIC8vIElmIHRoZSByb3V0ZSBpcyBhIDQwNCBwYWdlLCB3cml0ZSBpdCBkaXJlY3RseSB0byA0MDQuaHRtbCwgaW5zdGVhZCBvZlxuICAvLyBpbnNpZGUgYSBkaXJlY3RvcnkuXG4gIGNvbnN0IGh0bWxGaWxlbmFtZSA9XG4gICAgcm91dGUucGF0aCA9PT0gJzQwNCdcbiAgICAgID8gbm9kZVBhdGguam9pbihjb25maWcucGF0aHMuRElTVCwgJzQwNC5odG1sJylcbiAgICAgIDogbm9kZVBhdGguam9pbihjb25maWcucGF0aHMuRElTVCwgcm91dGUucGF0aCwgJ2luZGV4Lmh0bWwnKVxuXG4gIC8vIE1ha2UgdGhlIHJvdXRlSW5mbyBzaXQgcmlnaHQgbmV4dCB0byBpdHMgY29tcGFuaW9uIGh0bWwgZmlsZVxuICBjb25zdCByb3V0ZUluZm9GaWxlbmFtZSA9IG5vZGVQYXRoLmpvaW4oXG4gICAgY29uZmlnLnBhdGhzLkRJU1QsXG4gICAgcm91dGUucGF0aCxcbiAgICAncm91dGVJbmZvLmpzb24nXG4gIClcblxuICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZnMub3V0cHV0RmlsZShodG1sRmlsZW5hbWUsIGh0bWwpLFxuICAgICFyb3V0ZS5yZWRpcmVjdFxuICAgICAgPyBmcy5vdXRwdXRKc29uKHJvdXRlSW5mb0ZpbGVuYW1lLCByb3V0ZUluZm8pXG4gICAgICA6IFByb21pc2UucmVzb2x2ZSgpLFxuICBdKVxuICByZXR1cm4gcmVzXG59KVxuIl19