import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ComputerSciencePage from './components/ComputerScience';
import WebDevelopmentPage from './components/WebDevelopment';
import InterviewPrepPage from './components/InterviewPrep';
import SoftwareCourses from './components/SoftwareCourses';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/web" element={<WebDevelopmentPage />} />
        <Route exact path="/cs" element={<ComputerSciencePage />} />
        <Route exact path="/interview" element={<InterviewPrepPage />} />
        <Route exact path="/courses" element={<SoftwareCourses />} />
      </Routes>
    </>
  )
}
export default App;