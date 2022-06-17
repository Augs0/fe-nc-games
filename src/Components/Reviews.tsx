import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../utils/apiCalls';
import ReviewCard from './ReviewCard';

interface Review {
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

export default function Reviews() {
  // need to improve type here
  const [reviews, setReviews] = useState<any[]>([]);

  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((reviewsFromApi: Review[]) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);

  return (
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
  );
}
