### Vanilla DOM

A small API for creating elements based off of [jsonML](http://www.jsonml.org/) and React's DOM api.

```js
const { dom } = require("vanilla-dom");

dom.li(
  { className: "todo" },
  dom.img({src: "todo-success.png"}),
  dom.span({}, todo)
)
```

#### Motivation

* The DOM api for creating elements is really frustrating.
* Sometimes React is like bringing a gun to a sword fight
