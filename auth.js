import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express from "express";
import db from './db/client.js';

const app = express.Router();
export default app;


// VERIFICATION MIDDLEWARE
export const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next();
}


// REGISTER
app.post('/birds/register', async(req, res, next) => {
    const {first_name, last_name, email, password} = req.body;

    const hashedPassword = bcrypt.hash(password, 5);

    const addUserIntoDb = await db.query(
        `INSERT INTO user (first_name, last_name, email, password)
        VALUES ($1, $2, $3, $4) 
        RETURNING *;`, 
        [first_name, last_name, email, hashedPassword])

    
    if (!addUserIntoDb) {
    return res.status(402).send('Could not create the new user');
    }
    
    const token = jwt.sign({id: addUserIntoDb.id, name: addUserIntoDb.name}, process.env.JWT_SECRET);
    res.status(201).json(token);
});


// LOGIN
app.post('/birds/login', async (req, res, next) => {
    const {email, password} = req.body;
    try{
        const userInfo = await db.query(`SELECT * FROM users WHERE email=$1`, [email]);

        console.log(userInfo.rows[0].password);

        const isMatch = bcrypt.compare(password, userInfo.rows[0].password);

        if(!isMatch){
            return res.send(401).send('not authorized');
        }

        const token = jwt.sign({id: userInfo.id}, process.env.JWT_SECRET);
        res.status(200).send(token);

    } catch(err) {
        console.log(err);
    }
})