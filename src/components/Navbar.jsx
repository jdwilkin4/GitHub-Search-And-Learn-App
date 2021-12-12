import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkArr = ["Home", "Computer Science", "Web Development", "Interview Prep", "Software Development Courses"];
  const pathArr = ["/", "/cs", "/web", "/interview", "/courses"]
  return (
    <>
      {/*Design from bootstrap docs*/}
      <nav className="navbar navbar-dark" style={{ backgroundColor: '#0047AB' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i className="fas fa-book"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {linkArr.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link to={pathArr[index]} className="nav-link">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;