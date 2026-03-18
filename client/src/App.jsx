import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DesignDashboard from './pages/DesignDashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#111',
            color: '#F5F5F5',
            border: '1px solid #D4AF37'
          }
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DesignDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
