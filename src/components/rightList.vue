<template>
  <div>
    <h1>Alex's Deleted List</h1>
    <div v-for="(item, index) in deletedList" id="deleted_list" :key="index">
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
export default class rightList extends Vue {
    public deletedList = [];

  constructor() {
    super();
  }

  public created() {
      this.deletedList = dataService.getDeleted();
  }

  public importance_icon (importance){
      return dataService.importance_icon(importance);
  }
}
</script>
<style scoped>

</style>
