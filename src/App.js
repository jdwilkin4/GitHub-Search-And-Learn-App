import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ComputerSciencePage from './components/ComputerScience';
import WebDevelopmentPage from './components/WebDevelopment';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/web" element={<WebDevelopmentPage />} />
        <Route exact path="/cs" element={<ComputerSciencePage />} />
      </Routes>
    </>
  )
}
export default App;