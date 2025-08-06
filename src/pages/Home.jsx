import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Arjun Govind Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio of Arjun Govind using React, Vite, and Bootstrap." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arjun Govind",
              "url": "https://seo-project-web.netlify.app/",
              "sameAs": [
                "http://www.linkedin.com/in/arjungovind02",
                "https://github.com/Govindaraj-web/seo-project"
              ],
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="container mt-5">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage of Arjun Govind's SEO-optimized React portfolio site.</p>
      </div>
    </>
  );
}

export default Home;
