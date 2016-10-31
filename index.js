let dom = {};

function toDash(str){
  return str.replace(/([A-Z])/g,($1) => "-"+$1.toLowerCase());
};

function formatStyles(styles) {
  const style = [];
  const keys = Object.keys(styles);

  for (var i = 0; keys.length > i; i++) {
    const key = keys[i];
    const value = styles[key];
    style.push(`${key}: ${value};`)
  }

  return style.join(" ");
}

function formatAttr(node, key, value) {
  if (key == "className") {
    const classes = value.split(" ")
    classes.forEach(klass => node.classList.add(klass))
    return;
  }

  if (key.match(/^on/)) {
    key = key.toLowerCase();
  }

  if (key == "style") {
    value = formatStyles(value);
  }

  const attr = document.createAttribute(key);
  attr.value = value;
  node.setAttributeNode(attr)
}

function formatAttrs(node, attrs) {
  const keys = Object.keys(attrs);
  for (var i = 0; keys.length > i; i++) {
    const key = keys[i];
    const value = attrs[key];
    formatAttr(node, key, value);
  }
}


function createElement(tag, args) {
  const node = document.createElement(tag);
  const attrs = args.shift() || {};
  const children = args;

  const childNodes = children.forEach(child => node.appendChild(child))
  formatAttrs(node, attrs);
  return node;
}

dom.div = function() {
  return createElement("div", Array.prototype.slice.call(arguments));
}

module.exports = {
  dom
}
