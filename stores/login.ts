import { defineStore } from "pinia";
import { TextField } from "~~/types/components";
import { Ref } from "vue";

export const useLoginStore = defineStore("login", {
  state: () => ({
    fields: fields as Ref<TextField[]>,
    sidebar: false as boolean,
    form: ref(false),
    loading: ref(false),
    errorMessage: ref(""),
  }),
});

const fields: Ref<TextField[]> = ref([
  {
    type: "text",
    label: "Email",
    prependInnerIcon: "mdi-account",
    model: "email",
    validations: [
      (value: string) => !!value || "Email is required.",
      (value: string) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    ],
  },
  {
    type: "password",
    label: "Password",
    prependInnerIcon: "mdi-lock",
    model: "password",
    validations: [(value: string) => !!value || "Password is required."],
  },
]);
