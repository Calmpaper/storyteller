const { GraphQLServer } = require('graphql-yoga')
const { makeSchema, objectType, intArg, stringArg } = require('@nexus/schema')
const { PrismaClient } = require('@prisma/client')

const { nexusPrisma } = require('nexus-plugin-prisma')
const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema')
const types = require('./graphql')

const prisma = new PrismaClient()

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrisma({ experimentalCRUD: true })],
    outputs: {
      schema: __dirname + '/../schema.graphql',
    },
  }),
  context: { prisma },
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql#using-the-graphql-api`,
  ),
)

module.exports = types
