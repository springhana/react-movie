import PropTypes from "prop-types";
import styles from "./css/DetailMovie.module.css";
function DetailMovie({
  id,
  title,
  coverImg,
  summary,
  rating,
  runtime,
  genres,
  background,
}) {
  return (
    <div
      id={id}
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        width: "100%",
        height: "90vh",
      }}
    >
      <img src={coverImg} alt="{title}" className={styles.coverimg} />

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.tag}>
          <p className={styles.rating}>rating : {rating}</p>
          <p className={styles.runtime}>runtime : {runtime}</p>
          <div className={styles.genres}>
            <p>Tag</p>
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailMovie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default DetailMovie;
