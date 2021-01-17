<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn href="/" text>
        <div class="headline">{{appname}}</div>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        v-on:click="logOut"
      >
        Log Out
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>{{appname}}</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'Qroutrace',

  components: {
    // HelloWorld,
  },

  data: () => ({
    appname: 'Qroutrace',
  }),
};
</script>
