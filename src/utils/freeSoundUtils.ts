import httpClient from "./httpClient";

export async function getSoundById(id: string | number) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env["REACT_APP_ACCESS_TOKEN"]}`
    }
  };

  return httpClient(
    `https://freesound.org/apiv2/sounds/${id}/download/`,
    options
  );
}

export async function getListSoundsByName(name: string, pageSize: number = 3) {
  return httpClient(
    `https://freesound.org/apiv2/search/text/?query=${name}&page_size=${pageSize}&token=${process.env["REACT_APP_API_KEY"]}`
  );
}

export function createObjectURL(object: any) {
  return window.URL
    ? window.URL.createObjectURL(object)
    : window.webkitURL.createObjectURL(object);
}
