### postgress
[postgress online](https://rextester.com/l/postgresql_online_compiler)
```sql
drop table if exists
    dictionary_licence,
    location_country,
    si_input_licence;

create table dictionary_licence( 
    id serial primary key,
    number int) ;
create table location_country(
    id serial primary key,
    name VARCHAR (50), 
    code VARCHAR (5), 
    is_eu boolean);
create table si_input_licence(
    id serial primary key,
    season_id int,
    licence_id int);

insert into dictionary_licence (number) 
    values (101),(103),(103),(104),(105),(106),(107),(108),(109);
insert into location_country (name, code, is_eu) 
    values ('aaa', 'CN', TRUE);
insert into si_input_licence (season_id, licence_id)
    values (12,333);


table dictionary_licence;
table location_country;
table si_input_licence;
\\
```

```sql
SELECT oa.order_id, array_agg(oa.area_id)
FROM order_item_area oa
LEFT JOIN "order" o ON o.id = oa.order_id
LEFT JOIN STYLE st ON st.id = o.style_id
WHERE 
st.model = '7971D'
AND oa.included = TRUE
GROUP BY oa.order_id


```
ubuntu:
sudo apt install postgresql postgresql-contrib
sudo systemctl status postgresql

HOWTO create user
	- to login in gui type in terminal
		$$ sudo -u postgres psql postgres
		\du - display users
		CREATE USER user CREATEDB PASSWORD 'pass'
	- now you can login in pgAdmin as user with pass on localhost

"Again purely for convenience, Postgres still accepts commands using the old terminology, such as **CREATE USER** and **CREATE GROUP** which are both aliases for **CREATE ROLE**."

[postgresql-contrib - list of utils](https://www.postgresql.org/docs/current/contrib.html)

Firstly, it is important to understand that for most Unix distributions, the default Postgres user neither requires nor uses a password for authentication. Instead, depending how Postgres was originally installed and what version you are using, the default authentication method will either be ident or peer.

**ident authentication** uses the operating system’s identification server running at TCP port 113 to verify the user’s credentials.

**peer authentication** on the other hand, is used for local connections and verifies that the logged in username of the operating system matches the username for the Postgres database.

[Login and Connect as Default User](https://chartio.com/resources/tutorials/how-to-set-the-default-user-password-in-postgresql/)
[Getting Started with PostgreSQL](https://www3.ntu.edu.sg/home/ehchua/programming/sql/PostgreSQL_GetStarted.html)