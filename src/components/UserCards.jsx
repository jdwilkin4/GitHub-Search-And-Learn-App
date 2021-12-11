const UserCards = ({ users, bioArr, userLocation, followersArr, followingArr }) => {

  const cardStyles = {
    border: 'solid black 5px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <h2>Total search results: {users.total_count}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.items.map((user, index) => (
          <div key={index} style={cardStyles}>
            <h3>{user.login}</h3>
            <div>
              <img style={{ width: '200px', height: '200px' }} src={user.avatar_url} alt="GitHub profile avatar" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p>Bio: {bioArr[index]}</p>
              <p>Location: {userLocation[index]}</p>
              <p>Followers: {followersArr[index]}</p>
              <p>Following: {followingArr[index]}</p>
            </div>

            <a href={user.html_url} target="_blank" rel="noreferrer">Visit GitHub Profile</a>
          </div>
        ))}
      </div>
    </>
  )
}
export default UserCards;