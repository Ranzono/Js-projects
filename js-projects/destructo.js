/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};
({ x,y } = coordinates);
const coords = {x,y};
console.log(coords)
// TODO: Destructo has found a map with coordinates marked on it. Use object destructuring to extract the `x` and `y` coordinates from the given `coordinates` object. Print the coordinates.

/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};

({first, second, ...remaining} = locations);
const keyLocations = {first, second};
console.log(keyLocations)
// TODO: The map reveals several locations, but only the first two are significant for the quest. Use object destructuring with the rest parameter to isolate the `first` and `second` locations from the `locations` object, capturing the rest in a variable called `remaining`. Print the key locations.

/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};
({upper, middle = "Mount of Ages", lower } = doorCode)
const fullCode = {
	upper,
	middle,
	lower,
}
console.log(fullCode)
// TODO: To open the Mysterious Door, a sequence is required, which might be incomplete. Use object destructuring to assign default values to ensure the door opens even if part of the code is missing. Make sure the `middle` defaults to one of the values from the `remaining` variable above if not provided. Print the door code sequence.

/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};
({ ancientWord: translation, } = riddle)
const answer = {translation}
console.log(answer)
// TODO: The guardian of an ancient library speaks in riddles. Use object destructuring to rename `ancientWord` to `translation` in the `riddle` object. Print the translation of the riddle.

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
([first,second,...others] = elements)
const essentialElements = [first,second]
console.log(essentialElements)
// TODO: Inside the library, Destructo discovers an array that represents the elements needed to decipher the next clue. Use array destructuring to extract the first two elements. Print the essential elements.

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
([first, , , , ,sixth] = stones)
const toSkip = [first, sixth]
console.log(toSkip)
// TODO: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
([visible, ...hidden] = shadows)
const reveal = [visible, hidden]
console.log(reveal)
// TODO: The Cave of Shadows hides more than it reveals. Use array destructuring with the rest parameter to separate the visible shadow (which is the first) from the hidden ones. Print the visible shadow and the hidden shadows.

/* Task 8: The Wise Function */
// TODO: Destructo needs to decode ancient directions to continue his quest. Help him by writing a function `revealPath` that decodes and prints the direction and distance to travel. The function takes an object with `direction` and `distance` as parameters.
const clues1 = {
	direction : "NorthWest",
	distance  : '0.5 Miles',
}
const clues2 = {
	direction : "SouthEast",
	distance  : '3 Km',
}
function revealPath(obj){
	({direction, distance} = obj)
	const path = {direction, distance}
	return path
}
console.log(revealPath(clues1))
console.log(revealPath(clues2))
/* Task 9: The Scroll of Defaults */
// TODO: Destructo finds an ancient scroll with a potion recipe, but some ingredients are missing. Write a function `mixPotion` that uses defaults "Water" and "Fireflower" for `ingredient1` and `ingredient2` if they are not specified and print those mixings. The function takes an object with these optional properties.
const ingredients = {
	ingredient1 : 'Lemongrass',
	ingredient2 : "Tanooki Leaf"
}
function mixPotion(obj){
	({ingredient1 = 'Water', ingredient2 = "Fireflower"} = obj )
	const potion = {ingredient1,ingredient2}
	return potion

}
console.log(mixPotion(obj = {}))
console.log(mixPotion(ingredients))
/* Task 10: The Array Spell */
// TODO: At the gates of an ancient library, Destructo must cast a spell with the first two ingredients from a list given to him by a wise owl. Create a function `castSpell` that uses array destructuring to access these ingredients from an array and print the spell casting.
const instructions = [ 'eat an apple', 'summon something', 'useless chatter', 87]
function castSpell(arr){
	([first,second] = arr)
	const steps = [first,second]
	return steps 
}
console.log(castSpell(instructions))
/* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
function retrive(obj){
	const {outer: {inner}} = obj;
	const key = {inner}
	return key
}
console.log(retrive(nestedSecret))
// TODO: Behind the final door lies a nested artifact containing the ultimate clue. Use nested destructuring to extract `The Final Key`. Print the unveiled secret.

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneB, stoneA] = [stoneA, stoneB]
console.log(stoneA, stoneB)
// TODO: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.
