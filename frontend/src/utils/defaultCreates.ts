import type { Props_StarRater } from "../components/Modules/StarRater/types";
import type { Props_ProductPreview } from "../components/Modules/Product/types";
import type { Props_ProductView } from "../components/Views/ProductView/types";
import type { Props_User } from "../types";
import type { Store_Cart } from "../stores/cart/types";

// ===============
// Component props
// ===============
export function createDefaultProductPreview(): Props_ProductPreview<number> {
  return {
    title: "",
    thumbnail: "",
    date_created: "",

    tags: [],

    price: 499.99,
    rating: 0,
    reviews: 0,
    id: 0,
  };
}

export function createDefaultProduct(): Props_ProductView {
  return {
    ...createDefaultProductPreview(),

    description: "",

    details: [],
    images: [],
    key_points: [],
    reviews: [],
    related_products: [],

    is_out_of_stock: false,
    is_upcoming: false,
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
    stars_5: 0,
  };
}

export function createDefaultUser(): Props_User {
  return {
    id: 0,

    username: "",
    profile: "",
    date_created: "",
  };
}

// export function createDefaultReview(): Props_Review {
// 	return {
// 		user: createDefaultUser(),
// 		rating: createDefaultStarRater(),

// 		id: 0,

// 		title: '',
// 		comment: '',
// 		date_created: ''
// 	};
// }

// ===============
// Stores
// ===============
export function createDefaultCartStore(): Store_Cart {
  return {
    items: [],
  };
}
