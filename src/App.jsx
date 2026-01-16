import MovieHeader from "./ui/MovieHeader";
import MovieList from "./ui/MovieList";
import { useMovies } from "./api/useMovies";
import Spinner from "./ui/Spinner";

function App() {
  const { movies, isLoading } = useMovies();
  if (isLoading) return <Spinner />;
  return (
    <div className="text-red-800 bg-black min-h-screen py-20 px-15 mx-auto md:py-30 md:px-20  lg:px-30">
      <MovieHeader movies={movies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
