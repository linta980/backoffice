<template>
  <div>

    <!-- Editovan Content iz projekta -->
    <v-snackbar v-model="content" color="success" :timeout="3000" top class="width:400px;" >
      <span class="subheading">Content has been edited</span>
      <v-btn flat class="ml-0" small @click="closeEditedContent">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar> 



    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5 subheading">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in niz" :key="project.title" class="pa-1">
          <template v-slot:header>
            <div>{{project.title}}</div>
          </template>

          <v-layout row>
            <v-flex xs12>
              <v-card-text class="grey--text pa-3">{{project.content}}</v-card-text>
            </v-flex>
            <v-flex>
              <!-- v-bind:niz="project" -->
              <PopupEditContent v-bind:niz="project" @content_edited="content=true"/>
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import PopupEditContent from "../components/PopupEditContent.vue";
import db from "@/fb";
export default {
  components: { PopupEditContent },
  data() {
    return {
      niz: [],
      kurcina: "",
      content:false
    };
  },
  methods:{
    closeEditedContent(){
      this.content=false
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "The Net Ninja";
      });
    }
  },
  mounted() {
    db.collection("backoffice")
      .get()
      .then(result => {
      

        result.docs.forEach(element => {
          this.niz.push({
            id: element.id,
            title: element._document.proto.fields.title.stringValue,
            content: element._document.proto.fields.content.stringValue
          });
        });
      });
  }
};
</script>

