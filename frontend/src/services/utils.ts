import axios from 'axios';
import { API_URL } from '../consts';
import { HTTPMethods, type ErrorResponse, type Props_HandledError } from './types';

export async function createEndpoint<T>(
	url: string,
	data: any,
	method: HTTPMethods,
	headers: any = {}
): Promise<T> {
	let res = new Promise(() => undefined) as any;

	url = API_URL + url;
	if (method === HTTPMethods.GET) {
		const req = await axios.get(url, data);
		res = (await req.data) as T;
	} else if (method === HTTPMethods.POST) {
		const req = await axios.post(url, data, {
			headers: { ...headers }
		});
		res = (await req.data) as T;
	} else if (method === HTTPMethods.DELETE) {
		const req = await axios.delete(url, data);
		res = (await req.data) as T;
	}

	return res;
}

export function handleError(e: any): Props_HandledError {
	function isErrorResponse(e: any): e is ErrorResponse {
		return e.response.data.detail !== undefined;
	}

	if (isErrorResponse(e)) {
		const err = e.response.data.detail;

		return {
			detail: err
		};
	}

	return {
		detail: 'Something went wrong.'
	};
}
