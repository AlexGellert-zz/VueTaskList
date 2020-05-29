<style scoped>
@import "./style/modal.css";
@import "./style/main.css";

.container-fluid {
  font-family: "Muli";
  width: 98%;
}

h1 {
  font-size: 5rem;
  font-weight: 800;
}

input {
  border: none;
  border-radius: 0px;
  border-bottom: 2px solid black;
}

select {
  border: none;
  border-radius: 0px;
  border-bottom: 2px solid black;
}

.inputs {
  margin-left: 2%;
}

.trash {
  height: 325px;
  width: 350px;
  border-radius: 8px;
  background-image: url('/src/assets/trash_closed.png');
  background-size: 350px 325px;
}

.trash:hover{
  background-image: url('/src/assets/trash_open.png');
  background-size: 350px 325px;
}


.seperation{
  border-bottom: 2px solid #dee2e6;
  margin: 0px 1.4%;
  margin-bottom: 2%;
}

.arrange {
  max-width: 513px;
}

.legend {
  text-align: center;
}
</style>

<template>
  <div class="container-fluid">
    <h1>Todo Vue Task List</h1>

    <div class="row inputs">
      <div class="col arrange">
        <div class="form-group">
          <label>Task Name:</label>
          <input v-model="taskInput" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Select Level of Priority:</label>
          <select v-model="priority" id="priority" class="form-control">
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        <div class="form-group">
          <label>Task Date:</label>
          <input v-model="taskDate" type="date" class="form-control" />
        </div>
        <button @click="submit()" type="submit" class="btn btn-create">Create task</button>
        <button class="btn btn-info" @click="showModal ? showModal = false : showModal = true">Show Legend</button>
        <div v-if="showModal" id="myModal" class="modal">
          <modal @close="showModal = false"></modal>
        </div>
      </div>
      <div class="legend col">
        <img class="trash" @dragover.prevent @drop="dragTrash($event)" />
      </div>
    </div>

    <div class="seperation"></div>

    <div class="row">
      <div class="col-sm">
        <list
          name="tasks"
          title="Tasks:"
          :show="true"
          :taskList="this.taskList"
          @completeTask="completeTask"
        ></list>
      </div>
      <div class="col-sm">
        <list
          name="completed"
          title="Completed Tasks:"
          :show="false"
          :taskList="this.completedList"
          @undoneTask="undoneTask"
        ></list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import list from "./components/list.vue";
import modal from "./components/modal.vue";
import { todoService } from "./dataservice/todoservice";
import { ToDo } from "./types/index";

const moment = require("moment");

@Component({
  components: {
    list,
    modal
  }
})
export default class App extends Vue {
  taskInput: string;
  taskDate: Date;
  priority: number;
  taskList: ToDo[];
  completedList: ToDo[];
  showModal: boolean;

  constructor() {
    super();

    this.taskInput = "";
    this.priority = 0;
    this.showModal = false;
    this.taskDate = this.formatDate(new Date());
    this.taskList = todoService.getTaskList();
    this.completedList = todoService.getCompletedList();
  }

  submit() {
    event.preventDefault();
    if (this.taskInput != "" && this.priority != 0) {
      todoService.addTaskList(this.taskInput, this.priority, this.taskDate);
      this.taskInput = "";
      this.priority = 0;
      this.taskDate = this.formatDate(new Date());
    }
  }

  completeTask(index) {
    todoService.addCompletedList(
      this.taskList[index].task,
      this.taskList[index].priority,
      this.taskList[index].date
    );
    todoService.removeTaskList(index);
  }

  undoneTask(index) {
    todoService.addTaskList(
      this.completedList[index].task,
      this.completedList[index].priority,
      this.completedList[index].date
    );
    todoService.removeCompletedList(index);
  }

  formatDate(date) {
    return moment(date).format("YYYY-MM-DD");
  }

  dragTrash(ev) {
    todoService.dragTrash(ev);
  }
}
</script>
