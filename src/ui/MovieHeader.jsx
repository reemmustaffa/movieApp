import toast from "react-hot-toast";
import { useEditRate } from "../api/useEditRate";

function MovieHeader({ movies, onAddMovie }) {
  const { editRate } = useEditRate();
  const ratedMovies = movies.filter(
    (movie) => typeof movie.rating === "number"
  );
  let averageRating =
    ratedMovies.length > 0
      ? ratedMovies.reduce((acc, movie) => acc + movie.rating, 0) /
        ratedMovies.length
      : 0;

  function removeRatings() {
    movies.map((movie) => {
      editRate(
        { id: movie.id, newRating: null },
        { onSuccess: () => toast.success("Ratings removed successfully") }
      );
    });
  }
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col text-sm sm:flex-row sm:text-md md:text-lg gap-3 text-white">
        <p>Total Movies : {movies.length}</p>
        <p className="hidden sm:block">/</p>
        <p>Average Rating : {averageRating.toFixed(1)}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 text-white">
        <button
          onClick={removeRatings}
          disabled={ratedMovies.length === 0}
          className="bg-blue-800 p-1.5 text-sm rounded-md cursor-pointer "
        >
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
