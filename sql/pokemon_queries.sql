-- Query to return all the pokemon who can learn 'Return'
SELECT name
FROM Pokemon
WHERE id IN (
    SELECT pokemon_id
    FROM Pokemon_Move
    WHERE move_id = (
        SELECT id
        FROM Move
        WHERE name = 'Return'
    )
);

-- Query to return all the moves in the game that are powerful against Grass
SELECT name
FROM Move
WHERE type_id IN (
    SELECT id
    FROM Type
    WHERE name IN ('Fire', 'Water', 'Flying')
);
