import { BasePPP } from "./Base";

export function POST(builder: Function) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		return BasePPP('PUT', builder, target, key, descriptor);
	}
}