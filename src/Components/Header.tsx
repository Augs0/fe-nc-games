import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1 className='mt2 mb0 avenir i fw4 f1'>NC Games by August</h1>
      </Link>
    </header>
  );
}
