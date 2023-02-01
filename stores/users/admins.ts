import { Admin } from "~~/types/users/admins";
import { PaginatorInfo, Header } from "@/types";
import { defineStore } from "pinia";

export const useAdminsStore = () => {
  const setupStore = defineStore("admin", {
    state: () => ({
      admins: [] as Admin[],
      paginatorInfo: {} as PaginatorInfo,
      loading: false as boolean,
      headers: [
        {
          label: "First Name",
          value: "first_name",
        },
        {
          label: "Last Name",
          value: "last_name",
        },
        {
          label: "Email",
          value: "email",
        },
      ] as Header[],
    }),
    actions: {
      async fetchAdmins() {
        this.loading = true;

        const { onResult, loading } = await useQuery(gql`
          query {
            admins {
              data {
                admin_id
                email
                first_name
                last_name
                status
              }
              paginatorInfo {
                count
                total
                currentPage
                lastPage
              }
            }
          }
        `);

        this.loading = loading.value;

        onResult((result: any) => {
          const admins = result.data.admins;
          this.admins = admins.data;
          this.paginatorInfo = admins.paginatorInfo;
          this.loading = false;
        });
      },
    },
  });

  const store = setupStore();
  store.fetchAdmins();
  return store;
};
