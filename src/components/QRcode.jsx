import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLib from 'qrcode'; // Import the `qrcode` library to generate data URL

const QRCodeComponent = () => {
  const url = "https://www.youtube.com/watch?v=UUeJjFB3fw8";
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    // Generate the QR code image URL using `qrcode` library
    QRCodeLib.toDataURL(url)
      .then(setQrCodeUrl)
      .catch((err) => console.error(err));
  }, [url]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = qrCodeUrl; // Use the generated QR code URL
    a.download = "qrcode.png"; // Set download file name
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
