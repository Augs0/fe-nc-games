import { getReviews } from '../utils/apiCalls';
import { useState } from 'react';
import { Review, stateProps } from './Reviews';

export default function Sort({ setReviews }: stateProps) {
  const [chosenSort, setChosenSort] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'date') {
      setChosenSort('created_at');
    } else if (e.target.value === 'number of votes') {
      setChosenSort('votes');
    } else if (e.target.value === 'number of comments') {
      setChosenSort('comment_count');
    }
    getReviews(null, chosenSort).then((reviewsFromApi: Review[]) => {
      setReviews(reviewsFromApi);
    });
  };

  return (
    <div id='sort-select' className='avenir'>
      <label htmlFor='sortSelect'>Sort by:</label>
      <select onChange={handleChange} name='sortSelect' id='sortSelect'>
        <option value='date'>Date</option>
        <option value='number of comments'>Number of comments</option>
        <option value='number of votes'>Number of votes</option>
      </select>
    </div>
  );
}
