<template>
  <v-app>
    <v-app-bar app color="indigo darken-1" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-tabs>
        <v-tab to="/" class="title">{{ name }} {{ version }}</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-btn href="https://www.redmine.org" target="_blank" text>
        <span class="mr-2">Redmine homepage</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { name, version } from "../package.json";

export default Vue.extend({
  name: "App",
  data: () => {
    return {
      name,
      version
    };
  }
});
</script>
