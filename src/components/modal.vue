<style scoped>
@import "../style/main.css";
@import "../style/modal.css";

#mini-trash {
    height: 10px;
    width: 10px;
    margin-bottom: 2px;
}

#times {
    height: 25px;
    width: 25px;
    float: right;
    color: #6c757d;
}

#times:hover {
    cursor: pointer;
}

ul{
    margin-top: 20px;
    text-align: left;
}
</style>

<template>
  <div class="modal-content">
    <div>
      <fa-icon icon="times" id="times" @click="close()" />
      <ul>
        <li>Fill out the form and click "Create" to create tasks.</li>
        <li>
          Drag Tasks to "+" symbol to complete or
          <fa-icon icon="trash" id="mini-trash" style="color:grey;" /> to delete.
        </li>
        <li>
          Drag Completed tasks to
          <fa-icon icon="trash" id="mini-trash" style="color:grey;" /> to delete, or click "Undo" to return it to the task list.
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit } from "vue-property-decorator";

@Component({})
export default class Modal extends Vue {
  constructor() {
    super();
  }

  @Emit("close")
  close() {
    return false;
  }
}
</script>
