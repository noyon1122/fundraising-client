import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../CSS/CampaignList.css';  // <--- import external CSS

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await api.get('/campaigns');
        setCampaigns(res.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="campaigns-container">
      <h1 className="campaigns-heading">Fundraising Campaigns</h1>
      <div className="campaigns-grid">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="campaign-card">
            {campaign.imageUrl && (
              <img src={campaign.imageUrl} alt="Campaign" />
            )}
            <h2>{campaign.title}</h2>
            <p>{campaign.description}</p>
            <p><strong>Goal:</strong> ${campaign.goalAmount}</p>
            <p><strong>Raised:</strong> ${campaign.currentAmount}</p>
            <Link to={`/campaign/${campaign.id}`} className="view-button">View & Donate</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
