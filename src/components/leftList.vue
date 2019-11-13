<template>
  <div>
    <h1>Alex's Task List</h1>
    <label for="importance">Choose Level of Importance:</label>
    <div>
      <select v-model="importanceLevel" id="importance" class="dropdown">
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
    </div>
    <br />
    <div>
      <input
        v-model="currentItem"
        v-on:keypress="enterKey($event.keyCode)"
        placeholder="Enter Task Name.."
      />
    </div>
    <br />
    <button v-on:click="addItem()">Submit</button>
    <!-- <button v-on:click="saveList()">Save</button>
    <button v-on:click="loadList()">Load</button>-->
    <button v-on:click="saveLocal()">Save Local</button>
    <button v-on:click="loadLocal()">Load local</button>
    <br />
    <br />
    <div v-for="(item, index) in items" v-bind:key="index">
      <button id="arrows" v-on:click="move_up(index)">
        <fa-icon icon="arrow-circle-up" />
      </button>
      <button id="arrows" v-on:click="move_down(index)">
        <fa-icon icon="arrow-circle-down" />
      </button>
      <fa-icon :icon="importance_icon(item.importance)" />
      {{item.name}}
      <div id="action">
        <button id="action_button" v-on:click="completed(index)">
          <fa-icon icon="check" style="color:green;" />
        </button>
        <button id="action_button" v-on:click="deleted(index)">
          <fa-icon icon="times" style="color:red;" />
        </button>
      </div>
    </div>
    <br />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { dataService } from "../main";
import { ITaskState, taskModule } from "../store/task/module";
import store, { IRootState } from "../store/store";
import { Store } from "vuex";

@Component({
  components: {
    dataService
  }
})
export default class leftList extends Vue {
  public temp_index = [];
  public items = [];
  public importanceLevel = 0;
  public currentItem = "";
  constructor() {
    super();
  }

  public created() {}

  public addItem() {
    dataService.addItems(this.currentItem, this.importanceLevel);
    this.items = dataService.getItems();
    this.importanceLevel = 0;
    this.currentItem = "";
  }

  public enterKey(key_code) {
    if (key_code === 13) {
      this.addItem();
    }
  }

  public saveLocal() {
    dataService.saveLocal();
  }

  public loadLocal() {
    this.items = dataService.loadLocal();
  }

  public saveLocal2() {
    dataService.saveLocal();
  }

  public loadLocal2() {
    this.items = dataService.loadLocal();
  } 

  public importance_icon(importance) {
    return dataService.importance_icon(importance);
  }

  public move_up(index) {
    if (index > 0) {
      this.temp_index[0] = this.items[index];
      this.items[index] = this.items[index - 1];
      this.items[index - 1] = this.temp_index[0];
    }
    this.saveLocal2();
    this.loadLocal2();
  }
  public move_down(index) {
    if (this.items.length - 1 > index) {
      this.temp_index[0] = this.items[index];
      this.items[index] = this.items[index + 1];
      this.items[index + 1] = this.temp_index[0];
    }
    this.saveLocal2();
    this.loadLocal2();
  }
  public completed(index) {
    console.log(index);
    dataService.addCompleted(
      this.items[index].name,
      this.items[index].importance
    );
    dataService.removeItems(index);
    dataService.getItems();
  }
  public deleted(index) {
    dataService.addDeleted(
      this.items[index].name,
      this.items[index].importance
    );
    dataService.removeItems(index);
    dataService.getItems();
  }
}
</script>
<style scoped>
</style>
