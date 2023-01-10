import { LoginPayload } from "./../types/auth";
import { defineStore } from "pinia";
import gql from "graphql-tag";

export const useAuthStore = () => {

  const setupAuthStore = defineStore("auth", {
    state: () => ({
      token: "" as string,
      credentials: credentials as LoginPayload | any
    }),
    actions: {
      async login() {
        const { mutate: login } = useMutation(
          gql`
            mutation login($email: String!, $password: String!) {
              login(input: { email: $email, password: $password }) {
                __typename
                ... on LoginPayload {
                  login_type
                  access_token
                  type
                  expires_in
                }
                ... on Error {
                  message
                }
              }
            }
          `,
          {
            variables: {
              email: this.credentials.email,
              password: this.credentials.password,
            },
          }
        );

        return login();
      },
    },
  });

  const store = setupAuthStore();
  return store;
};

const credentials: LoginPayload = {
  email: "",
  password: "",
};