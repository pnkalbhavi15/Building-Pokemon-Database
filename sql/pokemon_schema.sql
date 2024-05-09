-- Create Type table
CREATE TABLE Type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

-- Create Move table
CREATE TABLE Move (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    power INT,
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES Type(id)
);

-- Create Pokemon table
CREATE TABLE Pokemon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    primary_type_id INT,
    secondary_type_id INT,
    FOREIGN KEY (primary_type_id) REFERENCES Type(id),
    FOREIGN KEY (secondary_type_id) REFERENCES Type(id)
);

-- Create Pokemon_Move table (for many-to-many relationship)
CREATE TABLE Pokemon_Move (
    pokemon_id INT,
    move_id INT,
    FOREIGN KEY (pokemon_id) REFERENCES Pokemon(id),
    FOREIGN KEY (move_id) REFERENCES Move(id),
    PRIMARY KEY (pokemon_id, move_id)
);
