import ResourcesTemplate from './ResourcesTemplate';
const ComputerSciencePage = () => {
  const props = {
    title: 'Computer Science Resources',
    subtitle: 'Top 20 Computer Science Repositories',
    url: 'https://api.github.com/search/repositories?q=computer+science&sort=stars&order=desc&per_page=20'
  }
  return (<ResourcesTemplate {...props} />)

}
export default ComputerSciencePage;