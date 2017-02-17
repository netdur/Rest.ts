import { BasePPP } from "./Base";

export function PUT(builder: Function) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		return BasePPP('POST', builder, target, key, descriptor);
	}
}