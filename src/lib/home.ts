import { DateTime } from "luxon";

//Define next date

// Define actual date

// Calculate differences in days, hours, minutes, seconds

// Update html values

function bootstrap() {
	console.log("Bootsrap home!");
	const date = DateTime.now()
		.setZone("America/La_Paz")
		.minus({ weeks: 1 })
		.endOf("day")
		.toISO();
	console.log("Date,", date);
}

bootstrap();
