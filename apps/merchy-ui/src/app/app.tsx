import React, { Suspense } from 'react';
import { GlobalStyle } from '../styles/global';
import { Navbar } from '../components/navbar';
import { HomePage } from '../components/home';
import LogIn from '../components/authenticate/LogIn';
import SignUp from '../components/authenticate/SignUp';
import ProductPage from '../components/product-page/ProductPage';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="sneakers" element={<ProductPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
