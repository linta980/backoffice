<template>
  <v-layout row wrap class="mt-2">
    <v-flex xs12 md9>
      <h1 class="headline grey--text">Teams</h1>
    </v-flex>

    <v-spacer></v-spacer>
    <v-flex>
      <v-btn class="grey--text ml-5" color flat slot="activator" @click="dialog=true">
        <v-icon class="pr-3">person_add</v-icon>
        <span>Add new team member</span>
      </v-btn>
    </v-flex>

    <v-dialog max-width="600px" v-model="dialog">
      <v-card>
        <v-card-title>
          <h2>Add new team member</h2>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-form>
            <v-text-field label="Name" v-model="name"></v-text-field>
            <v-text-field label="Surname" v-model="surname"></v-text-field>
            <v-text-field label="Username" v-model="username"></v-text-field>
            <v-text-field label="Address" v-model="address"></v-text-field>
            <v-text-field label="Phone" v-model="phone"></v-text-field>
            <v-btn flat class="success ml-0" @click="addUser">
              <span>Add new user</span>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import db from "../fb";
export default {
  data() {
    return {
      dialog: false,
      name: "",
      surname: "",
      username: "",
      address: "",
      phone: ""
    };
  },
  methods: {
    addUser() {
      const data = {
        address: this.address,
        ime: this.name,
        phone: this.phone,
        prezime: this.surname,
        username: this.username
      };
      db.collection("users")
        .add(data)
        .then(res => {
          this.dialog = false;
          this.$emit('user_added')
        });
    }
  }
};
</script>

<style>
</style>
