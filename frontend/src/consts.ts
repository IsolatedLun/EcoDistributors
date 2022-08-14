import type { Props_ListSelect } from './components/Interactibles/Selects/types';

export const TOP_ICON = '\uf201';
export const HOT_ICON = '\uf7e4';
export const LATEST_ICON = '\uf01e';
export const UPCOMING_ICON = '\uf017';
export const TRUCK_ICON = '\uf0d1';
export const MOON_ICON = '\uf186';
export const SUN_ICON = '\uf185';
export const BARS_ICON = '\uf0c9';
export const TIMES_ICON = '\uf00d';
export const FRUIT_ICON = '\uf5d1';
export const VEGETABLE_ICON = '\uf787';
export const MEAT_ICON = '\uf6d7';
export const DESSERT_ICON = '\uf6d7';
export const STAR_ICON = '\uf005';
export const PLUS_ICON = '\uf067';
export const MINUS_ICON = '\uf068';

// =============
// Misc
// =============
export const MOCK_PRODUCTS = [
	{
		title:
			'Playstation 5 1TB Exclusive Deluxe Edition All In One, 100+ Games + 3 Controllers For More Epicness',
		thumbnail:
			'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
		date_created: 'Today',
		price: 499.99,
		rating: 4.6,
		reviews: 48,
		id: 3
	}
];

export const MOCK_FILTERS: Props_ListSelect[] = [
	{ icon: FRUIT_ICON, amount: 12, name: 'Fruits' },
	{ icon: VEGETABLE_ICON, amount: 753, name: 'Vegetables' },

	{ icon: MEAT_ICON, amount: 216, name: 'Meat' }
];
