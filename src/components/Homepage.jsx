import { useState } from "react";
import UserCards from './UserCards';
import WelcomeOptions from './WelcomeOptions';

const Homepage = () => {
  const [userInput, setUserInput] = useState('');
  const [users, setUsers] = useState(null);
  const [bioArr, setBioArr] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [followersArr, setFollowersArr] = useState(null);
  const [followingArr, setFollowingArr] = useState(null);
  const [currPage, setCurrPage] = useState(1);

  const prevPage = () => {
    if (currPage === 1) return
    setCurrPage((curr) => curr - 1);
    displayData(currPage - 1); // I had to ask for help with this line to get state to update properly Credit: Taiwo Yusef
  };

  const nextPage = () => {
    setCurrPage((curr) => curr + 1);
    displayData(currPage + 1);// I had to ask for help with this line to get state to update properly Credit: Taiwo Yusef
  };

  const resetPage = () => {
    setCurrPage((curr) => (curr = 1));
    displayData(1);// I had to ask for help with this line to get state to update properly Credit: Taiwo Yusef
  };


  const displayData = async (page) => {
    window.scrollTo(0, 0)
    if (userInput === '') {
      return
    }
    const res = await fetch(`https://api.github.com/search/users?q=${userInput}&per_page=16&page=${page}`);
    const user = await res.json();
    setUsers(user);
    Promise.all(
      user.items.map(
        profile => fetch(profile.url)
          .then(res_1 => res_1.json())
      )
    ).then(url => {
      const bios = url.map(profile_1 => profile_1.bio);
      const locations = url.map(profile_2 => profile_2.location);
      const followers = url.map(profile_3 => profile_3.followers);
      const following = url.map(profile_4 => profile_4.following);
      setBioArr(bios);
      setUserLocation(locations);
      setFollowersArr(followers);
      setFollowingArr(following);
    });
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
      <h1 className="text-center" style={{ marginBottom: '20px' }}>GitHub Search and Learn App</h1>
      <div className="input-group" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="form-outline">
          <input
            className="form-control"
            onKeyDown={(e) => e.key === 'Enter' ? displayData() : null}
            autoComplete='off' onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            type="search"
            id="site-search"
            name="search"
            aria-label="Search through GitHub user content"
          />
        </div>

        <button style={{ height: '40px' }} className="btn btn-primary" onClick={resetPage}>
          <i className="fas fa-search" />
        </button>
      </div>


      {users && userLocation && followersArr && followingArr ?
        <UserCards {...props} /> : <WelcomeOptions />
      }
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {users ? <button className="page-link" onClick={prevPage}>Previous</button> : null}
        {users ? <button className="page-link" onClick={nextPage}>Next</button> : null}
      </div>
    </>
  );
}

export default Homepage;
