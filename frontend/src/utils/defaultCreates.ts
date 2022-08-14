import type { Props_StarRater } from '../components/Modules/StarRater/types';
import type { Props_ProductPreview } from '../components/Modules/Product/types';
import type { Props_ProductView } from '../components/Views/ProductView/types';

export function createDefaultProductPreview(): Props_ProductPreview {
	return {
		title: '',
		thumbnail: '',
		date_created: '',

		price: 499.99,
		rating: 0,
		reviews: 0,
		id: 0
	};
}

export function createDefaultProduct(): Props_ProductView {
	return {
		...createDefaultProductPreview(),
		images: [],
		about_list: ['An extravagent system', 'Absolutely breathtaking']
	};
}

export function createDefaultStarRater(): Props_StarRater {
	return {
		rating: 0,
		reviews: 0
	};
}
