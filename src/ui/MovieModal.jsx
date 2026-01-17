import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateMovie } from "../api/useCreateMovie";
import { useEditMovie } from "../api/useEditMovie";

const MovieSchema = Yup.object({
  name: Yup.string().required("Required"),
  description: Yup.string().max(
    200,
    "Description must not exceed 200 characters"
  ),
  image: Yup.string().url("Invalid URL"),
  genres: Yup.array().min(1, "Select at least one genre"),
});
function MovieModal({ initialData = null, isUpdate, onClose, isOpen }) {
  const { createMovie, isCreating } = useCreateMovie();
  const { updateMovie, isUpdating } = useEditMovie();

  const formik = useFormik({
    initialValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      image: initialData?.image || "",
      genres: initialData?.genres || [],
      inTheaters: initialData?.inTheaters || false,
      rating: initialData?.rating || null,
    },
    validationSchema: MovieSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (initialData) {
        updateMovie(
          { id: initialData.id, updatedMovie: values },
          { onSettled: () => onClose() }
        );
        return;
      }
      createMovie(values, { onSettled: () => onClose() });
    },
  });
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-40"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="bg-blue-200 rounded-lg shadow-xl flex flex-col gap-1.5 max-w-lg w-full p-6 z-50"
        onSubmit={formik.handleSubmit}
      >
        {/* Name */}
        <label className="block text-sm font-medium  text-gray-500">Name</label>
        <input
          className="mt-1 text-gray-5 border-2 mb-4  border-blue-400 focus:outline-none p-1 rounded-lg focus:border-blue-400"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}

        {/* Description */}
        <label className="block text-sm font-medium  text-gray-500">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Description"
          className="mt-1 text-gray-5 border-2 resize-none mb-4  border-blue-400 focus:outline-none p-1 rounded-lg focus:border-blue-400"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500">{formik.errors.description}</div>
        )}

        {/* Image */}
        {/* Image preview (Update) */}
        {isUpdate && formik.values.image && (
          <img src={formik.values.image} width="120" />
        )}

        {/* Image URL */}
        <label className="block text-sm font-medium  text-gray-500">
          Image
        </label>
        <input
          className="mt-1 text-gray-5 border-2 mb-4  border-blue-400 focus:outline-none p-1 rounded-lg focus:border-blue-400"
          name="image"
          placeholder="Image URL"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.image && formik.errors.image && (
          <div className="text-red-500">{formik.errors.image}</div>
        )}

        {/* Genres */}
        <label className="block text-sm font-medium  text-gray-500">
          Genres
        </label>
        <select
          className="mt-1 text-gray-5 border-2 mb-4  border-blue-400 focus:outline-none p-1 rounded-lg focus:border-blue-400"
          name="genres"
          multiple
          value={formik.values.genres}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
        </select>
        {formik.touched.genres && formik.errors.genres && (
          <div className="text-red-500">{formik.errors.genres}</div>
        )}

        {/* In theaters */}
        <label className="flex items-center gap-1 mb-3">
          <input
            type="checkbox"
            name="inTheaters"
            checked={formik.values.inTheaters}
            onChange={formik.handleChange}
          />

          <span>In theaters</span>
        </label>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            className="bg-gray-400 text-white p-1.5 text-sm rounded-md cursor-pointer "
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-800 text-white p-1.5 text-sm rounded-md cursor-pointer "
            type="submit"
            disabled={isCreating || isUpdating}
          >
            {initialData
              ? isUpdating
                ? "Updating..."
                : "Update "
              : isCreating
              ? "Creating..."
              : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieModal;
