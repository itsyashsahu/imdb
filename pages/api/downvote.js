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
    var movies ;
    if( !req.body.fromSearch )
    {
        movies = await Movie.findOneAndUpdate( {imdbID:req.body.movieId } , {$inc : {Downvotes : 1}})
        await db.disconnect();
        res.status(200).json(movies);

    }else{

        
    }

  }
}
