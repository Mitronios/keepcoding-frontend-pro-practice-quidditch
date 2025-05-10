import { DateTime } from "luxon";

// Update html values
function showtimeElement(elementId: string, data: string): void {
	const element = document.getElementById(elementId);
	if (!element) {
		return;
	}
	element.innerText = data;
}

// Time configs
function bootstrap() {
	const now = DateTime.now().setZone("America/La_Paz");
	const year = now.year;
	let nextEdition = DateTime.fromFormat(`11/11/${year}`, "dd/MM/yyyy").endOf(
		"day"
	);
	console.log(nextEdition, nextEdition);
	// Check year
	if (nextEdition <= now) {
		nextEdition = nextEdition.plus({ year: 1 });
	}

	setInterval(() => {
		const timeDistance = nextEdition.diff(
			DateTime.now().setZone("America/La_Paz"),
			["days", "hours", "minutes", "seconds"]
		);
		const days = timeDistance.days;
		const hours = timeDistance.hours;
		const minutes = timeDistance.minutes;
		const seconds = timeDistance.seconds.toFixed();

		showtimeElement("days", days.toString());
		showtimeElement("hours", hours.toString());
		showtimeElement("minutes", minutes.toString());
		showtimeElement("seconds", seconds.toString());
	}, 1000);
}

bootstrap();
