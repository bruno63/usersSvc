'use strict';

module.exports = {
	title: 'Users',
	description: 'Registry of registered users',
	version: '1',
	itemName: 'user',
	collectionName: 'users',

	// Server IP
	ip:     process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

	// Server port
	port:   process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            3335,

	// MongoDB connection options
	mongo: {
		uri:    process.env.MONGOLAB_URI ||
				process.env.MONGOHQ_URL ||
				process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
				'mongodb://localhost:27017/users_v1'
	},
};
