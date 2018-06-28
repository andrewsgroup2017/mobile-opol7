<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
    <div class="header">
      <img src="../assets/onsenui-logo.png">
    </div>

    <v-ons-list-title>Onsen UI Essential Links</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item v-for="item in menus" :key="item.path" modifier="chevron" @click="goTo(item.path)">
        <div class="left">
          <v-ons-icon :icon="item.icon" fixed-width>
          </v-ons-icon>
        </div>
        <div class="center">{{ item.title }}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import Menu from "../menu";

export default {
  name: "Menu",
  data() {
    return {
      menus: Menu.sidebarMenu
    };
  },
  methods: {
    goTo(path) {
      this.$store.commit("toggleMenu", false);
      this.$router.push(path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-item {
  cursor: pointer;
}
</style>
