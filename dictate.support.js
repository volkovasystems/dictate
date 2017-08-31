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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/dictate.git",
              			"test": "dictate-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Dictate the order of the array.
              
              		This will dictate the order of the array and will return a new array
              			based on the order and given point.
              
              		The array elements should be of the same type.
              
              		Order properties must coincide with the value of the point.
              
              		Order values must be numbers.
              
              		This will not handle further anomalous to the given parameters.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"doubt": "doubt",
              			"empt": "empt",
              			"falzy": "falzy",
              			"filled": "filled",
              			"norder": "norder",
              			"protype": "protype",
              			"rder": "rder",
              			"stringe": "stringe",
              			"wichevr": "wichevr",
              			"xplace": "xplace",
              			"xtrak": "xtrak"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var doubt = require("doubt");
var empt = require("empt");
var falzy = require("falzy");
var filled = require("filled");
var norder = require("norder");
var protype = require("protype");
var rder = require("rder");
var stringe = require("stringe");
var wichevr = require("wichevr");
var xplace = require("xplace");
var xtrak = require("xtrak");

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
                                                     				"number"
                                                     				"string",
                                                     				"symbol"
                                                     				"name"
                                                     			]
                                                     		}
                                                     	@end-meta-configuration
                                                     */

	if (!doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	if (arid(array)) {
		return array;
	}

	point = wichevr(point, "name");

	if (!protype(point, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid point");
	}

	if (doubt(order, ARRAY) && filled(order)) {
		order = rder(order, point);

	} else if (doubt(order, ARRAY) && arid(order)) {
		return array;
	}

	if ((typeof order === "undefined" ? "undefined" : (0, _typeof3.default)(order)) != "object" || empt(order)) {
		return array;
	}

	if (!norder(order, array.length)) {
		throw new Error("invalid order");
	}

	order = xplace(order);

	return (0, _keys2.default)(order).sort().reduce(function (list, index) {
		return list.concat(xtrak(array, function (element) {
			return element[point] === order[index] ||
			element === order[index] ||
			stringe(element) === order[index];
		}));
	}, []).concat(array);
};

module.exports = dictate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3RhdGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImRvdWJ0IiwiZW1wdCIsImZhbHp5IiwiZmlsbGVkIiwibm9yZGVyIiwicHJvdHlwZSIsInJkZXIiLCJzdHJpbmdlIiwid2ljaGV2ciIsInhwbGFjZSIsInh0cmFrIiwiZGljdGF0ZSIsImFycmF5Iiwib3JkZXIiLCJwb2ludCIsIkFSUkFZIiwiRXJyb3IiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJsZW5ndGgiLCJzb3J0IiwicmVkdWNlIiwibGlzdCIsImluZGV4IiwiY29uY2F0IiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFNBQVNMLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU0sVUFBVU4sUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU8sT0FBT1AsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUSxVQUFVUixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNUyxVQUFVVCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNVSxTQUFTVixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1XLFFBQVFYLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1ZLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1QztBQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLEtBQUksQ0FBQ2QsTUFBT1ksS0FBUCxFQUFjRyxLQUFkLENBQUwsRUFBNEI7QUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSWxCLEtBQU1jLEtBQU4sQ0FBSixFQUFtQjtBQUNsQixTQUFPQSxLQUFQO0FBQ0E7O0FBRURFLFNBQVFOLFFBQVNNLEtBQVQsRUFBZ0IsTUFBaEIsQ0FBUjs7QUFFQSxLQUFJLENBQUNULFFBQVNTLEtBQVQsRUFBZ0JHLFNBQVNDLE1BQVQsR0FBa0JDLE1BQWxDLENBQUwsRUFBaUQ7QUFDaEQsUUFBTSxJQUFJSCxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSWhCLE1BQU9hLEtBQVAsRUFBY0UsS0FBZCxLQUF5QlosT0FBUVUsS0FBUixDQUE3QixFQUE4QztBQUM3Q0EsVUFBUVAsS0FBTU8sS0FBTixFQUFhQyxLQUFiLENBQVI7O0FBRUEsRUFIRCxNQUdNLElBQUlkLE1BQU9hLEtBQVAsRUFBY0UsS0FBZCxLQUF5QmpCLEtBQU1lLEtBQU4sQ0FBN0IsRUFBNEM7QUFDakQsU0FBT0QsS0FBUDtBQUNBOztBQUVELEtBQUksUUFBT0MsS0FBUCx1REFBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QlosS0FBTVksS0FBTixDQUFoQyxFQUErQztBQUM5QyxTQUFPRCxLQUFQO0FBQ0E7O0FBRUQsS0FBSSxDQUFDUixPQUFRUyxLQUFSLEVBQWVELE1BQU1RLE1BQXJCLENBQUwsRUFBb0M7QUFDbkMsUUFBTSxJQUFJSixLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRURILFNBQVFKLE9BQVFJLEtBQVIsQ0FBUjs7QUFFQSxRQUFPLG9CQUFhQSxLQUFiLEVBQXFCUSxJQUFyQixHQUE2QkMsTUFBN0IsQ0FBcUMsVUFBRUMsSUFBRixFQUFRQyxLQUFSLEVBQW1CO0FBQzlELFNBQU9ELEtBQUtFLE1BQUwsQ0FBYWYsTUFBT0UsS0FBUCxFQUFjLFVBQUVjLE9BQUYsRUFBZTtBQUNoRCxVQUFTQSxRQUFTWixLQUFULE1BQXFCRCxNQUFPVyxLQUFQLENBQXJCO0FBQ1JFLGVBQVliLE1BQU9XLEtBQVAsQ0FESjtBQUVSakIsV0FBU21CLE9BQVQsTUFBdUJiLE1BQU9XLEtBQVAsQ0FGeEI7QUFHQSxHQUptQixDQUFiLENBQVA7QUFLQSxFQU5NLEVBTUosRUFOSSxFQU1FQyxNQU5GLENBTVViLEtBTlYsQ0FBUDtBQU9BLENBNUREOztBQThEQWUsT0FBT0MsT0FBUCxHQUFpQmpCLE9BQWpCIiwiZmlsZSI6ImRpY3RhdGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaWN0YXRlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRpY3RhdGUvZGljdGF0ZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJkaWN0YXRlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiZGljdGF0ZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kaWN0YXRlLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJkaWN0YXRlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RGljdGF0ZSB0aGUgb3JkZXIgb2YgdGhlIGFycmF5LlxyXG5cclxuXHRcdFRoaXMgd2lsbCBkaWN0YXRlIHRoZSBvcmRlciBvZiB0aGUgYXJyYXkgYW5kIHdpbGwgcmV0dXJuIGEgbmV3IGFycmF5XHJcblx0XHRcdGJhc2VkIG9uIHRoZSBvcmRlciBhbmQgZ2l2ZW4gcG9pbnQuXHJcblxyXG5cdFx0VGhlIGFycmF5IGVsZW1lbnRzIHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLlxyXG5cclxuXHRcdE9yZGVyIHByb3BlcnRpZXMgbXVzdCBjb2luY2lkZSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgcG9pbnQuXHJcblxyXG5cdFx0T3JkZXIgdmFsdWVzIG11c3QgYmUgbnVtYmVycy5cclxuXHJcblx0XHRUaGlzIHdpbGwgbm90IGhhbmRsZSBmdXJ0aGVyIGFub21hbG91cyB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxyXG5cdFx0XHRcImVtcHRcIjogXCJlbXB0XCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImZpbGxlZFwiOiBcImZpbGxlZFwiLFxyXG5cdFx0XHRcIm5vcmRlclwiOiBcIm5vcmRlclwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwicmRlclwiOiBcInJkZXJcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxyXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCIsXHJcblx0XHRcdFwieHBsYWNlXCI6IFwieHBsYWNlXCIsXHJcblx0XHRcdFwieHRyYWtcIjogXCJ4dHJha1wiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZW1wdCA9IHJlcXVpcmUoIFwiZW1wdFwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcclxuY29uc3Qgbm9yZGVyID0gcmVxdWlyZSggXCJub3JkZXJcIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuY29uc3QgcmRlciA9IHJlcXVpcmUoIFwicmRlclwiICk7XHJcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuY29uc3QgeHBsYWNlID0gcmVxdWlyZSggXCJ4cGxhY2VcIiApO1xyXG5jb25zdCB4dHJhayA9IHJlcXVpcmUoIFwieHRyYWtcIiApO1xyXG5cclxuY29uc3QgZGljdGF0ZSA9IGZ1bmN0aW9uIGRpY3RhdGUoIGFycmF5LCBvcmRlciwgcG9pbnQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiQXJyYXlcIixcclxuXHRcdFx0XHRcdFwiWypdXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwib3JkZXI6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcclxuXHRcdFx0XHRcdFwiW3N0cmluZ11cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJwb2ludFwiOiBbXHJcblx0XHRcdFx0XHRcIm51bWJlclwiXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxyXG5cdFx0XHRcdFx0XCJuYW1lXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFkb3VidCggYXJyYXksIEFSUkFZICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCBhcnJheSApICl7XHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cclxuXHRwb2ludCA9IHdpY2hldnIoIHBvaW50LCBcIm5hbWVcIiApO1xyXG5cclxuXHRpZiggIXByb3R5cGUoIHBvaW50LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcG9pbnRcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGRvdWJ0KCBvcmRlciwgQVJSQVkgKSAmJiBmaWxsZWQoIG9yZGVyICkgKXtcclxuXHRcdG9yZGVyID0gcmRlciggb3JkZXIsIHBvaW50ICk7XHJcblxyXG5cdH1lbHNlIGlmKCBkb3VidCggb3JkZXIsIEFSUkFZICkgJiYgYXJpZCggb3JkZXIgKSApe1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHJcblx0aWYoIHR5cGVvZiBvcmRlciAhPSBcIm9iamVjdFwiIHx8IGVtcHQoIG9yZGVyICkgKXtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblxyXG5cdGlmKCAhbm9yZGVyKCBvcmRlciwgYXJyYXkubGVuZ3RoICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG9yZGVyXCIgKTtcclxuXHR9XHJcblxyXG5cdG9yZGVyID0geHBsYWNlKCBvcmRlciApO1xyXG5cclxuXHRyZXR1cm4gT2JqZWN0LmtleXMoIG9yZGVyICkuc29ydCggKS5yZWR1Y2UoICggbGlzdCwgaW5kZXggKSA9PiB7XHJcblx0XHRyZXR1cm4gbGlzdC5jb25jYXQoIHh0cmFrKCBhcnJheSwgKCBlbGVtZW50ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCBlbGVtZW50WyBwb2ludCBdID09PSBvcmRlclsgaW5kZXggXSB8fFxyXG5cdFx0XHRcdGVsZW1lbnQgPT09IG9yZGVyWyBpbmRleCBdIHx8XHJcblx0XHRcdFx0c3RyaW5nZSggZWxlbWVudCApID09PSBvcmRlclsgaW5kZXggXSApO1xyXG5cdFx0fSApICk7XHJcblx0fSwgWyBdICkuY29uY2F0KCBhcnJheSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaWN0YXRlO1xyXG4iXX0=
//# sourceMappingURL=dictate.support.js.map
