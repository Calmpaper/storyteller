import gql from 'graphql-tag'

export const getStoriesQuery = gql`
  query($userEmail: String!) {
    stories(where: { author: { email: { equals: $userEmail } } }) {
      id
      slug
      title
    }
  }
`

export const getStoryQuery = gql`
  query($slug: String!, $authorEmail: String!) {
    story(
      where: { authorEmail_slug: { authorEmail: $authorEmail, slug: $slug } }
    ) {
      id
      slug
      title
      chapters {
        id
        events {
          title
        }
      }
    }
  }
`
