// @ts-nocheck
import { fetchRefresh } from '$helpers';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ fetch, url }: Parameters<PageLoad>[0]) => {
	const query = url.searchParams.get('q');
	if (query) {
		throw redirect(307, `/search/${query}`);
	}
	const catsRes = await fetchRefresh(fetch, `/api/spotify/browse/categories?limit=50`);
	return {
		title: 'Search',
		categories: catsRes.ok
			? (catsRes.json() as Promise<SpotifyApi.MultipleCategoriesResponse>)
			: undefined
	};
};
