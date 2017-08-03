import React from 'react';

import styles from './Header.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1 className={styles.title}>Cuddly</h1>
            <nav>
                <ul className={styles.list}>
                    <li><a className={styles.headerLink} href="#">Labels</a></li>
                    <li><a className={styles.headerLink} href="#">Fabrics</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
