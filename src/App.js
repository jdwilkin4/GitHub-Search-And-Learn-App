import { useEffect, useState } from "react";
import UserCards from './components/UserCards';

const App = () => {
  const [users, setUsers] = useState(null);
  const [bioArr, setBioArr] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [followersArr, setFollowersArr] = useState(null);
  const [followingArr, setFollowingArr] = useState(null);


  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.github.com/search/users?q=freecodecamp')
        .then(res => res.json())
        .then((user) => {
          setUsers(user)
          Promise.all(
            user.items.map(
              profile => fetch(profile.url)
                .then(res => res.json())
            )
          ).then(url => {
            const bios = url.map(profile => profile.bio)
            const locations = url.map(profile => profile.location)
            const followers = url.map(profile => profile.followers)
            const following = url.map(profile => profile.following)
            setBioArr(bios)
            setUserLocation(locations)
            setFollowersArr(followers)
            setFollowingArr(following)
            console.log(bios)
          })
        })
    }
    fetchData()
  }, [])

  const props = {
    users,
    bioArr,
    userLocation,
    followersArr,
    followingArr
  }

  return (
    <>
      <h1>GitHub Search and Learn App</h1>
      { users && userLocation && followersArr && followingArr ? <UserCards {...props} /> : <h2>Loading...</h2>}

    </>
  );
}

export default App;
