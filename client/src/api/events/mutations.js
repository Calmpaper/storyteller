import gql from 'graphql-tag'

export const createEventMutation = gql`
  mutation(
    $title: String!
    $chapterId: Int!
    $characters: [CharacterCreateOrConnectWithoutEventInput!]
  ) {
    createOneEvent(
      data: {
        title: $title
        chapter: { connect: { id: $chapterId } }
        characters: { connectOrCreate: $characters }
      }
    ) {
      id
      characters {
        name
      }
    }
  }
`

// [
// {
//   where: {
//     authorEmail_slug: {
//       authorEmail: "ignatif@gmail.com"
//       slug: "Beth"
//     }
//   }
//   create: { name: "Beth", slug: "Beth" }
// }
// {
//   where: {
//     authorEmail_slug: {
//       authorEmail: "ignatif@gmail.com"
//       slug: "John"
//     }
//   }
//   create: { name: "John", slug: "John" }
// }
// ]
