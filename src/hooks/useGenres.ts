import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { genres } from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<FetchResponse<Genre>>("/genres");

const useGenres = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
  });
  return { data, isLoading, error };
};

export default useGenres;
