<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="info">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new Project</h2>
      </v-card-title>
      <!-- //content -->
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Project" v-model="project" prepend-icon="folder"></v-text-field>
          <v-textarea label="Content" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu>
            <v-text-field
              slot="activator"
              label="Due date"
              prepend-icon="date_range"
              :value="formatedDate"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn
            :loading="loading"
            :disabled="loading"
            class="success mx-0 mt-3"
            @click="submit"
          >Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
import format from "date-fns/format";
import db from "@/fb";

export default {
  data() {
    return {
      project: "",
      content: "",
      due: null,
      dialog: false,
      loading: false,
      loader: null
    };
  },

  methods: {
    submit() {
      this.loading = true;
      const project = {
        title: this.project,
        content: this.content,
        time: this.due
      };
      db.collection("backoffice")
        .add(project)
        .then(() => {
          this.loading = false;
          console.log("poslati podaci u bazu ");
          this.project = "";
          this.content = "";
          this.due = null;
          this.dialog = false;
          this.$emit("projectAdded");
        });
    }
  },
  computed: {
    formatedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>

<style>
</style>
