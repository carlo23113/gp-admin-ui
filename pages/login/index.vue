<template>
  <div id="login-page">
    <v-form v-model="form" @submit.prevent="login()">
      <div class="login-form">
        <img id="logo" src="@/assets/images/logo.png" />

        <div id="welcome-container">
          <p>Welcome Back</p>
          <small>Enter your credentials to access your account.</small>
        </div>

        <text-field-component
          v-for="(field, i) in fields"
          :key="i"
          v-model:textValue="credentials[field.model]"
          v-bind="field"
        ></text-field-component>

        <v-btn
          :disabled="!form"
          :loading="loading"
          type="submit"
          color="primary"
          block
          flat
          >Sign In</v-btn
        >
        <div>
          <small style="color: red">{{ errorMessage }}</small>
        </div>

        <div id="forgot-password">
          <small
            >Forgot your password?
            <router-link id="reset-password" to="/reset-password"
              >Reset Password</router-link
            >
          </small>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
  middleware: "auth",
});

const authStore = useAuthStore();
const loginStore = useLoginStore();
const { token, credentials } = storeToRefs(authStore);
const { fields, form, errorMessage, loading } = storeToRefs(loginStore);
const { onLogin } = useApollo();

watch(credentials.value, async () => {
  errorMessage.value = "";
})

const login = () => {
  loading.value = true;
  authStore
    .login()
    .then((response: any) => {
      const data = response.data;
      token.value = data.login.access_token;
      onLogin(token.value);
      navigateTo("/dashboard");
    })
    .catch((err: any) => {
      console.log("Something went wrong");
      errorMessage.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<script lang="ts">
import { useAuthStore, useLoginStore } from "@/stores";
import { TextField as TextFieldComponent } from "~~/components/common";
import { storeToRefs } from "pinia";
import { watch } from "vue";

export default defineComponent({
  name: "login-page",
});
</script>

<style lang="scss" scoped>
@import "./login.scss";
</style>
