// github.com/uqutub/learn-typescript   

type Species = "cat" | "dog" | "bird";

interface Pet{
    species: Species;
    name: string;
}

interface Cat extends Pet{
    species: "cat"
}

interface Dog extends Pet{
    species: "dog";
}

interface Bird extends Pet{
    species: "bird";
}

function petIsBird(pet: Bird){
    console.log('***',pet.species)
} 

petIsBird({species: 'bird', name: 'rafay'})