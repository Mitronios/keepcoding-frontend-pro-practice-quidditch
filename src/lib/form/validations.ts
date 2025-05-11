const checkValidations = [
	"patternMismatch",
	"stepMismatch",
	"tooLong",
	"tooShort",
	"typeMismatch",
	"valueMissing",
];

const errorMessages = {
	patternMismatch: "Error en el patón definido",
	stepMismatch: "Valor númerico en un intervalo incorrecto",
	tooLong: "Valor demasiado largo",
	tooShort: "Valor demasiado corto",
	typeMismatch: "El tipo no es el correcto",
	valueMissing: "Campo requirido",
};

export function getErrorMessages(validateStatus: any): string | null {
	return null;
}
