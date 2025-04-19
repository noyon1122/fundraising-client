import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../CSS/CreateCampaign.css'; // <-- Import external CSS

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [campaignData, setCampaignData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    currentAmount: 0,
    imageUrl: '',
  });

  const handleChange = (e) => {
    setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(campaignData)
       await api.post('/campaigns', campaignData);
      alert('Campaign created successfully!');
      navigate('/campaigns');
    } catch (error) {
      console.error('Error creating campaign:', error);
      alert('Failed to create campaign');
    }
  };

  return (
    <div className="create-campaign-container">
      <h2>Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Campaign Description"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="goalAmount"
          placeholder="Goal Amount"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="currentAmount"
          value={campaignData.currentAmount}
          readOnly
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
