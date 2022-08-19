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
}
