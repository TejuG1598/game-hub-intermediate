import { create } from "zustand";

 interface GameQuery { 
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface gameQueryStoreInterface {
  gameQuery: GameQuery,
  setGenreId: (genreId: number) => void,
  setPlatformId: (platfromId: number) => void,
  setSortOrder: (sortOrder: string) => void,
  setSearchText: (searchText: string) => void
}


const useGameQueryStore = create<gameQueryStoreInterface>(set =>({
    gameQuery : {},
    setGenreId : (genreId => set(store => ({gameQuery: {...store.gameQuery,genreId}}))),
    setPlatformId : (platformId => set(store => ({gameQuery: {...store.gameQuery,platformId}}))),
    setSortOrder : (sortOrder => set(store => ({gameQuery: {...store.gameQuery,sortOrder}}))),
    setSearchText : (searchText => set(store => ({gameQuery: {searchText}})))
}))

export default useGameQueryStore