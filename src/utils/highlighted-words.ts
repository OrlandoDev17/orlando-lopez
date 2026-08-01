export type HighlightTone = "primary" | "secondary";

export interface HighlightedWords {
	primary: string[];
	secondary: string[];
}

export const HIGHLIGHTED_WORDS: HighlightedWords = {
	primary: ["modernas", "rápidas", "eficientes", "escalable", "elegante", "impecable"],
	secondary: [
		"web",
		"móviles",
		"frontend",
		"backend",
		"React",
		"Astro",
		"Tailwind",
		"Node.js",
		"TypeScript",
		"microservicios",
		"QA",
	],
};
