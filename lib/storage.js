import {formatScore, formatLevel} from '../lib/format';

import config from '../lib/config';

export const loadScore = () => {
  let score = localStorage.getItem(config.data.score);
  if (null !== score) {
    return formatScore(score, 2);
  } else {
    return formatScore(0, 2);
  }
};

export const saveScore = (value) => {
  let score = localStorage.getItem(config.data.score);
  if (value > score) {
    localStorage.setItem(config.data.score, value);
    return true
  } else {
    return false
  }
};

export const loadLevel = () => {
  let level = localStorage.getItem(config.data.level);
  if (null !== level) {
    return formatLevel(level, 2);
  } else {
    return formatLevel(0, 2);
  }
};

export const saveLevel = (value) => {
  let level = localStorage.getItem(config.data.level);
  if (value > level) {
    localStorage.setItem(config.data.level, value);
    return true
  } else {
    return false
  }
};

export const loadSound = () => {
  let value = JSON.parse(localStorage.getItem(config.data.sound));
  if (null === value || undefined === value) {
    return true;
  }
  return value;
};

export const saveSound = (value) => {
  localStorage.setItem(config.data.sound, value);
};

export const loadVibration = () => {
  let value = JSON.parse(localStorage.getItem(config.data.vibration));
  if (null === value || undefined === value) {
    return true;
  }
  return value;
};

export const saveVibration = (value) => {
  localStorage.setItem(config.data.vibration, value);
};
