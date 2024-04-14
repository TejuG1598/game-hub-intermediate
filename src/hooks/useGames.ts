import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import gameService from "../services/gameService";
import { Platform } from "./usePlatforms";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>{

  const config = {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  };


  const {data, error, isLoading} = useQuery<FetchResponse <Game>, Error>({
    queryKey: ['games',gameQuery],
    queryFn: () => gameService.getAll(config)
  })

  return {data, error, isLoading};
}


export default useGames;
