import React from "react";
import useGenres from "./useGenres";
import { Genre } from "../entities/Genre";

const useGenre = (id: number) => {
  const { data } = useGenres();
  return data?.results.find((genre) => genre.id === id);
};

export default useGenre;
