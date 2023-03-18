import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import styles from "./css/Detail.module.css";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  // console.log(movie);
  return (
    <div className={styles.detail}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <DetailMovie
          id={movie.id}
          title={movie.title_long}
          coverImg={movie.medium_cover_image}
          summary={movie.description_full}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          background={movie.background_image}
        />
      )}
    </div>
  );
}

export default Detail;
