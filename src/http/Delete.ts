import { BaseGD } from "./Base";

export function DELETE(builder: Function) {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		return BaseGD("DELETE", builder, target, key, descriptor);
	}
}