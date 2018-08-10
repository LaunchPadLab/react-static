"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePageRoutes;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function makePageRoutes(_ref) {
  var items = _ref.items,
      pageSize = _ref.pageSize,
      _ref$pageToken = _ref.pageToken,
      pageToken = _ref$pageToken === void 0 ? 'page' : _ref$pageToken,
      route = _ref.route,
      decorate = _ref.decorate;

  var itemsCopy = _toConsumableArray(items); // Make a copy of the items


  var pages = []; // Make an array for all of the different pages

  while (itemsCopy.length) {
    // Splice out all of the items into separate pages using a set pageSize
    pages.push(itemsCopy.splice(0, pageSize));
  }

  var totalPages = pages.length; // Move the first page out of pagination. This is so page one doesn't require a page number.

  var firstPage = pages[0];
  var routes = [_objectSpread({}, route, decorate(firstPage, 1, totalPages))].concat(_toConsumableArray(pages.map(function (page, i) {
    return _objectSpread({}, route, {
      // route defaults
      path: "".concat(route.path, "/").concat(pageToken, "/").concat(i + 1)
    }, decorate(page, i + 1, totalPages));
  })));
  return routes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ha2VQYWdlUm91dGVzLmpzIl0sIm5hbWVzIjpbIm1ha2VQYWdlUm91dGVzIiwiaXRlbXMiLCJwYWdlU2l6ZSIsInBhZ2VUb2tlbiIsInJvdXRlIiwiZGVjb3JhdGUiLCJpdGVtc0NvcHkiLCJwYWdlcyIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ0b3RhbFBhZ2VzIiwiZmlyc3RQYWdlIiwicm91dGVzIiwibWFwIiwicGFnZSIsImkiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsY0FBVCxPQU1aO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsUUFJQyxRQUpEQSxRQUlDO0FBQUEsNEJBSERDLFNBR0M7QUFBQSxNQUhEQSxTQUdDLCtCQUhXLE1BR1g7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7O0FBQ0QsTUFBTUMsU0FBUyxzQkFBT0wsS0FBUCxDQUFmLENBREMsQ0FDNEI7OztBQUM3QixNQUFNTSxLQUFLLEdBQUcsRUFBZCxDQUZDLENBRWdCOztBQUVqQixTQUFPRCxTQUFTLENBQUNFLE1BQWpCLEVBQXlCO0FBQ3ZCO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0UsSUFBTixDQUFXSCxTQUFTLENBQUNJLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0JSLFFBQXBCLENBQVg7QUFDRDs7QUFFRCxNQUFNUyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0MsTUFBekIsQ0FUQyxDQVdEOztBQUNBLE1BQU1JLFNBQVMsR0FBR0wsS0FBSyxDQUFDLENBQUQsQ0FBdkI7QUFFQSxNQUFNTSxNQUFNLHNCQUVMVCxLQUZLLEVBR0xDLFFBQVEsQ0FBQ08sU0FBRCxFQUFZLENBQVosRUFBZUQsVUFBZixDQUhILDZCQU1QSixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw2QkFDUlosS0FEUTtBQUNEO0FBQ1ZhLE1BQUFBLElBQUksWUFBS2IsS0FBSyxDQUFDYSxJQUFYLGNBQW1CZCxTQUFuQixjQUFnQ2EsQ0FBQyxHQUFHLENBQXBDO0FBRk8sT0FHUlgsUUFBUSxDQUFDVSxJQUFELEVBQU9DLENBQUMsR0FBRyxDQUFYLEVBQWNMLFVBQWQsQ0FIQTtBQUFBLEdBQVYsQ0FOTyxFQUFaO0FBYUEsU0FBT0UsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVBhZ2VSb3V0ZXMoe1xuICBpdGVtcyxcbiAgcGFnZVNpemUsXG4gIHBhZ2VUb2tlbiA9ICdwYWdlJyxcbiAgcm91dGUsXG4gIGRlY29yYXRlLFxufSkge1xuICBjb25zdCBpdGVtc0NvcHkgPSBbLi4uaXRlbXNdIC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBpdGVtc1xuICBjb25zdCBwYWdlcyA9IFtdIC8vIE1ha2UgYW4gYXJyYXkgZm9yIGFsbCBvZiB0aGUgZGlmZmVyZW50IHBhZ2VzXG5cbiAgd2hpbGUgKGl0ZW1zQ29weS5sZW5ndGgpIHtcbiAgICAvLyBTcGxpY2Ugb3V0IGFsbCBvZiB0aGUgaXRlbXMgaW50byBzZXBhcmF0ZSBwYWdlcyB1c2luZyBhIHNldCBwYWdlU2l6ZVxuICAgIHBhZ2VzLnB1c2goaXRlbXNDb3B5LnNwbGljZSgwLCBwYWdlU2l6ZSkpXG4gIH1cblxuICBjb25zdCB0b3RhbFBhZ2VzID0gcGFnZXMubGVuZ3RoXG5cbiAgLy8gTW92ZSB0aGUgZmlyc3QgcGFnZSBvdXQgb2YgcGFnaW5hdGlvbi4gVGhpcyBpcyBzbyBwYWdlIG9uZSBkb2Vzbid0IHJlcXVpcmUgYSBwYWdlIG51bWJlci5cbiAgY29uc3QgZmlyc3RQYWdlID0gcGFnZXNbMF1cblxuICBjb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgLi4ucm91dGUsXG4gICAgICAuLi5kZWNvcmF0ZShmaXJzdFBhZ2UsIDEsIHRvdGFsUGFnZXMpLCAvLyBhbmQgb25seSBwYXNzIHRoZSBmaXJzdCBwYWdlIGFzIGRhdGFcbiAgICB9LFxuICAgIC8vIG1hcCBvdmVyIGVhY2ggcGFnZSB0byBjcmVhdGUgYW4gYXJyYXkgb2YgcGFnZSByb3V0ZXMsIGFuZCBzcHJlYWQgaXQhXG4gICAgLi4ucGFnZXMubWFwKChwYWdlLCBpKSA9PiAoe1xuICAgICAgLi4ucm91dGUsIC8vIHJvdXRlIGRlZmF1bHRzXG4gICAgICBwYXRoOiBgJHtyb3V0ZS5wYXRofS8ke3BhZ2VUb2tlbn0vJHtpICsgMX1gLFxuICAgICAgLi4uZGVjb3JhdGUocGFnZSwgaSArIDEsIHRvdGFsUGFnZXMpLFxuICAgIH0pKSxcbiAgXVxuXG4gIHJldHVybiByb3V0ZXNcbn1cbiJdfQ==