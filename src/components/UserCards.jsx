const UserCards = ({ users, bioArr }) => {

  const cardStyles = {
    border: 'solid black 5px',
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px',
    justifyContent: 'center'
  }

  return (
    <>
      <h2>Total search results: {users.total_count}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.items.map((user, index) => (
          <div key={index} style={cardStyles}>
            <h3>{user.login}</h3>
            <img style={{ width: '200px', height: '200px' }} src={user.avatar_url} alt="GitHub profile avatar" />
            <p>{bioArr[index]}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">Visit GitHub Profile</a>
          </div>
        ))}
      </div>
    </>
  )
}
export default UserCards;