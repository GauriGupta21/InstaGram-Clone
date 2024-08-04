import React from 'react';
import styles from './sidebarItem.module.scss';

interface SidebarItemProps {
  icon: string;
  label: string;
  imgSrc?: string;
  notification?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  imgSrc,
  notification,
}) => (
  <div className={styles.item}>
    {imgSrc ? (
      <img src={imgSrc} alt={label} className={styles.profileImg} />
    ) : (
      <i className={`fas fa-${icon}`}></i>
    )}
    <span>{label}</span>
    {notification && (
      <span className={styles.notification}>{notification}</span>
    )}
  </div>
);

export default SidebarItem;
