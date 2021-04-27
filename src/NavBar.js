import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (  
    <div className="navbar">
      <div className="navbar-elements">
        <Link className="navbar-elements-item" to="/">Početna</Link>
        <Link className="navbar-elements-item" to="/ja">Ko Sam Ja</Link>
        <Link className="navbar-elements-item" to="/knjige">Knjige</Link>
        <Link className="navbar-elements-item" to="/gostovanja">Gostovanja</Link>
        <Link className="navbar-elements-item" to="/radionice">Radionice</Link>
        <a href="https://www.razgovaraj.ba/" className="navbar-elements-item" target="_blank" rel="noreferrer">Blog</a>
        <Link className="navbar-elements-item" to="/kontakt">Kontakt</Link>
      </div>
    </div>
  );

}
 
export default NavBar;