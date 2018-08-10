"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getStagedRules = void 0;

var _jsLoader = _interopRequireDefault(require("./jsLoader"));

var _cssLoader = _interopRequireDefault(require("./cssLoader"));

var _fileLoader = _interopRequireDefault(require("./fileLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStagedRules = function getStagedRules(args) {
  return {
    jsLoader: (0, _jsLoader.default)(args),
    cssLoader: (0, _cssLoader.default)(args),
    fileLoader: (0, _fileLoader.default)(args)
  };
};

exports.getStagedRules = getStagedRules;

var _default = function _default(args) {
  return [{
    oneOf: [(0, _jsLoader.default)(args), (0, _cssLoader.default)(args), (0, _fileLoader.default)(args)]
  }];
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRTdGFnZWRSdWxlcyIsImFyZ3MiLCJqc0xvYWRlciIsImNzc0xvYWRlciIsImZpbGVMb2FkZXIiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxJQUFJO0FBQUEsU0FBSztBQUNyQ0MsSUFBQUEsUUFBUSxFQUFFLHVCQUFTRCxJQUFULENBRDJCO0FBRXJDRSxJQUFBQSxTQUFTLEVBQUUsd0JBQVVGLElBQVYsQ0FGMEI7QUFHckNHLElBQUFBLFVBQVUsRUFBRSx5QkFBV0gsSUFBWDtBQUh5QixHQUFMO0FBQUEsQ0FBM0I7Ozs7ZUFNUSxrQkFBQUEsSUFBSTtBQUFBLFNBQUksQ0FDckI7QUFDRUksSUFBQUEsS0FBSyxFQUFFLENBQUMsdUJBQVNKLElBQVQsQ0FBRCxFQUFpQix3QkFBVUEsSUFBVixDQUFqQixFQUFrQyx5QkFBV0EsSUFBWCxDQUFsQztBQURULEdBRHFCLENBQUo7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzTG9hZGVyIGZyb20gJy4vanNMb2FkZXInXG5pbXBvcnQgY3NzTG9hZGVyIGZyb20gJy4vY3NzTG9hZGVyJ1xuaW1wb3J0IGZpbGVMb2FkZXIgZnJvbSAnLi9maWxlTG9hZGVyJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhZ2VkUnVsZXMgPSBhcmdzID0+ICh7XG4gIGpzTG9hZGVyOiBqc0xvYWRlcihhcmdzKSxcbiAgY3NzTG9hZGVyOiBjc3NMb2FkZXIoYXJncyksXG4gIGZpbGVMb2FkZXI6IGZpbGVMb2FkZXIoYXJncyksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcmdzID0+IFtcbiAge1xuICAgIG9uZU9mOiBbanNMb2FkZXIoYXJncyksIGNzc0xvYWRlcihhcmdzKSwgZmlsZUxvYWRlcihhcmdzKV0sXG4gIH0sXG5dXG4iXX0=