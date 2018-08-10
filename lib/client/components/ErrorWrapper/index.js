"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorCatcher = _interopRequireDefault(require("./ErrorCatcher"));

var _jsxFileName = "/Users/dpikt/Launchpad/react-static/src/client/components/ErrorWrapper/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorWrapper = function ErrorWrapper(_ref) {
  var showErrorsInProduction = _ref.showErrorsInProduction,
      children = _ref.children;

  if (process.env.REACT_STATIC_ENV === 'development' || showErrorsInProduction) {
    return _react.default.createElement(_ErrorCatcher.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, children);
  }

  return _react.default.Children.only(children);
};

ErrorWrapper.propTypes = {
  showErrorsInProduction: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
ErrorWrapper.defaultProps = {
  showErrorsInProduction: false
};
var _default = ErrorWrapper;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvcldyYXBwZXIvaW5kZXguanMiXSwibmFtZXMiOlsiRXJyb3JXcmFwcGVyIiwic2hvd0Vycm9yc0luUHJvZHVjdGlvbiIsImNoaWxkcmVuIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19FTlYiLCJSZWFjdCIsIkNoaWxkcmVuIiwib25seSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEwQztBQUFBLE1BQXZDQyxzQkFBdUMsUUFBdkNBLHNCQUF1QztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDN0QsTUFDRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUFaLEtBQWlDLGFBQWpDLElBQ0FKLHNCQUZGLEVBR0U7QUFDQSxXQUFPLDZCQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWVDLFFBQWYsQ0FBUDtBQUNEOztBQUVELFNBQU9JLGVBQU1DLFFBQU4sQ0FBZUMsSUFBZixDQUFvQk4sUUFBcEIsQ0FBUDtBQUNELENBVEQ7O0FBV0FGLFlBQVksQ0FBQ1MsU0FBYixHQUF5QjtBQUN2QlIsRUFBQUEsc0JBQXNCLEVBQUVTLG1CQUFVQyxJQURYO0FBRXZCVCxFQUFBQSxRQUFRLEVBQUVRLG1CQUFVRSxJQUFWLENBQWVDO0FBRkYsQ0FBekI7QUFLQWIsWUFBWSxDQUFDYyxZQUFiLEdBQTRCO0FBQzFCYixFQUFBQSxzQkFBc0IsRUFBRTtBQURFLENBQTVCO2VBSWVELFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRXJyb3JDYXRjaGVyIGZyb20gJy4vRXJyb3JDYXRjaGVyJ1xuXG5jb25zdCBFcnJvcldyYXBwZXIgPSAoeyBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8XG4gICAgc2hvd0Vycm9yc0luUHJvZHVjdGlvblxuICApIHtcbiAgICByZXR1cm4gPEVycm9yQ2F0Y2hlcj57Y2hpbGRyZW59PC9FcnJvckNhdGNoZXI+XG4gIH1cblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbn1cblxuRXJyb3JXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgc2hvd0Vycm9yc0luUHJvZHVjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufVxuXG5FcnJvcldyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93RXJyb3JzSW5Qcm9kdWN0aW9uOiBmYWxzZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JXcmFwcGVyXG4iXX0=