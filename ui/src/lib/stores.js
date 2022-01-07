import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { CITIES, LANGUAGES } from '$lib/constants.js';

export const user = writable((browser && localStorage.getItem('stacks-session')) || 'null');

// export const t = writable(english);

user.subscribe((val) => browser && localStorage.setItem('stacks-session', val));

export const city = writable(CITIES['mia']);
export const t = writable(LANGUAGES['English']);

// t.subscribe((val) => browser && localStorage.setItem('language', val));