const CardTemplate = ({ repositories }) => {
  const cardStyles = {
    border: 'solid black 2px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    alignItems: 'center',
  }
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {repositories.items.map((repo, index) => (
          <div key={index} style={cardStyles}>
            <h5 className="text-center">{repo.name}</h5>
            <div>
              <img style={{ width: '200px', height: '200px', justifyContent: 'center' }} src={repo.owner.avatar_url} alt="GitHub avatar" />
            </div>
            <p>Stargazers count: {repo.stargazers_count}</p>
            <a target="_blank" rel="noreferrer" href={repo.html_url}>Visit GitHub Profile</a>
          </div>
        ))}
      </div>
    </>
  )
}
export default CardTemplate;
