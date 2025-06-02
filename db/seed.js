import db from "./client.js";
import { createGroup, createSpecies } from "./queries/birds.js";

async function seed() {
    await db.connect();


const groups = [
   {name: 'Raptors'}, 
   {name: 'Songbirds'},
   {name: 'Waterfowl'},
   {name: 'Ratites'}
];

const species = [
    {name: 'Bald Eagle', population: 100000, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Red-Tailed Hawk', population: 500000, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Peregrine Falcon', population: 10000, diet: 'carnivore', color: 'white, black', group_name: 'Raptors'},
    {name: 'Golden Eagle', population: 100000, diet: 'carnivore', color: 'brown', group_name: 'Raptors'},
    {name: 'Harpy Eagle', population: 100, diet: 'carnivore', color: 'white, grey, black', group_name: 'Raptors'},
    {name: 'Sharp-Shinned Hawk', population: 500000, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'American Kestrel', population: 50000, diet: 'carnivore', color: 'brown', group_name: 'Raptors'},
    {name: 'Lesser Eagle', population: 50000, diet: 'carnivore', color: 'brown', group_name: 'Raptors'},
    {name: 'Phillipine Eagle', population: 100, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Grey-Headed Fish Eagle', population: 10000, diet: 'carnivore', color: 'grey, black', group_name: 'Raptors'},

    {name: 'House Finch', population: 1000000, diet: 'herbivore', color: 'brown', group_name: 'Songbirds'},
    {name: 'Purple Finch', population: 1000000, diet: 'herbivore', color: 'reddish purple', group_name: 'Songbirds'},
    {name: 'House Finch', population: 1000000, diet: 'herbivore', color: 'brown', group_name: 'Songbirds'},
    {name: 'House Finch', population: 1000000, diet: 'herbivore', color: 'brown', group_name: 'Songbirds'},
    {name: 'American Goldfinch', population: 1000000, diet: 'herbivore', color: 'yellow, black', group_name: 'Songbirds'},
    {name: 'Common Sparrow', population: 1000000, diet: 'herbivore', color: 'brown', group_name: 'Songbirds'},
    {name: 'Robin', population: 1000000, diet: 'herbivore', color: 'orange, grey, black', group_name: 'Songbirds'},
    {name: 'Chickadee', population: 1000000, diet: 'herbivore', color: 'white, grey, black', group_name: 'Songbirds'},
    {name: 'White-Breasted Nuthatch', population: 1000000, diet: 'herbivore', color: 'white, grey, black', group_name: 'Songbirds'},
    {name: 'Baltimore Oriole', population: 100000, diet: 'herbivore', color: 'orange, black', group_name: 'Songbirds'},
    {name: 'Indigo Bunting', population: 100000, diet: 'herbivore', color: 'indigo', group_name: 'Songbirds'},

    {name: 'Mallard', population: 1000000, diet: 'omnivore', color: 'brown, green', group_name: 'Waterfowl'},
    {name: 'Wood Duck', population: 100000, diet: 'omnivore', color: 'brown, grey, green, black, white', group_name: 'Waterfowl'},
    {name: 'Pelican', population: 1000000, diet: 'omnivore', color: 'white', group_name: 'Waterfowl'},
    {name: 'Trumpeter Swan', population: 1000000, diet: 'omnivore', color: 'white', group_name: 'Waterfowl'},
    {name: 'Canadian Goose', population: 10000000, diet: 'omnivore', color: 'white, grey', group_name: 'Waterfowl'},
    {name: 'Cormorant', population: 100000, diet: 'omnivore', color: 'black', group_name: 'Waterfowl'},
    {name: 'Great Blue Heron', population: 100000, diet: 'omnivore', color: 'bluish grey', group_name: 'Waterfowl'},
    {name: 'Lesser Egret', population: 100000, diet: 'omnivore', color: 'white', group_name: 'Waterfowl'},
    {name: 'Redhead', population: 100000, diet: 'omnivore', color: 'red, grey', group_name: 'Waterfowl'},
    {name: 'Goldeneye', population: 100000, diet: 'omnivore', color: 'white, black, indigo', group_name: 'Waterfowl'},

    {name: 'Common Ostrich', population: 100000, diet: 'omnivore', color: 'grey, white, brown', group_name: 'Ratites'},
    {name: 'Emu', population: 100000, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'Lesser Rhea', population: 10000, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'North Island Brown Kiwi', population: 10000, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'Southern Cassowary', population: 10000, diet: 'omnivore', color: 'brown, red, blue', group_name: 'Ratites'},
    {name: 'Red-Legged Tinamou', population: 10000, diet: 'omnivore', color: 'brown, orange', group_name: 'Ratites'},
    {name: 'Pale-Browed Tinamou', population: 10000, diet: 'omnivore', color: 'white, grey, black', group_name: 'Ratites'},
    {name: 'North Island Giant Moa', population: 0, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'Heavy-Footed Moa', population: 0, diet: 'omnivore', color: 'brown, tan', group_name: 'Ratites'}
]



async function seedGroup (){
    for (const group of groups) {
            await createGroup(group);
        }
    }
await seedGroup();


async function seedSpecies (){
        for (const specie of species) {
            console.log(specie)
            await createSpecies(specie);
        }
}
await seedSpecies();


    const groupsWithSpecies = {
        Raptors: ['Bald Eagle', 'Red-Tailed Hawk', 'Peregrine Falcon', 'Golden Eagle', 'Harpy Eagle', 'Sharp-Shinned Hawk', 'American Kestrel'],
        Songbirds: ['House Finch', 'Purple Finch', 'American Goldfinch', 'Common Sparrow', 'Robin', 'Chickadee', 'White-Breasted Nuthatch', 'Baltimore Oriole', 'Indigo Bunting'],
        Waterfowl: ['Mallard', 'Wood Duck', 'Pelican', 'Swan', 'Canadian Goose', 'Cormorant', 'Great Blue Heron', 'Lesser Egret'],
        Ratites: ['Ostrich', 'Emu', 'Rhea', 'Cassowary']
    }

    }

  console.log("🌱 Database seeded.");
await db.end();

seed();