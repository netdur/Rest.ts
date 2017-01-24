export const BasePPP = function(type: string,
								builder: Function,
								target: any,
								key: string,
								descriptor: PropertyDescriptor) : PropertyDescriptor {

	const original = descriptor.value();

	descriptor.value = function(model: any, ...args: any[]) {
		const relativePath = builder(...args);
		const url = new URL(relativePath, this.baseUrl);

		const data = new FormData();
		Object.getOwnPropertyNames(model).forEach(field => data.append(field, model[field]));

		const headers = new Headers();
		if (original != undefined && original.hasOwnProperty("type") && original.type == "headers") {
			original.value.forEach((header: string) => {
				headers.append(...header.split(":"));
			})
		}

		return fetch(url, {
			method: type,
			body: data,
			headers: headers
		});
	}

	return descriptor;
}

export const BaseGD = function(type: string,
								builder: Function,
								target: any,
								key: string,
								descriptor: PropertyDescriptor) : PropertyDescriptor {

	const original = descriptor.value();

	descriptor.value = function(...args: any[]) {
		const relativePath = builder(...args);
		const url = new URL(relativePath, this.baseUrl);

		const headers = new Headers();
		if (original != undefined && original.hasOwnProperty("type") && original.type == "headers") {
			original.value.forEach((header: string) => {
				headers.append(...header.split(":"));
			})
		}

		return fetch(url, {
			method: type,
			headers: headers
		});
	}

	return descriptor;
}
