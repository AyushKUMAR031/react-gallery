import { useState, useEffect } from 'react';
import Navbar from './components/navBar';
import Sidebar from './components/sidebar';
import MainArea from './components/MainArea';
import './App.css';

export default function App() {
  const [selected, setSelected] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768); // Auto open sidebar on large screens
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className={`app-grid ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <Sidebar onSelect={setSelected} isSidebarOpen={isSidebarOpen} />
      )}

      <MainArea selected={selected} />
    </div>
  );
}
