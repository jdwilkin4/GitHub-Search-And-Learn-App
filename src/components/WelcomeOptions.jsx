import { Link } from 'react-router-dom';
const WelcomeOptions = () => {
  const btnStyles = {
    backgroundColor: '#0047AB',
    color: 'white'
  }
  const titlesArr = ["Web Development", "Computer Science", "Interview Prep", "Misc Software Courses"];
  const pathArr = ["/web", "/cs", "/interview", "/courses"];
  const descriptionsArr = [
    "This is a curated list of the top repositories for web development.",
    "This is a curated list of the top repositories for Computer Science.",
    "This is a curated list of the top repositories for Interview Prep resources.",
    "This is a curated list of the top repositories for Software Development Courses."
  ]

  return (
    <>
      <h2 className="text-center mt-4 mb-5">Search user profiles or explore other learning resources </h2>
      <div className="row">
        {titlesArr.map((name, index) => (
          <div key={index} className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p className="card-text">{descriptionsArr[index]}</p>
                <Link to={pathArr[index]} style={btnStyles} className="btn btn-primary"> View resources</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default WelcomeOptions;