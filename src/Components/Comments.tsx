import { openProp, ReviewId } from './SingleReview';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';

import { getComments } from '../utils/apiCalls';

export interface SingleComment {
  author: string;
  votes: number;
  body: string;
  comment_id: number;
  created_at: string;
}

export default function Comments(props: openProp & ReviewId) {
  const { isOpen, id } = props;
  const [comments, setComments] = useState<SingleComment[] | []>([]);

  useEffect(() => {
    getComments(id).then((commentsFromApi: SingleComment[]) => {
      console.log(commentsFromApi);
      setComments(commentsFromApi);
    });
  }, [id]);

  return isOpen === true ? (
    <section>
      <>
        <h2>Comments</h2>
        {comments.map((comment: SingleComment) => {
          return (
            <article className='bt bb b--black-40 ma2' key={comment.comment_id}>
              <p className='f6 f5-l lh-copy ma1 body'>{comment.body}</p>
              <p className='f6 f5-l lh-copy ma1'>
                Posted by {comment.author} on{' '}
                <Moment format='DD/MM/YYYY'>{comment.created_at}</Moment>
              </p>
              <p className='f6 f5-l lh-copy ma1'>
                Votes for this comment: {comment.votes}
              </p>
            </article>
          );
        })}
      </>
    </section>
  ) : null;
}
