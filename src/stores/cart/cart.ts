import type { Props_ProductView } from '../../components/Views/ProductView/types';
import { createDefaultCartStore } from '../../utils/defaultCreates';
import { writable } from 'svelte/store';
import type { Props_ProductWithQuantity, Store_Cart } from './types';

export const cart = writable({
	items: [] as Props_ProductWithQuantity[]
});

function _get_store<T>(store: any): T {
	let $val: any;
	store.subscribe(($: any) => ($val = $))();
	return $val;
}

export function addToCart(product: Props_ProductView, quantity: number) {
	cart.update((data) => {
		const _data = { items: [...data.items, { product, quantity }] };

		updateCartOnLocalStorage(_data);
		return _data;
	});
}

export function removeFromCart(id: number) {
	cart.update((data) => {
		const filtered_items = data.items.filter((x) => x.product.id !== id);
		const _data = { items: filtered_items };

		updateCartOnLocalStorage(_data);
		return _data;
	});
}

// ==================
// Public helper functions
// ==================

export function isInCart(id: number) {
	return _get_store<Store_Cart>(cart).items.filter((item) => item.product.id === id).length > 0;
}

export function calculateTotalCosts(): number {
	let total = 0;

	_get_store<Store_Cart>(cart).items.forEach(
		(item) => (total += item.product.price * item.quantity)
	);
	return total;
}

export function calculateTotalItems(): number {
	let total = 0;

	_get_store<Store_Cart>(cart).items.forEach((item) => (total += item.quantity));
	return total;
}

// ==================
// Private helper functions
// ==================
function updateCartOnLocalStorage(data: Store_Cart) {
	localStorage.setItem('cart', JSON.stringify(data));
}

export function getCartOnLocalStorage(): Store_Cart {
	if (localStorage.getItem('cart')) return JSON.parse(localStorage.getItem('cart')!);
	return createDefaultCartStore();
}
