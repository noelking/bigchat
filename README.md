# BIGCHAT

The node.js & cassandra based messaging service which uses TTL in cassandra to automatically delete messages, cool right

This was a 2 hour hack project during a training session with DigBigData, so please don't judge, enjoy and hope it helps you.

### Requirements
* Node.js 
* Cassandra (See below if not installed)

### Setting up Node Modules/Plugins

The following plugins are required
 * express
 * socket.io
 * node-cassandra-cql

To install these run

````
npm install express
npm install socket.io
npm install node-cassandra-cql 
````

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

# Using the webapp

Navigate to http://localhost:3000

When you can register on the left hand side
![Home screen](https://github.com/noelking/bigchat/blob/master/docs/bigchat.png "Home screen")

Once registered chat away
![Chat](https://github.com/noelking/bigchat/blob/master/docs/bigchat-conversation.png "Chat wall in action")
