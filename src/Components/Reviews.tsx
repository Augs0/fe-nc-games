import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../utils/apiCalls';
import ReviewCard from './ReviewCard';
import NotFound from './NotFound';
import Sort from './Sort';
import Loading from './Loading';

export interface Review {
  review_id: number;
  title: string;
  category: string;
  created_at: string;
  designer: string;
  owner: string;
  review_body: string;
  review_img_url: string;
  votes: number;
  comment_count: string;
}

export interface ReviewProps {
  reviewInfo: Review;
}

export interface stateProps {
  setReviews: React.Dispatch<React.SetStateAction<[] | Review[]>>;
  setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface loadingProp {
  isLoading: boolean;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { category } = useParams();

  useEffect(() => {
    setErrorStatus(false);
    getReviews(category)
      .then((reviewsFromApi: Review[]) => {
        setReviews(reviewsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) {
          setErrorStatus(true);
        }
      });
  }, [category]);

  if (errorStatus) return <NotFound />;
  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <>
      <nav>
        <Sort setErrorStatus={setErrorStatus} setReviews={setReviews} />
      </nav>
      <section className='mw9 center' id='reviews-list'>
        {reviews.map((review: Review) => {
          return (
            <article
              className='bt bb b--black-10 review-article'
              key={review.review_id}
            >
              <ReviewCard reviewInfo={review} />
            </article>
          );
        })}
      </section>
    </>
  );
}
