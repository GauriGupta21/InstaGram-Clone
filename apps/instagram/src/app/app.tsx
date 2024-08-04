import React, { useState, useEffect } from 'react';
import TopBar from '../components/Topbar';
import BottomBar from '../components/Bottombar';
import Sidebar from '../components/Sidebar';
import PostSection from '../components/PostSection';
import SuggestionsSection from '../components/SuggestionsSection';
import styles from './style.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? styles.dark : styles.light;
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.dark : styles.light}`}>
      {isMobile && <TopBar />}
      <button className={styles.toggleButton} onClick={toggleDarkMode}>
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <PostSection />
          <SuggestionsSection />
        </div>
      </div>
      {isMobile && <BottomBar />}
    </div>
  );
};

export default App;
