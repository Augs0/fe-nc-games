import { ReviewProps } from './Reviews';

export default function ReviewCard({ reviewInfo }: ReviewProps) {
  return (
    <>
      <h2>{reviewInfo.title}</h2>
      <img src={reviewInfo.review_img_url} alt='' />
      <p>Category: {reviewInfo.category}</p>
      <p>Designed by: {reviewInfo.designer}</p>
      <p>
        Reviewed by: {reviewInfo.owner} on {reviewInfo.created_at}
      </p>
      <p>Upvotes: {reviewInfo.votes}</p>
    </>
  );
}
