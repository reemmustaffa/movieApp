import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMovie as createMovieApi } from "./movie";
import toast from "react-hot-toast";

export function useCreateMovie() {
  const queryClient = useQueryClient();
  const { mutate: createMovie, isLoading: isCreating } = useMutation({
    mutationFn: createMovieApi,
    onSuccess: () => {
      toast.success("Movie created successfully!");
      queryClient.invalidateQueries(["movies"]);
    },
    onError: () => {
      toast.error("Failed to create movie");
    },
  });
  return { createMovie, isCreating };
}
