<template>
  <div>
    <h1>Alex's Completed List</h1>
    <div
      v-for="(item, index) in completedList"
      :key="index"
      id="completed_list"
      style="text-decoration:line-through;"
    >
      <fa-icon :icon="importance_icon(item.importance)"/>
      {{item.name}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { dataService } from "../main";

@Component({
  components: {
    dataService
  }
})
export default class centreList extends Vue {
  public completedList = [];
  // public dataService;

  constructor() {
    super();
  }

  public created() {
    this.completedList = dataService.getCompleted();
  }
  public importance_icon (importance){
    return dataService.importance_icon(importance);
  }

}
</script>
<style scoped>

</style>
