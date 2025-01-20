// QRCode.js
import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeComponent = () => {
    const url="https://www.youtube.com/watch?v=UUeJjFB3fw8"
    return (
    <div className="qr-code-container">
      <QRCode value={url} size={256} />
    </div>
  );
};

export default QRCodeComponent;
