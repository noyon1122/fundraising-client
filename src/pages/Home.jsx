import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Hero from './Hero';
import Navbar from '../components/navbar/Navbar';

const Home = () => {



  return (
    <div>
   
      <Hero></Hero>
      
    </div>
  );
  
};

export default Home;
