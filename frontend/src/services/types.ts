import type { Props_ListSelect } from 'src/components/Interactibles/Selects/types';
import type { Props_ProductPreview } from 'src/components/Modules/Product/types';

export enum HTTPMethods {
	GET,
	POST,
	DELETE
}

// ====================
// Request interfaces
// ====================
export interface POST_Get_Products {
	tags: string[];
	filters: string[]; // categories
	title: string;
	sort_by: 'top' | 'latest' | 'hot' | string;

	show_upcoming: boolean;
}

export interface Return__POST_Get_Products {
	products: Props_ProductPreview<number>[];
	categories: Props_ListSelect[];
}
