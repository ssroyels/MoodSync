import axios from 'axios';

export const getAccessToken = async () => {
  const res = await axios.post('http://localhost:4000/Music/get-token');
  return res.data.token;
};

export const searchMusic = async (query, token) => {
  const res = await axios.get(`https://api.spotify.com/v1/search`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: query,
      type: 'track',
      limit: 50,
    },
  });
  return res.data.tracks.items;
};
