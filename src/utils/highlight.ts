import type { HighlightedWords } from "./highlighted-words";

function escapeRegExp(text: string) {
	return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlight(text: string, words: HighlightedWords) {
	const entries = Object.entries(words)
		.flatMap(([tone, toneWords]) => toneWords.map((word) => ({ word, tone })))
		.sort((a, b) => b.word.length - a.word.length);

	const toneByWord = new Map(
		entries.map(({ word, tone }) => [word.toLowerCase(), tone]),
	);

	const pattern = new RegExp(
		`\\b(${entries.map(({ word }) => escapeRegExp(word)).join("|")})\\b`,
		"g",
	);

	return text.replace(pattern, (match) => {
		const tone = toneByWord.get(match.toLowerCase());
		return `<strong class="text-${tone}-600 font-medium">${match}</strong>`;
	});
}
