import Homepage from './components/Homepage';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}
export default App;