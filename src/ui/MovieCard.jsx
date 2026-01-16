import { FaEdit, FaTrash } from "react-icons/fa";
import { useEditRate } from "../api/useEditRate";
import StarRating from "./StarRating";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { useDeleteMovie } from "../api/useDeleteMovie";

function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  const { editRate } = useEditRate();
  const { deleteMovie, isDeleting } = useDeleteMovie();
  function handleRate(newRating) {
    editRate({ id: movie.id, newRating });
  }
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden h-full">
      <div className="relative w-full aspect-[2/3]">
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-500 text-sm font-bold px-2 py-1 rounded-full">
          ⭐ {movie.rating ? movie.rating : "-"}
        </div>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-semibold text-md mb-1">{movie.name}</h3>
        <div className="flex gap-2 flex-wrap mb-2">
          {movie.genres?.map((genre) => (
            <span
              key={genre}
              className="bg-indigo-600 text-indigo-100 text-xs px-2 py-0.5 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2 flex-grow">
          {movie.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="text-xs font-semibold mt-auto">
            Rating: ({movie.rating} / 5)
            <StarRating onRate={handleRate} currentRating={movie.rating} />
          </div>
          <div className="flex gap-2">
            <button className="text-blue-500 bg-gray-100 flex justify-center items-center rounded-full w-8 h-8 hover:text-blue-700 cursor-pointer">
              <FaEdit />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="text-red-500 bg-gray-100 flex justify-center items-center rounded-full w-8 h-8 hover:text-red-700 cursor-pointer"
            >
              <FaTrash />
            </button>
            <DeleteModal
              onClose={() => setIsOpen(false)}
              isOpen={isOpen}
              deleteMovie={() => deleteMovie(movie.id)}
              isDeleting={isDeleting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
