function DeleteModal({ onClose, isOpen, deleteMovie, isDeleting }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center  z-40"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 z-50"
      >
        <h2 className="text-2xl font-semibold text-blue-500 text-center mb-3">
          Confirm Deletion
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Are you sure you want to permanently delete this?
        </p>
        <div className="flex justify-between items-center">
          <button
            className="bg-gray-400 text-white p-1.5 text-sm rounded-md cursor-pointer "
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white p-1.5 text-sm rounded-md cursor-pointer "
            type="submit"
            onClick={deleteMovie}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Confirm Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
