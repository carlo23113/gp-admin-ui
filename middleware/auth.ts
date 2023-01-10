import gql from "graphql-tag";

export default defineNuxtRouteMiddleware((to, from) => {
  const { onResult, onError } = useQuery(gql`
    query {
      me {
        first_name
        last_name
      }
    }
  `);
  
  onResult((result) => {
    if (!result.data.me) {
      navigateTo("/login");
    } else if (from.name === "login") {
      navigateTo("/dashboard");
    }
  });

  onError((error) => {
    navigateTo("/login");
    console.error(error);
  })
});
