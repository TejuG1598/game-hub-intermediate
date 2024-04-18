import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem, Text
} from "@chakra-ui/react";
import useGameQueryStore from "../gameQueryStore";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading ..</p>;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        <Text>Genres</Text>
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
