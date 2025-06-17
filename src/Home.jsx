import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Catarina Lindberg</span>
          </h1>
          <p className="hero-subtitle">
            Licensed Esthetician and future graduate of Utah Valley University.
          </p>
          <p className="hero-description">
            Member Services Supervisor at Red Ledges Golf Club
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              My Portfolio
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder-box">
            <img 
              src="/smile.png" 
              alt="Catarina Lindberg"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Client Relations</h3>
              <p>Building strong, personalized connections to ensure every client feels valued and understood.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Event Planning</h3>
              <p>Designing and coordinating unforgettable events tailored to your unique vision and needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Esthetics</h3>
              <p>Enhancing natural beauty through skilled, creative, and professional makeup artistry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Have any questions?</h2>
          <p>I'm always excited to work on new projects and collaborate with you.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          flex: 1;
        }

        .hero-section {
          display: flex;
          align-items: center;
          min-height: 70vh;
          padding: 2rem 1.5rem;
          gap: 3rem;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .highlight {
          color: var(--primary);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.875rem 2rem;
          border-radius: var(--radius-sm);
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          display: inline-block;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          color:white;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary);
          border-color: var(--primary);
        }

        .btn-secondary:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

.image-placeholder-box {
  width: 500px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* Ensures the image covers the box without distortion */
  object-position: center top;  /* Keeps the top of the image visible */
}
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .features-section {
          padding: 4rem 1.5rem;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: var(--text-primary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          padding: 2rem;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-section {
          padding: 4rem 1.5rem;
          background: var(--bg-tertiary);
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .cta-section p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            min-height: auto;
            padding: 3rem 1rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .btn {
            padding: 0.75rem 1.5rem;
          }

          .image-placeholder {
            width: 250px;
            height: 250px;
          }

          .features-section {
            padding: 3rem 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;