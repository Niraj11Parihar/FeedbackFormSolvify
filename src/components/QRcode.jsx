import React, { useState, useEffect } from 'react';
import QRCodeLib from 'qrcode'; 

const QRCodeComponent = () => {
  const url = "https://www.youtube.com/watch?v=UUeJjFB3fw8";
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    // generate url form Image
    QRCodeLib.toDataURL(url)
      .then(setQrCodeUrl)
      .catch((err) => console.error(err));
  }, [url]);

  // process to download image 
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = qrCodeUrl; 
    a.download = "qrcode.png"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="qr-code-container">
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
      <button onClick={handleDownload}>Download QR Code</button>
    </div>
  );
};

export default QRCodeComponent;
