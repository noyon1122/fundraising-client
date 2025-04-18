import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Admin.css'; // External CSS

const Admin = () => {
  const navigate = useNavigate();

  const handleCreateCampaign = () => {
    navigate('/create-campaign');
  };

  const handleViewCampaigns = () => {
    navigate('/campaigns');
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-buttons">
        <button onClick={handleCreateCampaign}>Create New Campaign</button>
        <button onClick={handleViewCampaigns}>View All Campaigns</button>
      </div>
    </div>
  );
};

export default Admin;
