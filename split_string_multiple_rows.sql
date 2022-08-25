-- split string in multiple rows in MySQL

create table tabela(id integer, ref_id varchar(100));
insert into tabela(id, ref_id) values(23, "2,3,4"),(25, "5,6,7"),(23, "5,6,7");