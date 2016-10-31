### Vanilla DOM

A small API for creating elements based off of [jsonml](http://www.jsonml.org/) and React's DOM api.


```js
const { dom } = require("vanilla-dom");

dom.li(
  { className: "todo" },
  dom.img({src: "todo-success.png"}),
  dom.span({}, todo)
)
```
