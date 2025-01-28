import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/products"
              element={
                <>
                  <Header />
                  <ProductPage />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <CartPage />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;