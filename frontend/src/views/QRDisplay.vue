<template>
  <v-card
    class="mx-auto"
    max-width="340"
    height="300"
  >
    <v-card-text  class='text-center'>
       <img alt="Vue logo" src="../assets/qrcode.png" width="300" height="300">
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'QrDisplay',
  data: () => ({
    reveal: false,
  }),
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height:100%;
}
</style>
