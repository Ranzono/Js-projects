const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];
 
function mapMemebers(arr, func){
 let updatedList = [];
 //declaring  array
 for (let i of arr){
	const fullName = func(i.firstName, i.lastName)
	//uses below function to combine names
	let membership;
	if (i.points <= 100){
		membership ='Premium'
	}
	else {
		membership = 'Standard';
	}
	//assigns value to membership
	updatedList.push({fullName, membership,})
	//throws it into the array
 }
 return updatedList
}

function makeName (firstName, lastName){
	let fullName = firstName + ' ' + lastName
	return fullName
}
//this function is used to combine the names of the users
mapMemebers(users, makeName)