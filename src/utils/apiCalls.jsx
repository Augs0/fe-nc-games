import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://nc-games-august.herokuapp.com/api',
});

export const getReviews = (category) => {
  let path = '/reviews';
  if (category) path += `?category=${category}`;
  return apiUrl.get(path).then(({ data }) => {
    return data.reviews;
  });
};
