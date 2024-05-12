import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/Home/About'
import Service from './Pages/Home/Service'
import Contact from './Pages/Home/Contact'
import Footer from './Pages/Home/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;