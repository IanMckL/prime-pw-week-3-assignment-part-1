console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: '+ animalArray.toString());

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['Sukiyaki' , 'Yakiniku' , 'Tteokbokki', 'Frico'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
 console.log(favoriteFoods + '-- This is just a sampling of my favorite foods')

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array


// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is '+ animalArray[1]+' but I do not really like that animal as half as much as '+ animalArray[0])

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log(animalArray[animalArray.length - 1])

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

//NOTE: Oops I accidentally already did that. Can you please just assume that I know how to write 'console.log(animalArray[3])' on the last one?
// You know what? Watch this. I know it's redundant, but I'd like to play around. I'd like to know how many levels of redundency I'm on.

//This function will add an oxford comma format along with adding and to the last entry in favoriteFoods.
function andFunc(){ 
    let something = Array.prototype.slice.call(arguments);
    let another = Array.from(something);
    let lastEntry = (another[another.length - 1]);
    let addEntry = (' and'+' '+ lastEntry);
    another.pop(another[another.length - 1]);
    another.push(addEntry);
    let finalGrammar = another.join(', ');
    return finalGrammar.toString();
}
var faveFoods;

genFave() 
function genFave(){ //refresh faveFoods to include latest favoriteFoods
    localfaveFoods = Array.from(favoriteFoods); //local
    faveFoods = localfaveFoods; //global
}
andFunc.apply(null, faveFoods) 
console.log(andFunc.apply(null, faveFoods))

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray[animalArray.length - 1]);
console.log(andFunc.apply(null, animalArray))
// 4.a. TODO: Add a new food at the end of your array & log the array
// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favoriteFoods.pop();
console.log("I don't have room for", removedFood);
console.log(favoriteFoods.toString());


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(andFunc.apply(null, animalArray));
// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('Salmon');
genFave()
console.log(faveFoods + ' is what faveFoods is now')
console.log(andFunc.apply(null, faveFoods));

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now',  andFunc.apply(null, animalArray).toString());

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = favoriteFoods.shift();
genFave()
console.log(andFunc.apply(null, faveFoods) + ' are on our menu now. The menu has been updated to get rid of' +' '+removedFood)
genFave()
console.log('--- 4.Stretch Goals ---');
// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
let newFood = 'Mayonaise Corn Pizza ';
let replaceItem = favoriteFoods.splice(1,1, newFood);
genFave()
console.log(replaceItem + ' has been removed. Our updated seasonal item is ' + newFood +' and our updated menu is '+ andFunc.apply(null, faveFoods));
// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
let alphArray = favoriteFoods;
let alphabetFoodArray = alphArray.sort();
console.log('reverse alphabetical order:', alphabetFoodArray.reverse().toString())

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
const andString = favoriteFoods.join(' and ')
console.log(andString)

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
let concatArray = faveFoods.concat(animalArray);
console.log(concatArray);