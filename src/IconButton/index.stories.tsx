import IconButton from './index';
import React from 'react';

export const Add = () => (
  <IconButton name="add" iconProperties={{ fill: 'red' }} />
)

export const ArrowLeft = () => (
  <IconButton name="arrow-left" iconProperties={{ fill: 'red' }} />
);

export const ArrowRight = () => <IconButton name="arrow-right" />;

export const ArrowDown = () => <IconButton name="arrow-down" />;

export const ArrowUp = () => <IconButton name="arrow-up" />;

export const Close = () => <IconButton name="close" />;

export const Hidden = () => <IconButton name="hidden" padding="0" />;

export const Visible = () => <IconButton name="visible" />;

export const Notification = () => <IconButton name="notification" />;

export const Patients = () => <IconButton name="patients" />;

export const Print = () => <IconButton name="print" />;

export default {
  title: 'IconButton',
};
