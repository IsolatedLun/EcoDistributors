import { writable } from 'svelte/store';

// This store is a general store
// Basically it contains data that many components will/can use
export const general = writable({
	categories: []
});
