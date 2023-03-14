import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?&sort_by=year&genre=animation&limit=20&page=2"
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
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id} //key는 React.js에서만, map 안에서만 component들을 render할 때 사용
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary === "" ? "none" : movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
