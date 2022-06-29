import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getReviewById } from '../utils/apiCalls';
import Comments from './Comments';
import Moment from 'react-moment';
import NotFound from './NotFound';
import Loading from './Loading';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currReview, setCurrReview] = useState<Review | null>(null);
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const { review_id } = useParams();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewFromApi: Review) => {
        setCurrReview(reviewFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorStatus(true);
      });
  }, [review_id]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const currentBtn = btnRef.current;
    if (currentBtn !== null) {
      if (currentBtn.ariaExpanded === 'false') {
        currentBtn.ariaExpanded = 'true';
      } else if (currentBtn.ariaExpanded === 'true') {
        currentBtn.ariaExpanded = 'false';
      }
    }
    setIsOpen(!isOpen);
  };

  if (errorStatus) return <NotFound />;
  if (isLoading) return <Loading isLoading={isLoading} />;

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

      <button
        className='f6 grow b--green br-pill ba bw2 ph3 pv2 ma2 dib '
        id='show-comments-btn'
        onClick={handleClick}
        aria-expanded='false'
        aria-controls='comments'
        ref={btnRef}
      >
        {isOpen ? 'Hide comments' : 'Show comments'}
      </button>
      <Comments isOpen={isOpen} id={currReview.review_id} />
    </section>
  ) : null;
}
