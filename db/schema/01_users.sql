-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL, 
--   email VARCHAR(255) NOT NULL,
--   pass VARCHAR(255) NOT NULL,
-- );

-- CREATE TABLE categories (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255)
-- );

-- CREATE TABLE tasks (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   title VARCHAR(255),
--   description VARCHAR(255),
--   category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
--   date DATE,
--   more_information_from_API VARCHAR(255)
-- );
