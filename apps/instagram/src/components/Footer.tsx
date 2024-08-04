import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <div className={styles.links}>
      <a href="#">About.</a>
      <a href="#">Help.</a>
      <a href="#">Press.</a>
      <a href="#">API.</a>
      <a href="#">Jobs.</a>
      <a href="#">Privacy</a>
      <a href="#">Terms.</a>
      <a href="#">Locations.</a>
      <a href="#">Language.</a>
      <a href="#">Meta Verified.</a>
    </div>
    <div className={styles.copyright}>
      &copy; 2024 INSTAGRAM FROM META
    </div>
  </div>
);

export default Footer;
