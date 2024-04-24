import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { platforms } from "../data/platforms";

import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<FetchResponse<Platform>>(
  "/platforms/lists/parents"
);
const usePlatforms = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
  return { data, error, isLoading };
};

export default usePlatforms;
