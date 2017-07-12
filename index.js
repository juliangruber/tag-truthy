module.exports = (strings, ...values) =>
  strings.map((string, i) => string + (values[i] || '')).join('')
