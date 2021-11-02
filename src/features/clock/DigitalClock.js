import React from 'react'
import styles from './Clock.module.css';

function DigitalClock({ time }) {
    return (
        <div className={styles.row}>
            <span className={styles.value}>{time}</span>
        </div>
    )
}

export default DigitalClock
