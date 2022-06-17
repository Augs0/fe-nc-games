import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://nc-games-august.herokuapp.com/api',
});

export const getCategories = () => {
  return apiUrl.get('/categories').then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = (category) => {
  let path = '/reviews';
  if (category) path += `?category=${category}`;
  return apiUrl.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewById = (review_id) => {
  let path = `/reviews/${review_id}`;
  return apiUrl.get(path).then(({ data }) => {
    return data;
  });
};
