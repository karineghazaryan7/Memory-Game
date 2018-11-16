document.addEventListener("DOMContentLoaded", function (event) {
	let colors = ["#7986cb", "#1e88e5", "#00796b", "#388e3c", "#e65100", "#e53935", "#5d4037", "#afb42b"];

	let cells = Array(16);
	let cell1 = null;
	let cell2 = null;

	function getRandomIndex() {
		let index = Math.floor(Math.random() * 16);
		while (cells[index] !== undefined) {
			index = Math.floor(Math.random() * 16);
		}
		return index;
	}

	for (let i = 0; i < colors.length; i++) {
		cells[getRandomIndex()] = colors[i];
		cells[getRandomIndex()] = colors[i];
	}

	const container = document.querySelector(".container");

	for (let i = 0; i < cells.length; i++) {
		let cell = document.createElement("div");
		cell.className = "cell";
		cell.id = cells[i] + i;
		cell.addEventListener("click", event => toggleCell(event.target));
		container.appendChild(cell);
	}

	function toggleCell(cell) {
		if (cell.style.background !== cell.id.slice(0, 7)) {
			cell.style.background = cell.id.slice(0, 7);
		}
	}
});