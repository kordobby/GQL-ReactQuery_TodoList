import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `...`;

const graphQLClient = new GraphQLClient(API_URL, {});

// API 에서 todoList 가져오기 위한 함수 생성
export function useGetPosts() {
  // useQuery Key & gql Query
  return useQuery("get-todo", async () => {
    const { getTodoList } = await graphQLClient.request(gql`
      query {
        getTodoList {
          items {
            _id
            title
            content
          }
        }
      }
    `);
  });
}

export function useGetPost(postId: number) {
  return useQuery(["get-todo", postId], async () => {
    const { getTodo } = await graphQLClient.request(
      gql`
        query getTodo($postId: ID!) {
          getPost(_id: $postId) {
            _id
            title
            content
          }
        }
      `,
      { postId }
    );
    return getTodo; // fetch 완료 시 data 반환
  });
}
