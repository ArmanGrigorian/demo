export default function handleChangeDegrees(e, coordinates) {
	e.preventDefault();
	coordinates.degrees = e.target.degrees.value;
}
