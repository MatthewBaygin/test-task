import React from 'react'
import styles from './Clock.module.css';

function AnalogClock({ time }) {
    return (
        <div className={styles.clock}>
            <div className={styles.inner_clock_face}></div>
            <div className={`${styles.marking} ${styles.marking_one}`}></div>
            <div className={`${styles.marking} ${styles.marking_two}`}></div>
            <div className={`${styles.marking} ${styles.marking_three}`}></div>
            <div className={`${styles.marking} ${styles.marking_four}`}></div>
            <div className={`${styles.marking} ${styles.marking_five}`}></div>
            <div className={`${styles.marking} ${styles.marking_six}`}></div>
            <div
                className={styles.hour_hand}
                style={{
                    transform: `rotateZ(${time.hours * 30}deg)`
                }}
            />
            <div
                className={styles.min_hand}
                style={{
                    transform: `rotateZ(${time.minutes * 6}deg)`
                }}
            />
            <div
                className={styles.sec_hand}
                style={{
                    transform: `rotateZ(${time.seconds * 6}deg)`
                }}
            />
        </div>

    )
}

export default AnalogClock
