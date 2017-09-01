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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3RhdGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImRvdWJ0IiwiZW1wdCIsImZhbHp5IiwiZmlsbGVkIiwibm9yZGVyIiwicHJvdHlwZSIsInJkZXIiLCJzdHJpbmdlIiwid2ljaGV2ciIsInhwbGFjZSIsInh0cmFrIiwiZGljdGF0ZSIsImFycmF5Iiwib3JkZXIiLCJwb2ludCIsIkFSUkFZIiwiRXJyb3IiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJsZW5ndGgiLCJzb3J0IiwicmVkdWNlIiwibGlzdCIsImluZGV4IiwiY29uY2F0IiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFNBQVNMLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU0sVUFBVU4sUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU8sT0FBT1AsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUSxVQUFVUixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNUyxVQUFVVCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNVSxTQUFTVixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1XLFFBQVFYLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1ZLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1QztBQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLEtBQUksQ0FBQ2QsTUFBT1ksS0FBUCxFQUFjRyxLQUFkLENBQUwsRUFBNEI7QUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSWxCLEtBQU1jLEtBQU4sQ0FBSixFQUFtQjtBQUNsQixTQUFPQSxLQUFQO0FBQ0E7O0FBRURFLFNBQVFOLFFBQVNNLEtBQVQsRUFBZ0IsTUFBaEIsQ0FBUjs7QUFFQSxLQUFJLENBQUNULFFBQVNTLEtBQVQsRUFBZ0JHLFNBQVNDLE1BQVQsR0FBa0JDLE1BQWxDLENBQUwsRUFBaUQ7QUFDaEQsUUFBTSxJQUFJSCxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSWhCLE1BQU9hLEtBQVAsRUFBY0UsS0FBZCxLQUF5QlosT0FBUVUsS0FBUixDQUE3QixFQUE4QztBQUM3Q0EsVUFBUVAsS0FBTU8sS0FBTixFQUFhQyxLQUFiLENBQVI7O0FBRUEsRUFIRCxNQUdNLElBQUlkLE1BQU9hLEtBQVAsRUFBY0UsS0FBZCxLQUF5QmpCLEtBQU1lLEtBQU4sQ0FBN0IsRUFBNEM7QUFDakQsU0FBT0QsS0FBUDtBQUNBOztBQUVELEtBQUksUUFBT0MsS0FBUCx1REFBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QlosS0FBTVksS0FBTixDQUFoQyxFQUErQztBQUM5QyxTQUFPRCxLQUFQO0FBQ0E7O0FBRUQsS0FBSSxDQUFDUixPQUFRUyxLQUFSLEVBQWVELE1BQU1RLE1BQXJCLENBQUwsRUFBb0M7QUFDbkMsUUFBTSxJQUFJSixLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRURILFNBQVFKLE9BQVFJLEtBQVIsQ0FBUjs7QUFFQSxRQUFPLG9CQUFhQSxLQUFiLEVBQXFCUSxJQUFyQixHQUE2QkMsTUFBN0IsQ0FBcUMsVUFBRUMsSUFBRixFQUFRQyxLQUFSLEVBQW1CO0FBQzlELFNBQU9ELEtBQUtFLE1BQUwsQ0FBYWYsTUFBT0UsS0FBUCxFQUFjLFVBQUVjLE9BQUYsRUFBZTtBQUNoRCxVQUFTQSxRQUFTWixLQUFULE1BQXFCRCxNQUFPVyxLQUFQLENBQXJCO0FBQ1JFLGVBQVliLE1BQU9XLEtBQVAsQ0FESjtBQUVSakIsV0FBU21CLE9BQVQsTUFBdUJiLE1BQU9XLEtBQVAsQ0FGeEI7QUFHQSxHQUptQixDQUFiLENBQVA7QUFLQSxFQU5NLEVBTUosRUFOSSxFQU1FQyxNQU5GLENBTVViLEtBTlYsQ0FBUDtBQU9BLENBNUREOztBQThEQWUsT0FBT0MsT0FBUCxHQUFpQmpCLE9BQWpCIiwiZmlsZSI6ImRpY3RhdGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGljdGF0ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGljdGF0ZS9kaWN0YXRlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkaWN0YXRlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRpY3RhdGVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpY3RhdGUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJkaWN0YXRlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGljdGF0ZSB0aGUgb3JkZXIgb2YgdGhlIGFycmF5LlxuXG5cdFx0VGhpcyB3aWxsIGRpY3RhdGUgdGhlIG9yZGVyIG9mIHRoZSBhcnJheSBhbmQgd2lsbCByZXR1cm4gYSBuZXcgYXJyYXlcblx0XHRcdGJhc2VkIG9uIHRoZSBvcmRlciBhbmQgZ2l2ZW4gcG9pbnQuXG5cblx0XHRUaGUgYXJyYXkgZWxlbWVudHMgc2hvdWxkIGJlIG9mIHRoZSBzYW1lIHR5cGUuXG5cblx0XHRPcmRlciBwcm9wZXJ0aWVzIG11c3QgY29pbmNpZGUgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIHBvaW50LlxuXG5cdFx0T3JkZXIgdmFsdWVzIG11c3QgYmUgbnVtYmVycy5cblxuXHRcdFRoaXMgd2lsbCBub3QgaGFuZGxlIGZ1cnRoZXIgYW5vbWFsb3VzIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImVtcHRcIjogXCJlbXB0XCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcIm5vcmRlclwiOiBcIm5vcmRlclwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyZGVyXCI6IFwicmRlclwiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiLFxuXHRcdFx0XCJ4cGxhY2VcIjogXCJ4cGxhY2VcIixcblx0XHRcdFwieHRyYWtcIjogXCJ4dHJha1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGVtcHQgPSByZXF1aXJlKCBcImVtcHRcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IG5vcmRlciA9IHJlcXVpcmUoIFwibm9yZGVyXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmRlciA9IHJlcXVpcmUoIFwicmRlclwiICk7XG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xuY29uc3QgeHBsYWNlID0gcmVxdWlyZSggXCJ4cGxhY2VcIiApO1xuY29uc3QgeHRyYWsgPSByZXF1aXJlKCBcInh0cmFrXCIgKTtcblxuY29uc3QgZGljdGF0ZSA9IGZ1bmN0aW9uIGRpY3RhdGUoIGFycmF5LCBvcmRlciwgcG9pbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcnJheVwiLFxuXHRcdFx0XHRcdFwiWypdXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJvcmRlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcIltzdHJpbmddXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwb2ludFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIlxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFwibmFtZVwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGFycmF5LCBBUlJBWSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgYXJyYXlcIiApO1xuXHR9XG5cblx0aWYoIGFyaWQoIGFycmF5ICkgKXtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXHRwb2ludCA9IHdpY2hldnIoIHBvaW50LCBcIm5hbWVcIiApO1xuXG5cdGlmKCAhcHJvdHlwZSggcG9pbnQsIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcG9pbnRcIiApO1xuXHR9XG5cblx0aWYoIGRvdWJ0KCBvcmRlciwgQVJSQVkgKSAmJiBmaWxsZWQoIG9yZGVyICkgKXtcblx0XHRvcmRlciA9IHJkZXIoIG9yZGVyLCBwb2ludCApO1xuXG5cdH1lbHNlIGlmKCBkb3VidCggb3JkZXIsIEFSUkFZICkgJiYgYXJpZCggb3JkZXIgKSApe1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdGlmKCB0eXBlb2Ygb3JkZXIgIT0gXCJvYmplY3RcIiB8fCBlbXB0KCBvcmRlciApICl7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0aWYoICFub3JkZXIoIG9yZGVyLCBhcnJheS5sZW5ndGggKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG9yZGVyXCIgKTtcblx0fVxuXG5cdG9yZGVyID0geHBsYWNlKCBvcmRlciApO1xuXG5cdHJldHVybiBPYmplY3Qua2V5cyggb3JkZXIgKS5zb3J0KCApLnJlZHVjZSggKCBsaXN0LCBpbmRleCApID0+IHtcblx0XHRyZXR1cm4gbGlzdC5jb25jYXQoIHh0cmFrKCBhcnJheSwgKCBlbGVtZW50ICkgPT4ge1xuXHRcdFx0cmV0dXJuICggZWxlbWVudFsgcG9pbnQgXSA9PT0gb3JkZXJbIGluZGV4IF0gfHxcblx0XHRcdFx0ZWxlbWVudCA9PT0gb3JkZXJbIGluZGV4IF0gfHxcblx0XHRcdFx0c3RyaW5nZSggZWxlbWVudCApID09PSBvcmRlclsgaW5kZXggXSApO1xuXHRcdH0gKSApO1xuXHR9LCBbIF0gKS5jb25jYXQoIGFycmF5ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpY3RhdGU7XG4iXX0=
//# sourceMappingURL=dictate.support.js.map
