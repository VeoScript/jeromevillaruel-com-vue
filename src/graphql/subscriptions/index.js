import gql from 'graphql-tag'

export const GET_ALL_POSTS_FREEDOM_WALL_SUBSCRIPTION = gql`
subscription getAllPostFreedomWall {
  freedom_wall(order_by: {created_at: desc}) {
    id
    name
    posts
    created_at
    react: react_users_aggregate {
      aggregate {
        count
      }
    }
    nodes {
      id
      name
    }
  }
}
`