/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalSightings(...spotted){
const catalog = {}
// Preps obj for use
 spotted.forEach(animal => {
	if (typeof animal !== "string" ){
	return
	}
	else if (catalog[animal] === undefined){
		catalog[animal] = 1;
	}
	else {
		catalog[animal] ++;
	}
}); 
return catalog	
}

//console.log(animalSightings('zebra','giraffe','elephant','zebra','antelope','lion','lion','giraffe',))
//console.log(animalSightings(2,'Lion',false,undefined,"zebra",[42,"Lions"]))
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

function habMerge(...args){
return [].concat(...args)
}
//console.log(habMerge(forestHabitats, savannahHabitats))
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
function updateanimal(toUpdate,...extras){
return { ...toUpdate, ...Object.assign({}, ...extras) }
}
//console.log(updateanimal(rhinoStatus, {habitat: 'jungle'},{toMedicate: 5},{population: 503}))
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
const genetics = ['male', 'northern region', 'light fur', 'larger teeth']
function newLionProfile(lionProfile, genetics) {
  return { ...lionProfile, genetics };
}
// console.log(newLionProfile(lionProfile, genetics));
// console.log(lionProfile)
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */ //Unsure what exactly is meant by these instructions, but the orignal copy is unaffected as the references are different.

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

function updateEco(obj){
	const newEco = {...obj};
    newEco.foodSupply = {herbivores: 'Abundant', carnivores: "Abundant"};
	return newEco
}
// function updateEco(obj){
// 	const newEco = {...obj};
//     obj.foodSupply = {carnivores: "Abundant"};
// 	return newEco
// }
// console.log(ecosystemHealth)
// console.log(updateEco(ecosystemHealth))
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */// I tested two version of the function, my first attmept was with obj.foodsupply (seen above), and my second was with newEco
 // the first one caused no changes due to the value change only being within the func, while in the second only newEco is modified
