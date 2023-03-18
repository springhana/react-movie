import { Link } from "react-router-dom";
import styles from "./css/MovieList.module.css";

function MovieList({ id, coverImg, title, year, summary }) {
  if (summary === "") {
    summary = "No plot...";
  }
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`} style={{ color: "black" }}>
        <img src={coverImg} alt={title} className={styles.coverImg} />

        <p className={styles.summary}>
          {summary && summary.length > 235
            ? `${summary.slice(0, 235)}...`
            : summary}
        </p>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.year}>({year})</p>
        </div>
      </Link>
    </div>
  );
}
export default MovieList;
