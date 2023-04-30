import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Walk with Me',
      image: 'Walk With Me.gif',
      liveLink: 'https://lferg98.github.io/Walk-with-me/',
      githubLink: 'https://github.com/Lferg98/Walk-with-me',
    },
    {
      title: 'OnlyPlans',
      image: 'OnlyPlans.gif',
      liveLink: 'https://onlyplans-application.herokuapp.com/',
      githubLink: 'https://github.com/GarrettChaney/onlyplans',
    },
    // Add more projects as needed
  ];

  return (
    <section className="content">
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={`images/${project.image}`} alt={project.title} />
            <div className="links">
              <a href={project.liveLink}>View Project</a>
              <a href={project.githubLink}>GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
