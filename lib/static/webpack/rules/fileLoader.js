"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  return {
    loader: 'url-loader',
    exclude: [/\.js$/, /\.html$/, /\.json$/],
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]'
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9maWxlTG9hZGVyLmpzIl0sIm5hbWVzIjpbImxvYWRlciIsImV4Y2x1ZGUiLCJxdWVyeSIsImxpbWl0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLG9CQUFXO0FBQ3hCLFNBQU87QUFDTEEsSUFBQUEsTUFBTSxFQUFFLFlBREg7QUFFTEMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsU0FBckIsQ0FGSjtBQUdMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsS0FBSyxFQUFFLEtBREY7QUFFTEMsTUFBQUEsSUFBSSxFQUFFO0FBRkQ7QUFIRixHQUFQO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBsb2FkZXI6ICd1cmwtbG9hZGVyJyxcbiAgICBleGNsdWRlOiBbL1xcLmpzJC8sIC9cXC5odG1sJC8sIC9cXC5qc29uJC9dLFxuICAgIHF1ZXJ5OiB7XG4gICAgICBsaW1pdDogMTAwMDAsXG4gICAgICBuYW1lOiAnc3RhdGljL1tuYW1lXS5baGFzaDo4XS5bZXh0XScsXG4gICAgfSxcbiAgfVxufVxuIl19