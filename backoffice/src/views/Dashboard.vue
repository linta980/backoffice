<template>
  <dir>
    <h1 class="subheading grey--text">Dashboard</h1>


    <v-container class="my-5">
      
      <v-layout class="mb-3">
        <v-tooltip top>
          <v-btn flat class="grey--text ml-3" @click="sortBy('title')" slot="activator">
            <v-icon light class>folder</v-icon>
            <span class="caption text-lowercase pl-2">By Title</span>
          </v-btn>
          <span>Sort items by Title</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn flat class="grey--text" @click="sortBy('person')" slot="activator">
            <v-icon light>person</v-icon>
            <span class="caption text-lowercase pl-2">By Person</span>
          </v-btn>
          <span>Sort items by Person name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap v-bind:class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider class="mt-1 mb-1"></v-divider>
      </v-card>
    </v-container>
  </dir>
</template>


<script>
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
<style scoped>
.project.complete {
  border-left: 3px solid #3cd1c2;
}
.project.overdue {
  border-left: 3px solid orange;
}
.project.ongoing {
  border-left: 3px solid blue;
}
.v-chip.overdue {
  background: orange;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: blue;
}
</style>


