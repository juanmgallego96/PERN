CREATE DATABASE tasksdb;
CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);
