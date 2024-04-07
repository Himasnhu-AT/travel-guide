import React from 'react';
import Footer from "./components/footer";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/aboutus';
import Login from './Pages/login';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <BrowserRouter>
     <Header />
      <Routes>
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login />} />
        <Route path="" element={<HomePage />}>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
