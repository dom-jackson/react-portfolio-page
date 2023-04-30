import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="content">
        <h2>About Me</h2>
        <img
          src="/images/header-portrait.png"
          alt="avatar"
          style={{ width: '150px', height: '150px' }}
        />
        <p>
          My name is Dominic Jackson, and I'm a web developer based in Melbourne
          Australia. As an aspiring developer, I'm always eager to learn new
          skills and technologies to improve my craft. Having recently completed
          a 6 month Full Stack Bootcamp course with Monash University, I have
          developed skills using various Front and back end languages, hoping to
          specialize in the MERN stack. My passion for building user-friendly
          and visually appealing web applications has driven me to continuously
          refine my skills and stay up-to-date with the latest trends in the
          industry.
          <br />
          <br />
          As you browse through my portfolio, you'll see a variety of projects
          that demonstrate my ability to create unique, responsive, and
          interactive web applications. I take pride in my attention to detail
          and my ability to deliver high-quality work that meets my clients'
          needs. I'm always excited to collaborate with other developers,
          designers, and businesses to bring innovative web solutions to life.
          If you're interested in working with me, please feel free to contact
          me via the contact form. You can also check out my resume. Thank you
          for taking the time to visit my website, and I look forward to hearing
          from you soon!
        </p>
      </div>
    </section>
  );
};

export default About;
