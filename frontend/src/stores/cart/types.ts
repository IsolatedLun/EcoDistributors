import type { Props_ProductView } from '../../components/Views/ProductView/types';

export interface Store_Cart {
	items: Props_ProductWithQuantity[];
}

export interface Props_ProductWithQuantity {
	product: Props_ProductView;
	quantity: number;
}
