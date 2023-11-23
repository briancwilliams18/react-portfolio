import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>
        <p>
          Download my resume: <a href="resources\Resume.pdf"download="Resume.pdf">Resume.pdf</a>
        </p>
        <div className="proficiencies">
          <h3>Proficiencies</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js, Redux</li>
            <li>Node.js, Express.js</li>
            <li>Database Management (SQL, MongoDB)</li>
            {/* Add more proficiencies as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;