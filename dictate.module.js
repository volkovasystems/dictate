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
*/

const arid = require( "arid" );
const doubt = require( "doubt" );
const empt = require( "empt" );
const falzy = require( "falzy" );
const filled = require( "filled" );
const norder = require( "norder" );
const protype = require( "protype" );
const rder = require( "rder" );
const stringe = require( "stringe" );
const wichevr = require( "wichevr" );
const xplace = require( "xplace" );
const xtrak = require( "xtrak" );

const dictate = function dictate( array, order, point ){
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

	if( !doubt( array, ARRAY ) ){
		throw new Error( "invalid array" );
	}

	if( arid( array ) ){
		return array;
	}

	point = wichevr( point, "name" );

	if( !protype( point, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid point" );
	}

	if( doubt( order, ARRAY ) && filled( order ) ){
		order = rder( order, point );

	}else if( doubt( order, ARRAY ) && arid( order ) ){
		return array;
	}

	if( typeof order != "object" || empt( order ) ){
		return array;
	}

	if( !norder( order, array.length ) ){
		throw new Error( "invalid order" );
	}

	order = xplace( order );

	return Object.keys( order ).sort( ).reduce( ( list, index ) => {
		return list.concat( xtrak( array, ( element ) => {
			return ( element[ point ] === order[ index ] ||
				element === order[ index ] ||
				stringe( element ) === order[ index ] );
		} ) );
	}, [ ] ).concat( array );
};

module.exports = dictate;
