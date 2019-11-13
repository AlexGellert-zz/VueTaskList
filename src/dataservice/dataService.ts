// import { example} from "./example";
import { taskModule } from "../store/task";

export default class DataService {
  public items = [];
  public completedList = [];
  public deletedList = [];
  public importanceLevel = 0;
  public currentItem = "";

  constructor() {
  }

  public created() { }

  public addItems(current_item, importance) {
    if (current_item != '' && importance != null && importance != 0) {
      this.items.push({ name: current_item, importance: importance });
    }
  };

  public removeItems(index) {
    this.items.splice(index, 1);
  }

  public getItems() {
    return this.items;
  }

  public setItem(items) {
    this.items = items;
  }

  public addCompleted(currentItem, importanceLevel) {
    this.completedList.push({ name: currentItem, importance: importanceLevel });
  }

  public getCompleted() {
    return this.completedList;
  }

  public addDeleted(currentItem, importanceLevel) {
    this.deletedList.push({ name: currentItem, importance: importanceLevel });
  }

  public getDeleted() {
    return this.deletedList;
  }

  public loadLocal() {
    return this.items = JSON.parse(localStorage.getItem("localList"));
  };

  public saveLocal() {
    localStorage.setItem("localList", JSON.stringify(this.items));
  }

  public loadLocal2() {
    return this.items = JSON.parse(localStorage.getItem("localList2"));
  };

  public saveLocal2() {
    localStorage.setItem("localList2", JSON.stringify(this.items));
  }

  public deleteLocal(){
    localStorage.removeItem('localList');
  }

  public importance_icon(importance) {
    if (importance == 1) {
      return "angle-up";
    }
    if (importance == 2) {
      return "angle-double-up";
    }
    if (importance == 3) {
      return "chevron-circle-up";
    }
  }
}
