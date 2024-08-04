import React from 'react';
import styles from './BottomBar.module.scss';
import SidebarItem from './SideBarItem';

const Bottombar: React.FC = () => (
  <div className={styles.bottomBar}>
    <SidebarItem icon="home" label="Home" />
    <SidebarItem icon="compass" label="Explore" />
    <SidebarItem icon="film" label="Reels" />
    <SidebarItem icon="plus-square" label="Create" />
    <SidebarItem icon="envelope" label="Messages" />
    <SidebarItem icon="user" label="Profile" imgSrc="./assets/img.jpg" />
  </div>
);

export default Bottombar;
