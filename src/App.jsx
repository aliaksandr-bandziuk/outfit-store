import './App.scss';

import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.jpg';
import img5 from './assets/img/img5.jpg';
import img6 from './assets/img/img6.jpg';
import cart from './assets/img/add-to-cart.png';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="container">
          <h2>Category name</h2>
          <div className="outfits">
            <div className="outfit">
              <div className="preview">
                <img src={img1} alt="" />
              </div>
              <div className="title">
                <p className="title__text">Apollo Running Short</p>
                <p className="title__cost">$50.00</p>
              </div>
              <img className='add-to-cart' src={cart} alt="" />
            </div>
            <div className="outfit">
              <div className="preview">
                <img src={img2} alt="" />
              </div>
              <div className="title">
                <p className="title__text">Apollo Running Short</p>
                <p className="title__cost">$50.00</p>
              </div>
              <img className='add-to-cart' src={cart} alt="" />
            </div>
            <div className="outfit">
              <div className="preview">
                <img src={img3} alt="" />
              </div>
              <div className="title">
                <p className="title__text">Apollo Running Short</p>
                <p className="title__cost">$50.00</p>
              </div>
              <img className='add-to-cart' src={cart} alt="" />
            </div>
            <div className="outfit">
              <div className="preview">
                <img src={img4} alt="" />
              </div>
              <div className="title">
                <p className="title__text">Apollo Running Short</p>
                <p className="title__cost">$50.00</p>
              </div>
              <img className='add-to-cart' src={cart} alt="" />
            </div>
            <div className="outfit">
              <div className="preview">
                <img src={img5} alt="" />
              </div>
              <div className="title">
                <p className="title__text">Apollo Running Short</p>
                <p className="title__cost">$50.00</p>
              </div>
              <img className='add-to-cart' src={cart} alt="" />
            </div>
            <div className="outfit">
              <div className="preview">
                <img src={img6} alt="" />
              </div>
              <div className="title">
                <p className="title__text">Apollo Running Short</p>
                <p className="title__cost">$50.00</p>
              </div>
              <img className='add-to-cart' src={cart} alt="" />
            </div>
          </div>
        </div>
      </main>
      </div>
  );
}

export default App;
