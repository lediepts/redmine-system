<template>
  <v-container>
    <v-card elevation="6" outlined shaped class="mx-auto my-12 py-10">
      <v-card-subtitle class="pa-0">
        <v-card-text align="center" class="mx-0 py-0 red--text font-weight-bold"
          >Github owner
          <v-card-text class="pa-0">
            <a target="_blank" href="https://github.com/lediepts">lediepts</a>
          </v-card-text>
        </v-card-text>
        <v-card-text align="center" class="mx-0 pb-0 red--text font-weight-bold"
          >Github repo
          <v-card-text class="pa-0">
            <a target="_blank" href="https://github.com/lediepts/redmine-system"
              >redmine-issues</a
            >
          </v-card-text>
        </v-card-text>
      </v-card-subtitle>
      <v-card-subtitle class="pa-0">
        <v-card-text align="center" class="mx-0 pb-0 red--text font-weight-bold"
          >Email
          <v-card-text class="pa-0"
            ><a href="mailto:diep.le@0004s.com"
              >diep.le@0004s.com</a
            ></v-card-text
          >
          <v-card-text class="pa-0">
            <a href="mailto:dieplh.elite@gmail.com">dieplh.elite@gmail.com</a>
          </v-card-text>
        </v-card-text>
      </v-card-subtitle>
      <div v-html="html"></div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      html: "<span style='color:red;'></span>"
    };
  }
};
</script>
