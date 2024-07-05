# @arunvaradharajalu/common.axios

[![npm version](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.axios.svg)](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.axios)
[![GitHub issues](https://img.shields.io/github/issues/arunv11u/common.axios)](https://github.com/arunv11u/common.axios/issues)
[![GitHub license](https://img.shields.io/github/license/arunv11u/common.axios)](https://github.com/arunv11u/common.axios/blob/master/LICENSE)

This package provides a TypeScript wrapper class for Axios, enhancing its functionality with customizable default request configurations.

## Installation

Install the package via npm:

```bash
npm install @arunvaradharajalu/common.axios
```

## Usage

To start using `@arunvaradharajalu/common.axios`, create an instance of `AxiosImpl` and utilize its methods for making HTTP requests with customizable configurations.

Here is an example:

```typescript
import { AxiosImpl } from '@arunvaradharajalu/common.axios';

// Create an instance of AxiosImpl with optional default configurations
const axiosInstance = new AxiosImpl({
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers or configurations here
  },
});

// Use Axios methods (get, post, put, patch, delete, head, options)
axiosInstance.get('/api/data')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## API

### AxiosImpl Class

#### Constructor

- `new AxiosImpl(defaultConfig?: RequestConfig): AxiosImpl`
    Creates an instance of AxiosImpl with optional default request configuration.

#### Methods

- `get<T>(url: string, config?: RequestConfig): Promise<ResponseConfig<T>>`
    Performs a GET request to the specified URL.

- `post<T>(url: string, body?: Record<string, any> | string, config?: RequestConfig): Promise<ResponseConfig<T>>`
	Performs a POST request to the specified URL.

- `put<T>(url: string, body?: Record<string, any> | string, config?: RequestConfig): Promise<ResponseConfig<T>>`
	Performs a PUT request to the specified URL.
- `patch<T>(url: string, body?: Record<string, any>, config?: RequestConfig): Promise<ResponseConfig<T>>`
	Performs a PATCH request to the specified URL.
- `delete<T>(url: string, config?: RequestConfig): Promise<ResponseConfig<T>>`
	Performs a DELETE request to the specified URL.
- `head<T>(url: string, config?: RequestConfig): Promise<ResponseConfig<T>>`
	Performs a HEAD request to the specified URL.
- `options<T>(url: string, config?: RequestConfig): Promise<ResponseConfig<T>>`
	Performs an OPTIONS request to the specified URL.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, improvements, or new features.

## Author

Arun Varadharajalu

## License

This project is licensed under the ISC License.