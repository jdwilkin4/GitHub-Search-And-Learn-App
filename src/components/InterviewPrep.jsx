import ResourcesTemplate from './ResourcesTemplate';
const InterviewPrepPage = () => {
    const props = {
        title: 'Interview Prep Resources',
        subtitle: 'Top 20 Interview Repositories',
        url: 'https://api.github.com/search/repositories?q=interview-prep&sort=stars&order=desc&per_page=20'
    }
    return (<ResourcesTemplate {...props} />)
}
export default InterviewPrepPage;