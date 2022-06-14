import './App.css';
import Reviews from './Components/Reviews';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Reviews />} />
        <Route path='/categories/:category' element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
