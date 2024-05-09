-- Insert data into Type table
INSERT INTO Type (name) VALUES
('Grass'),
('Fire'),
('Water'),
('Normal'),
('Flying');

-- Insert data into Move table
INSERT INTO Move (name, power, type_id) VALUES
('Tackle', 35, 4),
('Vine Whip', 40, 1),
('Return', 100, 4),
('Ember', 40, 2),
('Water Gun', 40, 3),
('Wing Attack', 65, 5),
('Headbutt', 70, 4);

-- Insert data into Pokemon table
INSERT INTO Pokemon (name, primary_type_id, secondary_type_id) VALUES
('Bulbasaur', 1, NULL),
('Charmander', 2, NULL),
('Squirtle', 3, NULL),
('Eevee', 4, NULL),
('Pidgey', 4, 5);

-- Insert data into Pokemon_Move table
INSERT INTO Pokemon_Move (pokemon_id, move_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 4),
(2, 3),
(3, 1),
(3, 5),
(3, 3),
(4, 1),
(4, 7),
(4, 3),
(5, 1),
(5, 6),
(5, 3);
