import { Axios, AxiosImpl, RequestConfig } from "../src";


describe("Axios Module", () => {

	let axios: Axios;

	beforeEach(() => {
		axios = new AxiosImpl();
	});

	describe("Get method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/some-req/1",
					data: { name: "test" }
				};

				expect(
					() => axios
						.get(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should return the data", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/1",
					data: { name: "test" }
				};

				const response = await axios
					.get(config.baseURL as string, config);

				expect(response).toBeTruthy();
			});
		});
	});

	describe("Post method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/some-req/add",
					data: { name: "test" }
				};

				expect(
					() => axios.post(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should return the success response", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/add",
					data: { name: "test" }
				};

				const response = await axios.post(
					config.baseURL as string, 
					config
				);

				expect(response).toBeTruthy();
			});
		});
	});

	describe("Put method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/some-req/1",
					data: { name: "test" }
				};

				expect(
					() => axios
						.put(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should update the data", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/1",
					data: { name: "test" }
				};

				const response = await axios.put(
					config.baseURL as string, 
					config
				);

				expect(response).toBeTruthy();
			});
		});
	});

	describe("Patch method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/some-req/1",
					data: { name: "test" }
				};

				expect(
					() => axios
						.patch(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should update the data", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/1",
					data: { name: "test" }
				};

				const response = await axios.patch(
					config.baseURL as string, 
					config
				);

				expect(response).toBeTruthy();
			});
		});
	});

	describe("Delete method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/some-req/1",
					data: { name: "test" }
				};

				expect(
					() => axios.delete(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should delete the data", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/1"
				};

				const response = await axios.delete(
					config.baseURL as string, 
					config
				);

				expect(response).toBeTruthy();
			});
		});
	});

	describe("Head method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/some-req/1"
				};

				expect(
					() => axios.head(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should delete the data", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/1"
				};

				const response = await axios.head(
					config.baseURL as string, 
					config
				);

				expect(response).toBeTruthy();
			});
		});
	});

	describe("Options method", () => {
		describe("Exception Path", () => {
			it("Invalid request, should throw error", () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.co/some-req/1"
				};

				expect(
					() => axios.options(config.baseURL as string, config)
				).rejects.toThrow();
			});
		});

		describe("Happy Path", () => {
			it("Passing Request Config object, should delete the data", async () => {
				const config: RequestConfig = {
					baseURL: "https://dummyjson.com/products/1"
				};

				const response = await axios.options(
					config.baseURL as string, 
					config
				);

				expect(response).toBeTruthy();
			});
		});
	});
});