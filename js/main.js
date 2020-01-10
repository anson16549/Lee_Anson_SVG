//This is a self-invoking
//also called sn IIFE
//also called a module

(()	=> {
	console.log("some message - from JavaScript");

	let theButton = document.querySelector("#myButton"),
		theHeading = document.querySelector('h1'),
		svgImage = document.querySelector("#svgGraphic");

	// this function changes the heading text
	function changeText() {
	theHeading.textContent = "Hello there";
}

function logSVG() {
	console.log(this.id);
}

theButton.addEventListener("click", changeText);
svgImage.addEventListener("mouseover", logSVG);

})();