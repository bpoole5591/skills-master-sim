INSERT INTO skills (email, password) VALUES ($1, $2);
SELECT * FROM skills WHERE email = $1 AND password = $2;