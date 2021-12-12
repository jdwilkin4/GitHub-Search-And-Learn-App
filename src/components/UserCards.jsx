const UserCards = ({ users, bioArr, userLocation, followersArr, followingArr }) => {

  const cardStyles = {
    border: 'solid black 2px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    alignItems: 'center',
  }

  return (
    <>
      <h2 className="text-center">Total search results: {users.total_count}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {users.items.map((user, index) => (
          <div key={index} style={cardStyles}>
            <h3>{user.login}</h3>
            <div>
              <img style={{ width: '200px', height: '200px', justifyContent: 'center' }} src={user.avatar_url} alt="GitHub profile avatar" />
            </div>
            <p>Location: {!userLocation[index] ? "N/A" : userLocation[index]}</p>
            <p>Followers: {followersArr[index] === 0 ? 0 : followersArr[index]}</p>
            <p>Following: {followingArr[index] === 0 ? 0 : followingArr[index]}</p>
            <p className="text-center">Bio: {!bioArr[index] ? "N/A" : bioArr[index]}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">Visit GitHub Profile</a>
          </div>
        ))}
      </div>
    </>
  )
}
export default UserCards;



