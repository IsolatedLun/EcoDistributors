import { GET_PRODUCTS_URL, GET_PRODUCT_VIEW_URL } from '../consts';
import { HTTPMethods, type POST_Get_Products, type Return__POST_Get_Products } from './types';
import { createEndpoint } from './utils';

import type { Props_ProductPreview } from '../components/Modules/Product/types';
import type { Props_ProductView } from '../components/Views/ProductView/types';

export function getProducts(data: POST_Get_Products) {
	return createEndpoint<Return__POST_Get_Products>(GET_PRODUCTS_URL, data, HTTPMethods.POST);
}

export function getProduct(id: number) {
	return createEndpoint<Props_ProductView>(GET_PRODUCT_VIEW_URL(id), {}, HTTPMethods.GET);
}
