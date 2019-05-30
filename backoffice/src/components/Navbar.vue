<template>
  <nav>
    <v-toolbar flat app  class="text-uppercase grey--text">
      <v-toolbar-side-icon class="grey--text" @click="drawer = ! drawer"></v-toolbar-side-icon>

      <span class="font-weight-light">ToDo</span>
      <span>Ninnja</span>

      <!-- da razdvjim ove dve komponente -->
      <v-spacer></v-spacer>

      <v-btn flat color="grey" right class="caption">
        <span>Sign Out</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app flat v-model="drawer" class="blue lighten-1" fixed >
      <v-list>
        <v-list-tile v-for="item in links" v-bind:key="item.icon" router :to="item.route">
          <v-list-tile-action class="white--text">
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{item.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  },
  methods: {}
};
</script>
