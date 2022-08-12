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
