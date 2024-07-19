// @ts-nocheck
import { fetchRefresh } from '$helpers';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ fetch, url }: Parameters<PageLoad>[0]) => {
	const limit = 18;
	const page = url.searchParams.get('page');

	const searchParams = new URLSearchParams({
		limit: `${limit}`,
		offset: page ? `${limit * (Number(page) - 1)}` : '0'
	}).toString();

	const playlistsRes = await fetchRefresh(fetch, `/api/spotify/me/playlists?${searchParams}`);

	if (!playlistsRes.ok) {
		throw error(playlistsRes.status, 'Failed to load playlists!');
	}

	const playlistsJSON: SpotifyApi.ListOfCurrentUsersPlaylistsResponse = await playlistsRes.json();

	return {
		userPlaylists: playlistsJSON,
		title: 'Your Playlists'
	};
};
