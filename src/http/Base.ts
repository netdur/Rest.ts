const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const buildHeaders = (descriptor: PropertyDescriptor) : Headers => {
	const headers = new Headers();
	if (descriptor != undefined && descriptor.hasOwnProperty("headers")) {
		descriptor.headers.forEach((header: string) => {
			headers.append(...header.split(":"));
		})
	}
	return headers;
}

const retryAndReturnPromise = async function({
	url,
	type,
	headers,
	descriptor,
	model
} : {
	url: URL,
	type: string,
	headers: Headers,
	descriptor: PropertyDescriptor | undefined,
	model?: any
}): Promise<any> {

	const data = new FormData();
	if (model) {
		Object.getOwnPropertyNames(model).forEach(field => data.append(field, model[field]));
	}

	if (descriptor != undefined && descriptor.hasOwnProperty("retryOnFailure")) {
		let promise;
		let responseOK = false;
		let tryCount = 0;
		while (!responseOK && tryCount < descriptor.retryOnFailure.attempts) {
			try {
				let options = {
					method: type,
					headers: headers
				}
				if (model) options.data = data;
				promise = await fetch(url, options);
				responseOK = promise.ok
			} catch (e) {
				console.log("intercept", "Request is not successful - " + tryCount)
			} finally {
				await delay(descriptor.retryOnFailure.delay);
				tryCount++;
			}
		}
		return promise;
	} else {
		let options = {
			method: type,
			headers: headers
		}
		if (model) options.data = data;
		return fetch(url, options);
	}
}

export const BasePPP = function(type: string, builder: Function, target: any, key: string,
								descriptor: PropertyDescriptor) : PropertyDescriptor {
	const original = descriptor.value();
	descriptor.value = async function(model: any, ...args: any[]) {
		const relativePath = builder(...args);
		const url = new URL(relativePath, this.baseUrl);
		const headers = buildHeaders(descriptor);
		return await retryAndReturnPromise({ url, type, headers, descriptor, model });
	}

	return descriptor;
}

export const BaseGD = function(type: string, builder: Function, target: any, key: string,
								descriptor: PropertyDescriptor) : PropertyDescriptor {
	const original = descriptor.value();
	descriptor.value = async function(...args: any[]) {
		const relativePath = builder(...args);
		const url = new URL(relativePath, this.baseUrl);
		const headers = buildHeaders(descriptor);
		return await retryAndReturnPromise({ url, type, headers, descriptor });
	}

	return descriptor;
}
