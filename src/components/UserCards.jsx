const UserCards = ({ users, bioArr, userLocation, followersArr, followingArr }) => {

  const cardStyles = {
    border: 'solid black 2px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <h2 className="text-center">Total search results: {users.total_count}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.items.map((user, index) => (
          <div key={index} className="card">

            <div>
              <img className="card-img-top" style={{ width: '200px', height: '200px', justifyContent: 'center' }} src={user.avatar_url} alt="GitHub profile avatar" />
            </div>
            <h3>{user.login}</h3>
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

/**
 *
 *
 * <div class="card">
  <img
    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
    class="card-img-top"
    alt="Fissure in Sandstone"
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <a href="#!" class="btn btn-primary">Button</a>
  </div>
</div>
 *
 *
 */

