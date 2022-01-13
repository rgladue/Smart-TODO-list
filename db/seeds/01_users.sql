-- Users table seeds here (Example)
INSERT INTO users (name, email, password) 
VALUES ('Alice', 'alice.in@chains.com', 'cooper'),
('Robert', 'rob@bob.com', 'robrob'),
('James Bond', 'James@bond.ca', 'goldeneye'),
('Geralt of Rivia', 'geralt@witcher.com', 'yennefer');


INSERT INTO tasks (user_id, description, category)
VALUES (1, 'I want to eat burgers', 'food'),
(1, 'I want to watch The Hobbit', 'movies'),
(1, 'I want to watch The Simpsons', 'movies'),
(1, 'I want to buy a tv', 'shopping'), 
(2, 'I want to read The Hobbit', 'books'), 
(2, 'I want to eat pizza', 'food'),
(2, 'I want to buy an iPod', 'shopping'),
(3, 'I want to watch Goldeneye 007', 'movies'),
(3, 'I want to eat a taco', 'food'), 
(3, 'I want to buy a gun', 'shopping'), 
(4, 'I want to read The Witcher', 'books'),
(4, 'I want to watch The Witcher', 'movies'),
(4, 'I want to eat steak', 'food'), 
(4, 'I want to buy a sword', 'shopping'),
(4, 'I want to watch Yennefers body', 'movies'),
(4, 'I want to read Harry Potter', 'books');
