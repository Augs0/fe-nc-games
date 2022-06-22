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

export const patchVotes = (review_id, inc_votes) => {
  return apiUrl
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (review_id) => {
  return apiUrl.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postComment = (review_id, body) => {
  return apiUrl
    .post(`reviews/${review_id}/comments`, {
      username: 'cooljmessy',
      body: body,
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};
