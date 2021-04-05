const person = { name: "Newien", age: 43 };

console.log(person.age);

console.log(person.age.name)


person.evaluations = [7, 10, 9];

console.log(person.evaluations);


// Maak een nieuwe variabele met een lege array [].

// Vul deze array met minstens 3 verschillende kleuren, in de vorm van strings Bijvoorbeeld: "groen", "blauw", "rood".

// Log je nieuwe array naar de console.

// Log de lengte van je array naar de console.

// Gebruik array.length

// Log het eerste element van je array naar de console, dus in ons voorbeeld: "groen".

// Log het laatste element van je array naar de console, dus in ons voorbeeld: "rood". Ga ervan uit dat je niet weet hoeveel elementen er in de array gaan zitten. array[3] gaat dus niet de juist oplossing zijn als je straks 5 elementen in de array hebt.

// Voeg een 4de element toe aan je array met de push method. array.push() Resultaat: ['groen, 'blauw, 'rood', 'geel']

// Voeg een cijfer toe aan je array met de push methode Resultaat: ['groen, 'blauw, 'rood', 'geel', 5]

// Voeg een object toe aan je array met de push methode. Het object ziet er zo uit: {greeting: "hi ik ben een object"} Resultaat: ['groen, 'blauw, 'rood', 'geel', 5, {greeting: "Hi ik ben een object"} ]

// Log alleen de begroeting van het object (het laatste element), naar de console.




const colors = ["groen", "blauw", "rood"];

console.log(colors);

console.log(colors.length);

let first = colors[0];
console.log(first);

let a = colors[2];
console.log(a);

let newLength = colors.push('geel');
console.log(colors);

let newNumber = colors.push(5);
console.log(colors);

let newObject = colors.push({ greeting: "hi ik ben een object" });
console.log(colors);

console.log(colors[5]);



const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]


console.log(catBreeds[2]['name']);
console.log(catBreeds[0]['energy_level']);
console.log(catBreeds[1]['temperament'].length - 4);
console.log(catBreeds[2]['temperament'].length - 1);



















