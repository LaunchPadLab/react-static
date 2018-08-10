"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(_ref) {
  var config = _ref.config,
      stage = _ref.stage;
  return {
    test: /\.(js|jsx)$/,
    exclude: new RegExp("(node_modules|".concat(config.paths.EXCLUDE_MODULES, ")")),
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: stage !== 'prod'
      }
    }]
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9qc0xvYWRlci5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJzdGFnZSIsInRlc3QiLCJleGNsdWRlIiwiUmVnRXhwIiwicGF0aHMiLCJFWENMVURFX01PRFVMRVMiLCJ1c2UiLCJsb2FkZXIiLCJvcHRpb25zIiwiY2FjaGVEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSx3QkFBNEI7QUFBQSxNQUFqQkEsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3pDLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFLGFBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFLElBQUlDLE1BQUoseUJBQTRCSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsZUFBekMsT0FGSjtBQUdMQyxJQUFBQSxHQUFHLEVBQUUsQ0FDSDtBQUNFQyxNQUFBQSxNQUFNLEVBQUUsY0FEVjtBQUVFQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsY0FBYyxFQUFFVCxLQUFLLEtBQUs7QUFEbkI7QUFGWCxLQURHO0FBSEEsR0FBUDtBQVlEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBjb25maWcsIHN0YWdlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiAvXFwuKGpzfGpzeCkkLyxcbiAgICBleGNsdWRlOiBuZXcgUmVnRXhwKGAobm9kZV9tb2R1bGVzfCR7Y29uZmlnLnBhdGhzLkVYQ0xVREVfTU9EVUxFU30pYCksXG4gICAgdXNlOiBbXG4gICAgICB7XG4gICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBjYWNoZURpcmVjdG9yeTogc3RhZ2UgIT09ICdwcm9kJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfVxufVxuIl19