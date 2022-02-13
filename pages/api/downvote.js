import db from "../../utils/db";
import Movie from "../../utils/movieSchema";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log("req body", req.body);

    await db.connect();
    var movies;
    if (!req.body.fromSearch) {

      if(!req.body.movieData.movieId){
        res.status(401).json({message:"bad request"})
        return false;
    }
      movies = await Movie.findOneAndUpdate(
        { imdbID: req.body.movieData.movieId },
        { $inc: { Downvotes: 1 } }
      );
      await db.disconnect();
      res.status(200).json(movies);

    } else {

      if (!req.body.movieData.imdbID) {
        res.status(401).json({ message: "bad request" });
        return false;
      }
      var movieEntry = req.body.movieData;
      movieEntry = new Movie({ ...movieEntry, "Downvotes": 1 });

      // await Movie.Insert
      movieEntry.save(function (err) {
        if (err) {
          console.log(err);
        }
        // saved!
      });

      console.log("hii thsdfkjh");

      res.status(200).json({ message: true });
    }
  }
}
