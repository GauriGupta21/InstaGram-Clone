// src/components/Stories.tsx
import React from 'react';
import StoryItem from './StoryItem';
import styles from './Stories.module.scss';

interface Story {
  id: number;
  username: string;
  imgSrc: string;
}

const Stories: React.FC = () => {
  const stories: Story[] = [
    { id: 1, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 2, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 3, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 4, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 5, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 6, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 7, username: 'Gauri', imgSrc: './assets/img.jpg' },
    { id: 8, username: 'Gauri', imgSrc: './assets/img.jpg' }
  ];

  return (
    <div className={styles.stories}>
      {stories.map(story => (
        <StoryItem key={story.id} username={story.username} imgSrc={story.imgSrc} />
      ))}
    </div>
  );
};

export default Stories;
