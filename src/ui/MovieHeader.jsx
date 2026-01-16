function MovieHeader({ movies, onAddMovie }) {
  const ratedMovies = movies.filter(
    (movie) => typeof movie.rating === "number"
  );

  let averageRating =
    ratedMovies.length > 0
      ? ratedMovies.reduce((acc, movie) => acc + movie.rating, 0) /
        ratedMovies.length
      : 0;
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex gap-3 text-md text-white mb-4 md:mb-0">
        <p>Total Movies : {movies.length}</p>
        <p>/</p>
        <p>Average Rating : {averageRating.toFixed(1)}</p>
      </div>

      <div className="flex gap-4 text-white">
        <button className="bg-blue-800 p-1.5 text-sm rounded-md cursor-pointer ">
          Remove Ratings
        </button>
        <button
          onClick={onAddMovie}
          className="bg-blue-800 p-1.5 text-sm rounded-md cursor-pointer"
        >
          Add Movies
        </button>
      </div>
    </div>
  );
}

export default MovieHeader;
