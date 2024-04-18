import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore";
import usePlatform from "../hooks/usePlatform";
import usePlatforms, { Platform } from "../hooks/usePlatforms";



const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s =>s.setPlatformId)
  const platform = usePlatform(platformId ?? 0)

  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
