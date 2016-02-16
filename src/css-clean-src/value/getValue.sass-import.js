getValue['sass import'] = function (settings, element, parent) {
  var tab = new Array((element.depth + 1) * settings.tabSize).join(settings.tabChar);
  var space = '';
  var x = 0;
  var v;
  var alignSpace = '';
  if (element.align) {
    alignSpace = new Array(element.align - element.name.length + 1).join(' ');
  }
  if (settings.align) {
    space = `${tab}${alignSpace}${new Array(element.name.length + 1).join(' ')}`;
    element.value = element.value.map(function (a, i) {
      if (i > 0) {
        return `${space}"${a}"`;
      }
      return `"${a}"`;
    });
  } else {
    element.value = element.value.map((a) => `"${a}"`);
  }
  v = element.value.join(',\n');
  if (element.align) {
    return `${element.name}${alignSpace} ${v};`;
  }
  return `${element.name} ${v};`;
};
