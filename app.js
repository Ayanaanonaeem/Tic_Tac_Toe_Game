var box = document.querySelectorAll(".box");
var turnO = true;
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
// console.log(box);
var count = 0;
box.forEach((box) => {
	box.addEventListener("click", () => {
		count++;
		if (turnO) {
			box.innerText = "O";
			turnO = false;
		} else {
			box.innerText = "X";
			turnO = true;
		}
		box.disabled = true;
		checkwinner();
        
	});
});

const checkwinner = () => {
	for (const condition of winConditions) {
		//    console.log(condition[0],condition[1],condition[2]);
		console.log(box[condition[0]], box[condition[1]], box[condition[2]]);
		var position1 = box[condition[0]].innerText;
		var position2 = box[condition[1]].innerText;
		var position3 = box[condition[2]].innerText;

		if (position1 != "" && position2 != "" && position3 != "") {
			if (position1 == position2 && position2 == position3) {
				alert(`winner is player ${position1}`);
				box.forEach((box) => {
					box.disabled = true;
				});           
			}
            
		} else {
		}
	}
    checkdraw()
};

function checkdraw() {
    if (count==9) {
        alert("the match is Draw")
    } 
}
