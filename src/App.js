import { useEffect, useState } from "react";
import UserCards from './components/UserCards';

const App = () => {
  const [users, setUsers] = useState(null);
  const [bioArr, setBioArr] = useState(null);


  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.github.com/search/users?q=freecodecamp')
        .then(res => res.json())
        .then((user) => {
          setUsers(user)
          Promise.all(
            user.items.map(
              url => fetch(url.url)
                .then(res => res.json())
            )
          ).then(url => {
            const bios = url.map(user => user.bio)
            setBioArr(bios)
            console.log(bios)
          })
        })
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>GitHub Search and Learn App</h1>
      { users && bioArr ? <UserCards users={users} bioArr={bioArr} /> : <h2>Loading...</h2>}
    </>
  );
}

export default App;
