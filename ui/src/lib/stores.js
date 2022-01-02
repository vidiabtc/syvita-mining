import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { cities } from '$lib/constants.js';

export const user = writable((browser && localStorage.getItem('stacks-session')) || 'null');

user.subscribe((val) => browser && localStorage.setItem('stacks-session', val));

export const city = writable(cities['mia']);
