import { useState } from 'react';
import { postComment } from '../utils/apiCalls';
import { ReviewId } from './SingleReview';
import { stateProps } from './Comments';

export default function PostComment(props: stateProps & ReviewId) {
  const { setComments, id } = props;
  const [commentFormBody, setCommentFormBody] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentFormBody(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postComment(id, commentFormBody).then(({ newComment }) => {
      setComments((prevComments) => {
        return [newComment, ...prevComments];
      });
    });
  };

  return (
    <form id='comment-form' onSubmit={handleSubmit}>
      <label htmlFor='comment'>Your comment</label>
      <textarea
        required
        value={commentFormBody}
        name='comment'
        id='comment'
        cols={30}
        rows={10}
        onChange={handleChange}
      ></textarea>
      <label htmlFor='username'>Username</label>
      <input value='cooljmessy' type='text' />
      <button className='f6 grow b--green br-pill ba bw2 ph3 pv2 ma2 dib '>
        Post comment
      </button>
    </form>
  );
}
