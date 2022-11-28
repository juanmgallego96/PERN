CREATE DATABASE tasksdb;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);

ALTER USER user_name WITH PASSWORD 'new_password';
ALTER USER postgres WITH PASSWORD 'postgres';