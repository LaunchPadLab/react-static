"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(require("raf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof window !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    (0, _raf.default)(step);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zY3JvbGxUby5qcyJdLCJuYW1lcyI6WyJlYXNlIiwidCIsImRlZmF1bHRPcHRpb25zIiwiZHVyYXRpb24iLCJvZmZzZXQiLCJjb250ZXh0Iiwid2luZG93IiwiZ2V0VG9wIiwiZWxlbWVudCIsImNvbnRleHRTY3JvbGxIZWlnaHQiLCJjb250ZXh0VmlzaWJsZUhlaWdodCIsIk1hdGgiLCJtaW4iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImdldFBvc2l0aW9uIiwic3RhcnQiLCJlbmQiLCJlbGFwc2VkIiwiZWFzZUZuIiwic2Nyb2xsVG8iLCJvcHRpb25zIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJjbG9jayIsIkRhdGUiLCJub3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0ZXAiLCJwYXJzZUludCIsInNjcm9sbFRvcCIsInNjcm9sbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsQ0FBQztBQUFBLFNBQUtBLENBQUMsR0FBRyxHQUFKLEdBQVUsSUFBSUEsQ0FBSixHQUFRQSxDQUFsQixHQUFzQixDQUFDLENBQUQsR0FBSyxDQUFDLElBQUksSUFBSUEsQ0FBVCxJQUFjQSxDQUE5QztBQUFBLENBQWQ7O0FBRUEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxRQUFRLEVBQUUsR0FEVztBQUVyQkMsRUFBQUEsTUFBTSxFQUFFLENBRmE7QUFHckJDLEVBQUFBLE9BQU8sRUFBRSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQTtBQUhyQixDQUF2Qjs7QUFNQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxPQUFELEVBQVVKLE1BQVYsRUFBa0JLLG1CQUFsQixFQUF1Q0Msb0JBQXZDO0FBQUEsU0FDYkMsSUFBSSxDQUFDQyxHQUFMLENBQ0VKLE9BQU8sQ0FBQ0sscUJBQVIsR0FBZ0NDLEdBQWhDLEdBQXNDUixNQUFNLENBQUNTLFdBQTdDLEdBQTJEWCxNQUQ3RCxFQUVFSyxtQkFBbUIsR0FBR0Msb0JBRnhCLENBRGE7QUFBQSxDQUFmOztBQU1BLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxPQUFiLEVBQXNCaEIsUUFBdEIsRUFBZ0NpQixNQUFoQyxFQUEyQztBQUM3RCxNQUFJRCxPQUFPLEdBQUdoQixRQUFkLEVBQXdCLE9BQU9lLEdBQVA7QUFDeEIsU0FBT0QsS0FBSyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsS0FBUCxJQUFnQkcsTUFBTSxDQUFDRCxPQUFPLEdBQUdoQixRQUFYLENBQXJDO0FBQ0QsQ0FIRDs7QUFLZSxTQUFTa0IsUUFBVCxDQUFrQmIsT0FBbEIsRUFBMkJjLE9BQTNCLEVBQW9DO0FBQUEsZ0RBQ05wQixjQURNLEVBQ2FvQixPQURiO0FBQUEsTUFDekNuQixRQUR5Qyx5QkFDekNBLFFBRHlDO0FBQUEsTUFDL0JDLE1BRCtCLHlCQUMvQkEsTUFEK0I7QUFBQSxNQUN2QkMsT0FEdUIseUJBQ3ZCQSxPQUR1Qjs7QUFFakQsTUFBTVksS0FBSyxHQUFHWCxNQUFNLENBQUNTLFdBQXJCO0FBQ0EsTUFBSVEsV0FBSjtBQUNBLE1BQUlDLFlBQUo7O0FBQ0EsTUFBSW5CLE9BQU8sS0FBS0MsTUFBaEIsRUFBd0I7QUFDdEJpQixJQUFBQSxXQUFXLEdBQUdsQixPQUFPLENBQUNvQixZQUF0QjtBQUNBRCxJQUFBQSxZQUFZLEdBQUduQixPQUFPLENBQUNtQixZQUF2QjtBQUNELEdBSEQsTUFHTztBQUNMRCxJQUFBQSxXQUFXLEdBQUdqQixNQUFNLENBQUNpQixXQUFyQjtBQUNBQyxJQUFBQSxZQUFZLEdBQUdFLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSCxZQUE3QjtBQUNEOztBQUNELE1BQU1JLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEtBQWEsQ0FBM0I7QUFDQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUIsUUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixVQUFNZCxPQUFPLEdBQUdVLElBQUksQ0FBQ0MsR0FBTCxLQUFhRixLQUE3QjtBQUNBLFVBQU1WLEdBQUcsR0FDUCxPQUFPVixPQUFQLEtBQW1CLFFBQW5CLEdBQ0kwQixRQUFRLENBQUMxQixPQUFELENBRFosR0FFSUQsTUFBTSxDQUFDQyxPQUFELEVBQVVKLE1BQVYsRUFBa0JvQixZQUFsQixFQUFnQ0QsV0FBaEMsQ0FIWjs7QUFJQSxVQUFJbEIsT0FBTyxLQUFLQyxNQUFoQixFQUF3QjtBQUN0QkQsUUFBQUEsT0FBTyxDQUFDOEIsU0FBUixHQUFvQm5CLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLE9BQWIsRUFBc0JoQixRQUF0QixFQUFnQ0gsSUFBaEMsQ0FBL0I7QUFDRCxPQUZELE1BRU87QUFDTE0sUUFBQUEsTUFBTSxDQUFDOEIsTUFBUCxDQUFjLENBQWQsRUFBaUJwQixXQUFXLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxPQUFiLEVBQXNCaEIsUUFBdEIsRUFBZ0NILElBQWhDLENBQTVCO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPRyxRQUFQLEtBQW9CLFdBQXBCLElBQW1DZ0IsT0FBTyxHQUFHaEIsUUFBakQsRUFBMkQ7QUFDekQ2QixRQUFBQSxPQUFPO0FBQ1A7QUFDRCxPQWZnQixDQWlCakI7OztBQUNBLFVBQUlmLEtBQUssS0FBS0MsR0FBZCxFQUFtQjtBQUNqQmMsUUFBQUEsT0FBTztBQUNQO0FBQ0Q7O0FBRUQsd0JBQUlDLElBQUo7QUFDRCxLQXhCRDs7QUF5QkEsc0JBQUlBLElBQUo7QUFDRCxHQTNCTSxDQUFQO0FBNEJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJhZiBmcm9tICdyYWYnXG4vL1xuY29uc3QgZWFzZSA9IHQgPT4gKHQgPCAwLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdClcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGR1cmF0aW9uOiA4MDAsXG4gIG9mZnNldDogMCxcbiAgY29udGV4dDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LFxufVxuXG5jb25zdCBnZXRUb3AgPSAoZWxlbWVudCwgb2Zmc2V0LCBjb250ZXh0U2Nyb2xsSGVpZ2h0LCBjb250ZXh0VmlzaWJsZUhlaWdodCkgPT5cbiAgTWF0aC5taW4oXG4gICAgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgKyBvZmZzZXQsXG4gICAgY29udGV4dFNjcm9sbEhlaWdodCAtIGNvbnRleHRWaXNpYmxlSGVpZ2h0XG4gIClcblxuY29uc3QgZ2V0UG9zaXRpb24gPSAoc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24sIGVhc2VGbikgPT4ge1xuICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSByZXR1cm4gZW5kXG4gIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBlYXNlRm4oZWxhcHNlZCAvIGR1cmF0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZHVyYXRpb24sIG9mZnNldCwgY29udGV4dCB9ID0geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gIGNvbnN0IHN0YXJ0ID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gIGxldCBpbm5lckhlaWdodFxuICBsZXQgc2Nyb2xsSGVpZ2h0XG4gIGlmIChjb250ZXh0ICE9PSB3aW5kb3cpIHtcbiAgICBpbm5lckhlaWdodCA9IGNvbnRleHQub2Zmc2V0SGVpZ2h0XG4gICAgc2Nyb2xsSGVpZ2h0ID0gY29udGV4dC5zY3JvbGxIZWlnaHRcbiAgfSBlbHNlIHtcbiAgICBpbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0XG4gIH1cbiAgY29uc3QgY2xvY2sgPSBEYXRlLm5vdygpIC0gMVxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gY2xvY2tcbiAgICAgIGNvbnN0IGVuZCA9XG4gICAgICAgIHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJ1xuICAgICAgICAgID8gcGFyc2VJbnQoZWxlbWVudClcbiAgICAgICAgICA6IGdldFRvcChlbGVtZW50LCBvZmZzZXQsIHNjcm9sbEhlaWdodCwgaW5uZXJIZWlnaHQpXG4gICAgICBpZiAoY29udGV4dCAhPT0gd2luZG93KSB7XG4gICAgICAgIGNvbnRleHQuc2Nyb2xsVG9wID0gZ2V0UG9zaXRpb24oc3RhcnQsIGVuZCwgZWxhcHNlZCwgZHVyYXRpb24sIGVhc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIGdldFBvc2l0aW9uKHN0YXJ0LCBlbmQsIGVsYXBzZWQsIGR1cmF0aW9uLCBlYXNlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gU2FuaXR5IGNoZWNrIHRvIHByZXZlbnQgdGFraW5nIG92ZXIgdGhlIHNjcm9sbCBvbmNlIHdlIHByZW1hdHVyZWx5IGdvdCB0byB0aGUgZWxlbWVudFxuICAgICAgaWYgKHN0YXJ0ID09PSBlbmQpIHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByYWYoc3RlcClcbiAgICB9XG4gICAgcmFmKHN0ZXApXG4gIH0pXG59XG4iXX0=