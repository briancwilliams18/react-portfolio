import React from 'react';

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="container">
        <div className="aboutme-content">
          <img
            src="/path-to-your-avatar.jpg" // Update with the correct path
            alt="Avatar"
            className="avatar"
          />
          <div className="bio">
            <h2>About Me</h2>
            <p>
              Hi, I'm Brian Williams, a passionate web developer with a love for
              creating web applications. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
