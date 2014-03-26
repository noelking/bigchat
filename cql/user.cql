drop keyspace if exists bigchat;

CREATE KEYSPACE bigchat
  WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

use bigchat;

create TABLE message(sender varchar, content text, sent_at timeuuid, PRIMARY KEY(sender, sent_at)) with clustering order by (sent_at desc);

insert into message (sender, content, sent_at) VALUES('joe', 'expires soon', now()) using TTL 10;

select * from message;
