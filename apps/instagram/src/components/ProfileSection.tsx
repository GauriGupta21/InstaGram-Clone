import React from 'react';
import styles from './profileSection.module.scss';

const ProfileSection: React.FC = () => (
  <div className={styles.profileSection}>
    <img src="./assets/img.jpg" alt="Profile" className={styles.profileImg} />
    <div className={styles.profileInfo}>
      <strong>brijika_agarahari_</strong>
      <span>Brijika Agrahari</span>
    </div>
  </div>
);

export default ProfileSection;
