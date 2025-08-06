import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Arjun Govind Portfolio</title>
      </Helmet>

      <div className="container py-5">
        <h2 className="mb-4 text-center">Projects Showcase</h2>
        <div className="row g-4">
          {[
            {
              title: "SEO Portfolio Website",
              desc: "Built with React, Vite, Bootstrap and Helmet for SEO.",
            },
            {
              title: "Real-Time Chat App",
              desc: "Node.js + Socket.io app with chat rooms and live updates.",
            },
            {
              title: "eCommerce UI",
              desc: "Modern, responsive shopping UI built with Bootstrap.",
            }
          ].map((project, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
