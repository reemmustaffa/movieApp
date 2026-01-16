function MovieHeader({ movies }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex gap-3 text-md text-white mb-4 md:mb-0">
        <p>Total Movies: {movies.Search.length}</p>
        <p>/</p>
        <p>Average Rating:3.7</p>
      </div>

      <div className="flex gap-4 text-white">
        <button className="bg-blue-800 p-1.5 text-sm rounded-md ">
          Remove Ratings
        </button>
        <button className="bg-blue-800 p-1.5 text-sm rounded-md">
          Add Movies
        </button>
      </div>
    </div>
  );
}

export default MovieHeader;
