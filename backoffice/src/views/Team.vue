<template>
  <div>
    <v-snackbar v-model="snackbar" color="success" :timeout="3000" top class="width:400px;">
      <span class="subheading">New User added</span>
      <v-btn flat class="ml-0" small @click="closeSnackBar">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>


    <PopupAddNewwTeamMember @user_added="snackbar = true"/>


    <v-container class="my-5">
      <!-- row --znaci  bice red a wrap je da ih wrapuje kada nema dovoljno mesta! -->
      <v-layout row wrap>
        <!-- v-flex jer mora da bude flexibilno za razlicite ekrane xs12 -za extra male da ima 12 kolona (nije mi bas jasno
        sm6 small md4 medium lg3 large)-->
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <!-- flat mi skida senku text-xs-centar extra small-->
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="person.avatar" alt>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="sunheading">{{person.name}}</div>
              <div class="grey-text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PopupAddNewwTeamMember from "../components/PopupAddNewwTeamMember";

export default {
  components: { PopupAddNewwTeamMember },
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar-3.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.png"
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" }
      ],
      snackbar: false
    };
  },
  methods: {
    open() {

    },
    closeSnackBar(){
      this.snackbar=false
    }
  }
};
</script>

