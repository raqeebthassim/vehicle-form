export const MAKES = [
    "AUDI",
    "BMW",
    "VAUXHAL",
    "MERCEDES",
    "PEUGEOT",
    "RENAULT"
];

export const COLOURS = [
    "BLUE",
    "RED",
    "BLACK",
    "ORANGE"
];

export const INPUT_TYPES = {
    SELECT: "select",
    TEXT: "text"
};

export const WIZARD_STEPS = {
    CODE: {
        inputType: INPUT_TYPES.TEXT,
        options: null,
        paramName: "code",
        label: "CODE",
        next: null
    },
    COLOUR: {
        inputType: INPUT_TYPES.SELECT,
        options: COLOURS,
        paramName: "colour",
        label: "COLOUR",
        next: "CODE"
    },
    MAKE: {
        inputType: INPUT_TYPES.SELECT,
        options: MAKES,
        paramName: "make",
        label: "MAKE",
        next: "COLOUR"
    }
};