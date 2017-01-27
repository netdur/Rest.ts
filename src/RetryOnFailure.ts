export function RetryOnFailure(attempts: number = 3, delay: number = 1000) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value;
		descriptor.retryOnFailure = {
			attempts: attempts,
			delay: delay
		}
		return descriptor;
	}
}