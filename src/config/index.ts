export function getBaseUrl(): string {
	return process.env.NODE_ENV === "development" ? "http://localhost:4321" : "https://astro-blog-bdwypesim-yunwi5.vercel.app";
}
