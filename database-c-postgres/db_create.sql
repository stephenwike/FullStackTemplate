CREATE TABLE person (
 id serial PRIMARY KEY,
 first_name varchar(256) NOT NULL,
 last_name varchar(256) NOT NULL,
 middle_name varchar(256)
);

CREATE TABLE address (
 id serial PRIMARY KEY,
 ad_type varchar(256) NOT NULL,
 address1 varchar(256) NOT NULL,
 address2 varchar(256),
 city varchar(256) NOT NULL,
 ad_state varchar(256) NOT NULL,
 zip varchar(256) NOT NULL,
 person_id integer REFERENCES person(id)
);

CREATE TABLE phone_number (
 id serial PRIMARY KEY,
 pn_type varchar(256) NOT NULL,
 pn_number varchar(10) NOT NULL,
 person_id integer REFERENCES person(id)
);