'use strict';

// MODULES //

var erfinv = require( 'compute-erfinv/lib/number.js' );


// FUNCTIONS //

var sqrt = Math.sqrt;


// PARTIAL //

/**
* FUNCTION: partial( mu, sigma )
*	Partially applies mean `mu` and standard deviation `sigma` and returns a function for evaluating the quantile function for a Normal distribution.
*
* @param {Number} mu - mean
* @param {Number} sigma - standard deviation
* @returns {Function} quantile function
*/
function partial( mu, sigma ) {
	var A = mu,
		B = sigma * sqrt( 2 );
	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Normal distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	if ( sigma === 0 ) {
		return function quantile( p ) {
			if ( p !== p || p < 0 || p > 1 ) {
				return NaN;
			}
			return mu;
		};
	}
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
		return A + B * erfinv( 2 * p - 1 );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
