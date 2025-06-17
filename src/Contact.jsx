import { useState } from 'react';
import { FaMoon, FaSun, FaInstagram, FaLinkedin, FaEnvelope, FaYoutube, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

function Contact() {
  
  return (
    <div className="contact-container">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Let's Connect</h1>
          <p className="page-subtitle">I’d love to learn more about you and explore how we can collaborate together.</p>
        </div>
      </section>

      {/* Content */}
      <section className="contact-content">
        <div className="container">
          <div className="content-flex">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope size={24} />
                  <div className="method-content">
                    <h3>Email</h3>
                    <a href="mailto:e.catarina.l@outlook.com">e.catarina.l@outlook.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaLinkedin size={24} />
                  <div className="method-content">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/catarina-lindberg-4902a0133/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/catarina-lindberg
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaYoutube size={24} />
                  <div className="method-content">
                    <h3>YouTube</h3>
                    <a href="https://www.youtube.com/@silverelle_5810" target="_blank" rel="noopener noreferrer">
                      youtube.com/@silverelle_5810
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaInstagram size={24} />
                  <div className="method-content">
                    <h3>Instagram</h3>
                    <a href="https://www.instagram.com/e.catarina.l/" target="_blank" rel="noopener noreferrer">
                      @e.catarina.l
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaPhone size={24} />
                  <div className="method-content">
                    <h3>Phone</h3>
                    <a href="tel:+18018607171">+1-801-860-7171</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form or Image Placeholder */}
            <div className="contact-form-section">
              <div className="image-placeholder-box">
                <img src="/cat.png" alt="Contact visual" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-container {
          flex: 1;
        }

        .contact-header {
          padding: 3rem 1.5rem 2rem;
          text-align: center;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .page-title {
          font-size: 2.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          padding: 4rem 1.5rem;
        }

        .content-flex {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .contact-info,
        .contact-form-section {
          flex: 1 1 300px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
        }

        .method-content h3 {
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }

        .method-content a {
          color: var(--primary);
          word-break: break-word;
        }

        .image-placeholder-box {
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder-box img {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .content-flex {
            flex-direction: column;
          }

          .contact-content {
            padding: 2rem 1rem;
          }

          .image-placeholder-box {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
