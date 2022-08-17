import type { Props_DB_Model } from 'src/types';

export interface Props_ProductPreview<ReviewT> extends Props_DB_Model {
	title: string;

	price: number;
	rating: number;
	reviews: ReviewT;

	thumbnail: string;
}
