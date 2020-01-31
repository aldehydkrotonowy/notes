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