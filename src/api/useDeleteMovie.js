import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie as deleteMovieApi } from "./movie";
import toast from "react-hot-toast";

export function useDeleteMovie() {
  const queryClient = useQueryClient();
  const { mutate: deleteMovie, isLoading: isDeleting } = useMutation({
    mutationFn: deleteMovieApi,
    onSuccess: () => {
      toast.success("Movie deleted successfully");
      queryClient.invalidateQueries(["movies"]);
    },
    onError: () => {
      toast.error("Failed to delete movie");
    },
  });
  return { deleteMovie, isDeleting };
}
