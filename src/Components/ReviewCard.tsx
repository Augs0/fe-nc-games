import { Link } from 'react-router-dom';
import { ReviewProps } from './Reviews';

export default function ReviewCard({ reviewInfo }: ReviewProps) {
  return (
    <>
      <h2 className='f3 fw1 baskerville mt0 lh-title'>{reviewInfo.title}</h2>
      <img className='db' src={reviewInfo.review_img_url} alt='' />
      <p className='f6 f5-l lh-copy'>Category: {reviewInfo.category}</p>

      <p className='f6 f5-l lh-copy'>Designed by: {reviewInfo.designer}</p>

      <p className='f6 f5-l lh-copy'>
        Reviewed by: {reviewInfo.owner} on {reviewInfo.created_at}
      </p>

      <p className='f6 f5-l lh-copy'>Upvotes: {reviewInfo.votes}</p>
      <Link
        className='f6 link review-link ba ph3 pv2 mb2 dib dark-green'
        to={`/reviews/${reviewInfo.review_id}`}
      >
        Read this review
      </Link>
    </>
  );
}
