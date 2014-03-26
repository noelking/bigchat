var cql = require('node-cassandra-cql');

var client = 
	new cql.Client({hosts: ['127.0.0.1'], keyspace: 'developer_day'});

module.exports = client