# BIGCHAT

The cassandra based messaging service which uses TTL in cassandra to automatically delete messages, cool right

This was a 2 hour hack project during a training session with DigBigData, so please don't judge, enjoy and hope it helps you.

Run 

````
./startServer.sh
````

## Config

To update the config, add it startServer.sh

 * CASSANDRA_HOST
 * CASSANDRA_KEYSPACE

## Cassandra

Run vagrant to setup local cassandra cluster

````
vagrant up
````

__NOTE__

You need to have vagrant and berkshelf installed

### CQL
You need run the cql/bigchat.cql to create the KEYSPACE and TABLE
