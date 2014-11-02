'use strict';
module.exports = 
{
	tid: {
		type: String,
		trim: true,
		required: true
	},
	name: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		trim: true,
		lowercase: true
	},
	hashedPassword: {
		type: String,
		trim: true
	},
	role: {
		type: String,
		trim: true,
		required: true,
		default: 'user'
	},
	provider: {
		type: String,
		trim: true
	},
	salt: {
		type: String
	}
};

