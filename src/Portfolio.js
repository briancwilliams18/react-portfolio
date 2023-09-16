import React from 'react';
import Project from './Project'; 

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Portfolio;