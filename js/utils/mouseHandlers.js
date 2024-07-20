export default function handleMouseDown(e, item, coordinates) {
	item.classList.toggle("box__senderItem--active");
	coordinates.startX = e.clientX;
	coordinates.startY = e.clientY;

	function handleMouseMove(e) {
		e.preventDefault();
		coordinates.x = coordinates.startX - e.clientX;
		coordinates.y = coordinates.startY - e.clientY;

		coordinates.startX = e.clientX;
		coordinates.startY = e.clientY;

		item.style.top = `${item.offsetTop - coordinates.y}px`;
		item.style.left = `${item.offsetLeft - coordinates.x}px`;
	}

	function handleMouseUp() {
		window.removeEventListener("mousemove", handleMouseMove);

		const newItem = document.createElement("div");
		newItem.classList.add("box__senderItem");
		receiver.append(newItem);
		newItem.addEventListener("mousedown", (e) => {
			handleMouseDown(e, newItem, coordinates);
		});
	}

	window.addEventListener("mousemove", handleMouseMove);
	window.addEventListener("mouseup", handleMouseUp);
}
