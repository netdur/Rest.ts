import { BaseGD } from "./Base";

export function GET(builder: Function) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		return BaseGD("GET", builder, target, key, descriptor);
	}
}