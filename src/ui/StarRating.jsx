import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ currentRating, onRate }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
        >
          <FaStar
            className={`w-4 h-4 transition-colors ${
              star <= (hover || currentRating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default StarRating;
