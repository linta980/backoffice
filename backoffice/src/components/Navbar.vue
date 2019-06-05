<template>
  <nav>
    <v-snackbar v-model="snackbar" color="success" :timeout="3000" top class="width:400px;">
      <span class="subheading">Project has been added</span>
      <v-btn flat class="ml-0" small @click="closeSnackBar">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>

    

    <v-toolbar flat app class="text-uppercase grey--text">
      <v-toolbar-side-icon class="grey--text" @click="drawer = ! drawer"></v-toolbar-side-icon>

      <span class="font-weight-light">ToDo</span>
      <span>Ninnja</span>

      <!-- da razdvjim ove dve komponente -->
      <v-spacer></v-spacer>

      <!-- MENU -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on" class="grey--text">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in links" :key="index" router :to="item.route">
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <!-- SIGN OUT -->
      <v-btn flat color="grey" right class="caption">
        <span>Sign Out</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app flat v-model="drawer" class="blue lighten-1" fixed>
      <!-- <v-layout></v-layout> -->

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

      <v-layout row wrap>
        <v-flex>
          <PopupAddProject @projectAdded="snackbar=true"/>
          <!-- <PopupEditContent @content_edited="content=true"/> -->
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopupAddProject from "./PopupAddProject";
import PopupEditContent from "../components/PopupEditContent";
export default {
  components: { PopupAddProject, PopupEditContent },
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
        { icon: "accessible", text: "Test", route: "/test" }
      ],
      snackbar: false,
      content: false
    };
  },
  methods: {
    closeSnackBar() {
      this.snackbar = false;
    },
    closeEditedContent() {
      this.content = false;
    }
  }
};
</script>
