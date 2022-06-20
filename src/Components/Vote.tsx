import { VoteProps } from './ReviewCard';
import { useState } from 'react';
import { patchVotes } from '../utils/apiCalls';

export default function Vote({ reviewVotes, reviewId }: VoteProps) {
  const [userVote, setUserVote] = useState(0);
  const handleUpvote = () => {
    if (userVote === 0) {
      setUserVote(1);
      patchVotes(reviewId, 1);
    } else if (userVote === -1) {
      setUserVote(0);
      patchVotes(reviewId, 1);
    }
  };
  const handleDownvote = () => {
    if (userVote === 0) {
      setUserVote(-1);
      patchVotes(reviewId, -1);
    } else if (userVote === 1) {
      setUserVote(0);
      patchVotes(reviewId, -1);
    }
  };
  return (
    <>
      <p className='f6 f5-l lh-copy' aria-live='polite'>
        Upvotes: {reviewVotes + userVote}
      </p>
      <button
        className='f6 grow b--green br-pill ba bw2 ph3 pv2 mb2 dib '
        onClick={handleUpvote}
      >
        Upvote
      </button>
      <button
        className='f6 grow b--green br-pill ba bw2 ph3 pv2 mb2 dib '
        onClick={handleDownvote}
      >
        Downvote
      </button>
    </>
  );
}
