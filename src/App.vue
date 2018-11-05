 lines (72 sloc)  1.94 KB
<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Fising Friends</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
                        <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
      <v-tabs
      fixed-tabs
    centered    
    dark
    icons-and-text
  >
    
<v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab href="#tab-1">
      나눔목록
      <v-icon>view_list</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      랭킹
      <v-icon>stars</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      지도
      <v-icon>place</v-icon>
    </v-tab>

  </v-tabs>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>