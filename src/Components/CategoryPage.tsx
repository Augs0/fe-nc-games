import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Review {
  review_id: number;
  title: string;
  category: string;
  created_at: string;
  designer: string;
  owner: string;
  review_body: string;
  review_img_url: string;
  votes: number;
}

export interface ReviewProps {
  reviewInfo: Review;
}

export default function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios('https://nc-news-august.herokuapp.com/api/reviews')
      .then(({ data: { reviews } }) => {
        setReviews(reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reviews]);

  return (
    <>
      <nav>
        <li>
          <Link to='/categories/dexterity'>Dexterity</Link>
        </li>
        <li>
          <Link to='/categories/hidden-roles'>Hidden Roles</Link>
        </li>
        <li>
          <Link to='/categories/strategy'>Strategy</Link>
        </li>
      </nav>
      <section id='reviews-list'>
        {reviews.map((review: Review) => {
          return (
            <article
              key={review.review_id}
              className='review-article'
            ></article>
          );
        })}
      </section>
    </>
  );
}
