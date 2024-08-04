import React from 'react';
import styles from './suggestionSection.module.scss';
import ProfileSection from './ProfileSection';
import Footer from './Footer';

const suggestions = [
  { username: 'Gauri', imgSrc: './assets/post.jpg' },
  { username: 'Gauri', imgSrc: './assets/post.jpg' },
  { username: 'Gauri', imgSrc: './assets/post.jpg' },
  { username: 'Gauri', imgSrc: './assets/post.jpg' },
  { username: 'Gauri', imgSrc: './assets/post.jpg' },
  // Add more suggestions as needed
];

const SuggestionsSection: React.FC = () => (
  <div className={styles.suggestionsSection}>
    <div className={styles.profileSwitch}>
      <ProfileSection/>
      <button className={styles.switchButton}>Switch</button>
    </div>
    <div className={styles.suggested}>
      <div className={styles.suggestedHeader}>
        <span>Suggested for you</span>
        <button className={styles.seeAllButton}>See All</button>
      </div>
      {suggestions.map((suggestion, index) => (
        <div className={styles.suggestedItem} key={index}>
          <img src={suggestion.imgSrc} alt={suggestion.username} className={styles.suggestionImg} />
          <div className={styles.suggestionText}>
            <strong>{suggestion.username}</strong>
            <span>Suggested for you</span>
          </div>
          <button className={styles.followButton}>Follow</button>
        </div>
      ))}
    </div>
    <Footer/>
  </div>
);

export default SuggestionsSection;
