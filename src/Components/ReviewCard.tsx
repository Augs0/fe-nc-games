import { Link } from 'react-router-dom';
import { ReviewProps } from './Reviews';
import Moment from 'react-moment';
import Vote from './Vote';

export interface VoteProps {
  reviewVotes: number;
  reviewId: number;
}

export default function ReviewCard({ reviewInfo }: ReviewProps) {
  return (
    <>
      <h2 className='highlight f3 fw1 baskerville mt0 lh-title'>
        {reviewInfo.title}
      </h2>
      <img className='db' src={reviewInfo.review_img_url} alt='' />
      <p className='f6 f5-l lh-copy'>Category: {reviewInfo.category}</p>

      <p className='f6 f5-l lh-copy'>Designed by: {reviewInfo.designer}</p>

      <p className='f6 f5-l lh-copy'>
        Reviewed by: {reviewInfo.owner} on{' '}
        <Moment format='DD/MM/YYYY'>{reviewInfo.created_at}</Moment>
      </p>

      <Vote reviewVotes={reviewInfo.votes} reviewId={reviewInfo.review_id} />
      <Link
        className='f6 link review-link ba ph3 pv2 mb2 dib dark-green'
        to={`/reviews/${reviewInfo.review_id}`}
      >
        Read this review
      </Link>
    </>
  );
}
