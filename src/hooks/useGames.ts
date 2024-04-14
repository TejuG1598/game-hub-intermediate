import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>{
  const fetchGames = () => {
    return apiClient.get<FetchResponse <Game>>('/games',{
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }).then(res => res.data)
  }
  const {data, error, isLoading} = useQuery<FetchResponse <Game>, Error>({
    queryKey: ['games',gameQuery],
    queryFn: fetchGames
  })

  return {data, error, isLoading};
}


export default useGames;
