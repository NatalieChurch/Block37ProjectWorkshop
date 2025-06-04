import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


// VERIFICATION MIDDLEWARE
export const verifyToken = () => {

    const authHeader = req.headers.Authorization;
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next();
}


// REGISTER
app.post('/birds/register', async(req, res, next) => {
    const {name, email, password} = req.body;

    const hashedPassword = bcrypt.hash(password, 5);

    const addUserIntoDb = await db.query(
        `INSERT INTO user (name, email, password)
        VALUES ($1, $2, $3) 
        RETURNING *;`, 
        [name, email, hashedPassword])

    
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
        const userInfo = await db.query(`SELECT * FROM user WHERE email=$1`, [email]);
        const isMatch = bcrypt.compare(password, userInfo.password);

        if(!isMatch){
            return res.send(401).send('not authorized');
        }

        const token = jwt.sign({id: userInfo.id}, process.env.JWT_SECRET);
        res.status(200).send(token);

    } catch(err) {
        console.log(err);
    }
})