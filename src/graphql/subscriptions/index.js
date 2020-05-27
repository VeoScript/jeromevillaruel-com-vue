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


export const COUNT_ALL_SUBSCRIBER_SUBSCRIPTION = gql`
subscription getCountSubscriber {
    subscriberCount: villaruel_subscriber_aggregate {
      aggregate {
        count
      }
    }
  }  
`

export const GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION = gql`
subscription getAllSubscriber {
    villaruel_subscriber {
      id
      email
    }
  }
`


export const GET_SINGLE_USER_POST_SUBSCRIPTION = gql`
subscription getSingleUserPost ($post_id: uuid!){
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
      }
    }
    commentCount: comments_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        name
      }
    }
  }
}
`

export const GET_ALL_USER_COMMENT_BY_ID_SUBSCRIPTION = gql`
subscription getAllUserCommentByPostID ($post_id: uuid!) {
  comments(where: {post_id: {_eq: $post_id}}) {
    id
    name
    comment
    created_at
  }
}
`