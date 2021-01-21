<template>
  <v-container>
    <div class="about">
      <h1>Creators</h1>
      <v-spacer class="mb-4"></v-spacer>
      <div v-for="team in teams" v-bind:key="team.name">
        <h3>{{team.name}}</h3>
        <a :href="team.github">
          <h5>{{team.github}}</h5>
        </a>
        <v-spacer class="mb-3"></v-spacer>
      </div>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'about',
  components: {
  },
  data: () => ({
    teams: [
      {
        name: 'Vivek Shah',
        github: 'https://github.com/vivekshah1801',
      },
      {
        name: 'Avina Vekariya',
        github: 'https://github.com/avni0405',
      },
    ],
  }),
};
</script>
