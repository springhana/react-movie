import PropTypes from "prop-types";

function Movie({ id, title, coverImg, description, rating, runtime, genres }) {
  return (
    <div id={id}>
      <img src={coverImg} alt="{title}" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      <p>Tag</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
