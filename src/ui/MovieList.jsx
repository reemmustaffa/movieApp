import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
