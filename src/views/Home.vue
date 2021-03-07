<template>
  <div>
    <Search />
    <div class="px-4">
      <p>Top 20 issues</p>
      <v-progress-linear
        v-if="loading"
        color="deep-purple accent-4"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
      <div v-for="issue of issues" :key="issue.id" class="my-2">
        <IssueCard :issue="issue" :loading="loading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Search from "@/components/Search.vue";
import IssueCard from "@/components/IssueCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Search,
    IssueCard
  },
  computed: {
    ...mapGetters("issues", ["issues", "loading"])
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).getData();
  },
  methods: {
    getData() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this as any).$store.dispatch("issues/getIssues");
    }
  }
};
</script>
