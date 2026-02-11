import movies from "./data/movies.json";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        className="poster"
        src={`/images/${movie.image}`}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p className="meta">
        {movie.genre}   {movie.rating}
      </p>

      <button>Add to Watchlist</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <div className="nav">
        <button className="nav-btn active">Home</button>
        <button className="nav-btn">Watchlist</button>
      </div>

      <input
        className="search"
        placeholder="Search movies..."
      />

      <div className="filters">
        <div className="filter">
          <span>Genre</span>
          <select>
            <option>All Genres</option>
          </select>
        </div>

        <div className="filter">
          <span>Rating</span>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}
