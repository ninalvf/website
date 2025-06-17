function About() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Passionate about enhancing experiences through beauty, connection, and exceptional service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2>My Story</h2>
              <p>
                Hi! I’m Catarina Lindberg — a licensed esthetician with a passion for beauty, wellness, and communication. I'm 26 years old and proud to call Heber City, Utah, my home.
              </p>
              <p>
               Currently, I'm pursuing a degree at Utah Valley University, where I’m expanding my knowledge in communications, with graduation expected in 2026. My journey in esthetics has taught me how powerful self-care can be, not just for our skin but for our self-esteem and overall well being.
              </p>
              <p>
               I bring a versatile approach to my work, blending hands-on technique with continued learning and a genuine care for my clients. I'm currently working as a supervisor of member services at the private golf club Red Ledges, and hope to find a job in the realm of member or client services and event planning. 
              </p>
              <p>
               When I’m not studying or working, you can find me enjoying the outdoors, spending time with loved ones, or exploring new ways to grow professionally and creatively.
              </p>
            </div>
            <div className="image-content">
              <div className="about-image">
                <img 
                  src="/about.png" 
                  alt="Catarina working"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section 
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React & JavaScript</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>UI/UX Implementation</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design</h3>
              <ul>
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Visual Design</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & Version Control</li>
                <li>Design Software</li>
                <li>Content Creation</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Values Section
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">What Drives Me</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Purpose-Driven Design</h3>
              <p>Every project should solve a real problem and create meaningful value for users.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Continuous Learning</h3>
              <p>Technology evolves rapidly, and I'm committed to growing and adapting with it.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>The best results come from working together and sharing knowledge with others.</p>
            </div>
          </div>
        </div>
      </section>
      */}

      <style jsx>{`
        .about-container {
          flex: 1;
        }

        .about-header {
          padding: 3rem 1.5rem 2rem;
          text-align: center;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .about-content {
          padding: 4rem 1.5rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .text-content h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .text-content p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .about-image {
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .about-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .skills-section {
          padding: 4rem 1.5rem;
          background: var(--bg-secondary);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-primary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
        }

        .skill-category h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .skill-category ul {
          list-style: none;
        }

        .skill-category li {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-light);
        }

        .skill-category li:last-child {
          border-bottom: none;
        }

        .values-section {
          padding: 4rem 1.5rem;
          background: var(--bg-tertiary);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .value-card {
          text-align: center;
          padding: 2rem;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .value-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-header {
            padding: 2rem 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .about-content {
            padding: 3rem 1rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-section, .values-section {
            padding: 3rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-grid, .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default About;