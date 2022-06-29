import { PuffLoader } from 'react-spinners';
import { useState } from 'react';
import { loadingProp } from './Reviews';

export default function Loading({ isLoading }: loadingProp) {
  const [color, setColor] = useState('darkgreen');

  return (
    <div className='flex flex-column ma4 items-center'>
      <PuffLoader color={color} loading={isLoading} size={150} />
      <p>Loading...</p>
    </div>
  );
}
