import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>Octo Anxiety</h1>
      <nav>
        <ul className={styles.list}>
          <li><Link className={styles.headerLink} to="/">About</Link></li>
          <li><Link className={styles.headerLink} to="/fabrics">Fabrics</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
