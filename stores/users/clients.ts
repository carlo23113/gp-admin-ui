import { Client } from "@/types/users/clients";
import { PaginatorInfo, Header } from "@/types";
import { defineStore } from "pinia";

export const useClientsStore = () => {
  const setupStore = defineStore("clients", {
    state: () => ({
      clients: [] as Client[],
      paginatorInfo: {} as PaginatorInfo,
      headers: headers as Header[],
      loading: false as boolean,
    }),
    actions: {
      async fetchClients() {
        this.loading = true;

        const { onResult } = await useQuery(gql`
          query {
            clients {
              data {
                client_id
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

        onResult((result: any) => {
          const clients = result.data.clients;
          this.clients = clients.data;

          this.paginatorInfo = clients.paginatorInfo;
          this.loading = false;
        });
      },
    },
  });

  const store = setupStore();
  store.fetchClients();
  return store;
};

const headers = [
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
];
