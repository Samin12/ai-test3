import { OMDB_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

// const OMDB_API = "4561b45a";

export async function POST({ request }: { request: any }) {
	const { title } = await request.json();
	const url = `http://www.omdbapi.com/?apikey=${OMDB_API}&t=${title}`;

	const res = await fetch(url);
	const details = await res.json();
	return json(details);
}
