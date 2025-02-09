import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie,
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/movie/${movie.id}`, {
      state: { movie }
    })
  }

  return (
    <div className="movie-card" onClick={handleNavigate}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3 className="text-white">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>

          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
