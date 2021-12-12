import { useEffect, useState } from "react";
import CardTemplate from './CardTemplate';
const ResourcesTemplate = ({ url, title, subtitle }) => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(url)
      const repository = await res.json()
      setRepos(repository)
    }
    fetchRepos()
  }, [url])
  //console.log(repos)
  return (
    <>
      <h1 className="text-center">{title}</h1>
      <h2 style={{ marginBottom: '30px' }} className="text-center">{subtitle}</h2>
      {repos ? <CardTemplate repositories={repos} /> : <h2>Loading...</h2>}
    </>
  )
}
export default ResourcesTemplate;