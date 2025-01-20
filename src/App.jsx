// App.js
import React from 'react';
import FeedbackForm from './components/FeedBackForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QRCodeComponent from './components/QRcode';

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FeedbackForm/>}></Route>
        <Route path='/qr' element={<QRCodeComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
