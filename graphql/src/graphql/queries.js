const { queryType, intArg, stringArg } = require('@nexus/schema')
const { getUserId } = require('../utils')

const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users()
    t.crud.story()
    t.crud.stories({ ordering: true, filtering: true })
    t.crud.chapter()
    t.crud.chapters({ ordering: true, filtering: true, pagination: true })
    t.crud.character()
    t.crud.characters()
    t.crud.trait()
    t.crud.traits({ ordering: true, filtering: true, pagination: true })
    t.crud.event()
    t.crud.events()
    t.crud.entity()
    t.crud.entities()

    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: async (parent, args, ctx) => {
        const userId = getUserId(ctx)

        return await ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
        })
      },
    })
  },
})

module.exports = {
  Query,
}
