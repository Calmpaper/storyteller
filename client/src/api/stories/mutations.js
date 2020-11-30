import gql from 'graphql-tag'

export const createStoryMutation = gql`
  mutation($userEmail: String!, $title: String!, $slug: String!) {
    createOneStory(
      data: {
        title: $title
        slug: $slug
        author: { connect: { email: $userEmail } }
        chapters: { create: { title: "Chapter 1", slug: "Chapter-1" } }
      }
    ) {
      id
      slug
      title
    }
  }
`
