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

export const GET_ALL_POSTS_FREEDOM_WALL = gql`
query getAllPostFreedomWall {
  freedom_wall(order_by: {created_at: desc}, limit: 20, offset: 0) {
    id
    name
    posts
    created_at
    react: react_users_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        name
      }
    }
    commentCount: comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
`

export const GET_SINGLE_USER_POST = gql`
query getSingleUserPost ($post_id: uuid!){
  freedom_wall(order_by: {created_at: desc}, where: {id: {_eq: $post_id}}) {
    id
    name
    posts
    created_at
    react: react_users_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        name
        created_at
      }
    }
    commentCount: comments_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        name
        created_at
      }
    }
  }
}
`

export const GET_ALL_USER_COMMENT_BY_ID = gql`
query getAllUserCommentByPostID ($post_id: uuid!) {
  comments(where: {post_id: {_eq: $post_id}}) {
    id
    name
    comment
    created_at
  }
}
`
export const GET_ADMIN_PASSWORD = gql`
query showPassword {
  administrator {
    id
    password
  }
}
`