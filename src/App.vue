 lines (72 sloc)  1.94 KB
<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app>
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

    <v-toolbar id="main-toolbar" app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><span class="size-26">온 바 다</span></v-toolbar-title>
    </v-toolbar>
    
    <v-content>
        
            <router-view></router-view>
        
    </v-content>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"      
      app
      fixed
    >
      <v-btn dark :to="{path:'/'}">
        <span>나눔목록</span>
        <v-icon>view_list</v-icon>
      </v-btn>

      <v-btn dark :to="{path:'/ranking'}">
        <span>랭킹</span>
        <v-icon>stars</v-icon>
      </v-btn>

      <v-btn dark :to="{path:'/usermap'}">
        <span>지도</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  


  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      bottomNav: 3
    }),
    props: {
      source: String
    },
    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return '#4158d0'
          case 1: return '#c850c0'
          case 2: return '#ffcc70'
          
        }
      }
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@font-face {
  font-family: 'Hanna';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.eot);
  src: url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.eot?#iefix) format('embedded-opentype'),
       url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.woff2) format('woff2'),
       url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.woff) format('woff'),
       url(//fonts.gstatic.com/ea/hanna/v3/BM-HANNA.ttf) format('truetype');
}

  #main-toolbar {
    background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
    );
    font-family: 'Hanna', sans-serif;
    text-align: center;
  }

  #tabbar1 {
    background-color: #4158d0 ;   
    font-family: 'Hanna', sans-serif;
  }
  
  #tabbar2 {     
    background-color: #c850c0;   
    font-family: 'Hanna', sans-serif;
  }

  #tabbar3 {
    background-color: #c9a157 ;
    font-family: 'Hanna', sans-serif;
  }
.size-26 { font-size: 26px }

</style>
