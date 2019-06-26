window.onload = function() {
	initColorPicker();
};

function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
	rgb.red.addEventListener('change',() => {
		console.log("Red Value: ", rgb.red.value);
	});
	rgb.green.addEventListener('change',() => {
		console.log("Green Value: ", rgb.green.value);
	});rgb.blue.addEventListener('change',() => {
	console.log("Blue Value: ", rgb.blue.value);
});
}