"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "dictate",
			"path": "dictate/dictate.js",
			"file": "dictate.js",
			"module": "dictate",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/dictate.git",
			"test": "dictate-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		This will dictate the order of the array and will return a new array
			based on the order and given point.

		The array elements should be of the same type.

		Order properties must coincide with the value of the point.

		Order values must be numbers.

		This will not handle further anomalous to the given parameters.
	@end-module-documentation

	@include:
		{
			"decrease": "decrease",
			"doubt": "doubt",
			"protype": "protype"
		}
	@end-include
*/

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decrease = require("decrease");
var doubt = require("doubt");
var protype = require("protype");

var dictate = function dictate(array, order, point) {
	/*;
 	@meta-configuration:
 		{
 			"array:required": [
 				"Array",
 				"[*]"
 			],
 			"order:required": [
 				"object",
 				"[string]"
 			],
 			"point": [
 				"string",
 				"name"
 			]
 		}
 	@end-meta-configuration
 */

	if (!doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	if (!array.length) {
		return array;
	}

	if (doubt(order, ARRAY) && order.length) {
		var position = {};
		var orderLength = order.length;
		for (var index = 0; index < orderLength; index++) {
			position[order[index]] = index;
		}

		order = position;
	}

	if (doubt(order, ARRAY) && !order.length) {
		return array;
	}

	if (!protype(order, OBJECT) || !(0, _keys2.default)(order).length) {
		return array;
	}

	point = point || "name";

	if (!protype(point, STRING)) {
		throw new Error("invalid point");
	}

	var list = {};
	var arrayLength = array.length;
	for (var _index = 0; _index < arrayLength; _index++) {
		var entity = array[_index];

		var name = entity[point] || entity.toString();

		list[name] = entity;
	}

	return decrease(array, function onDecrease(oldArray, currentValue, index, array) {
		var oldList = oldArray.length ? oldArray : array;

		var entity = oldList[index];

		var name = entity[point] || entity.toString();

		var position = order[name];

		if (!protype(position, NUMBER) && !position) {
			return oldList;
		} else if (position != index) {
			var data = array[position];

			var reference = data[point] || data.toString();

			oldList[index] = list[reference];

			oldList[position] = list[name];

			return dictate(oldList, order);
		} else {
			return oldList;
		}
	}, []);
};

module.exports = dictate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3RhdGUuanMiXSwibmFtZXMiOlsiZGVjcmVhc2UiLCJyZXF1aXJlIiwiZG91YnQiLCJwcm90eXBlIiwiZGljdGF0ZSIsImFycmF5Iiwib3JkZXIiLCJwb2ludCIsIkFSUkFZIiwiRXJyb3IiLCJsZW5ndGgiLCJwb3NpdGlvbiIsIm9yZGVyTGVuZ3RoIiwiaW5kZXgiLCJPQkpFQ1QiLCJTVFJJTkciLCJsaXN0IiwiYXJyYXlMZW5ndGgiLCJlbnRpdHkiLCJuYW1lIiwidG9TdHJpbmciLCJvbkRlY3JlYXNlIiwib2xkQXJyYXkiLCJjdXJyZW50VmFsdWUiLCJvbGRMaXN0IiwiTlVNQkVSIiwiZGF0YSIsInJlZmVyZW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEsSUFBTUEsV0FBV0MsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUcsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQ3REOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLEtBQUksQ0FBQ0wsTUFBT0csS0FBUCxFQUFjRyxLQUFkLENBQUwsRUFBNEI7QUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxDQUFDSixNQUFNSyxNQUFYLEVBQW1CO0FBQ2xCLFNBQU9MLEtBQVA7QUFDQTs7QUFFRCxLQUFJSCxNQUFPSSxLQUFQLEVBQWNFLEtBQWQsS0FBeUJGLE1BQU1JLE1BQW5DLEVBQTJDO0FBQzFDLE1BQUlDLFdBQVcsRUFBZjtBQUNBLE1BQUlDLGNBQWNOLE1BQU1JLE1BQXhCO0FBQ0EsT0FBSyxJQUFJRyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRCxXQUE1QixFQUF5Q0MsT0FBekMsRUFBa0Q7QUFDakRGLFlBQVVMLE1BQU9PLEtBQVAsQ0FBVixJQUE2QkEsS0FBN0I7QUFDQTs7QUFFRFAsVUFBUUssUUFBUjtBQUNBOztBQUVELEtBQUlULE1BQU9JLEtBQVAsRUFBY0UsS0FBZCxLQUF5QixDQUFDRixNQUFNSSxNQUFwQyxFQUE0QztBQUMzQyxTQUFPTCxLQUFQO0FBQ0E7O0FBRUQsS0FBSSxDQUFDRixRQUFTRyxLQUFULEVBQWdCUSxNQUFoQixDQUFELElBQTZCLENBQUMsb0JBQWFSLEtBQWIsRUFBcUJJLE1BQXZELEVBQStEO0FBQzlELFNBQU9MLEtBQVA7QUFDQTs7QUFFREUsU0FBUUEsU0FBUyxNQUFqQjs7QUFFQSxLQUFJLENBQUNKLFFBQVNJLEtBQVQsRUFBZ0JRLE1BQWhCLENBQUwsRUFBK0I7QUFDOUIsUUFBTSxJQUFJTixLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSU8sT0FBTyxFQUFYO0FBQ0EsS0FBSUMsY0FBY1osTUFBTUssTUFBeEI7QUFDQSxNQUFLLElBQUlHLFNBQVEsQ0FBakIsRUFBb0JBLFNBQVFJLFdBQTVCLEVBQXlDSixRQUF6QyxFQUFrRDtBQUNqRCxNQUFJSyxTQUFTYixNQUFPUSxNQUFQLENBQWI7O0FBRUEsTUFBSU0sT0FBT0QsT0FBUVgsS0FBUixLQUFtQlcsT0FBT0UsUUFBUCxFQUE5Qjs7QUFFQUosT0FBTUcsSUFBTixJQUFlRCxNQUFmO0FBQ0E7O0FBRUQsUUFBT2xCLFNBQVVLLEtBQVYsRUFDTixTQUFTZ0IsVUFBVCxDQUFxQkMsUUFBckIsRUFBK0JDLFlBQS9CLEVBQTZDVixLQUE3QyxFQUFvRFIsS0FBcEQsRUFBMkQ7QUFDMUQsTUFBSW1CLFVBQVlGLFNBQVNaLE1BQVQsR0FBaUJZLFFBQWpCLEdBQTRCakIsS0FBNUM7O0FBRUEsTUFBSWEsU0FBU00sUUFBU1gsS0FBVCxDQUFiOztBQUVBLE1BQUlNLE9BQU9ELE9BQVFYLEtBQVIsS0FBbUJXLE9BQU9FLFFBQVAsRUFBOUI7O0FBRUEsTUFBSVQsV0FBV0wsTUFBT2EsSUFBUCxDQUFmOztBQUVBLE1BQUksQ0FBQ2hCLFFBQVNRLFFBQVQsRUFBbUJjLE1BQW5CLENBQUQsSUFBZ0MsQ0FBQ2QsUUFBckMsRUFBK0M7QUFDOUMsVUFBT2EsT0FBUDtBQUVBLEdBSEQsTUFHTSxJQUFJYixZQUFZRSxLQUFoQixFQUF1QjtBQUM1QixPQUFJYSxPQUFPckIsTUFBT00sUUFBUCxDQUFYOztBQUVBLE9BQUlnQixZQUFZRCxLQUFNbkIsS0FBTixLQUFpQm1CLEtBQUtOLFFBQUwsRUFBakM7O0FBRUFJLFdBQVNYLEtBQVQsSUFBbUJHLEtBQU1XLFNBQU4sQ0FBbkI7O0FBRUFILFdBQVNiLFFBQVQsSUFBc0JLLEtBQU1HLElBQU4sQ0FBdEI7O0FBRUEsVUFBT2YsUUFBU29CLE9BQVQsRUFBa0JsQixLQUFsQixDQUFQO0FBRUEsR0FYSyxNQVdEO0FBQ0osVUFBT2tCLE9BQVA7QUFDQTtBQUVELEVBNUJLLEVBNEJILEVBNUJHLENBQVA7QUE2QkEsQ0EzRkQ7O0FBNkZBSSxPQUFPQyxPQUFQLEdBQWlCekIsT0FBakIiLCJmaWxlIjoiZGljdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGljdGF0ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGljdGF0ZS9kaWN0YXRlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkaWN0YXRlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRpY3RhdGVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kaWN0YXRlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGljdGF0ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFRoaXMgd2lsbCBkaWN0YXRlIHRoZSBvcmRlciBvZiB0aGUgYXJyYXkgYW5kIHdpbGwgcmV0dXJuIGEgbmV3IGFycmF5XG5cdFx0XHRiYXNlZCBvbiB0aGUgb3JkZXIgYW5kIGdpdmVuIHBvaW50LlxuXG5cdFx0VGhlIGFycmF5IGVsZW1lbnRzIHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLlxuXG5cdFx0T3JkZXIgcHJvcGVydGllcyBtdXN0IGNvaW5jaWRlIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBwb2ludC5cblxuXHRcdE9yZGVyIHZhbHVlcyBtdXN0IGJlIG51bWJlcnMuXG5cblx0XHRUaGlzIHdpbGwgbm90IGhhbmRsZSBmdXJ0aGVyIGFub21hbG91cyB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZGVjcmVhc2VcIjogXCJkZWNyZWFzZVwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZGVjcmVhc2UgPSByZXF1aXJlKCBcImRlY3JlYXNlXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgZGljdGF0ZSA9IGZ1bmN0aW9uIGRpY3RhdGUoIGFycmF5LCBvcmRlciwgcG9pbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcnJheVwiLFxuXHRcdFx0XHRcdFwiWypdXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJvcmRlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcIltzdHJpbmddXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwb2ludFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm5hbWVcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBhcnJheSwgQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcblx0fVxuXG5cdGlmKCAhYXJyYXkubGVuZ3RoICl7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0aWYoIGRvdWJ0KCBvcmRlciwgQVJSQVkgKSAmJiBvcmRlci5sZW5ndGggKXtcblx0XHRsZXQgcG9zaXRpb24gPSB7IH07XG5cdFx0bGV0IG9yZGVyTGVuZ3RoID0gb3JkZXIubGVuZ3RoXG5cdFx0Zm9yKCB2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyTGVuZ3RoOyBpbmRleCsrICl7XG5cdFx0XHRwb3NpdGlvblsgb3JkZXJbIGluZGV4IF0gXSA9IGluZGV4O1xuXHRcdH1cblxuXHRcdG9yZGVyID0gcG9zaXRpb247XG5cdH1cblxuXHRpZiggZG91YnQoIG9yZGVyLCBBUlJBWSApICYmICFvcmRlci5sZW5ndGggKXtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIG9yZGVyLCBPQkpFQ1QgKSB8fCAhT2JqZWN0LmtleXMoIG9yZGVyICkubGVuZ3RoICl7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0cG9pbnQgPSBwb2ludCB8fCBcIm5hbWVcIjtcblxuXHRpZiggIXByb3R5cGUoIHBvaW50LCBTVFJJTkcgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHBvaW50XCIgKTtcblx0fVxuXG5cdGxldCBsaXN0ID0geyB9O1xuXHRsZXQgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdGZvciggbGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKyApe1xuXHRcdGxldCBlbnRpdHkgPSBhcnJheVsgaW5kZXggXTtcblxuXHRcdGxldCBuYW1lID0gZW50aXR5WyBwb2ludCBdIHx8IGVudGl0eS50b1N0cmluZyggKTtcblxuXHRcdGxpc3RbIG5hbWUgXSA9IGVudGl0eTtcblx0fVxuXG5cdHJldHVybiBkZWNyZWFzZSggYXJyYXksXG5cdFx0ZnVuY3Rpb24gb25EZWNyZWFzZSggb2xkQXJyYXksIGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5ICl7XG5cdFx0XHRsZXQgb2xkTGlzdCA9ICggb2xkQXJyYXkubGVuZ3RoPyBvbGRBcnJheSA6IGFycmF5ICk7XG5cblx0XHRcdGxldCBlbnRpdHkgPSBvbGRMaXN0WyBpbmRleCBdO1xuXG5cdFx0XHRsZXQgbmFtZSA9IGVudGl0eVsgcG9pbnQgXSB8fCBlbnRpdHkudG9TdHJpbmcoICk7XG5cblx0XHRcdGxldCBwb3NpdGlvbiA9IG9yZGVyWyBuYW1lIF07XG5cblx0XHRcdGlmKCAhcHJvdHlwZSggcG9zaXRpb24sIE5VTUJFUiApICYmICFwb3NpdGlvbiApe1xuXHRcdFx0XHRyZXR1cm4gb2xkTGlzdDtcblxuXHRcdFx0fWVsc2UgaWYoIHBvc2l0aW9uICE9IGluZGV4ICl7XG5cdFx0XHRcdGxldCBkYXRhID0gYXJyYXlbIHBvc2l0aW9uIF07XG5cblx0XHRcdFx0bGV0IHJlZmVyZW5jZSA9IGRhdGFbIHBvaW50IF0gfHwgZGF0YS50b1N0cmluZyggKTtcblxuXHRcdFx0XHRvbGRMaXN0WyBpbmRleCBdID0gbGlzdFsgcmVmZXJlbmNlIF07XG5cblx0XHRcdFx0b2xkTGlzdFsgcG9zaXRpb24gXSA9IGxpc3RbIG5hbWUgXTtcblxuXHRcdFx0XHRyZXR1cm4gZGljdGF0ZSggb2xkTGlzdCwgb3JkZXIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBvbGRMaXN0O1xuXHRcdFx0fVxuXG5cdFx0fSwgWyBdICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpY3RhdGU7XG4iXX0=
