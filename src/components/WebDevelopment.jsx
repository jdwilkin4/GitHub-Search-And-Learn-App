import ResourcesTemplate from './ResourcesTemplate';
const WebDevelopmentPage = () => {
  const props = {
    title: 'Web Development Resources',
    subtitle: 'Top 20 Web Development Repositories',
    url: 'https://api.github.com/search/repositories?q=web+dev&sort=stars&order=desc&per_page=20'
  }
  return (
    <ResourcesTemplate {...props} />
  )
}
export default WebDevelopmentPage;