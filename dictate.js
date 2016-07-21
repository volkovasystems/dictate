"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"decrease": "decrease"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var decrease = require( "decrease" );
}

if( typeof window != "undefined" &&
	!( "decrease" in window ) )
{
	throw new Error( "decrease is not defined" );
}

var dictate = function dictate( array, order, point ){
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

	if( !Array.isArray( array ) ){
		throw new Error( "invalid array" );
	}

	if( !array.length ){
		return array;
	}

	if( Array.isArray( order ) &&
		order.length )
	{
		var _order = { };
		var orderLength = order.length
		for( var index = 0; index < orderLength; index++ ){
			_order[ order[ index ] ] = index;
		}

		order = _order;
	}

	if( Array.isArray( order ) &&
		!order.length )
	{
		return array;
	}

	if( typeof order != "object" ||
		!Object.keys( order ).length )
	{
		return array;
	}

	point = point || "name";

	if( typeof point != "string" ){
		throw new Error( "invalid point" );
	}

	var _array = { };
	var arrayLength = array.length;
	for( var index = 0; index < arrayLength; index++ ){
		var entity = array[ index ];

		var name = entity[ point ] || entity.toString( );

		_array[ name ] = entity;
	}

	return decrease( array,
		function onReduce( oldArray, currentValue, index, array ){
			var _oldArray = ( oldArray.length? oldArray : array );

			var entity = _oldArray[ index ];

			var name = entity[ point ] || entity.toString( );

			var _order = order[ name ];

			if( typeof _order != "number" &&
				!_order )
			{
				return _oldArray;

			}else if( _order != index ){
				var _entity = array[ _order ];

				var _name = _entity[ point ] || _entity.toString( );

				_oldArray[ index ] = _array[ _name ];

				_oldArray[ _order ] = _array[ name ];

				return dictate( _oldArray, order );

			}else{
				return _oldArray;
			}

		}, [ ] );
};

if( typeof module != "undefined" ){
	module.exports = dictate;
}
