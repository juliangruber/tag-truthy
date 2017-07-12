const tpl = require('.')

console.log(tpl`
  <div>
    ${true && `
      <span>Yay!</span>
    `}
  </div>
`)

console.log(tpl`
  <div>
    ${false && `
      <span>Yay!</span>
    `}
  </div>
`)

console.log(`
  <div>
    ${false && `
      <span>Yay!</span>
    `}
  </div>
`)
