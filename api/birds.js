import express from "express";
import { createSpecies, deleteBird, getBird, getBirds, updateBird } from "../db/queries/birds.js";
import { verifyToken } from "../auth.js";

const router = express.Router();
export default router;


router.route("/birds").get(async (req, res) => {
    const birds = await getBirds();
    res.send(birds);
})



router.route("/birds/:id").get(async (req, res) => {
    const id = Number(req.params.id)

    if(!Number.isInteger(id) || id < 0){
        return res.status(400).send({error: "Please send a positive number"})
    }

    const bird = await getBird(id)
    
    if(!bird){
        return res.status(404).send({error: "Bird does not exist"})
    }

  res.send(bird)
})



router.route("/birds").post(verifyToken, async (req, res) => {
    if(!req.body){
        return res.status(400).send({error: "Missing request body"})
    }
  
    const {name, population, diet, color, group_name} = req.body

    if(!name || !population || !diet || !color || !group_name){
        return res.status(400).send({error: "Missing required params"})
    }

    const specie = await createSpecies({name, population, diet, color, group_name})
  
    res.status(201).send(specie)
})



router.route("/birds/:id").delete(verifyToken, async (req, res) => {
    const id = Number(req.params.id)

    if(!Number.isInteger(id) || id < 0){
        return res.status(400).send({error: "ID is not positive"})
    }

    const bird = await getBird(id)

    if(!bird){
        return res.status(404).send({error: "Species does not exist"})
    }

    const deletedBird = await deleteBird(id)

    if(!deletedBird){
        return res.status(404).send({error: "Species not found"})
    }

    return res.sendStatus(204)
})



router.route("/birds/:id").put(verifyToken, async (req, res) => {
    const id = Number(req.params.id)
    
    if(!req.body) {
        return res.status(400).send({error: "Please enter required info"})
    }

    const {name, population, diet, color, group_name} = req.body
    if(!name || !population || !diet || !color || !group_name){
        return res.status(400).send({error: "Please enter all required parameters"})
    }

    if(!Number.isInteger(id) || id < 0){
        return res.status(400).send({error: "Please ensure ID is positive"})
    }

    const updatedBird = await updateBird({id, name, population, diet, color, group_name})
    console.log(updatedBird)

    if(!updatedBird){
        return res.status(404).send({error: "Species not found"});
    }

    return res.status(200).send(updatedBird);
});