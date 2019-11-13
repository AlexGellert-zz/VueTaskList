<template>
<div>
  <div id="list_wrapper">
    <div id="left_list">
      <leftList></leftList>
    </div>
    <div id="center_list">
      <centreList></centreList>
    </div>
    <div id="right_list">
      <rightList></rightList>
    </div>
  </div>
  <br>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import centreList from "./components/centreList.vue";
import leftList from "./components/leftList.vue";
import rightList from "./components/rightList.vue";
import Component from "vue-class-component";
import * as request from "request-promise-native";

@Component({
  components: {
    centreList,
    rightList,
    leftList
  }
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>
<style scoped>
@import "./css/main.css";
</style>
