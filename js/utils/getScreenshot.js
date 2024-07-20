export default function getScreenshot(item) {
	html2canvas(item).then((canvas) => {
		// download the image
		let a = document.createElement("a");
		a.href = canvas.toDataURL("image/*");
		a.download = "screenshot.png";
		a.click();

		// upload to the server
		// const formData = new FormData();
		// formData.append("file", canvas.toDataURL("image/*"));
		// fetch("#", {
		// 	method: "POST",
		// 	body: formData,
		// })
		// 	.then((res) => res.text())
		// 	.then((res) => console.log(res));

		// on the server BASE64 DECODE
	});
}
