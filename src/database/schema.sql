CREATE DATABASE myposts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS topics (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS publications (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    sender UUID,
    text VARCHAR,
    topic UUID,
    FOREIGN KEY(sender) REFERENCES users(id),
    FOREIGN KEY(topic) REFERENCES topics(id)
);
