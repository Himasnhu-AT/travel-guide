import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage'; // Import your NotFoundPage component
import Header from "./components/Header";
import Footer from "./components/footer";
import AboutPage from './Pages/aboutus';
import LoginPage from './Pages/login';
import HomePage from './components/HomePage';
import ContactAndFAQsPage from './Pages/ContactAndFAQsPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/support" element={<ContactAndFAQsPage />} />
          {/* Define other routes here */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
