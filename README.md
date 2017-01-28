## Usage

This is an example on how to implement Facebook Graph API

https://developers.facebook.com/docs/graph-api/using-graph-api

First create Facebook class implementing Service interface then create abstract[!] methods you wish to use

    class Facebook implements Service {
        baseUrl = "https://graph.facebook.com"
        
        @GET(u`/me/photos`)
        myPhotos(): any {}
        
        @GET(u`/${0}?fields=comments.order(reverse_chronological)`)
        photo(photoId: number): any {}
    }

and that's all, here how to use Facebook class

    const fb = new Facebook();
    const myPhotos = await fb.myPhotos();
    const rndPhoto = await fb.photo(1);
    // or 
    fb.photo(1).then((r) => r.json()).then(...)

## License

Released under a non-commercial BSD license
