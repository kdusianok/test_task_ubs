const httpClient = (url: string, options?: Record<string, unknown>) => {
  return fetch(url, options).then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} ${response.statusText}`);
  });
};

export default httpClient;
