import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviewById } from '../utils/apiCalls';
import Moment from 'react-moment';

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

export default function SingleReview() {
  // const [currReview, setCurrReview] = useState<Review>({} as Review);
  const [currReview, setCurrReview] = useState<Review | null>(null);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi: Review) => {
      setCurrReview(reviewFromApi);
    });
  }, [review_id]);

  return currReview !== null ? (
    <section className='mw9 center pa3 pa5-ns' id='review-section'>
      <h2 className='highlight f2'>{currReview.title}</h2>
      <p className='db measure lh-copy'>written by: {currReview.owner}</p>
      <img
        className='w-100 f5 measure'
        src={currReview.review_img_url}
        alt={currReview.title}
      />
      <p className='measure lh-copy'>Comments: {currReview.comment_count}</p>
      <p className='measure lh-copy'>
        Posted on: <Moment format='DD/MM/YYYY'>{currReview.created_at}</Moment>
      </p>
      <p className='body measure lh-copy'>{currReview.review_body}</p>
    </section>
  ) : (
    <p className='measure lh-copy'>Something went wrong</p>
  );
}
