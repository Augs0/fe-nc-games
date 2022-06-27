import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='vh-100 tc ph5 lh-copy baskerville'>
      <h2 className='f1 f-headline-l code mb3 fw9 dib tracked-tight green'>
        404
      </h2>
      <p className='tc f1-l fw1'>
        Sorry, we can't find the page you are looking for.
      </p>

      <Link to='/' className='fw1 i tc mt4 mt5-l f4 f3-l green'>
        Want to go home?
      </Link>
    </section>
  );
}
