const express = require('express')
const graphqlHTTP = require('express-graphql')
const morgan = require('morgan')
const schema = require('beerer-schema')
const { buildSchema } = require('graphql')

const resolvers = require('./resolvers/index.js')

const IS_DEV = !(process.env.NODE_ENV === 'production')
const PORT = process.env.PORT || 4000

const app = express()

app.use(morgan(IS_DEV ? 'dev' : 'short'))
app.use('/graphql', graphqlHTTP({
  graphiql: IS_DEV,
  pretty: IS_DEV,
  rootValue: resolvers,
  schema: buildSchema(schema)
}))

if (require.main === module) {
  app.listen(PORT, (error) => {
    if (error) {
      throw error
    } else {
      console.log(`Server listening at http://localhost:${PORT}`)
    }
  })
}

module.exports = app
