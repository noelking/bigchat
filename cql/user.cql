create TABLE user(name varchar, PRIMARY KEY(name));

create TABLE message(sender varchar, content text, sent_at timeuuid, PRIMARY KEY(sender, sent_at)) with clustering order by (created_at desc);

insert into message (sender, content, sent_at) VALUES('joe', 'expires soon', now()) using TTL 10;

