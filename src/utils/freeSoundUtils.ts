export async function getSoundById(id: string | number) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env["REACT_APP_ACCESS_TOKEN"]}`
    }
  };

  return fetch(`https://freesound.org/apiv2/sounds/${id}/download/`, options);
}

export async function getListSoundsByName(name: string) {
  return fetch(
    `https://freesound.org/apiv2/search/text/?query=${name}&token=${process.env["REACT_APP_API_KEY"]}`
  );
}
