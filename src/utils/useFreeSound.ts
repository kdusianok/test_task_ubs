import { useCallback, useState } from "react";
import { getListSoundsByName } from "./freeSoundUtils";

interface useFreeSoundArgs {
  query: string;
}

const useFreeSound = ({ query }: useFreeSoundArgs) => {
  const [listOfSounds, setListOfSounds] = useState([]);
  const [errorRequest, setErrorRequest] = useState(undefined);

  const onSearch = useCallback(() => {
    getListSoundsByName(query)
      .then(async (response) => {
        setListOfSounds(await response.json());
      })
      .catch((error) => {
        setErrorRequest(error);
      });
  }, [query]);

  return {
    listOfSounds,
    errorRequest,
    onSearch
  };
};

export default useFreeSound;
