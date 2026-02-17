import { useNavigate } from "react-router-dom";
import { getRatingClass } from "../utils/rating";

export default function MovieCard({ movie, isInWatchlist, onToggleWatchlist }) {
  const navigate = useNavigate();
  const inList = isInWatchlist(movie.id);

  return (
    <div className="card">
      <div
        onClick={() => navigate(`/movies/${movie.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img
          className="poster"
          src={`/images/${movie.image}`}
          alt={movie.title}
        />

        <h3>{movie.title}</h3>

        <p className="meta">
          {movie.genre}{" "}
          <span className={getRatingClass(movie.rating)}>{movie.rating}</span>
        </p>
      </div>

      <button
        className={inList ? "btn-watchlist in" : "btn-watchlist"}
        onClick={() => onToggleWatchlist(movie.id)}
      >
        {inList ? "In Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}