import { openProp, ReviewId } from './SingleReview';
import { useState, useEffect } from 'react';
import PostComment from './PostComment';
import CommentCard from './CommentCard';
import { getComments } from '../utils/apiCalls';

export interface SingleComment {
  author: string;
  votes: number;
  body: string;
  comment_id: number;
  created_at: string;
}

export interface SingleCommentProps {
  commentInfo: SingleComment;
}

export interface stateProps {
  setComments: React.Dispatch<React.SetStateAction<[] | SingleComment[]>>;
}

export default function Comments(props: openProp & ReviewId) {
  const { isOpen, id } = props;

  const [comments, setComments] = useState<SingleComment[] | []>([]);

  useEffect(() => {
    getComments(id).then((commentsFromApi: SingleComment[]) => {
      setComments(commentsFromApi);
    });
  }, [id]);

  return isOpen === true ? (
    <section id='comments'>
      <PostComment setComments={setComments} id={id} />
      <h2>Comments</h2>

      {comments.map((comment: SingleComment) => {
        return <CommentCard commentInfo={comment} />;
      })}
    </section>
  ) : null;
}
