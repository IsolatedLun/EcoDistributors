export interface Props_StoreSelected extends SvelteStore<string[]> {
	add: (x: string) => void;
	remove: (x: string) => void;
}
