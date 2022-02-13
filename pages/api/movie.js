import db from "../../utils/db";
import Movie from "../../utils/movieSchema";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log("req body", req.body);
    if(!req.body.movieId){
        res.status(401).json({message:"bad request"})
        return false;
    }

    await db.connect();
    // console.log("hellos")
    // const movies = await Movie.find();
    // const movies = await Movie.findById({"_id":"6207f3169a6ced03ff643494"});

    // const movies = await Movie.find({}).sort({"Released" : 1} );
    // const movies = await Movie.find( { Genre:"Crime" } );
    const movies = await Movie.find( {imdbID:req.body.movieId } );

    // const movies = await Movie.find({ imdbID: "tt0120737" });

    // const movies = await Movie.find( {Genre: {$regex: "Crime"}});

    // const movies = await Movie.find( {imdbID: {$regex: "tt0120737"}});

    // const movies = await Movie.findOneAndUpdate({_id :"6207f3169a6ced03ff643494"}, {$inc : {Upvotes : 1}})
    // const movies = await Movie.findOneAndUpdate({_id :"6207f3169a6ced03ff643494"}, {$inc : {Downvotes : 1}})

    // const movies = await Movie.find({}).sort({"Upvotes" : -1} ).limit(10);

    // console.log(movies);
    await db.disconnect();
    res.status(200).json(movies);
  }
}
