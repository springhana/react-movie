import MovieList from "../components/MovieList";
import styles from "./css/Page.module.css";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import navList from "../components/NavList";
import { Link } from "react-router-dom";
const listNums = [...Array(10)].map((_, i) => i + 1);

function Page() {
  const { detail, num } = useParams();
  console.log(num);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(detail);

  // console.log(detail, num);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&${detail}&page=${num}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);

    for (let i = 0; i < navList.length; i++) {
      if (navList[i].path === detail) {
        setGenre(navList[i].title);
      }
    }
  }, [num, detail]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.body}>
      <div className={styles.contain}>
        {loading ? (
          <h1 className={styles.loading}>Loading...</h1>
        ) : (
          <div className={styles.movies_list}>
            <div className={styles.genre}>{genre}</div>
            {movies.map((movie) => (
              <MovieList
                key={movie.id} //key는 React.js에서만, map 안에서만 component들을 render할 때 사용
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
              />
            ))}
            <ul className={styles.footer}>
              {loading
                ? null
                : listNums.map((listNum) => {
                    return (
                      <li className={styles.num}>
                        <Link
                          to={`/page/${detail}/${listNum}`}
                          className={listNum == num ? styles.focusing : null}
                          style={{ textDecoration: "none" }}
                        >
                          {listNum}
                        </Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Page;
