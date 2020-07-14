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


export const HEART_REACT_MUTATION = gql`
mutation ReactHeart($name: String!, $post_id: uuid!) {
  insert_react_users(objects: {name: $name, post_id: $post_id}) {
    returning {
      id
      name
      post_id
      heart
    }
  }
}
`

export const COMMENT_MUTATION = gql`
mutation commentMutation ($post_id: uuid!, $name: String!, $comment: String!) {
  insert_comments(objects: {post_id: $post_id, name: $name, comment: $comment}) {
    affected_rows
  }
}
`


export const REPORT_DELETE_MUTATION = gql`
mutation reportMutation($post_id: uuid!) {
  delete_react_users(where: {post_id: {_eq: $post_id}}) {
    affected_rows
    returning {
      id
      name
    }
  }
  delete_comments(where: {post_id: {_eq: $post_id}}) {
    affected_rows
    returning {
      comment
    }
  }
  delete_freedom_wall(where: {id: {_eq: $post_id}}) {
    affected_rows
    returning {
      id
      name
    }
  }
}
`