import React, { useState } from 'react';
import styles from './PostSection.module.scss';
import Stories from './Stories';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PostSection: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleDoubleClick = () => {
    setLiked(!liked);
    setBookmarked(!bookmarked)
  };

  return (
    <div className={styles.postHeadSection}>
      <Stories />
      <div className={styles.postSection}>
        <div className={styles.post}>
          <div className={styles.header}>
            <div className={styles.head}>
              <img
                src="./assets/img.jpg"
                alt="Profile"
                className={styles.profilePic}
              />
              <div className={styles.userInfo}>
                <span className={styles.username}>brijika_agarahari_</span>
                <span className={styles.timestamp}>16h</span>
              </div>
            </div>
            <i className={`${styles.menuIcon} fas fa-ellipsis-h`}></i>
          </div>

          <div className={styles.postImageDiv}>
            <img
              src="./assets/post.jpg"
              alt="Post"
              className={styles.postImage}
              onDoubleClick={handleDoubleClick}
            />
          </div>
          <div className={styles.postAction}>
            <div className={styles.actions}>
              <i
                className={`fa-heart ${liked ? 'fas' : 'far'} ${
                  liked ? styles.liked : ''
                }`}
                onClick={() => setLiked(!liked)}
              ></i>
              <i className="far fa-comment"></i>
              <i className="far fa-paper-plane"></i>
            </div>
            <div className={styles.bookmark}>
              <i
                className={`fa-bookmark ${bookmarked ? 'fas' : 'far'}`}
                onClick={() => setBookmarked(!bookmarked)}
              ></i>
            </div>
          </div>

          <div className={styles.likes}>680,489 likes</div>
          <div className={styles.caption}>
            <span className={styles.username}>dishapatani</span> This week's
            only going to be photo dumps..
          </div>
          <div className={styles.comments}>View all 2,525 comments</div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
