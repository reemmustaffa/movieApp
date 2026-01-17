import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMovie as updateMovieApi } from "./movie";
import toast from "react-hot-toast";

export function useEditMovie() {
  const queryClient = useQueryClient();
  const { mutate: updateMovie, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, updatedMovie }) => updateMovieApi({ id, updatedMovie }),
    onSuccess: () => {
      toast.success("Movie updated successfully!");
      queryClient.invalidateQueries(["movies"]);
    },
    onError: () => toast.error("Failed to update movie"),
  });
  return { updateMovie, isUpdating };
}
