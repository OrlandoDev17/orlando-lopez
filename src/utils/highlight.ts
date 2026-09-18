import type { HighlightTone, HighlightedWords } from "./highlighted-words";

function escapeRegExp(text: string) {
	return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Clases estáticas y con contraste AA sobre fondos claros. Se declaran de forma
// literal para que Tailwind las detecte al escanear (no se construyen en runtime).
const TONE_CLASSES: Record<HighlightTone, string> = {
	primary: "text-primary-600",
	secondary: "text-secondary-800",
};

export function highlight(text: string, words: HighlightedWords) {
	const entries = (Object.entries(words) as [HighlightTone, string[]][])
		.flatMap(([tone, toneWords]) => toneWords.map((word) => ({ word, tone })))
		.sort((a, b) => b.word.length - a.word.length);

	const toneByWord = new Map<string, HighlightTone>(
		entries.map(({ word, tone }) => [word.toLowerCase(), tone]),
	);

	const pattern = new RegExp(
		`\\b(${entries.map(({ word }) => escapeRegExp(word)).join("|")})\\b`,
		"g",
	);

	return text.replace(pattern, (match) => {
		const tone = toneByWord.get(match.toLowerCase()) ?? "primary";
		return `<strong class="${TONE_CLASSES[tone]} font-medium">${match}</strong>`;
	});
}
