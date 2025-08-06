import { Helmet } from "react-helmet-async";
import './Home.css';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Arjun Govind Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio of Arjun Govind using React, Vite, and Bootstrap." />
      </Helmet>

      <div className="hero d-flex align-items-center justify-content-center text-white text-center">
        <div>
          <h1 className="display-3 fw-bold">Hey, I'm Arjun 👨‍💻</h1>
          <p className="lead">React Developer | SEO-Friendly | UI Focused</p>
          <a href="/projects" className="btn btn-primary btn-lg mt-3">Check My Projects</a>
        </div>
      </div>
    </>
  );
}

export default Home;
