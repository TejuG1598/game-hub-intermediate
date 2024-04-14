import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data);
  
  const {data, error, isLoading} = useQuery<FetchResponse<Platform>,Error>({
    queryKey:["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24hrs,
    initialData: { count: platforms.length, results: platforms },
  })
  return {data, error, isLoading}
};

export default usePlatforms;
