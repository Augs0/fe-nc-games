import Moment from 'react-moment';
import { useState } from 'react';
import { deleteComment } from '../utils/apiCalls';
import { SingleCommentProps } from './Comments';

export default function CommentCard({ commentInfo }: SingleCommentProps) {
  const { author, body, created_at, votes, comment_id } = commentInfo;
  const [deleteCommentStatus, setDeleteCommentStatus] = useState(false);

  const handleDelete = (comment_id: number) => {
    deleteComment(comment_id).then(() => {
      setDeleteCommentStatus(true);
    });
  };

  return deleteCommentStatus !== true ? (
    <article className='bt bb b--black-40 ma2' key={comment_id}>
      <p className='f6 f5-l lh-copy ma1 body'>{body}</p>
      <p className='f6 f5-l lh-copy ma1'>
        Posted by {author} on
        <Moment format='DD/MM/YYYY'>{created_at}</Moment>
      </p>
      <p className='f6 f5-l lh-copy ma1'>Votes for this comment: {votes}</p>
      <button
        className='f6 grow b--purple br-pill ba bw2 ph3 pv2 ma2 dib '
        onClick={() => handleDelete(comment_id)}
      >
        Delete comment
      </button>
    </article>
  ) : null;
}
