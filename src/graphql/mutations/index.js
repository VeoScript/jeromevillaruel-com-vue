import gql from 'graphql-tag'

export const ADD_SUBSCRIBER_MUTATION = gql`
mutation addSubscriber($email: String!) {
    insert_villaruel_subscriber(objects: [{email: $email}]) {
      returning {
        id
        email
      }
    }
  }  
`