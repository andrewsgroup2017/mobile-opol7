<template>
  <v-app id="inspire">
    <div v-if="$user">
      <v-content>
        <router-view />
      </v-content>
      <v-card height="200px">
        <v-bottom-nav :value="true"
                      :active.sync="e2"
                      color="blue darken-3"
                      absolute
                      shift
                      app>
          <v-btn dark
                 @click="moveOn(0)">
            <span>Schedule</span>
            <v-icon>assignment</v-icon>
          </v-btn>

          <v-btn dark
                 @click="moveOn(1)">
            <span>Assets</span>
            <v-icon>build</v-icon>
          </v-btn>

          <v-btn dark
                 @click="moveOn(2)">
            <span>People</span>
            <v-icon>chat</v-icon>
          </v-btn>

          <v-btn dark
                 @click="moveOn(3)">
            <span>Status</span>
            <v-icon>settings</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card>
    </div>
    <div v-else>
      <v-content>
        <router-view />
      </v-content>
    </div>
  </v-app>
</template>

<script>
import { EventBus } from "./services/event-bus.js";

export default {
  created() {
    EventBus.$on("location-update", location => {
      try {
        var u = this.$root.user;
        console.log(u.uid);
        var lat = location.latitude;
        var lng = location.longitude;
        if (!u) {
          {
            u = {};
            u.uid = "no_currentLoggedInUser";
          }
        }
          // async function DBSave() {
       var newPostKey =  window.firebase
          .database()
          .ref("logs")
          .push({
            eventType: "position-update",
            time: location.time,
            lat: lat,
            lng: lng,
            user: u.uid
        })
        console.log(newPostKey)
      } catch (error) {
        console.log(error)
      }
    });
  },
  data: () => ({
    dialog: false,
    drawer: null,
    e2: 0,
    items: [
      {
        icon: "contacts",
        text: "Contacts"
      },
      {
        icon: "history",
        text: "Frequently contacted"
      },
      {
        icon: "content_copy",
        text: "Duplicates"
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Labels",
        model: true,
        children: [
          {
            icon: "add",
            text: "Create label"
          }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "More",
        model: false,
        children: [
          {
            text: "Import"
          },
          {
            text: "Export"
          }
        ]
      },
      {
        icon: "settings",
        text: "Settings"
      },
      {
        icon: "chat_bubble",
        text: "Send feedback"
      }
    ]
  }),

  methods: {
    moveOn(n) {
      switch (n) {
        case 0:
          console.log(n);
          this.$router.replace("bluetooth");
          break;
        case 1:
          this.$router.replace("camera");
          break;
        case 2:
          this.$router.replace("posts");
          break;
        case 3:
          this.$router.replace("status");
          break;
      }
    }
  }
};
</script>
