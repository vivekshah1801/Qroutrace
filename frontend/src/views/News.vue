<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-system-bar
      color="indigo darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>News</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <a href="https://timesofindia.indiatimes.com/city/ahmedabad/505-new-covid-19-cases-in-gujarat-three-deaths/articleshow/80305526.cms">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >

              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            </a>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'News',
  data: () => ({
    cards: [
      { title: '505 new Covid-19 cases in Gujarat, three deaths', src: '../assets/news.jpg', flex: 12 },
      { title: 'night-curfew-to-continue-for-15-more-days-in-four-gujarat-cities', src: '../assets/news.jpg', flex: 6 },
      { title: 'Gujarat sees 518 new Covid-19 cases, 704 recoveries', src: '../assets/news.jpg', flex: 6 },
    ],
  }),
};
</script>
