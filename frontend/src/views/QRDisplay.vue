<template>
  <v-container class="">
    <v-spacer class="mb-3"></v-spacer>
    <v-text class="headline mx-auto text-center">Scan QR to register the visit</v-text>
    <v-card
      class="mx-auto"
      max-width="340"
      height="300"
    >
      <v-card-text class='text-center'>
        <img alt="Vue logo" src="../assets/qrcode.png" width="300" height="300">
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
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
