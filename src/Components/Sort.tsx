import React from 'react';

export default function Sort() {
  return (
    <div>
      <label htmlFor='sortSelect'>Sort by:</label>
      <select name='sortSelect' id='sortSelect'>
        <option value='date'>Date</option>
        <option value='number of comments'>Number of comments</option>
        <option value='number of votes'>Number of votes</option>
      </select>
    </div>
  );
}
