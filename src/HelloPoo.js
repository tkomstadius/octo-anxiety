import React, { Component } from 'react';

import styles from './HelloPoo.css';

export default class HelloPoo extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.headingOne}>Hello, Poo!</h1>
            </div>
        );
    }
}
