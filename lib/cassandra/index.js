var cql = require('node-cassandra-cql');

var client = {
	client:	function() {
		var cassandraClient = new cql.Client({hosts: ['127.0.0.1'], keyspace: 'developer_day'});
		return cassandraClient;
	}
}
module.export = client;

