const ascii = char => char.charCodeAt(0);
const isLower = code => code >= ascii('a') && code <= ascii('z');
const isUpper = code => code >= ascii('A') && code <= ascii('Z');

const caesar = (str, off) => {
  const res = [];
  let offset = off;
  offset %= 25; // Allow large outputs
  str.split('').forEach(c => {
    let code = ascii(c);
    if (isLower(code)) {
      if ((code + offset) > ascii('z')) {
        code = ascii('a') + (code + offset - ascii('z') - 1);
      } else {
        code += offset;
      }
    }
    if (isUpper(code)) {
      if ((code + offset) > ascii('Z')) {
        code = ascii('A') + (code + offset - ascii('Z') - 1);
      } else {
        code += offset;
      }
    }
    res.push(String.fromCharCode(code));
  });
  return res.join('');
};

caesar('abc', 2);

export default caesar;
