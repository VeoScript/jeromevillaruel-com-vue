import gql from 'graphql-tag'

export const GET_ALL_SUBSCRIBER_QUERY = gql`
query getAllSubscriber {
    villaruel_subscriber {
      id
      email
    }
  }
`
export const COUNT_ALL_SUBSCRIBER_QUERY = gql`
query getCountSubscriber {
    subscriberCount: villaruel_subscriber_aggregate {
      aggregate {
        count
      }
    }
  }  
`