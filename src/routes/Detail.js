import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/DetailMovie";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  // console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          id={movie.id}
          title={movie.title_long}
          coverImg={movie.medium_cover_image}
          description={movie.description_full}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
