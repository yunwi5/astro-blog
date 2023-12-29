export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return new Date(date).toLocaleDateString(undefined, options);
};

export function capitalize(str: string): string {
	if (typeof str !== "string" || str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWithPresevingSpecialCasing(str: string): string {
	if (typeof str !== "string" || str.length === 0) {
		return str;
	}

	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function searchInString(str: string, search: string): boolean {
	return str.toLowerCase().includes(search.trim().toLowerCase());
}

export function searchInArticle(article: { body: string; slug: string; data: { title: string } }, search: string) {
	const titleMatch = searchInString(article.data.title.toLowerCase(), search.trim().toLowerCase());
	const bodyMatch = searchInString(article.body.toLowerCase(), search.trim().toLowerCase());
	const slugMatch = searchInString(article.slug.toLowerCase(), search.trim().toLowerCase());

	return titleMatch || bodyMatch || slugMatch;
}
