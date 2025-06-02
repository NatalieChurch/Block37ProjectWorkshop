import db from "../client.js";

export async function createGroup({name}){
    const result = await db.query (
        'INSERT INTO groups (name) VALUES ($1) RETURNING *;', [name]
    );
    return result.rows[0];
};

export async function createSpecies({name, population, diet, color, group_name}){
    const result = await db.query (
        `INSERT INTO species (name, population, diet, color, group_name) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [name, population, diet, color, group_name]
    );
    return result.rows[0];
};

