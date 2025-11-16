import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Professional Knowledge', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Video Gallery', path: '/videos' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="profile">
        <img src="public/assets/abhaydev.jpg" alt="Abhaydev" className="profile-pic" />
        <span className="profile-name">Abhaydev</span>
      </div>
      <ul>
        {navItems.map(({ label, path }) => (
          <li key={path} className={location.pathname === path ? 'active' : ''}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;