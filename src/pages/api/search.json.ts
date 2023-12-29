import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { searchInArticle } from "../../utils";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
	const query = url.searchParams.get("query");

	if (query == null) {
		return new Response(JSON.stringify({ error: "Missing query parameter" }), { status: 400, headers: { "Content-Type": "application/json" } });
	}

	const allBlogArticles: CollectionEntry<"blog">[] = await getCollection("blog");
	const searchedBlogArticles = allBlogArticles.filter((article) => searchInArticle(article, query));

	return new Response(JSON.stringify(searchedBlogArticles), { status: 200, headers: { "Content-Type": "application/json" } });
};
