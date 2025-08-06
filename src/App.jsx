import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark" style={{ backgroundColor: '#6f42c1' }}>
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">Arjun Portfolio</Link>

          {/* Desktop Navbar (hidden on mobile) */}
          <ul className="navbar-nav flex-row d-none d-md-flex gap-4">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">Projects</Link>
            </li>
          </ul>

          {/* Mobile Toggle Button (hidden on desktop) */}
          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu (mobile only) */}
          <div
            className="offcanvas offcanvas-end bg-dark text-white d-md-none"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/" data-bs-dismiss="offcanvas">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" data-bs-dismiss="offcanvas">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects" data-bs-dismiss="offcanvas">Projects</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
