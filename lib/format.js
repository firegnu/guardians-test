export const formatScore = (num, size) => {
  let s = num.toString();
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
};


export const formatLevel = (num, size) => {
  let s = num.toString();
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
};

export const ellipsizeText = (text) => {
  if (text.length > 10) {
    return text.substr(0, 10) + '...';
  } else {
    return text;
  }
}
