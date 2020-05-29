<style scoped>
@import "../style/main.css";

.complete {
    margin: 0px;
    padding: 0px 10px;
    font-size: 16px;
    margin-left: 15px;
}

.white {
  background-color: white;
}

.grey{
  background-color: #dee2e6;
}

#check-square{
  font-size: 25px;
  margin-left: 10px;
  color: #1266C3;
}

#check-square:hover{
  cursor: pointer;
}

.col-5{
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>

<template>
  <div draggable="true" @dragstart="dragStart($event)" @dragover.prevent :id="name + '-' + index" :class="background(index)">
    <fa-icon class="col" :icon="priority_level(priority)"/>
    <div class="col-5">{{task}}</div>
    <div class="col">{{taskDate}}</div>
    <div class="col"><fa-icon icon="check-square" id="check-square" @click="complete(index)" v-show="show"></fa-icon>
    <button @click="undo(index)" v-show="!show" class="complete btn btn-danger">Undo</button></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { todoService } from "../dataservice/todoservice";
import { Emit } from 'vue-property-decorator';

@Component({
  props: {
    name: String,
    index: Number,
    show: Boolean,
    task: String,
    taskDate: String,
    priority: String
  }
})
export default class LeftList extends Vue {
  constructor() {
    super();
  }

@Emit('completedTask')
  complete(index){
      return index;
  }

@Emit('undoTask')
  undo(index){
      return index;
  }

  background(index){
    var temp = index % 2;

    if(temp == 1){
      return "white";
    } else if(temp == 0){
      return "grey";
    }
  }

  priority_level(priority){
    if(priority == "1"){
      return "angle-up";
    }else if(priority == "2"){
      return "angle-double-up";
    } else if (priority == "3"){
      return "chevron-circle-up";
    }
  }

  dragStart(ev) {
    ev.dataTransfer.setData('Text', ev.target.id);
    ev.dataTransfer.dropEffect = 'move';
  }
}
</script>
