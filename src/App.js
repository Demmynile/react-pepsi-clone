import LandingPage from "./Pages/Landing-page/LandingPage";

import { Routes, Route , BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
     <Routes>
       <Route exact path="/" element={<LandingPage/>} />
      
     </Routes>
     </Router>
     </>
   
  );
}

export default App;
