import ResourcesTemplate from './ResourcesTemplate';
const SoftwareCourses = () => {
    const props = {
        title: 'Software Development Courses',
        subtitle: 'Top 20 Software Development Courses',
        url: 'https://api.github.com/search/repositories?q=courses&sort=stars&order=desc&per_page=20'
    }
    return (<ResourcesTemplate {...props} />)
}
export default SoftwareCourses;