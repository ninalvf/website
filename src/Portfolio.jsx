import { useState } from 'react';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Event RFP",
      category: "web",
      image: "/proposal.png",
      description: "A request for proposal for an event management project",
      technologies: ["Event Management"],
      link: "/proposal.pdf"
    },
    {
      id: 2,
      title: "Writing Sample",
      category: "design",
      image: "/writing.png",
      description: "Capital Reef field station with Utah Valley University",
      technologies: ["Public Relations"],
      link: "/reef.docx"
    },
    {
      id: 3,
      title: "Resume",
      category: "web",
      image: "/resume.png",
      description: "My personal work history",
      technologies: ["Work Experience"],
      link: "/resume.png"
    },
  ];

  const categories = ['all'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <section className="portfolio-header">
        <div className="container">
          <h1 className="page-title">My Portfolio</h1>
          <p className="page-subtitle">
            A collection of projects that showcase my skills and creativity
          </p>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} className="view-project" download={project.link}>
                      View
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Like What You See?</h2>
          <p>Let's discuss how we can work together in the future</p>
          <a href="/contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </section>

      <style jsx>{`
        .portfolio-container {
          flex: 1;
        }

        .portfolio-header {
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

        .filter-section {
          padding: 2rem 1.5rem;
          background: var(--bg-primary);
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border-medium);
          background: transparent;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .projects-section {
          padding: 3rem 1.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .view-project {
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border: 2px solid white;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
        }

        .view-project:hover {
          background: white;
          color: var(--primary);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
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

        @media (max-width: 768px) {
          .portfolio-header {
            padding: 2rem 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .filter-section {
            padding: 2rem 1rem;
          }

          .projects-section {
            padding: 2rem 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cta-section {
            padding: 3rem 1rem;
          }

          .cta-section h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Portfolio;