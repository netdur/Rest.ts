export function Headers(headers: string[]) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value;
		descriptor.value = function(...args: any[]) {
			return {
				type: "headers",
				value: headers,
				original: original
			}
		}
		return descriptor;
	}
}