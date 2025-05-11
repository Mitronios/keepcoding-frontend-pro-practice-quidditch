import { getErrorMessages } from "./validations";

const FORM_ID = "contactForm";

const FORM_FIELDS = ["name", "email", "message"];

function bootstrap() {
	const contactForm: HTMLFormElement = document.getElementById(
		FORM_ID
	) as HTMLFormElement;
	if (!contactForm) return;
	contactForm.addEventListener("submit", (e) => {
		const form = e.target;
		if (!form) return;
		e.preventDefault();
		FORM_FIELDS.forEach((field) => {
			const validateStatus = form[field].validity;
			const validationMessage = getErrorMessages(validateStatus);
		});
	});
}
bootstrap();
