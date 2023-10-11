const { hello } = require('./index')

test('hola mundo', () => {
  expect(hello()).toBe('world')
})