import React from 'react';

import api from '../services/api.js';

const Donate = () => {
  const handleDonate = async () => {
    try {
      const res = await api.post('/payment/initiate', {
        amount: 500,
        customerName: "Noyon",
        customerEmail: "noyonhossain910@gmail.com",
        customerPhone: "01572907980"
      });

      const { gatewayUrl } = res.data;
      window.location.href = gatewayUrl;
    } catch (error) {
      console.error("Payment initiation failed", error);
      alert('Payment initiation failed!');
    }
  };

  return (
    <button className="donate-button" onClick={handleDonate}>
      Donate Now
    </button>
  );
};

export default Donate;
