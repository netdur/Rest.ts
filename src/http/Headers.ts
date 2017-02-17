export function Headers(headers: string[]) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value;
		descriptor.headers = headers;
		return descriptor;
	}
}