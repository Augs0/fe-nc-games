import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviewById } from '../utils/apiCalls';
import Comments from './Comments';
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

export interface openProp {
  isOpen: boolean;
}

export interface ReviewId {
  id: number;
}

export default function SingleReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [currReview, setCurrReview] = useState<Review | null>(null);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi: Review) => {
      setCurrReview(reviewFromApi);
    });
  }, [review_id]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(!isOpen);
  };

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
      <button
        className='f6 grow b--green br-pill ba bw2 ph3 pv2 ma2 dib '
        id='show-comments-btn'
        onClick={handleClick}
      >
        View comments
      </button>
      <Comments isOpen={isOpen} id={currReview.review_id} />
    </section>
  ) : (
    <p className='measure lh-copy'>Something went wrong</p>
  );
}
