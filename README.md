
# tag-truthy

[Tagged template function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that filters falsy values.

## Example

```js
const tpl = require('tag-truthy')

const html = tpl`
  <div>
    ${condition && `
      <span>Yay!</span>
    `}
  </div>
`
```

If `condition` is `truthy`, this outputs as expected:

```html
<div>
  <span>Yay!</span>
</div>
```

If `condition` is `falsy`, this cleans up the `falsy` values and outpus:

```html
<div></div>
```

Without `tag-truthy`, the output would be:

```html
<div>
  false
</div>
```

## Installation

```bash
$ npm install tag-truthy
```

## license

MIT
