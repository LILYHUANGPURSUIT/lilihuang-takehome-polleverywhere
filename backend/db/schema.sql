DROP DATABASE IF EXISTS raffles_dev;
CREATE DATABASE raffles_dev;

\c raffles_dev;
DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    secret_token TEXT NOT NULL, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_raffled TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS participants;

CREATE TABLE participants(
    id SERIAL PRIMARY KEY, 
    firstname TEXT NOT NULL, 
    lastname TEXT NOT NULL, 
    email TEXT NOT NULL, 
    phone TEXT,
    raffle_id INTEGER REFERENCES raffles(id)
);