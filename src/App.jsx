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
        {movie.genre} • {movie.rating}
      </p>

      <button>Add to Watchlist</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>Movies</h1>

      <div className="grid">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}