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
export const GRID_ICON = '\uf00a';
export const CUBE_ICON = '\uf1b2';
export const SEARCH_ICON = '\uf002';
export const DAIRY_ICON = '\uf6c8';
export const CONDIMENT_ICON = '\uf816';
export const FOOD_ICON = '\uf0f5';
export const FISH_ICON = '\uf578';
export const INFO_ICON = '\uf05a';
export const FACEBOOK_ICON = '\uf09a';
export const INSTAGRAM_ICON = '\uf16d';
export const YOUTUBE_ICON = '\uf167';
export const TRASH_ICON = '\uf1f8';
export const CAKE_ICON = '\uf1fd';
export const SPINNER_ICON = '\uf110';

export const iconDict: any = {
	dairy: DAIRY_ICON,
	fruits: FRUIT_ICON,
	condiments: CONDIMENT_ICON,
	vegetables: VEGETABLE_ICON,
	meat: MEAT_ICON,
	fish: FISH_ICON,
	food: FOOD_ICON,
	dessert: CAKE_ICON
};

// =============
// Endpoints
// =============
const DEBUG = false;

export const API_URL = DEBUG
	? 'http://localhost:8000/api'
	: 'https://eco-distributors.herokuapp.com/api';

export const GET_PRODUCTS_URL = '/products/';
export const GET_PRODUCT_VIEW_URL = (id: number) => GET_PRODUCTS_URL + id;
export const GET_PRODUCT_COUNT = GET_PRODUCTS_URL + 'count';

// =============
// Misc
// =============
export const MQ_UPDATE_INTERVAL = 1000;

// =============
// SOCIALS
// =============
export const YOUTUBE_URL = '';
export const FACEBOOK_URL = '';
export const INSTAGRAM_URL = '';
