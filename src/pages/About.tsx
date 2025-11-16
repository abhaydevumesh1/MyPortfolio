const About = () => (
  <section className="section">
    <div className="about-box">
     <img src="/assets/abhaydev.jpg" alt="Abhaydev" className="profile-pic" />
      <h2>About Me</h2>
      <p>
        Hello! I am Abhay, a passionate software engineer with expertise in React and modern web development.
        I love creating interactive and user-friendly web applications.
      </p>
      <a
  href="/resume.pdf"
  download="Abhaydev_Resume.pdf"
  className="resume-button"
>
  Download Resume
</a>
    </div>
  </section>
);

export default About;
