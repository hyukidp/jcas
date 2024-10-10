import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Book" element={<Booking />} />
          </Routes>
        </main>
        <Contact/>
        <Footer />
      </div>
    </Router>
  )
}

export default App
