import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Arjun Govind Portfolio</title>
        <meta name="description" content="Learn more about Arjun Govind – a passionate frontend developer based in Bengaluru." />
        <meta name="keywords" content="About Arjun Govind, Frontend Developer, React Developer, Web Developer" />
        <meta name="author" content="Arjun Govind" />
      </Helmet>

      <div className="container mt-4">
        <h1>About Me</h1>
        <p>Hello! I’m Arjun Govind, a frontend developer with experience in building modern web applications using React, JavaScript, and Bootstrap. I’m focused on performance, clean UI, and SEO optimization.</p>
      </div>
    </>
  );
};

export default About;
