import { Template as u, Service, RetryOnFailure, GET, DELETE, POST, PUT, PATCH, Headers, Rest } from "./Rest";

module Models {
	export class Post {
		body: string
		id: number
		title: string
		userId: number
	}
}

class JSONPlaceholder implements Service {

	baseUrl = "https://jsonplaceholder.typicode.com"

	// comments
	@GET(u`/posts/${0}/comments`)
	comments(): any {}

	// posts
	@GET(u`/posts`)
	posts(): any {}

	@GET(u`/posts/${0}`)
	post(id: number): any {}

	@GET(u`/posts?userId=${0}`)
	@RetryOnFailure(4, 1000)
	postsByUser(userId: number): any {}

	@POST(u`/posts`)
	create(post: Models.Post): any {}

	@PUT(u`/posts/${0}`)
	update(post: Models.Post, postId: number): any {}

	@PATCH(u`/posts/${0}`)
	save(post: Models.Post, postId: number): any {}

	@DELETE(u`/posts/${0}`)
	remove(postId: number): any {}

}

class Main {

	service = new JSONPlaceholder()

	constructor() {
		this.loadPostByUserAsync(1).then((tock: number) => {
			console.log(tock);
		});

		/*
			// POST
			const post = new Models.Post();
			post.body = "text text";
			post.title = "title";
			post.userId = 1;
			this.service.update(post, 1);

			// PUT
			const post = new Models.Post();
			post.body = "text text";
			post.title = "title";
			post.userId = 1;
			this.service.update(post, 1);

			// PATCH
			const post = new Models.Post();
			post.body = "text text";
			this.service.save(post, 1);

			// DELETE
			this.service.remove(1);
		*/
	}

	async loadPostByUserAsync(userId: number): Promise<number> {
		const tick = performance.now();
		const response/*: Response*/ = await this.service.postsByUser(userId);
		const posts/*: Promise<JSON>*/ = await response.json();
		posts.forEach((post: Models.Post) => {
			console.log(`${post.id} => ${post.title}`);
		});
		const tack = performance.now();
		return tack - tick;
	}
}

// document.addEventListener("DOMContentLoaded", e => new Main(), false);
new Main()
