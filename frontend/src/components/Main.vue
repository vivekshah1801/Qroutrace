<template>
  <v-card color='basil'>
    <v-card-title class='text-center justify-center py-6'>
      <h1 class='font-weight-bold display-3 basil--text'>
        Qroutrace
      </h1>
    </v-card-title>

    <v-tabs
      v-model='tab'
      background-color='transparent'
      color='basil'
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color='basil'
          flat
        >
          <v-card-text v-if="item=='Alert'"><Alert/></v-card-text>
          <v-card-text v-if="item=='News'"><News/></v-card-text>
          <v-card-text v-if="item=='QR Scanner'"><QrScan/></v-card-text>
          <v-card-text v-if="item=='QR Code'"><QrDisplay/></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

</template>

<script>
import Alert from '@/views/Alert.vue';
import News from '@/views/News.vue';
import QrScan from '@/views/QRScan.vue';
import QrDisplay from '@/views/QRDisplay.vue';

export default {
  name: 'Main',
  components: {
    Alert,
    News,
    QrScan,
    QrDisplay,
  },
  data() {
    return {
      tab: null,
      items: [
        'Alert', 'News', 'QR Scanner', 'QR Code',
      ],
      text: [Alert],
    };
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
