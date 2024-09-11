import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import BodyContainer from './components/BodyContainer/BodyContainer.tsx';
import ProductDetails from './components/ProductDetails/ProductDetails.tsx';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<BodyContainer/>} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
