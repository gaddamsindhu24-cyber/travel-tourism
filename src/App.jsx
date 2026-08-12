import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import PlanTrip from "./pages/PlanTrip";

import Login from "./pages/Login"; 
import Signup from "./pages/Signup";
import Packages from "./pages/Packages";
import ExploreMap from "./pages/ExploreMap";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/destination/:name"
          element={<DestinationDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
         path="/login" 
         element={<Login />} 
         />
         <Route
          path="/signup"
          element={<Signup />}
           />
           <Route
  path="/plan-trip"
  element={<PlanTrip />}
/>
<Route path="/packages" element={<Packages />} />

<Route path="/explore-map" element={<ExploreMap />} />

        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;