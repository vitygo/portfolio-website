import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: './laptop3.png',
      tech: "React • TypeScript • Node.js • MongoDB",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing (Stripe), real-time inventory management, and admin dashboard. Features include product catalog, shopping cart, order tracking, and responsive design.",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      className: ""
    },
    {
      id: 2,
      image: './laptop4.png',
      screenImage: '',
      tech: "React • Firebase • TailwindCSS • GSAP",
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking. Includes user roles, notifications, and data visualization.",
      liveUrl: "https://task-manager-demo.com",
      githubUrl: "https://github.com/username/task-manager",
      className: "center"
    },
    {
      id: 3,
      image: './laptop3.png',
      tech: "React • Express.js • PostgreSQL • JWT",
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling tools, performance metrics, and multi-platform integration. Features real-time analytics and automated reporting.",
      liveUrl: "https://social-dashboard-demo.com",
      githubUrl: "https://github.com/username/social-dashboard",
      className: "right-laptop"
    }
  ];

  return (
    <section className="portfolio" id="projects">
      <div className="portfolio__container container">
        <div className="portfolio__header">
          <h2 className="portfolio__title">
            Featured <span className="portfolio__title-accent">Projects</span>
          </h2>
          <p className="portfolio__subtitle">
            Showcasing my best work with modern technologies and creative solutions
          </p>
        </div>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <article key={project.id} className={`portfolio-card ${project.className}`}>
              <div className="portfolio-card__image">
                <img 
                  src={project.image} 
                  className={`portfolio-card__img ${project.className}`} 
                  alt={`${project.title} preview`}
                />
                {project.screenImage && (
                  <img 
                    src={project.screenImage} 
                    className='portfolio-card__screen' 
                    alt="project screen preview"
                  />
                )}
              </div>
              
              <div className="portfolio-card__content">
                <p className="portfolio-card__tech">{project.tech}</p>
                <h3 className="portfolio-card__title">{project.title}</h3>
                <p className="portfolio-card__description">{project.description}</p>
              </div>
              
              <div className="portfolio-card__actions">
                <a 
                  className="portfolio-card__btn portfolio-card__btn--primary" 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a 
                  className="portfolio-card__btn portfolio-card__btn--secondary" 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${project.title}`}
                >
                  View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
