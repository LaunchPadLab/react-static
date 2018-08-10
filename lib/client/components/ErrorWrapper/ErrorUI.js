"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/ErrorWrapper/ErrorUI.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorUI = function ErrorUI(_ref) {
  var error = _ref.error,
      errorInfo = _ref.errorInfo;
  return _react.default.createElement("div", {
    style: {
      margin: '1rem',
      padding: '1rem',
      background: 'rgba(0,0,0,0.05)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("pre", {
    style: {
      whiteSpace: 'normal',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _react.default.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, error && error.toString())), _react.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "This error occurred here:"), _react.default.createElement("pre", {
    style: {
      color: 'red',
      overflow: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _react.default.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, errorInfo.componentStack)), _react.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "For more information, please see the console."));
};

ErrorUI.propTypes = {
  error: _propTypes.default.object.isRequired,
  errorInfo: _propTypes.default.object.isRequired
};
var _default = ErrorUI;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvcldyYXBwZXIvRXJyb3JVSS5qcyJdLCJuYW1lcyI6WyJFcnJvclVJIiwiZXJyb3IiLCJlcnJvckluZm8iLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIndoaXRlU3BhY2UiLCJjb2xvciIsInRvU3RyaW5nIiwib3ZlcmZsb3ciLCJjb21wb25lbnRTdGFjayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxTQUFWLFFBQVVBLFNBQVY7QUFBQSxTQUNkO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFLE1BREg7QUFFTEMsTUFBQUEsT0FBTyxFQUFFLE1BRko7QUFHTEMsTUFBQUEsVUFBVSxFQUFFO0FBSFAsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQVBGLEVBUUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QkMsTUFBQUEsS0FBSyxFQUFFO0FBQS9CLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTixLQUFLLElBQUlBLEtBQUssQ0FBQ08sUUFBTixFQUFoQixDQURGLENBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FYRixFQVlFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JFLE1BQUFBLFFBQVEsRUFBRTtBQUExQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1AsU0FBUyxDQUFDUSxjQUFqQixDQURGLENBWkYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFmRixDQURjO0FBQUEsQ0FBaEI7O0FBb0JBVixPQUFPLENBQUNXLFNBQVIsR0FBb0I7QUFDbEJWLEVBQUFBLEtBQUssRUFBRVcsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbEJaLEVBQUFBLFNBQVMsRUFBRVUsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBRlYsQ0FBcEI7ZUFLZWQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgRXJyb3JVSSA9ICh7IGVycm9yLCBlcnJvckluZm8gfSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIG1hcmdpbjogJzFyZW0nLFxuICAgICAgcGFkZGluZzogJzFyZW0nLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4wNSknLFxuICAgIH19XG4gID5cbiAgICA8aDI+T2gtbm8hIFNvbWV0aGluZ+KAmXMgZ29uZSB3cm9uZyE8L2gyPlxuICAgIDxwcmUgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vcm1hbCcsIGNvbG9yOiAncmVkJyB9fT5cbiAgICAgIDxjb2RlPntlcnJvciAmJiBlcnJvci50b1N0cmluZygpfTwvY29kZT5cbiAgICA8L3ByZT5cbiAgICA8aDM+VGhpcyBlcnJvciBvY2N1cnJlZCBoZXJlOjwvaDM+XG4gICAgPHByZSBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICA8Y29kZT57ZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrfTwvY29kZT5cbiAgICA8L3ByZT5cbiAgICA8cD5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHNlZSB0aGUgY29uc29sZS48L3A+XG4gIDwvZGl2PlxuKVxuXG5FcnJvclVJLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXJyb3JJbmZvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yVUlcbiJdfQ==