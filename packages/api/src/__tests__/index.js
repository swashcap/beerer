const supertest = require('supertest')
const app = require('../')

/**
 * Send a basic introspection query to test everything's wired up correctly.
 * {@link https://graphql.org/learn/introspection/}
 */
test('graphql route', () => supertest(app)
  .post('/graphql')
  .send({
    query: '{ __schema { types { name } } }'
  })
  .expect(200)
  .then(({ body }) => {
    expect(body.data && body.__schema)
  })
)
