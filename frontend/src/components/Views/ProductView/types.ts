import type { Props_Review } from 'src/components/Modules/Review/types';
import type { Props_ProductPreview } from '../../../components/Modules/Product/types';

interface _Props_ProductView extends Props_ProductPreview {
	description: string;

	images: string[];
	about_list: string[];
}

export type Props_ProductView = _Props_ProductView & {
	reviews: Props_Review[];
};
