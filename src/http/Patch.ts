import { BasePPP } from "./Base";

export function PATCH(builder: Function) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		return BasePPP('PATCH', builder, target, key, descriptor);
	}
}