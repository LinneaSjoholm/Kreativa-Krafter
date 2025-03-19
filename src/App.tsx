import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './Pages/Homepage/Home';
import { About } from './Pages/About/About';
import { Store } from './Pages/Store/Store';
import { Contact } from './Pages/Contact/Contact';

function App() {
  
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/butik" element={<Store />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
