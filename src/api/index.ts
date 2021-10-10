const URL = 'https://6033c4d8843b15001793194e.mockapi.io/api/locations';

export type LocationData = {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  userCount: number;
};

const getLocations = async (): Promise<LocationData[]> => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  if (response.status !== 200) {
    throw response.status;
  }
  return response.json();
};

export { getLocations };
