// src/components/Sidebar.tsx  line 13 notification={1}*/
import React from 'react';
import SidebarItem from './SideBarItem';
import styles from './Sidebar.module.scss';



interface SidebarProps {
  isMobile: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}


const Sidebar:React.FC = () => {
  
  return(
  <div className={styles.sidebar}>
    <div className={styles.logoContainer}>
      <p className={styles.heading}>Instagram</p>
      <img
        src="./assets/background.png"
        alt="Instagram Logo"
        className={styles.logo}
      />
    </div>
    <SidebarItem icon="home" label="Home" />
    <SidebarItem icon="search" label="Search" />
    <SidebarItem icon="compass" label="Explore" />
    <SidebarItem icon="film" label="Reels" />
    <SidebarItem icon="envelope" label="Messages" />
    <SidebarItem icon="heart" label="Notifications" />
    <SidebarItem icon="plus-square" label="Create" />
    <SidebarItem icon="user" label="Profile" imgSrc="./assets/img.jpg" />
    <div className={styles.bttomSidebar}>
      <SidebarItem icon="ellipsis-h" label="More" />
    </div>
  </div>
  );
};

export default Sidebar;
