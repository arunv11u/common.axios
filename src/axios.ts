/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
	Axios,
	RequestConfig,
	ResponseConfig
} from "./utils";

export class AxiosImpl implements Axios {

	private _defaultConfig?: RequestConfig | null = null;

	constructor(requestConfig?: RequestConfig) {
		this._defaultConfig = requestConfig;
	}

	async get<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>> {
		const data = await axios.get(url,
			{ ...this._defaultConfig, ...config });

		return data;
	}

	async post<T>(url: string,
		body?: Record<string, any> | string,
		config?: RequestConfig):
		Promise<ResponseConfig<T>> {
		const data = await axios.post(url, body,
			{ ...this._defaultConfig, ...config });

		return data;
	}

	async put<T>(url: string,
		body?: Record<string, any> | string,
		config?: RequestConfig):
		Promise<ResponseConfig<T>> {
		const data = await axios.put(url, body,
			{ ...this._defaultConfig, ...config });

		return data;
	}

	async patch<T>(
		url: string,
		body?: Record<string, any>,
		config?: RequestConfig
	): Promise<ResponseConfig<T>> {
		const data = await axios.patch(url, body,
			{ ...this._defaultConfig, ...config });

		return data;
	}

	async delete<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>> {
		const data = await axios.delete(url,
			{ ...this._defaultConfig, ...config });

		return data;
	}

	async head<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>> {
		const data = await axios.head(url,
			{ ...this._defaultConfig, ...config });

		return data;
	}

	async options<T>(
		url: string,
		config?: RequestConfig
	): Promise<ResponseConfig<T>> {
		const data = await axios.options(url,
			{ ...this._defaultConfig, ...config });

		return data;
	}
}