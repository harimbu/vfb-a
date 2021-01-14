<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" width="400">
      <Menu :site="site" />
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <Header :title="site.title" />
      <v-spacer></v-spacer>
      <Sign />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer :footer="site.footer" />
  </v-app>
</template>

<script>
import site from '@/assets/site'
import Header from '@/components/site/header'
import Footer from '@/components/site/footer'
import Menu from '@/components/site/menu'
import Sign from '@/components/site/sign'

export default {
  name: 'App',
  components: { Header, Footer, Menu, Sign },
  data() {
    return {
      drawer: null,
      site: site
    }
  },
  created() {
    this.subscribe()
  },
  methods: {
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child('site')
        .on(
          'value',
          snap => {
            const v = snap.val()
            if (!v) {
              this.$firebase
                .database()
                .ref()
                .child('site')
                .set(this.site)
            } else {
              this.site = v
            }
          },
          e => {
            console.log(e.message)
          }
        )
    }
  }
}
</script>
