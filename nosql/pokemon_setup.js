// Create the Type collection
db.createCollection("type");

// Insert data into the Type collection
var grassTypeId = db.type.insertOne({ name: "Grass" }).insertedId;
var fireTypeId = db.type.insertOne({ name: "Fire" }).insertedId;
var waterTypeId = db.type.insertOne({ name: "Water" }).insertedId;
var normalTypeId = db.type.insertOne({ name: "Normal" }).insertedId;
var flyingTypeId = db.type.insertOne({ name: "Flying" }).insertedId;

// Create the Move collection
db.createCollection("move");

// Insert data into the Move collection
db.move.insertMany([
  { name: "Tackle", power: 35, type_id: normalTypeId },
  { name: "Vine Whip", power: 40, type_id: grassTypeId },
  { name: "Return", power: 100, type_id: normalTypeId },
  { name: "Ember", power: 40, type_id: fireTypeId },
  { name: "Water Gun", power: 40, type_id: waterTypeId },
  { name: "Wing Attack", power: 65, type_id: flyingTypeId },
  { name: "Headbutt", power: 70, type_id: normalTypeId },
]);

// Create the Pokemon collection
db.createCollection("pokemon");

// Insert data into the Pokemon collection
db.pokemon.insertMany([
  { name: "Bulbasaur", primary_type_id: grassTypeId, secondary_type_id: null },
  { name: "Charmander", primary_type_id: fireTypeId, secondary_type_id: null },
  { name: "Squirtle", primary_type_id: waterTypeId, secondary_type_id: null },
  { name: "Eevee", primary_type_id: normalTypeId, secondary_type_id: null },
  {
    name: "Pidgey",
    primary_type_id: normalTypeId,
    secondary_type_id: flyingTypeId,
  },
]);

// Create the Pokemon_Move collection (to represent the many-to-many relationship between Pokemon and Move)
db.createCollection("pokemon_move");

// Insert data into the Pokemon_Move collection
db.pokemon_move.insertMany([
  {
    pokemon_id: db.pokemon.findOne({ name: "Bulbasaur" })._id,
    move_id: db.move.findOne({ name: "Tackle" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Bulbasaur" })._id,
    move_id: db.move.findOne({ name: "Vine Whip" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Bulbasaur" })._id,
    move_id: db.move.findOne({ name: "Return" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Charmander" })._id,
    move_id: db.move.findOne({ name: "Tackle" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Charmander" })._id,
    move_id: db.move.findOne({ name: "Ember" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Charmander" })._id,
    move_id: db.move.findOne({ name: "Return" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Squirtle" })._id,
    move_id: db.move.findOne({ name: "Tackle" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Squirtle" })._id,
    move_id: db.move.findOne({ name: "Water Gun" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Squirtle" })._id,
    move_id: db.move.findOne({ name: "Return" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Eevee" })._id,
    move_id: db.move.findOne({ name: "Tackle" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Eevee" })._id,
    move_id: db.move.findOne({ name: "Headbutt" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Eevee" })._id,
    move_id: db.move.findOne({ name: "Return" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Pidgey" })._id,
    move_id: db.move.findOne({ name: "Tackle" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Pidgey" })._id,
    move_id: db.move.findOne({ name: "Wing Attack" })._id,
  },
  {
    pokemon_id: db.pokemon.findOne({ name: "Pidgey" })._id,
    move_id: db.move.findOne({ name: "Return" })._id,
  },
]);

print("Database setup completed successfully.");
