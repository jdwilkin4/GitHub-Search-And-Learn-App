import { Link } from 'react-router-dom';
const WelcomeOptions = () => {
  const btnStyles = {
    backgroundColor: '#0047AB',
    color: 'white'
  }
  return (
    <>
      <h2 className="text-center mt-4 mb-5">Discover user profiles or explore other learning resources </h2>
      <div className="row ">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"> Web Development </h2>
              <p className="card-text">This is a curated list of the top repositories for web development.</p>
              <Link to="/web" style={btnStyles} className="btn btn-primary"> View resources</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"> Computer Science </h2>
              <p className="card-text">This is a curated list of the top repositories for Computer Science.</p>
              <Link to="/cs" style={btnStyles} className="btn"> View resources</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WelcomeOptions;