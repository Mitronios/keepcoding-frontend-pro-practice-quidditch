import { getCharacters } from "./hpApi";
import { Houses } from "./character.interface";
import { showCharacter } from "./view";

async function bootstrap() {
	console.log("Houses Connected");
	for (const house in Houses) {
		console.log(house);
		const characters = await getCharacters(house.toLowerCase());
		characters
			.filter((char) => char.image)
			.slice(0, 5)
			.forEach((char) => showCharacter(char));
	}
}

bootstrap();
