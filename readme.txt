docker build -t mysql_db .

docker run -d mysql_db

==> entering container:

docker exec -it <container id> /bin/bash
ls
cd docker-entrypoint-initdb.d 

mysql -proot 
or
mysql -u root -p

see databases: SHOW DATABASES;
change database: use <database name>;
see tables in database: show tables; // SHOW TABLES;
see table datas: SELECT * FROM <table name>;


mongodb:
------------------------------------------------
Access :

from docker:
mongosh --host localhost:27017 -u root -p root --authenticationDatabase admin
docker-compose up -d --build
from mycomputer:
ubuntu:

$ sudo systemctl start mongod

$ mongosh
$ mongosh –quiet  ⇒ no extra information

InGeneral:
⇒ install mongodb compass


Commands:



> show dbs;
> use demoDatabase;
> db.createCollection(“contacts”);
> db.dropDatabase();
> show collections;
> db.users.find(); // kono collection er data paite

