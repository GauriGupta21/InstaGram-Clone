import React from 'react';
import styles from './TopBar.module.scss';
import SidebarItem from './SideBarItem';

const TopBar: React.FC = () => (
  <div className={styles.topBar}>
    <p className={styles.heading}>Instagram</p>
    <div className={styles.topHead}>
      <input type="text" placeholder="Search" className={styles.searchBar} />
      <div className={styles.icons}>
        <SidebarItem icon="far fa-heart" label="Notifications" />
      </div>
    </div>
  </div>
);

export default TopBar;
