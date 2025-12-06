CREATE TABLE IF NOT EXISTS users (
 id SERIAL PRIMARY KEY,
 name VARCHAR(50),
 email VARCHAR(100) UNIQUE
);

INSERT INTO users (name, email) VALUES
 ('T1', 't1@example.com'),
 ('T2', 't2@example.com'),
 ('T3', 't3@example.com')
ON CONFLICT (email) DO NOTHING;
