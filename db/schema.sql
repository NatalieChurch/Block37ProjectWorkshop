
DROP TABLE IF EXISTS species;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    first_name TEXT, 
    last_name TEXT, 
    email TEXT NOT NULL, 
    password TEXT NOT NULL
);

CREATE TABLE groups(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE species(
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    population INTEGER NOT NULL, 
    diet TEXT NOT NULL, 
    color TEXT NOT NULL,
    group_name TEXT REFERENCES groups(name)
);