import { Service } from "./Service";

export * from "./Service";
export * from "./Template";

export * from "./Http/Get";
export * from "./Http/Post";
export * from "./Http/Put";
export * from "./Http/Patch";
export * from "./Http/Delete";
export * from "./Http/Headers";

export class Rest {

	constructor(public service: Service) {}

	build(): any {
		return this.service;
	}

}