import { useEffect, useState } from 'react';
import { ITimerProps } from '../model/timer.types';
import { Box } from '@mui/material';
import { formatTime } from 'shared/lib/helpers';
import { localStorageTimerKey } from '../model/timer.constants';
import { setTimerValue } from '../model/timer.store';
import { useAppDispatch } from 'shared/lib/hooks';

export const Timer = (props: ITimerProps) => {
  const dispatch = useAppDispatch();
  const { expirationTime } = props
  const [remainingTime, setRemainingTime] = useState(expirationTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        const newTime = prevTime - 1;
        localStorage.setItem(localStorageTimerKey, newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const savedRemainingTime = localStorage.getItem(localStorageTimerKey);
    if (savedRemainingTime) {
      setRemainingTime(+savedRemainingTime);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageTimerKey, remainingTime.toString());
    dispatch(setTimerValue(remainingTime))
  }, [remainingTime]);

  return (
    <Box
      component='span'
      height={20}
      width={80}
      display="flex"
      alignItems="center"
      textAlign='center'
      justifyContent='center'
      p={2}
      borderRadius={1}
      sx={{ border: '0.125rem solid grey' }}
    >
      {formatTime(remainingTime)}
    </Box>
  );
};
