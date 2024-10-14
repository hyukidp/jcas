import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import { LocationProvider } from './contexts/LocationContext';
import { ServiceProvider } from './contexts/ServiceContext';

const App = () => {
  return (
    <Router>
      <div>
        {/* Declare LocationProvider and wrapped the header to footer components */}
        <LocationProvider>
          <ServiceProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Book" element={<Booking />} />
              </Routes>
            </main>
            <Contact/>
            <Footer />
          </ServiceProvider>
        </LocationProvider>
        {/* End of Location Provider */}
      </div>
    </Router>
  )
}

export default App
