// src/components/StoryItem.tsx
import React from 'react';
import styles from './StoryItem.module.scss';

interface StoryItemProps {
  username: string;
  imgSrc: string;
}

const StoryItem: React.FC<StoryItemProps> = ({ username, imgSrc }) => {
  return (
    <div className={styles.storyItem}>
      <div className={styles.storyImageContainer}>
        <img src={imgSrc} alt={username} className={styles.storyImage} />
      </div>
      <span className={styles.username}>{username}</span>
    </div>
  );
};

export default StoryItem;
