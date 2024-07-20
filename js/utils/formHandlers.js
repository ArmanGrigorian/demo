export default function handleForm(e, item) {
	e.preventDefault();

	const formData = new FormData(e.target);
	const file = formData.get("file");
	const reader = new FileReader();

	reader.readAsDataURL(file);
	reader.addEventListener("load", (e) => {
		if (item.contains(document.querySelector(".box__receiverImage"))) {
			item.querySelector(".box__receiverImage").remove();
		}
		const img = new Image();
		img.src = e.target.result;
		img.classList.add("box__receiverImage");
		item.append(img);
	});
}
