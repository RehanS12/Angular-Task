import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/assets/DATA';
import { Tasks } from '../../../models/Tasks'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  tasks: Tasks[];
  isOpen: boolean = true;
  query: String = '';
  filteredItems: any = [];
  timeout: any = null;
  
  constructor() { }
  ngOnInit(): void {
    this.tasks = TASKS;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  search(arr: any, key: String) {
    arr.forEach((item: any, ind: number) => {
      if (item.title.toLowerCase().includes(key)) {
        this.tasks.push(item)
      } else {
        for (const task in item) {
          if (Array.isArray(item[task])) {
            this.search(item[task], key);
          }
        }
      }
    })
  }


  onChangeSearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        if ($this.query) {
          $this.tasks = [];
          $this.search(TASKS, $this.query.toLowerCase());
        } else $this.tasks = TASKS
      }
    }, 1000);
  }
}
