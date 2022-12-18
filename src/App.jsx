import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Home from './pages/Home';
import FullOutfit from './pages/FullOutfit/FullOutfit';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <main> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/outfit' element={<FullOutfit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      {/* </main> */}
      </div>
  );
}

export default App;
