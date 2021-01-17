<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn href="/" text>
        <div class="headline">{{appname}}</div>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text >
        <router-link to="/home"  class="white--text" >Home</router-link>
      </v-btn>
      <v-btn text >
        <router-link to="/auth/"  class="white--text" >Login</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/profile" class="white--text" >profile</router-link>
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
