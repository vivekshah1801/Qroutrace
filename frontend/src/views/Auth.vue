<template>
  <div class="home">
    <Login/>
    <SignUp/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';

export default {
  name: 'Auth',
  components: {
    Login,
  },
};
</script>
