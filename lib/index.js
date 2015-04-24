'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isPositiveInteger = require( 'validate.io-positive-integer' );


// IS POSITIVE INTEGER ARRAY //

/**
* FUNCTION: isPositiveIntegerArray( value )
*	Validates if a value is a positive integer array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a positive integer array
*/
function isPositiveIntegerArray( value ) {
	var len, i;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( !isPositiveInteger( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isPositiveIntegerArray()


// EXPORTS //

module.exports = isPositiveIntegerArray;
