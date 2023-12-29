export function getBaseUrl(): string {
	return process.env.NODE_ENV === "development" ? "http://localhost:4321" : "https://astro-blog-git-main-yunwi5.vercel.app/";
}
