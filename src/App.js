// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Create from './pages/Create';
import Generate from './pages/Generate';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import './styles/album.css';
import './styles/bootstrap.min.css';
import './styles/jumbotron.css'
import Videos from './pages/Videos';
import Favourites from './pages/Favourites';
import { AuthProvider } from './services/authService';
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="site-container">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/upload-video" element={<Upload />} />
            <Route path="/generate-video" element={<Generate />} />
            <Route path='/my-videos' element={<Videos />} />
            <Route path='/favourites' element={<Favourites />} />

          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};
export default App;
