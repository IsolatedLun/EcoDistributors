import type { Props_StarRater } from '../components/Modules/StarRater/types';
import type { Props_ProductPreview } from '../components/Modules/Product/types';

export function createDefaultProductPreview(): Props_ProductPreview {
	return {
		title: '',
		thumbnail: '',
		date_created: '',

		price: 0,
		rating: 0,
		reviews: 0,
		id: 0
	};
}

export function createDefaultStarRater(): Props_StarRater {
	return {
		rating: 0,
		reviews: 0
	};
}
