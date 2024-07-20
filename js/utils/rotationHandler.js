export default function handleRotation(e, items, degrees) {
	switch (e.target.id) {
		case "rotateLeftBtn":
			Array.from(items).forEach((item) => {
				if (item.classList.contains("box__senderItem--active")) {
					item.style.transform += `rotate(-${degrees}deg)`;
				}
			});
			break;
		case "rotateRightBtn":
			Array.from(items).forEach((item) => {
				if (item.classList.contains("box__senderItem--active")) {
					item.style.transform += `rotate(-${degrees}deg)`;
				}
			});
			break;
		default:
			break;
	}
}
