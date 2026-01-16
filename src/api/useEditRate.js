import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRating } from "./movie";
import toast from "react-hot-toast";

export function useEditRate() {
  const queryClient = useQueryClient();
  const { mutate: editRate, isLoading: isRating } = useMutation({
    mutationFn: ({ id, newRating }) => updateRating(id, newRating),
    onSuccess: () => {
      toast.success("Rating updated successfully!");
      queryClient.invalidateQueries(["movies"]);
    },
    onError: () => {
      toast.error("Failed to update rating.");
    },
  });
  return { editRate, isRating };
}
