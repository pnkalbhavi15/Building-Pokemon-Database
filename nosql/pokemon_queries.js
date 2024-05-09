// Query to return all the pokemon who can learn 'Return'
var pokemonWithReturn = db.pokemon.aggregate([
  {
    $lookup: {
      from: "pokemon_move",
      localField: "_id",
      foreignField: "pokemon_id",
      as: "moves",
    },
  },
  { $unwind: "$moves" },
  {
    $lookup: {
      from: "move",
      localField: "moves.move_id",
      foreignField: "_id",
      as: "move_details",
    },
  },
  { $unwind: "$move_details" },
  { $match: { "move_details.name": "Return" } },
  { $project: { _id: 0, name: 1 } },
]);
print("Pokemon who can learn 'Return':");
printjson(pokemonWithReturn.toArray());

// Query to return all the moves in the game that are powerful against Grass
var movesPowerfulAgainstGrass = db.move.aggregate([
  {
    $lookup: {
      from: "type",
      localField: "type_id",
      foreignField: "_id",
      as: "type_details",
    },
  },
  { $unwind: "$type_details" },
  { $match: { "type_details.name": { $in: ["Fire", "Water", "Flying"] } } },
  { $project: { _id: 0, name: 1 } },
]);

print("Moves powerful against Grass:");
printjson(movesPowerfulAgainstGrass.toArray());
