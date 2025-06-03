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
    {name: 'Bald Eagle', population: 316000, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Golden Eagle', population: 170000, diet: 'carnivore', color: 'brown', group_name: 'Raptors'},
    {name: 'Harpy Eagle', population: 100000, diet: 'carnivore', color: 'white, grey, black', group_name: 'Raptors'},
    {name: 'Little Eagle', population: 50000, diet: 'carnivore', color: 'brown, white', group_name: 'Raptors'},
    {name: 'Philippine Eagle', population: 100, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Grey-Headed Fish Eagle', population: 10000, diet: 'carnivore', color: 'grey, black', group_name: 'Raptors'},
    {name: 'Haasts Eagle', population: 0, diet: 'carnivore', color: 'brown, grey, white', group_name: 'Raptors'},
    {name: 'Red-Tailed Hawk', population: 3100000, diet: 'carnivore', color: 'white, brown, reddish-orange', group_name: 'Raptors'},
    {name: 'Sharp-Shinned Hawk', population: 1000000, diet: 'carnivore', color: 'white, brown, grey', group_name: 'Raptors'},
    {name: 'Swainsons Hawk', population: 900000, diet: 'carnivore', color: 'white, brown, grey', group_name: 'Raptors'},
    {name: 'Red-Shouldered Hawk', population: 100000, diet: 'carnivore', color: 'white, brown, black', group_name: 'Raptors'},
    {name: 'Broad-Winged Hawk', population: 1900000, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Coopers Hawk', population: 1000000, diet: 'carnivore', color: 'white, brown, grey', group_name: 'Raptors'},
    {name: 'Rough-Legged Hawk', population: 590000, diet: 'carnivore', color: 'white, brown, black', group_name: 'Raptors'},
    {name: 'Peregrine Falcon', population: 140000, diet: 'carnivore', color: 'white, black, grey', group_name: 'Raptors'},
    {name: 'Gyrfalcon', population: 83000, diet: 'carnivore', color: 'white, black, grey', group_name: 'Raptors'},
    {name: 'Barred Forest Falcon', population: 500000, diet: 'carnivore', color: 'white, black, brown', group_name: 'Raptors'},
    {name: 'Cryptic Forest Falcon', population: 1000000, diet: 'carnivore', color: 'white, black', group_name: 'Raptors'},
    {name: 'Orange-Breasted Falcon', population: 80, diet: 'carnivore', color: 'white, black, orange', group_name: 'Raptors'},
    {name: 'American Kestrel', population: 4000000, diet: 'carnivore', color: 'brown, grey, black', group_name: 'Raptors'},
    {name: 'Fox Kestrel', population: 100000, diet: 'carnivore', color: 'orangish brown, black', group_name: 'Raptors'},
    {name: 'Spotted Kestrel', population: 10000, diet: 'carnivore', color: 'brown, grey, black', group_name: 'Raptors'},
    {name: 'Eurasian Hobby', population: 900000, diet: 'carnivore', color: 'brown, white, black', group_name: 'Raptors'},
    {name: 'African Hobby', population: 10000, diet: 'carnivore', color: 'black, orangish brown', group_name: 'Raptors'},
    {name: 'Merlin', population: 1500000, diet: 'carnivore', color: 'white, grey, black', group_name: 'Raptors'},
    {name: 'Osprey', population: 500000, diet: 'carnivore', color: 'brown, white', group_name: 'Raptors'},
    {name: 'Northern Harrier', population: 820000, diet: 'carnivore', color: 'brown, grey, white', group_name: 'Raptors'},
    {name: 'Mississippi Kite', population: 700000, diet: 'carnivore', color: 'white, grey', group_name: 'Raptors'},
    {name: 'Swallow-Tailed Kite', population: 150000, diet: 'carnivore', color: 'white, black', group_name: 'Raptors'},
    {name: 'Snail Kite', population: 2000000, diet: 'carnivore', color: 'black, grey', group_name: 'Raptors'},
    {name: 'Barn Owl', population: 3600000, diet: 'carnivore', color: 'white, brown', group_name: 'Raptors'},
    {name: 'Snowy Owl', population: 29000, diet: 'carnivore', color: 'white', group_name: 'Raptors'},
    {name: 'Great Horned Owl', population: 5700000, diet: 'carnivore', color: 'brown, grey', group_name: 'Raptors'},
    {name: 'Eurasian Eagle Owl', population: 100000, diet: 'carnivore', color: 'brown, black', group_name: 'Raptors'},
    {name: 'Barred Owl', population: 3500000, diet: 'carnivore', color: 'brown, grey, white', group_name: 'Raptors'},
    {name: 'Burrowing Owl', population: 18000000, diet: 'carnivore', color: 'brown, white', group_name: 'Raptors'},
    {name: 'Tawny Owl', population: 970000, diet: 'carnivore', color: 'brown, white', group_name: 'Raptors'},
    {name: 'Great Grey Owl', population: 120000, diet: 'carnivore', color: 'grey, white', group_name: 'Raptors'},
    {name: 'Boreal Owl', population: 1540000, diet: 'carnivore', color: 'brown, grey, white', group_name: 'Raptors'},
    {name: 'Eastern Screech Owl', population: 560000, diet: 'carnivore', color: 'reddish brown, white', group_name: 'Raptors'},
    {name: 'Elf Owl', population: 46000, diet: 'carnivore', color: 'brown, white', group_name: 'Raptors'},


    {name: 'House Finch', population: 267000000, diet: 'herbivore, incidental omnivore', color: 'brown', group_name: 'Songbirds'},
    {name: 'Purple Finch', population: 6500000, diet: 'omnivore', color: 'reddish purple', group_name: 'Songbirds'},
    {name: 'American Goldfinch', population: 44000000, diet: 'omnivore', color: 'yellow, black', group_name: 'Songbirds'},
    {name: 'Common Sparrow', population: 740000000, diet: 'omnivore', color: 'brown, white, black', group_name: 'Songbirds'},
    {name: 'American Robin', population: 370000000, diet: 'omnivore', color: 'orange, grey, black', group_name: 'Songbirds'},
    {name: 'Black-Capped Chickadee', population: 41000000, diet: 'omnivore', color: 'white, grey, black', group_name: 'Songbirds'},
    {name: 'White-Breasted Nuthatch', population: 10000000, diet: 'omnivore', color: 'white, grey, black', group_name: 'Songbirds'},
    {name: 'Baltimore Oriole', population: 12000000, diet: 'omnivore', color: 'orange, black, white', group_name: 'Songbirds'},
    {name: 'Indigo Bunting', population: 78000000, diet: 'omnivore', color: 'indigo', group_name: 'Songbirds'},
    {name: 'Northern Cardinal', population: 130000000, diet: 'omnivore', color: 'red', group_name: 'Songbirds'},
    {name: 'Red-Winged Blackbird', population: 150000000, diet: 'omnivore', color: 'red, black', group_name: 'Songbirds'},
    {name: 'Rusty Blackbird', population: 6800000, diet: 'omnivore', color: 'brown, black', group_name: 'Songbirds'},
    {name: 'Laysan Honeycreeper', population: 0, diet: 'nectarivore, insectivore', color: 'unknown', group_name: 'Songbirds'},
    {name: 'Rose-Breasted Grosbeak', population: 4700000, diet: 'omnivore', color: 'red, black, white', group_name: 'Songbirds'},
    {name: 'Golden-Winged Grosbeak', population: 6500, diet: 'omnivore', color: 'yellow, brown, black', group_name: 'Songbirds'},
    {name: 'Barn Swallow', population: 190000000, diet: 'omnivore', color: 'brown, black, white, blue', group_name: 'Songbirds'},
    {name: 'Cave Swallow', population: 6800000, diet: 'omnivore', color: 'orange, black, brown', group_name: 'Songbirds'},
    {name: 'Tree Swallow', population: 20000000, diet: 'omnivore', color: 'blue, black, white', group_name: 'Songbirds'},
    {name: 'Hermit Thrush', population: 72000000, diet: 'omnivore', color: 'red, black', group_name: 'Songbirds'},
    {name: 'Pale Thrush', population: 10000, diet: 'omnivore', color: 'white, brown, grey', group_name: 'Songbirds'},
    {name: 'Gray Catbird', population: 29000000, diet: 'omnivore', color: 'grey', group_name: 'Songbirds'},


    {name: 'Mallard', population: 47000000, diet: 'omnivore', color: 'brown, green, white', group_name: 'Waterfowl'},
    {name: 'Blue-Winged Teal', population: 7800000, diet: 'omnivore', color: 'black, white, brown', group_name: 'Waterfowl'},
    {name: 'Green-Winged Teal', population: 6700000, diet: 'omnivore', color: 'cinnamon brown, green', group_name: 'Waterfowl'},
    {name: 'Cinnamon Teal', population: 380000, diet: 'omnivore', color: 'cinnamon brown, green, white', group_name: 'Waterfowl'},
    {name: 'Northern Shoveler', population: 4400000, diet: 'omnivore', color: 'brown, green, white', group_name: 'Waterfowl'},
    {name: 'Gadwall', population: 4400000, diet: 'omnivore', color: 'white, grey', group_name: 'Waterfowl'},
    {name: 'American Wigeon', population: 2700000, diet: 'omnivore', color: 'brown, green, white', group_name: 'Waterfowl'},
    {name: 'Northern Pintail', population: 4800000, diet: 'omnivore', color: 'white, black', group_name: 'Waterfowl'},
    {name: 'Fulvous Whistling Duck', population: 1300000, diet: 'omnivore', color: 'cinnamon brown, black', group_name: 'Waterfowl'},
    {name: 'Greater Scaup', population: 780000, diet: 'omnivore', color: 'black, white', group_name: 'Waterfowl'},
    {name: 'Bufflehead', population: 1300000, diet: 'omnivore', color: 'iridescent, white, black', group_name: 'Waterfowl'},
    {name: 'Hooded Merganser', population: 270000, diet: 'omnivore', color: 'brown, black, white', group_name: 'Waterfowl'},
    {name: 'Red-Breasted Merganser', population: 370000, diet: 'omnivore', color: 'brown, black, white, red', group_name: 'Waterfowl'},
    {name: 'Harlequin Duck', population: 250000, diet: 'omnivore', color: 'white, grey, black, orange', group_name: 'Waterfowl'},
    {name: 'Common Eider', population: 2300000, diet: 'omnivore', color: 'white, black, grey', group_name: 'Waterfowl'},
    {name: 'White-Winged Scoter', population: 400000, diet: 'omnivore', color: 'black, white', group_name: 'Waterfowl'},
    {name: 'Wood Duck', population: 3500000, diet: 'omnivore', color: 'brown, grey, green, black, white', group_name: 'Waterfowl'},
    {name: 'Redhead', population: 1400000, diet: 'omnivore', color: 'red, grey', group_name: 'Waterfowl'},
    {name: 'Common Goldeneye', population: 2500000, diet: 'omnivore', color: 'white, black, indigo', group_name: 'Waterfowl'},
    {name: 'American White Pelican', population: 450000, diet: 'carnivore', color: 'white, grey', group_name: 'Waterfowl'},
    {name: 'Trumpeter Swan', population: 63000, diet: 'omnivore', color: 'white', group_name: 'Waterfowl'},
    {name: 'Canadian Goose', population: 5000000, diet: 'omnivore', color: 'white, brown', group_name: 'Waterfowl'},
    {name: 'Double-Crested Cormorant', population: 1000000, diet: 'carnivore', color: 'black', group_name: 'Waterfowl'},
    {name: 'Great Blue Heron', population: 700000, diet: 'carnivore', color: 'bluish grey, white, black', group_name: 'Waterfowl'},
    {name: 'Lesser Egret', population: 660000, diet: 'carnivore', color: 'white', group_name: 'Waterfowl'},


    {name: 'Common Ostrich', population: 200000, diet: 'omnivore', color: 'grey, white, brown, black', group_name: 'Ratites'},
    {name: 'Somali Ostrich', population: 1000, diet: 'omnivore', color: 'grey, white, brown, black', group_name:'Ratites'},
    {name: 'Emu', population: 630000, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'Pygmy Cassowary', population: 0, diet: 'omnivore', color: 'unknown', group_name: 'Ratites'},  
    {name: 'Southern Cassowary', population: 20000, diet: 'omnivore', color: 'black, red, blue', group_name: 'Ratites'},  
    {name: 'Northern Cassowary', population: 10000, diet: 'omnivore', color: 'black, red, blue', group_name: 'Ratites'},  
    {name: 'Dwarf Cassowary', population: 3500, diet: 'omnivore', color: 'black, red, blue', group_name: 'Ratites'},  
    {name: 'Great Spotted Kiwi', population: 14000, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'Little Spotted Kiwi', population: 1800, diet: 'omnivore', color: 'grey', group_name: 'Ratites'},
    {name: 'Okarito Kiwi', population: 600, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'Southern Brown Kiwi', population: 21300, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'North Island Brown Kiwi', population: 35000, diet: 'omnivore', color: 'brown', group_name: 'Ratites'},
    {name: 'North Island Giant Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'South Island Giant Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Upland Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Bush Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Broad-Billed Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Eastern Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Heavy-Footed Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Mantells Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Crested Moa', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},
    {name: 'Giant Elephant Bird', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},  
    {name: 'Hildebrandts Elephant Bird', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},  
    {name: 'Lesser Elephant Bird', population: 0, diet: 'herbivore', color: 'unknown', group_name: 'Ratites'},  
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
        Raptors: ['Bald Eagle', 'Golden Eagle', 'Harpy Eagle', 'Little Eagle', 'Philippine Eagle', 'Grey-Headed Fish Eagle', 'Haasts Eagle', 'Red-Tailed Hawk', 'Sharp-Shinned Hawk', 'Swainsons Hawk', 'Red-Shouldered Hawk', 'Broad-Winged Hawk', 'Coopers Hawk', 'Rough-Legged Hawk', 'Peregrine Falcon', 'Gyrfalcon', 'Barred Forest Falcon', 'Cryptic Forest Falcon', 'Orange-Breasted Falcon', 'American Kestrel', 'Fox Kestrel', 'Spotted Kestrel', 'Eurasian Hobby', 'African Hobby', 'Merlin', 'Osprey', 'Northern Harrier', 'Mississippi Kite', 'Swallow-Tailed Kite', 'Snail Kite', 'Barn Owl', 'Snowy Owl', 'Great Horned Owl', 'Eurasian Eagle Owl', 'Barred Owl', 'Burrowing Owl', 'Tawny Owl', 'Great Grey Owl', 'Boreal Owl', 'Eastern Screech Owl', 'Elf Owl'],

        Songbirds: ['House Finch', 'Purple Finch', 'American Goldfinch', 'Common Sparrow', 'American Robin', 'Black-Capped Chickadee', 'White-Breasted Nuthatch', 'Baltimore Oriole', 'Indigo Bunting', 'Northern Cardinal', 'Red-Winged Blackbird', 'Rusty Blackbird', 'Laysan Honeycreeper', 'Rose-Breasted Grosbeak', 'Golden-Winged Grosbeak', 'Barn Swallow', 'Cave Swallow', 'Tree Swallow', 'Hermit Thrush', 'Pale Thrush', 'Gray Catbird'],

        Waterfowl: ['Mallard', 'Blue-Winged Teal', 'Green-Winged Teal', 'Cinnamon Teal', 'Northern Shoveler', 'Gadwall', 'American Wigeon', 'Northern Pintail', 'Fulvous Whistling Duck', 'Greater Scaup', 'Bufflehead', 'Hooded Merganser', 'Red-Breasted Merganser', 'Harlequin Duck', 'Common Eider', 'White-Winged Scoter', 'Wood Duck', 'Redhead', 'Common Goldeneye', 'American White Pelican', 'Trumpeter Swan', 'Canadian Goose', 'Double-Crested Cormorant', 'Great Blue Heron', 'Lesser Egret'],

        Ratites: ['Common Ostrich', 'Somali Ostrich', 'Emu', 'Greater Rhea', 'Lesser Rhea', 'Pygmy Cassowary', 'Southern Cassowary', 'Northern Cassowary', 'Dwarf Cassowary', 'Great Spotted Kiwi', 'Little Spotted Kiwi', 'Okarito Kiwi', 'Southern Brown Kiwi', 'North Island Brown Kiwi', 'North Island Giant Moa', 'South Island Giant Moa', 'Upland Moa', 'Bush Moa', 'Broad-Billed Moa', 'Eastern Moa', 'Heavy-Footed Moa', 'Mantells Moa', 'Crested Moa', 'Giant Elephant Bird', 'Hildebrandts Elephant Bird', 'Lesser Elephant Bird']
    }

    }

  console.log("🌱 Database seeded.");
await db.end();

seed();