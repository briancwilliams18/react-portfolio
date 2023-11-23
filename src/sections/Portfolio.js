import React from 'react';
import Project from '../components/Project'; 

function Portfolio() {
  const projects = [
    {
      title: 'Social Network API',
      description: 'API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. Express.js for routing, a MongoDB database, and the Mongoose ODM',
      githubLink: 'https://github.com/briancwilliams18/mod18homework',
    },
    {
      title: 'Employee Tracker',
      description: 'A command-line application from scratch to manage an employee database, using Node.js, Inquirer, and MySQL.',
      githubLink: 'https://github.com/briancwilliams18/mod12homework',
    },
    {
      title: 'Regex Tutorial',
      description: 'Tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does',
      githubLink: '//gist.github.com/briancwilliams18/5e8b79eda61c152e5504a447494af47e'
    },
    // Add more projectS
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