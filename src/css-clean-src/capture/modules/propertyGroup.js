const l = require('lasso-string');

let format = {};

format.background = function (value) {
  console.log(value);
  return value;
};

format.backgroundImage = format.background;

function propertyGroup(buffer) {
  let n = buffer.string.length;
  let i = 0;
  let m;

  console.log(arguments);

  while (buffer.string[i] !== ';' && i < n) {
    i++;
  }

  m = buffer.string.substr(0, i).split(':').map(a => a.trim());

  buffer.string = buffer.string.substr(i + 1);

  m[1] = m.slice(1).join(':').replace(/\n/g, '').replace(/;$/, '').replace(/\s+/g, ' ');

  return {
    name : m[0],
    value : typeof format[l.camelCase(m[0])] === 'function'
      ? format[l.camelCase(m[0])](m[1])
      : m[1]
  };
}

module.exports = propertyGroup;
