var cql = require('node-cassandra-cql');

var client = 
	new cql.Client({hosts: [process.env['CASSANDRA_HOST'] || "127.0.0.1"], keyspace: process.env['CASSANDRA_KEYSPACE'] || 'developer_day'});

module.exports = client