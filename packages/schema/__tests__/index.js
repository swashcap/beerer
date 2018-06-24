const { buildSchema } = require('graphql')
const { validateSchema } = require('graphql/type/validate.js')

const schema = require('../src/index.js')

test('schema validates', () => {
  expect(validateSchema(buildSchema(schema))).toEqual([])
})
