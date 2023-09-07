import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page ) => {
  const options = {
    params: {
      key: '35974006-9154e8a7bbd4a82b458bacded',
      q: query ,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page ,
      per_page: 12,
    },
  };

    const response = await axios.get(axios.defaults.baseURL, options);
  return response.data;
};