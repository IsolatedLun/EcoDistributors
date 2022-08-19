import type { Props_StarRater } from '../components/Modules/StarRater/types';
import type { Props_ProductPreview } from '../components/Modules/Product/types';
import type { Props_ProductView } from '../components/Views/ProductView/types';
import type { Props_Review } from 'src/components/Modules/Review/types';
import type { Props_User } from 'src/types';

export function createDefaultProductPreview(): Props_ProductPreview<number> {
	return {
		title: '',
		thumbnail: '',
		date_created: '',

		tags: [],

		price: 499.99,
		rating: 0,
		reviews: 0,
		id: 0
	};
}

export function createDefaultProduct(): Props_ProductView {
	return {
		...createDefaultProductPreview(),

		description: '',

		images: [],
		key_details: [],
		reviews: [],
		related_products: []
	};
}

export function createDefaultStarRater(): Props_StarRater {
	return {
		rating: 0,
		reviews: 0,

		stars_1: 0,
		stars_2: 0,
		stars_3: 0,
		stars_4: 0,
		stars_5: 0
	};
}

export function createDefaultUser(): Props_User {
	return {
		id: 0,

		username: '',
		profile: '',
		date_created: ''
	};
}

export function createDefaultReview(): Props_Review {
	return {
		user: createDefaultUser(),
		rating: createDefaultStarRater(),

		id: 0,

		title: '',
		comment: '',
		date_created: ''
	};
}
