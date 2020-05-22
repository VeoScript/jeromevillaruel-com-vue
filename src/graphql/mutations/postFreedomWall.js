import gql from 'graphql-tag'

export const POST_FREEDOM_WALL = gql`
mutation postFreedomWall ($name: String!, $posts: String!){
    insert_freedom_wall(objects: {name: $name, posts: $posts}) {
      returning {
        id
        name
        posts
      }
    }
  }  
`