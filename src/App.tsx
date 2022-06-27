import './App.css';
import Reviews from './Components/Reviews';
import Header from './Components/Header';
import Nav from './Components/Nav';
import SingleReview from './Components/SingleReview';
import NotFound from './Components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Reviews />} />
        <Route path='/categories/:category' element={<Reviews />} />
        <Route path='/reviews/:review_id' element={<SingleReview />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
