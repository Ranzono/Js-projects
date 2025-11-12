const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];
// name of water find, griffin findIndex, first enchanted forest

function findType(arr,typeToFind){
	let foundType = arr.find(arr => arr.type === typeToFind)
	return (foundType.name)
}

//console.log(findType(mythicalCreatures,'Water'))

function creatureIndex(arr,iToFind){
	let index = arr.findIndex(arr => arr.name === iToFind)
	return (index)
}

//console.log(creatureIndex(mythicalCreatures,"Griffin"))

function findLSighting(arr,LS){
	let locale = arr.find(arr => arr.lastSeen === LS )
	return (locale)
}

console.log(findLSighting(mythicalCreatures,"Enchanted Forest"))