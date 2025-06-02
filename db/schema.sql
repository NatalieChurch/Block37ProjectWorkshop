
DROP TABLE IF EXISTS species;
DROP TABLE IF EXISTS groups;

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