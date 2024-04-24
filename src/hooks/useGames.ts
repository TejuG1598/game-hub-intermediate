import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "../gameQueryStore";

import { FetchResponse } from "../services/api-client";
import gameService from "../services/gameService";
import { Game } from "../entities/Game";

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const fetchGames = (pageParam: number) => {
    return gameService.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });
  };

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
    queryFn: ({ pageParam }) => fetchGames(pageParam),
  });
};

export default useGames;
