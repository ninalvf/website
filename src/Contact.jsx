import { useState } from 'react';
import { FaMoon, FaSun, FaInstagram, FaLinkedin, FaEnvelope, FaYoutube, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Let's Connect</h1>
          <p className="page-subtitle">
            I’d love to learn more you and explore how we can collaborate together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="container">
          <div className="content-grid">
            {/* Contact Information */}
            <div className="contact-info">              

              <div className="contact-methods">
                <div className="contact-method">
                 <FaEnvelope size={24}/>
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
                      https://www.linkedin.com/in/catarina-lindberg-4902a0133
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaYoutube size={24} />
                  <div className="method-content">
                    <h3>YouTube</h3>
                    <a href="https://www.youtube.com/@silverelle_5810" target="_blank" rel="noopener noreferrer">
                      https://www.youtube.com/@silverelle_5810
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaInstagram size={24}/>
                  <div className="method-content">
                    <h3>Instagram</h3>
                    <a href="https://www.instagram.com/e.catarina.l/" target="_blank" rel="noopener noreferrer">
                      https://www.instagram.com/e.catarina.l
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaPhone size={24}/>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <a href="tel:+18018607171">
                      +1-801-860-7171
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
             <div className="image-placeholder-box">
              <img src="/cat.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
     

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

.image-placeholder-box {
  width: 100%;
  max-width: 250px;
  min-width: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.image-placeholder-box img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center top;
  display: block;
}

        .contact-content {
          padding: 4rem 1.5rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .contact-intro {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
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
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
        }

        .method-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .method-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .method-content a {
          color: var(--primary);
          text-decoration: none;
        }

        .method-content a:hover {
          text-decoration: underline;
        }

        .contact-form-section {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          height: fit-content;
        }

        .contact-form h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .success-message {
          background: #10b981;
          color: white;
          padding: 1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid var(--border-light);
          border-radius: var(--radius-sm);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .faq-section {
          padding: 4rem 1.5rem;
          background: var(--bg-tertiary);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--text-primary);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
        }

        .faq-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .faq-item p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-header {
            padding: 2rem 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .contact-content {
            padding: 3rem 1rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form-section {
            padding: 1.5rem;
          }

          .faq-section {
            padding: 3rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;