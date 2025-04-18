import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import '../CSS/CampaignDetails.css';  // <--- import external CSS

const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await api.get(`/campaigns/${id}`);
        setCampaign(res.data);
      } catch (error) {
        console.error('Error fetching campaign:', error);
      }
    };
    fetchCampaign();
  }, [id]);

  const handleDonate = async () => {
    if (!donationAmount) {
      alert('Please enter donation amount');
      return;
    }
    try {
      await api.post(`/donations/${id}?amount=${donationAmount}`);
      alert('Thank you for your donation!');
      setDonationAmount('');
    } catch (error) {
      console.error('Donation failed:', error);
      alert('Donation failed');
    }
  };

  if (!campaign) return <div className="loading">Loading...</div>;

  return (
    <div className="details-container">
      <div className="details-card">
        {campaign.imageUrl && (
          <img src={campaign.imageUrl} alt="Campaign" />
        )}
        <h2>{campaign.title}</h2>
        <p>{campaign.description}</p>
        <p><strong>Goal:</strong> ${campaign.goalAmount}</p>
        <p><strong>Raised:</strong> ${campaign.currentAmount}</p>

        <div className="donation-box">
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter amount"
            className="donation-input"
          />
          <button onClick={handleDonate} className="donate-button">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
