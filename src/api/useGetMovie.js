import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "./movie";

export function useGetMovie() {
  const { data: movie, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovieById,
  });
  return { movie, isLoading };
}
