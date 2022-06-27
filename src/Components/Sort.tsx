import { getReviews } from '../utils/apiCalls';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Review, stateProps } from './Reviews';

export default function Sort({ setReviews }: stateProps) {
  const [chosenSort, setChosenSort] = useState<string>('created_at');
  const [chosenOrder, setChosenOrder] = useState<string>('desc');
  let { category } = useParams();

  let [, setSearchParams] = useSearchParams({
    sort_by: 'created_at',
    order_by: 'desc',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'date') {
      setChosenSort(() => 'created_at');
    } else if (e.target.value === 'number of votes') {
      setChosenSort(() => 'votes');
    } else if (e.target.value === 'number of comments') {
      setChosenSort(() => 'comment_count');
    }
  };

  const handleOrder = () => {
    if (chosenOrder === 'desc') {
      setChosenOrder('asc');
    } else if (chosenOrder === 'asc') {
      setChosenOrder('desc');
    }
  };

  useEffect(() => {
    setSearchParams({ sort_by: chosenSort, order_by: chosenOrder });
    const categorySearchParams = {
      sort_by: chosenSort,
      order: chosenOrder,
      category: category,
    };
    getReviews(categorySearchParams).then((reviewsFromApi: Review[]) => {
      setReviews(reviewsFromApi);
    });
  }, [category, chosenSort, chosenOrder]);

  return (
    <div id='sort-select' className='avenir'>
      <label htmlFor='sortSelect'>Sort by:</label>
      <select
        defaultValue={'DEFAULT'}
        onChange={handleChange}
        name='sortSelect'
        id='sortSelect'
      >
        <option value='DEFAULT' disabled>
          Please choose an option
        </option>
        <option value='date'>Date</option>
        <option value='number of comments'>Number of comments</option>
        <option value='number of votes'>Number of votes</option>
      </select>
      <button
        className='f6 grow b--green br-pill ba bw2 ph3 pv2 ma2 dib '
        onClick={handleOrder}
      >
        Flip order
      </button>
    </div>
  );
}
