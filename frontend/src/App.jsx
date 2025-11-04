import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
function App() {
  return(

   <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
      </Routes>
    </Router>
  );
}

export default App;
