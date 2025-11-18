// Task 1: Declare The Task Array and The Interval ID
const  oneTimeTasks = []
let monitoringTaskId;
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	oneTimeTasks.push({func, delay})
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
}
function startEng(){
	console.log("Starting Engine")
}
function oxyCheck(){
	console.log("O2 levels are steady")
}
function temp(){ 
	let T = Math.floor(Math.random() * 100);
	console.log("Temprature is at " + T + " and holding." )
}
function mon(){
	console.log("Monitoring...")
startEng()
oxyCheck()
temp()
	}
// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	for (let i = 0; i < oneTimeTasks.length; i++ ){
		const task = oneTimeTasks[i]
		setTimeout(task.func, task.delay)
	}
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
}

// Task 4: Start Monitoring Function
function startMonitoring (){
	monitoringTaskId = setInterval(mon, 3000)
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	clearInterval(monitoringTaskId)
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
let intervalId = setInterval(() => {
duration = duration - 1
console.log("Remaining time...", duration)
if (duration <= 0) {
clearInterval(intervalId)
console.log("Liftoff!")
}
}, 1000)
}
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	startMonitoring();
addOneTimeTask(stopMonitoring, 8000);
addOneTimeTask(() => startCountdown(10), 12000);
runOneTimeTasks()// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
}

scheduleMission(); // Starts the mission.

// addOneTimeTask(startEng, 8000)
// addOneTimeTask(oxyCheck, 5000)
// addOneTimeTask(temp, 2000)
// startMonitoring ()
// runOneTimeTasks()
// stopMonitoring()h