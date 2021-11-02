import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  tick,
  selectCount,
} from './clockSlice';
import AnalogClock from './AnalogClock'
import DigitalClock from './DigitalClock'
import Select from './Select'
import styles from './Clock.module.css';
export function Counter({ data }) {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [timezone, setTimeZone] = useState(data[0].timezone)

  const changeTimeZone = e => {
    setTimeZone(e.target.value)
  }
  return (
    <div className={styles.clock_wrapper}>
      <AnalogClock time={getTime((calcTimeFromTimezone(timezone)))} />
      <DigitalClock time={displayTime(calcTimeFromTimezone(timezone))} />
      <Select data={data} onChange={changeTimeZone} />
    </div >
  );
}

function calcTimeFromTimezone(offset) {
  var d = new Date();
  var utc = d.getTime();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var nd = new Date(utc + (3600000 * offset));
  return nd;
}
function displayTime(time) {
  return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}
function getTime(time) {
  return { hours: time.getHours(), minutes: time.getMinutes(), seconds: time.getSeconds() };
}

