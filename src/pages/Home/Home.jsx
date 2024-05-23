// Home.js
import React from 'react';
// import './Heading.css';
import Collection from './Collection';
import NewCollection from './NewCollection';
import AllCollection from './AllCollection';

const Home = () => {
  return (
  
      <div>
      <Collection/>
      <NewCollection/>
      <AllCollection/>
      </div>
  );
};

export default Home;
