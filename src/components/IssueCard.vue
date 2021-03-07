<template>
  <v-card
    class="transition-fast-in-fast-out v-card--reveal"
    style="height: 100%"
  >
    <v-card-text class="pb-0">
      <p class="display-1 text--primary">{{ issue.id }}-{{ issue.subject }}</p>
      <p>
        {{ issue.description }}
      </p>
      <p>
        {{ issue.createdOn }}
      </p>
    </v-card-text>
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="teal accent-4" v-bind="attrs" v-on="on">
          See more
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ issue.id }}-{{ issue.subject }}
        </v-card-title>

        <v-card-text>
          {{ issue.description }}
        </v-card-text>
        <v-card-text>
          {{ issue.createdOn }}
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IssueCard",
  props: ["issue"],
  data: () => {
    return {
      dialog: false
    };
  },
  methods: {
    gotoDetail() {
      this.$router.push(`/issue/${this.issue.id}`);
    }
  }
});
</script>
