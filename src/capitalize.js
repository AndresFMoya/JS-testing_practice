const capitalize = str => {
  if (!str) return null;

  const result = [];
  str.split(' ').forEach(s => {
    result.push(s[0].toUpperCase() + s.split('').slice(1).join('').toLowerCase());
  });
  return result.join(' ');
};

export default capitalize;
