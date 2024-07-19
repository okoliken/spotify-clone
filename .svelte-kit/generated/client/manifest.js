export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')];

export const server_loads = [0];

export const dictionary = {
	"/": [2],
	"/album/[id]": [4],
	"/artist/[id]": [5],
	"/login": [6],
	"/playlists": [10],
	"/playlists/new": [~11],
	"/playlist": [~7],
	"/playlist/[id]": [~8],
	"/playlist/[id]/edit": [~9],
	"/profile": [12],
	"/search": [13],
	"/search/[query]": [14],
	"/[list=list]/[...rest]": [3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};