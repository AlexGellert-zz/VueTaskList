<style scoped>

@import '../style/main.css';

.complete {
    float: right;
}

#trash{
    height: 100px;
    width: 100px;
}

#addComplete{
  text-align: center;
}

.head{
  border-bottom: 1px solid #dee2e6;
  border-top: 2px solid #dee2e6;
  padding: .75rem;
}

.add {
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
}

.row {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

</style>

<template>
  <div class="container-fluid">
    <h2>{{title}}</h2>

<br>
<div class="container-fluid">
    <div class="row head">
      <div class="col"><b>Importance</b></div>
      <div class="col-5"><b>Name</b></div>
      <div class="col"><b>Date</b></div>
      <div class="col"><b>Action</b></div>
    </div>
      <div class="row add"  v-show="!show" @dragover.prevent @drop="taskFinished($event)">
        <div class="col" id="addComplete" >
          +
        </div>
      </div>
        <span class="tasks" v-for="(item, index) in this.taskList" :key="index">
              <todo class="row" :name="name" :index="index" :task="item.task" :taskDate="item.date" :priority="item.priority" :show="show" 
              @completedTask="completedTask(index)" @undoTask="undoTask(index)"></todo>
        </span>
  </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit } from 'vue-property-decorator';
import todo from "./todo.vue";
import { todoService } from "../dataservice/todoservice";
import { ToDo } from "../types/index";

@Component({
  components: {
    todo
  },
  props: {
    name: String,
    title: String,
    show: Boolean,
    taskList: Array
  }
})
export default class LeftList extends Vue {

  constructor() {
    super();
  }

  @Emit('completeTask')
  completedTask(index){
    return index;
  }

  @Emit('undoneTask')
  undoTask(index){
    return index;
  }

  taskFinished(ev){
    todoService.dragFinish(ev);
  }
  
}
</script>
