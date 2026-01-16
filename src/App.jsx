import MovieHeader from "./ui/MovieHeader";
import MovieList from "./ui/MovieList";
import { useMovies } from "./api/useMovies";
import Spinner from "./ui/Spinner";
import { useState } from "react";
import MovieModal from "./ui/MovieModal";

function App() {
  const { movies, isLoading } = useMovies();
  const [isOpenModal, setIsOpenModal] = useState(false);
  if (isLoading) return <Spinner />;
  return (
    <div className=" bg-gradient-to-br from-[#0b0f1a] via-[#0e1323] to-black min-h-screen py-20 px-15 mx-auto md:py-30 md:px-20  lg:px-30">
      <MovieHeader movies={movies} onAddMovie={() => setIsOpenModal(true)} />
      <MovieModal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
