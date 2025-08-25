import { SiJavascript, SiTypescript, SiCss3, SiReact, SiMongodb, SiPython } from "react-icons/si";
import { FaDatabase, FaGitAlt, FaCog, FaLightbulb} from "react-icons/fa";
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { 
      icon: <SiJavascript color="black"/>, 
      title: "JavaScript", 
      description: "Advanced ES6+ features, async/await, DOM manipulation, and modern JavaScript patterns for dynamic web applications." 
    },
    { 
      icon: <SiTypescript color="black"/>, 
      title: "TypeScript", 
      description: "Strong typing, interfaces, generics, and advanced type system for scalable and maintainable codebases." 
    },
    { 
      icon: <SiCss3 color="black"/>, 
      title: "CSS & HTML", 
      description: "Responsive design, CSS Grid, Flexbox, animations, and semantic HTML5 for modern web standards." 
    },
    { 
      icon: <SiReact color="black"/>, 
      title: "React", 
      description: "Component-based architecture, hooks, context API, state management, and performance optimization." 
    },
    { 
      icon: <FaDatabase color="black"/>, 
      title: "Databases", 
      description: "MongoDB, PostgreSQL, data modeling, complex queries, and database optimization strategies." 
    },
    { 
      icon: <FaGitAlt color="black"/>, 
      title: "Version Control", 
      description: "Git workflow, GitHub collaboration, branching strategies, and CI/CD pipeline integration." 
    },
    { 
      icon: <FaCog color="black" />, 
      title: "Development Tools", 
      description: "Vite, Webpack, TailwindCSS, Vercel deployment, authentication systems, and payment integrations." 
    },
    { 
      icon: <FaLightbulb color='#fedc4e' />, 
      title: "Best Practices", 
      description: "Design patterns, code architecture, testing methodologies, and performance optimization techniques." 
    }
  ];

  return (
    <section className="tech-stack" id="about">
      <div className="tech-stack__container container">
        <div className="tech-stack__header">
          <h2 className="tech-stack__title">Technologies & Skills</h2>
          <p className="tech-stack__subtitle">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="tech-stack__grid">
          {technologies.map((tech, index) => (
            <article key={index} className="tech-card">
              <div className="tech-card__icon">
                {tech.icon}
              </div>
              <h3 className="tech-card__title">{tech.title}</h3>
              <p className="tech-card__description">{tech.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
