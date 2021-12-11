import { useState } from "react";
import UserCards from './components/UserCards';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [users, setUsers] = useState(null);
  const [bioArr, setBioArr] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [followersArr, setFollowersArr] = useState(null);
  const [followingArr, setFollowingArr] = useState(null);


  const displayData = (input) => {
    if (input === '') {
      return
    }
    return fetch(`https://api.github.com/search/users?q=${input}`)
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
      <label htmlFor="site-search">Search for any user on GitHub
        <input autoComplete='off' onChange={(e) => setUserInput(e.target.value)} value={userInput} type="search" id="site-search" name="q" aria-label="Search through site content" />
      </label>
      <button onClick={() => displayData(userInput)}>Search</button>

      {users && userLocation && followersArr && followingArr ?
        <UserCards {...props} /> :
        <h2>Discover user profiles or login to received personalized learning plans</h2>
      }
    </>
  );
}

export default App;
