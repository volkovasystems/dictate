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
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

	return decrease(array,
	function onDecrease(oldArray, currentValue, index, array) {
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

//# sourceMappingURL=dictate.support.js.map