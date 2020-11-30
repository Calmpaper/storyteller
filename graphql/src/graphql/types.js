const { objectType, enumType } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
  },
})

const Story = objectType({
  name: 'Story',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.slug()
    t.model.chapters()
    t.model.author()
  },
})

const Chapter = objectType({
  name: 'Chapter',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.slug()
    t.model.events()
  },
})

const Character = objectType({
  name: 'Character',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.slug()
    t.model.stories()
    t.model.events()
    t.model.traits()
    t.model.author()
    t.model.authorEmail()
  },
})

const Trait = objectType({
  name: 'Trait',
  definition(t) {
    t.model.id()
    t.model.key()
    t.model.value()
    t.model.character()
    t.model.entity()
  },
})

const Event = objectType({
  name: 'Event',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.characters()
    t.model.chapter()
  },
})

const Entity = objectType({
  name: 'Entity',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.stories()
    t.model.events()
    t.model.traits()
    t.model.author()
  },
})

module.exports = {
  User,
  Story,
  Chapter,
  Character,
  Trait,
  Event,
  Entity,
}
