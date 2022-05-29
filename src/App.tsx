import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:category' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
