const { mutationType, intArg, stringArg, arg } = require('@nexus/schema')
// const slugify = require('slugify')

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()

    t.crud.createOneStory()
    t.crud.updateOneStory()
    t.crud.upsertOneStory()
    t.crud.deleteOneStory()

    t.crud.createOneChapter()
    t.crud.updateOneChapter()
    t.crud.upsertOneChapter()
    t.crud.deleteOneChapter()

    t.crud.createOneCharacter()
    t.crud.updateOneCharacter()
    t.crud.upsertOneCharacter()
    t.crud.deleteOneCharacter()

    t.crud.createOneTrait()
    t.crud.updateOneTrait()
    t.crud.upsertOneTrait()
    t.crud.deleteOneTrait()

    t.crud.createOneEvent()
    t.crud.updateOneEvent()
    t.crud.upsertOneEvent()
    t.crud.deleteOneEvent()

    t.crud.createOneEntity()
    t.crud.updateOneEntity()
    t.crud.upsertOneEntity()
    t.crud.deleteOneEntity()
  },
})

module.exports = {
  Mutation,
}
