import React from 'react';

function Project({ title, description, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </a>
        {' | '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
}

export default Project;