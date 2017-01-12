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

	if (!doubt(array).ARRAY) {
		throw new Error("invalid array");
	}

	if (!array.length) {
		return array;
	}

	if (doubt(order).ARRAY && order.length) {
		var position = {};
		var orderLength = order.length;
		for (var index = 0; index < orderLength; index++) {
			position[order[index]] = index;
		}

		order = position;
	}

	if (doubt(order).ARRAY && !order.length) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3RhdGUuanMiXSwibmFtZXMiOlsiZGVjcmVhc2UiLCJyZXF1aXJlIiwiZG91YnQiLCJwcm90eXBlIiwiZGljdGF0ZSIsImFycmF5Iiwib3JkZXIiLCJwb2ludCIsIkFSUkFZIiwiRXJyb3IiLCJsZW5ndGgiLCJwb3NpdGlvbiIsIm9yZGVyTGVuZ3RoIiwiaW5kZXgiLCJPQkpFQ1QiLCJTVFJJTkciLCJsaXN0IiwiYXJyYXlMZW5ndGgiLCJlbnRpdHkiLCJuYW1lIiwidG9TdHJpbmciLCJvbkRlY3JlYXNlIiwib2xkQXJyYXkiLCJjdXJyZW50VmFsdWUiLCJvbGRMaXN0IiwiTlVNQkVSIiwiZGF0YSIsInJlZmVyZW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEsSUFBTUEsV0FBV0MsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUcsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQ3REOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLEtBQUksQ0FBQ0wsTUFBT0csS0FBUCxFQUFlRyxLQUFwQixFQUEyQjtBQUMxQixRQUFNLElBQUlDLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJLENBQUNKLE1BQU1LLE1BQVgsRUFBbUI7QUFDbEIsU0FBT0wsS0FBUDtBQUNBOztBQUVELEtBQUlILE1BQU9JLEtBQVAsRUFBZUUsS0FBZixJQUF3QkYsTUFBTUksTUFBbEMsRUFBMEM7QUFDekMsTUFBSUMsV0FBVyxFQUFmO0FBQ0EsTUFBSUMsY0FBY04sTUFBTUksTUFBeEI7QUFDQSxPQUFLLElBQUlHLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFELFdBQTVCLEVBQXlDQyxPQUF6QyxFQUFrRDtBQUNqREYsWUFBVUwsTUFBT08sS0FBUCxDQUFWLElBQTZCQSxLQUE3QjtBQUNBOztBQUVEUCxVQUFRSyxRQUFSO0FBQ0E7O0FBRUQsS0FBSVQsTUFBT0ksS0FBUCxFQUFlRSxLQUFmLElBQXdCLENBQUNGLE1BQU1JLE1BQW5DLEVBQTJDO0FBQzFDLFNBQU9MLEtBQVA7QUFDQTs7QUFFRCxLQUFJLENBQUNGLFFBQVNHLEtBQVQsRUFBZ0JRLE1BQWhCLENBQUQsSUFBNkIsQ0FBQyxvQkFBYVIsS0FBYixFQUFxQkksTUFBdkQsRUFBK0Q7QUFDOUQsU0FBT0wsS0FBUDtBQUNBOztBQUVERSxTQUFRQSxTQUFTLE1BQWpCOztBQUVBLEtBQUksQ0FBQ0osUUFBU0ksS0FBVCxFQUFnQlEsTUFBaEIsQ0FBTCxFQUErQjtBQUM5QixRQUFNLElBQUlOLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTyxPQUFPLEVBQVg7QUFDQSxLQUFJQyxjQUFjWixNQUFNSyxNQUF4QjtBQUNBLE1BQUssSUFBSUcsU0FBUSxDQUFqQixFQUFvQkEsU0FBUUksV0FBNUIsRUFBeUNKLFFBQXpDLEVBQWtEO0FBQ2pELE1BQUlLLFNBQVNiLE1BQU9RLE1BQVAsQ0FBYjs7QUFFQSxNQUFJTSxPQUFPRCxPQUFRWCxLQUFSLEtBQW1CVyxPQUFPRSxRQUFQLEVBQTlCOztBQUVBSixPQUFNRyxJQUFOLElBQWVELE1BQWY7QUFDQTs7QUFFRCxRQUFPbEIsU0FBVUssS0FBVixFQUNOLFNBQVNnQixVQUFULENBQXFCQyxRQUFyQixFQUErQkMsWUFBL0IsRUFBNkNWLEtBQTdDLEVBQW9EUixLQUFwRCxFQUEyRDtBQUMxRCxNQUFJbUIsVUFBWUYsU0FBU1osTUFBVCxHQUFpQlksUUFBakIsR0FBNEJqQixLQUE1Qzs7QUFFQSxNQUFJYSxTQUFTTSxRQUFTWCxLQUFULENBQWI7O0FBRUEsTUFBSU0sT0FBT0QsT0FBUVgsS0FBUixLQUFtQlcsT0FBT0UsUUFBUCxFQUE5Qjs7QUFFQSxNQUFJVCxXQUFXTCxNQUFPYSxJQUFQLENBQWY7O0FBRUEsTUFBSSxDQUFDaEIsUUFBU1EsUUFBVCxFQUFtQmMsTUFBbkIsQ0FBRCxJQUFnQyxDQUFDZCxRQUFyQyxFQUErQztBQUM5QyxVQUFPYSxPQUFQO0FBRUEsR0FIRCxNQUdNLElBQUliLFlBQVlFLEtBQWhCLEVBQXVCO0FBQzVCLE9BQUlhLE9BQU9yQixNQUFPTSxRQUFQLENBQVg7O0FBRUEsT0FBSWdCLFlBQVlELEtBQU1uQixLQUFOLEtBQWlCbUIsS0FBS04sUUFBTCxFQUFqQzs7QUFFQUksV0FBU1gsS0FBVCxJQUFtQkcsS0FBTVcsU0FBTixDQUFuQjs7QUFFQUgsV0FBU2IsUUFBVCxJQUFzQkssS0FBTUcsSUFBTixDQUF0Qjs7QUFFQSxVQUFPZixRQUFTb0IsT0FBVCxFQUFrQmxCLEtBQWxCLENBQVA7QUFFQSxHQVhLLE1BV0Q7QUFDSixVQUFPa0IsT0FBUDtBQUNBO0FBRUQsRUE1QkssRUE0QkgsRUE1QkcsQ0FBUDtBQTZCQSxDQTNGRDs7QUE2RkFJLE9BQU9DLE9BQVAsR0FBaUJ6QixPQUFqQiIsImZpbGUiOiJkaWN0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaWN0YXRlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkaWN0YXRlL2RpY3RhdGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRpY3RhdGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGljdGF0ZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpY3RhdGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJkaWN0YXRlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyB3aWxsIGRpY3RhdGUgdGhlIG9yZGVyIG9mIHRoZSBhcnJheSBhbmQgd2lsbCByZXR1cm4gYSBuZXcgYXJyYXlcblx0XHRcdGJhc2VkIG9uIHRoZSBvcmRlciBhbmQgZ2l2ZW4gcG9pbnQuXG5cblx0XHRUaGUgYXJyYXkgZWxlbWVudHMgc2hvdWxkIGJlIG9mIHRoZSBzYW1lIHR5cGUuXG5cblx0XHRPcmRlciBwcm9wZXJ0aWVzIG11c3QgY29pbmNpZGUgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIHBvaW50LlxuXG5cdFx0T3JkZXIgdmFsdWVzIG11c3QgYmUgbnVtYmVycy5cblxuXHRcdFRoaXMgd2lsbCBub3QgaGFuZGxlIGZ1cnRoZXIgYW5vbWFsb3VzIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkZWNyZWFzZVwiOiBcImRlY3JlYXNlXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkZWNyZWFzZSA9IHJlcXVpcmUoIFwiZGVjcmVhc2VcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBkaWN0YXRlID0gZnVuY3Rpb24gZGljdGF0ZSggYXJyYXksIG9yZGVyLCBwb2ludCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIkFycmF5XCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIm9yZGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFwiW3N0cmluZ11cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInBvaW50XCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibmFtZVwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGFycmF5ICkuQVJSQVkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XG5cdH1cblxuXHRpZiggIWFycmF5Lmxlbmd0aCApe1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdGlmKCBkb3VidCggb3JkZXIgKS5BUlJBWSAmJiBvcmRlci5sZW5ndGggKXtcblx0XHRsZXQgcG9zaXRpb24gPSB7IH07XG5cdFx0bGV0IG9yZGVyTGVuZ3RoID0gb3JkZXIubGVuZ3RoXG5cdFx0Zm9yKCB2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyTGVuZ3RoOyBpbmRleCsrICl7XG5cdFx0XHRwb3NpdGlvblsgb3JkZXJbIGluZGV4IF0gXSA9IGluZGV4O1xuXHRcdH1cblxuXHRcdG9yZGVyID0gcG9zaXRpb247XG5cdH1cblxuXHRpZiggZG91YnQoIG9yZGVyICkuQVJSQVkgJiYgIW9yZGVyLmxlbmd0aCApe1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggb3JkZXIsIE9CSkVDVCApIHx8ICFPYmplY3Qua2V5cyggb3JkZXIgKS5sZW5ndGggKXtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXHRwb2ludCA9IHBvaW50IHx8IFwibmFtZVwiO1xuXG5cdGlmKCAhcHJvdHlwZSggcG9pbnQsIFNUUklORyApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcG9pbnRcIiApO1xuXHR9XG5cblx0bGV0IGxpc3QgPSB7IH07XG5cdGxldCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0Zm9yKCBsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrICl7XG5cdFx0bGV0IGVudGl0eSA9IGFycmF5WyBpbmRleCBdO1xuXG5cdFx0bGV0IG5hbWUgPSBlbnRpdHlbIHBvaW50IF0gfHwgZW50aXR5LnRvU3RyaW5nKCApO1xuXG5cdFx0bGlzdFsgbmFtZSBdID0gZW50aXR5O1xuXHR9XG5cblx0cmV0dXJuIGRlY3JlYXNlKCBhcnJheSxcblx0XHRmdW5jdGlvbiBvbkRlY3JlYXNlKCBvbGRBcnJheSwgY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkgKXtcblx0XHRcdGxldCBvbGRMaXN0ID0gKCBvbGRBcnJheS5sZW5ndGg/IG9sZEFycmF5IDogYXJyYXkgKTtcblxuXHRcdFx0bGV0IGVudGl0eSA9IG9sZExpc3RbIGluZGV4IF07XG5cblx0XHRcdGxldCBuYW1lID0gZW50aXR5WyBwb2ludCBdIHx8IGVudGl0eS50b1N0cmluZyggKTtcblxuXHRcdFx0bGV0IHBvc2l0aW9uID0gb3JkZXJbIG5hbWUgXTtcblxuXHRcdFx0aWYoICFwcm90eXBlKCBwb3NpdGlvbiwgTlVNQkVSICkgJiYgIXBvc2l0aW9uICl7XG5cdFx0XHRcdHJldHVybiBvbGRMaXN0O1xuXG5cdFx0XHR9ZWxzZSBpZiggcG9zaXRpb24gIT0gaW5kZXggKXtcblx0XHRcdFx0bGV0IGRhdGEgPSBhcnJheVsgcG9zaXRpb24gXTtcblxuXHRcdFx0XHRsZXQgcmVmZXJlbmNlID0gZGF0YVsgcG9pbnQgXSB8fCBkYXRhLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRcdG9sZExpc3RbIGluZGV4IF0gPSBsaXN0WyByZWZlcmVuY2UgXTtcblxuXHRcdFx0XHRvbGRMaXN0WyBwb3NpdGlvbiBdID0gbGlzdFsgbmFtZSBdO1xuXG5cdFx0XHRcdHJldHVybiBkaWN0YXRlKCBvbGRMaXN0LCBvcmRlciApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIG9sZExpc3Q7XG5cdFx0XHR9XG5cblx0XHR9LCBbIF0gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGljdGF0ZTtcbiJdfQ==
