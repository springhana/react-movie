import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./css/Home.module.css";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?&sort_by=year&minimum_rating=9&limit=15"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  // console.log(movies);
  let i = 0;
  return (
    <div className={styles.body}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.contain}>
          <div className={styles.pic_Frame}>
            {movies.map((movie) => (
              <Movie
                key={movie.id} //key는 React.js에서만, map 안에서만 component들을 render할 때 사용
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                con={(i += 24)}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
