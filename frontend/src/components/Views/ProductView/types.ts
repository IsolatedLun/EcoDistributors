import type { Props_Review } from 'src/components/Modules/Review/types';
import type { Props_ProductPreview } from '../../../components/Modules/Product/types';

export interface Props_ProductView extends Props_ProductPreview<Props_Review[]> {
	description: string;

	images: string[];
	key_details: string[];
}
