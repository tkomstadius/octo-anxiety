import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Post.css';

const Post = ({ title, content, slug, titleLink = false }) => (
  <div>
    <h2 className={styles.title}>
      {titleLink ?
        <Link className={styles.postLink} to={`/post/${slug}`}>{title}</Link> :
        <h2 className={styles.title}>{title}</h2>
      }
    </h2>
    <p className={styles.content}>{content}</p>
  </div>
);

export default Post;
