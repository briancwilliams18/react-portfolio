import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <img
            src="/path-to-your-avatar.jpg"
            alt="Your Avatar"
            className="avatar"
          />
          <div className="bio">
            <h2>About Me</h2>
            <p>
              Hi, I'm Brian Williams, a passionate web developer with a love for
              creating web applications. I have experience in ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;