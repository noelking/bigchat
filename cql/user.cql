create TABLE user(name varchar, PRIMARY KEY(name));

create TABLE message(sender varchar, content text, created_at timeuuid, PRIMARY KEY(sender, created_at)) with clustering order by (created_at desc);

insert into message (sender, content, created_at) VALUES('joe', 'expires soon', now()) using TTL 10;

