import gql from 'graphql-tag'

// export const getStoriesQuery = gql`
//   query($userEmail: String!) {
//     stories(where: { author: { email: { equals: $userEmail } } }) {
//       id
//       slug
//       title
//     }
//   }
// `

export const getCharacterQuery = gql`
  query($slug: String!, $authorEmail: String!) {
    character(
      where: { authorEmail_slug: { authorEmail: $authorEmail, slug: $slug } }
    ) {
      id
    }
  }
`
