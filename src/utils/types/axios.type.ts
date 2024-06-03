/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";

interface RequestConfig {
	baseURL?: string;
	data?: Record<string, any>;
	headers?: Record<string, string | number | boolean>;
	params?: Record<string, string | number | boolean>;
	httpsAgent?: any;
}

interface ResponseConfig<T> {
	data: T;
	status: number;
	statusText: string;
	headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
	request?: any;
}

interface Axios {
	get<T>(
		url: string,
		config: RequestConfig
	): Promise<ResponseConfig<T>>;
	post<T>(
		url: string,
		body?: Record<string, any> | string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>>;
	put<T>(
		url: string,
		body?: Record<string, any> | string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>>;
	patch<T>(
		url: string,
		body?: Record<string, any>,
		config?: RequestConfig
	): Promise<ResponseConfig<T>>;
	delete<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>>;
	head<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>>;
	options<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>>;
}

export {
	Axios,
	ResponseConfig,
	RequestConfig
};