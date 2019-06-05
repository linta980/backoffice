<template>
  <v-dialog max-width="600px" v-model="dialog">
    <!-- Znaci ovo je btn koji pripada dijalog ali se poziva sa projects strane i 
    onda se aktivira-->
    <v-btn flat class="grey--text" slot="activator" @click="editCLicked">
      <v-icon>edit</v-icon>
      <span class="ml-2">Edit</span>
    </v-btn>

    <v-card class="grey--text pa-2">
      <v-card-title>
        <h2>Edit Content</h2>
      </v-card-title>

      <v-card-text class="red--text">
        <v-textarea label="Title" :value="title" v-model="new_title"></v-textarea>
        <v-textarea label="Content" :value="content" v-model="new_content"></v-textarea>
      </v-card-text>
      <v-btn class="success" flat @click="saveCHanges">Save changes</v-btn>
    </v-card>
  </v-dialog>

  
</template>

<script>
import db from '../fb.js'
export default {
  props: ["niz"],
  data() {
    return {
      dialog: "",
      title: "",
      content: "",
      id: "",
      new_title:'',
      new_content:''
      
    };
  },
  methods: {
    editCLicked() {
      this.title = this.niz.title;
      this.content = this.niz.content;
      this.id = this.niz.id;
      
    },
    saveCHanges() {
        console.log(this.new_title, this.new_content, this.id)
      db.collection("backoffice")
        .doc(this.id)
        .update({
          title: this.new_title,
          content: this.new_content
        }).then(()=>{
            console.log('Document updated,you cunt')
            this.dialog=false
            this.$emit("content_edited")
        })
    }
  }
}
</script>

<style>
</style>
