import React, { Suspense } from 'react';
import { GlobalStyle } from '../styles/global';
import { Navbar } from '@merchy/ui-shared';
import { HomePage } from '../pages';
import { LogIn, SignUp, ProductPage } from '@merchy/ui-shared';
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
