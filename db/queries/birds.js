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


export async function getBirds() {
    const result = await db.query('SELECT * FROM species;')
    return result.rows;
};


export async function getBird(id) {
    const sql = `
    SELECT * FROM species WHERE id = $1;
    `

    const {rows: specie} = await db.query(sql, [id])
    return specie[0];
};


export async function updateBird({id, name, population, diet, color, group_name}) {

    const sql = `
    UPDATE species
    SET name = $1, population = $2, diet = $3, color = $4, group_name = $5
    WHERE id = $6
    RETURNING *;
    `

    const {rows: specie} = await db.query(sql, [name, population, diet, color, group_name, id])
    return specie[0];
};


export async function deleteBird(id) {
    const sql = `DELETE FROM species WHERE id = $1 RETURNING *;`

    const {rows: specie} = await db.query(sql, [id])
    return specie[0]; 
};