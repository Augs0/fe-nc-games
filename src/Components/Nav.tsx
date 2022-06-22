import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/apiCalls';
import Sort from './Sort';

export default function Nav() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <>
      <nav className='bg-white black-80 tc pv4 avenir bt bb tc mw7 center mt4'>
        <ul>
          {categories.map((category) => {
            return (
              <li
                key={category.slug}
                className=' f6 f5-l bg-animate black-80 hover-bg-light-green dib pa3 ph4-l'
              >
                <Link className='nav-link' to={`/categories/${category.slug}`}>
                  {category.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Sort />
    </>
  );
}
