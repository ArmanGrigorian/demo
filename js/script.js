import {
	getScreenshot,
	handleChangeDegrees,
	handleForm,
	handleMouseDown,
	handleRotation,
} from "./utils/index.js";

const items = document.createElement("div");

const elements = {
	box: document.getElementById("box"),
	receiver: document.getElementById("receiver"),
	sender: document.getElementById("sender"),
	items: document.getElementsByClassName("box__senderItem"),
	form: document.forms[0],
	degreesForm: document.forms[1],
	screenshotBtn: document.getElementById("screenshotBtn"),
	rotateButtons: document.getElementById("box__rotate"),
};

const coordinates = {
	x: 0,
	y: 0,
	startX: 0,
	startY: 0,
	degrees: 1,
};

items.classList.add("box__senderItem");
elements.receiver.append(items);



elements.degreesForm.addEventListener("submit", (e) => handleChangeDegrees(e, coordinates));
elements.rotateButtons.addEventListener("click", (e) =>
	handleRotation(e, elements.items, coordinates.degrees),
);
elements.screenshotBtn.addEventListener("click", () => getScreenshot(elements.receiver));
elements.form.addEventListener("submit", (e) => handleForm(e, elements.receiver));

Array.from(elements.items).forEach((item) => {
	console.log(item);
	item.addEventListener("mousedown", (e) => handleMouseDown(e, item, coordinates));
});
