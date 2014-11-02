'use strict';

// locale: en, de, es, it, fr ...;   en is mandatory default
module.exports = 
{
 	locale: {
 		type: String,
 		trim: true,
 		required: true
 	}, 
 	text: {
 		type: String,
 		trim: true,
 		required: true
 	}	
};
