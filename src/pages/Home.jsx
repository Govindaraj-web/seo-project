import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Arjun Govind Portfolio</title>
        <meta name="description" content="Welcome to Arjun Govind’s professional portfolio." />
        <meta name="keywords" content="Frontend Developer, React, Portfolio, SEO" />
        <meta name="author" content="Arjun Govind" />
      </Helmet>
      <div className="container mt-4">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage with SEO optimization.</p>
      </div>
    </>
  );
};

export default Home;
