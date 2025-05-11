import { Character } from "./character.interface";

export function showCharacter(character: Character): void {
	const house = character.house.toLowerCase();
	const houseElement = document.getElementById(house);
	if (!houseElement) {
		return;
	}
	const characterList = houseElement.lastElementChild;
	const img = document.createElement("img");
	img.src = character.image;
	img.alt = character.name;
	img.classList.add("house-character");
	characterList?.appendChild(img);
}
