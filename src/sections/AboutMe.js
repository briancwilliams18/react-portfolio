import React from 'react';

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="container">
        <div className="aboutme-content">
          <img
            src="src\images\profile pic .jpg" 
            alt="avatar"
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
