import { writable } from 'svelte/store';

export function useSelected(arr: string[] = []) {
	const { subscribe, set, update } = writable<string[]>(arr);

	return {
		subscribe,
		add: (name: string) => update((arr) => (arr = [...arr, name])),
		remove: (name: string) => update((arr) => (arr = arr.filter((x) => x !== name)))
	};
}
