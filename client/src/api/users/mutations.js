import gql from 'graphql-tag'

export const createTagMutation = gql`
  mutation($label: String!) {
    createOneTag(data: { label: { set: $label } }) {
      id
      label
    }
  }
`

export const loginMutation = gql`
  mutation($email: String!) {
    upsertOneUser(
      where: { email: $email }
      update: { email: { set: $email } }
      create: { email: $email }
    ) {
      id
    }
  }
`
