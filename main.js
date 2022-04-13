const grid = document.getElementById("qr-grid"); //create element variables
var btn = document.getElementById("reset-btn");
let test = "s"; //li element needs text content to be renedered

btn.addEventListener("click", function () {
	//when the reset button is clicked, clear the storage and reload the page to get rid of whatever is currently displayed
	localStorage.clear();
	location.reload();
});

window.onload = function () {
	//when the window loads

	let tempArr = JSON.parse(localStorage.getItem("data")); //get the saved data

	for (vals in tempArr) {
		//loop through the data
		if (tempArr[vals] == 1) {
			block("black"); //if data is a 1, place a black block
		} else if (tempArr[vals] == 0) {
			block("white"); //if data is a 0, place a white block
		}
	}
};

function setColor(e) {
	if (e.keyCode == 13) {
		//on enter keypress
		block("black"); //draw a black block
		save(1); //save the value to the localstorage
		//draw li and turn it black
	} else if (e.keyCode == 32) {
		//on spacebar keypress
		block("white"); //draw a white block
		save(0); //save the value to the localstorage
		e.preventDefault(); //stops the spacebar from scrolling to the bottom of the screen
		//draw li and turn it white
	} else if (e.keyCode == 8) {
		remove();
	}
}

block = (color) => {
	let newBlock = document.createElement("li"); //make a new li element
	newBlock.textContent = test; //give it the text content so that it can be drawn
	newBlock.classList.add(color); //assign it the class that will determine what the color of the block is
	grid.appendChild(newBlock); //add the element to the ul element as a child
};

save = (num) => {
	if (localStorage.getItem("data") == null) {
		//if array doesnt exist then make an array and put "num" in it
		localStorage.setItem("data", "[]");
	}

	let old_data = JSON.parse(localStorage.getItem("data")); //save the data to the variable "old_data"
	old_data.push(num); //push the new data onto the end of "old_data"

	localStorage.setItem("data", JSON.stringify(old_data)); //saves the data back over the old data
};

remove = () => {
	let old_data = JSON.parse(localStorage.getItem("data")); //gather the data
	let listItems = grid.getElementsByTagName("li"); //set an array to be all of the "li" elements in the grid

	let last = listItems[listItems.length - 1]; //get the last "li" element

	grid.removeChild(last); //get rid of the last "li" element
	old_data.pop(); //pops the last piece of data from the storage array

	localStorage.setItem("data", JSON.stringify(old_data)); //resave the data once it has been altered
};

document.onkeydown = setColor; //when a key is pressed, run the "setColor" function

//data for clubcard is [0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0]