import React, { useCallback, useState } from "react";
import {
  createObjectURL,
  getListSoundsByName,
  getSoundById
} from "./freeSoundUtils";

interface useFreeSoundArgs {
  query: string;
}

interface useFreeSoundReturn {
  listOfSounds: { id: number; name: string; player: JSX.Element }[];
  loading: boolean;
  errorRequest: string | undefined;
  onSearch: () => void;
}

const playerStyle = {
  width: "95%",
  margin: "10px 0 10px 0"
};

const useFreeSound = ({ query }: useFreeSoundArgs): useFreeSoundReturn => {
  const [listOfSounds, setListOfSounds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState<string | undefined>(
    undefined
  );

  const onSearch = useCallback(() => {
    setLoading(true);
    setErrorRequest(undefined);
    getListSoundsByName(query)
      .then(async (response) => {
        const json = await response.json();
        if (!json.results.length) {
          setErrorRequest("Request response empty result");
        }

        const result: any = [];

        try {
          for (let sound of json.results) {
            const songSrc = createObjectURL(
              await (await getSoundById(sound.id)).blob()
            );
            result.push({
              id: sound.id,
              name: sound.name,
              player: <audio controls style={playerStyle} src={songSrc} />
            });
          }
        } catch (error) {
          setErrorRequest(`Error download sound, code error: ${error.message}`);
        }

        setListOfSounds(result);
      })
      .catch((error) => {
        console.log("error", error);
        setErrorRequest(
          `Error fetch list of sound, code error: ${error.message}`
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return {
    listOfSounds,
    loading,
    errorRequest,
    onSearch
  };
};

export default useFreeSound;
