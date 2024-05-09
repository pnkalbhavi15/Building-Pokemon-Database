# Building a Pokemon Database
This repository is a comprehensive solution for setting up a Pokemon database, covering both SQL and NoSQL implementations. It includes scripts for database creation, data population, and executing queries.

## Task Details
The goal is to design a simplified Pokemon database with the following features:

  - Pokemon can have one or two types, affecting their effectiveness in battles.
  - Moves are used in battles, each with a power and type.
  - Many-to-many relationship between Pokemon and Moves.
  
## Contents
  * sql/: SQL scripts for database setup, data population, and queries.
  * nosql/: NoSQL scripts (MongoDB) for the same.
  * README.md: Instructions and details.

## SQL Scripts
  1. create_tables.sql: Creates necessary tables.
  2. populate_data.sql: Inserts Pokemon, Type, and Move data.
  3. queries.sql: Contains SQL queries for the task.

## NoSQL Scripts
  1. pokemon_setup.js: MongoDB setup script.
  2. pokemon_queries.js: Contains MongoDB queries.
  
## Queries
  - Find all Pokemon who can learn 'Return'.
  - Find moves powerful against Grass type.

## Running the Scripts

### For SQL Scripts:
1. Open a terminal or command prompt.
2. Navigate to the `sql/` directory in the repository.
3. Connect to your MySQL database using the appropriate command, for example:
  mysql -u username -p
Replace `username` with your MySQL username.
4. Enter your MySQL password when prompted.
5. Once connected, run the SQL scripts in the following order:
- `create_tables.sql`: Creates necessary tables.
- `populate_data.sql`: Inserts Pokemon, Type, and Move data.
- `queries.sql`: Contains SQL queries for the task.

### For NoSQL (MongoDB) Scripts:
1. Open a terminal or command prompt.
2. Navigate to the `nosql/` directory in the repository.
3. Start your MongoDB server if it's not already running.
4. Run the MongoDB setup script using the following command:
  mongo pokemon_setup.js
5. Run the MongoDB queries script using the following command:
  mongo pokemon_queries.js
