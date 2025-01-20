// App.js
import React from 'react';
import FeedbackForm from './components/FeedBackForm';
import QRCodeComponent from './components/QRcode';

const App = () => {
  return (
      <div className="header">
        <h1 className="app-heading">Feedback Collection</h1>
      <FeedbackForm />
    </div>
  );
};

export default App;
