import React from 'react';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Arjun Govind Portfolio</title>
        <meta name="description" content="Explore the projects by Arjun Govind, showcasing frontend development skills and SEO implementation." />
        <meta name="keywords" content="Projects, Arjun Govind, React Projects, Web Development, SEO Portfolio" />
        <meta name="author" content="Arjun Govind" />
      </Helmet>

      <div className="container mt-4">
        <h1>Projects</h1>
        <ul>
          <li><strong>SEO Portfolio Website:</strong> Built using React, Vite, Bootstrap, and SEO best practices.</li>
          <li><strong>Chat App:</strong> Real-time socket chat app using Node.js and Socket.io.</li>
          <li><strong>eCommerce UI:</strong> Clean and responsive frontend for shopping websites.</li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
