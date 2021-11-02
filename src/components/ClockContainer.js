import React, { useEffect } from 'react';
import { Counter } from '../features/clock/Clock';
import styles from '../styles/Clock.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchData,
    getData,
} from '../features/data/dataSlice';

const clockCount = 2

function Clock() {

    //get all data from redux
    const data = useSelector(getData);
    const dataStatus = useSelector(state => state.data.status)
    const error = useSelector(state => state.data.error)
    const dispatch = useDispatch();

    useEffect(() => {
        if (dataStatus === 'idle') {
            dispatch(fetchData())
        }
    }, [dataStatus, dispatch])

    let content

    if (dataStatus === 'loading') {
        content = <div>Loading...</div>
    } else if (dataStatus === 'succeeded') {

        content = data.length > 0 && [...Array(clockCount)].map((value, index) => {
            return <Counter data={data} key={index} />
        }
        )
    } else if (dataStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.clock_container}>{content}</div>
        </div>
    );
}

export default Clock;
