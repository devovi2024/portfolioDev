import '../styles/Header.css'; 
const Header = () => {
  return (
    <header className="header">
      <div className="particle-wrapper">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="content fade-in">
        <h1 className="heading">
          Crafting Digital <br />
          <span className="highlight">Excellence</span>
        </h1>
        <p className="subtext">
          Full Stack Developer specializing in creating stunning, high-performance web applications with modern technologies
        </p>

        <div className="button-group">
          <button className="primary-btn">View My Work →</button>
          <button className="secondary-btn">Get In Touch</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
