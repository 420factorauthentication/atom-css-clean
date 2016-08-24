const l = require('lasso-string');
const splitByComma = require('../../../vendor/splitByComma');

module.exports = function (that, element, siblings) {
  const tab = new Array((element.depth * that.tabSize) + 1).join(that.tabChar);
  let value = splitByComma(element.value);
  let align = new Array(element.align + 4).join(' ');
  let padding;

  if (element.align) {
    value = value
      .map(function (a, i) {
        return i === 0 ? a : tab + align + a;
      })
      .join(',\n');

    padding = new Array(element.align - element.name.length + 2).join(' ');

    return `${element.name}${padding}: ${value};`;
  }

  return element.name + ': ' + element.value + ';';
};
