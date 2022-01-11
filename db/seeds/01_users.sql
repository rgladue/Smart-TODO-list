-- Users table seeds here (Example)
INSERT INTO users (name, email, password) 
VALUES ('Alice', 'alice.in@chains.com', 'cooper'),
('Robert', 'rob@bob.com', 'robrob'),
('James Bond', 'James@bond.ca', 'goldeneye'),
('Geralt of Rivia', 'geralt@witcher.com', 'yennefer');


INSERT INTO tasks (user_id, description)
VALUES (1, 'I want to eat toast'),
(1, 'I want to watch The Hobbit'),
(1, ' I want to watch Spider Man'),
(1, 'I want to buy a cow'), 
(2, 'I want to read The Silmarillion'), 
(2, 'I want to eat a horse'),
(2, 'I want to buy a 1964 Ford Mustang'),
(3, 'I want to drink a martini'), 
(3, 'I want to buy a new gun'), 
(3, 'I want to read People Magazine'),
(4, 'I want watch Yennefer sleep'),
(4, 'I want to eat venison'), 
(4, 'I want to buy a new sword');
