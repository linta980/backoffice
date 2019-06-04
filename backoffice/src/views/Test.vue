<template>
  <div>
    <h1 class="grey--text ml-0" flat>This is test page ...for testing, you dumb ass</h1>
    <v-container class="text--grey subheading">
      <v-layout row wrap>
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
              <template>
                <div class="text-xs-center">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on }">
                      <!-- <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn> -->
                      <v-btn flat color="grey" v-on="on">
                        <v-icon small left>message</v-icon>
                        <span>Message</span>
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

              
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
    </v-container>
  </div>
</template>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
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
      ]
    };
  }
};
</script>

<style>
</style>
