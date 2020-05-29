import Vue from 'vue'
import { ToDo } from "../types/index";

export default class TodoService {

    public todoList = Vue.observable({ taskList: <ToDo[]>[],  completedList: <ToDo[]>[]});

    addTaskList(newItem: string, priority: number, date: Date){
        this.todoList.taskList.push({task: newItem, priority: priority, date: date});
    }

    addCompletedList(newItem: string, priority: number, date: Date){
        this.todoList.completedList.push({task: newItem, priority: priority, date: date})
    }

    removeTaskList(index){
        this.todoList.taskList.splice(index, 1);
    }

    removeCompletedList(index){
        this.todoList.completedList.splice(index, 1);
    }

    getTaskList(){
        return this.todoList.taskList;
    }

    getCompletedList(){
        return this.todoList.completedList;
    }

    dragFinish(ev){
        var data = ev.dataTransfer.getData("text");
        var index = data[data.length - 1];
        var type = data.substr(0, data.length - 2);
    
        if(type == "tasks"){
          this.addCompletedList(this.getTaskList()[index].task, this.getTaskList()[index].priority, this.getTaskList()[index].date);
          this.removeTaskList(index);
        }

    }

    dragTrash(ev){
        var data = ev.dataTransfer.getData("text");
        var index = data[data.length - 1];
        var type = data.substr(0, data.length - 2);

        if(type == "tasks"){
            this.removeTaskList(index);
          }
        if(type == "completed"){
            this.removeCompletedList(index);
        }
    }

}

export const todoService = new TodoService();