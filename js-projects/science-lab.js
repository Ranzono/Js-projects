/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Gordon";
const age = 49;
const studyField = "Forensic Science"
const participant ={
    name,
    age,
    studyField,
};
//console.log(`Participant: ${name}, Age: ${age}, Study Field: ${studyField}`);
/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantCopy = {
    ...participant,
   displayInfo(){
    return  `Participant's name; ${participant.name}, participant's age; ${participant.age}, participant's studyField; ${participant.studyField}.`
   }
}
//console.log(participantCopy.displayInfo())
 //console.log(displayInfo())
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantAnotherCopy = {
	...participant,
	displayInfo: () =>
	{
		console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
	}
};

console.log(participantAnotherCopy.displayInfo());
/*
 * Observations:
arrow attempts to grab from the global scope, which returns undefined
 * TODO: Explain here.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo (participant, key, value){
    return {...participant,
        [key]: value
    };
}
const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Quantum Computing Study");
console.log(updatedParticipant);

//solution was used
