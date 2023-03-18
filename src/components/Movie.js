import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./css/Movie.module.css";
function Movie({ id, coverImg, title, con }) {
  return (
    <div className={styles.movie_contain}>
      <div
        className={styles.movie_inner}
        style={{ transform: `rotate(${con}deg)` }}
      >
        <Link to={`/movie/${id}`}>
          <img
            className={styles.movie_pic}
            src={coverImg}
            alt={title}
            style={{ rotate: `-48deg` }}
          />
        </Link>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
