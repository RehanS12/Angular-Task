import { Component, OnInit, Input } from '@angular/core';
import { ICONS_COLORS, TASKS } from 'src/assets/DATA';
import { Tasks } from 'src/models/Tasks';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
@Input() task: Tasks;
 isHover:  Number;
 isAdd:  Boolean;
 newList: String;
 iconsColors: any = ICONS_COLORS;
 taskArr: any = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

  hover(id: Number) {
    this.isHover = id
  }

  mouseOut(id:Number) {
    this.isHover = -1
  }

  isAddClick(){
    console.log('clicked')
    this.isAdd = true;
   
    // for(let i =0; i<)
  }

  addInList(task:any){
    if(this.newList === '') return;
    task.list.push({
      id: task.list.length+1,
      title: this.newList.substr(0,1).toUpperCase()+this.newList.substr(1,),
      list:[]
    });
    this.isAdd= false;
    this.isHover = -1
  }

  getColor(char:any){
    return this.iconsColors[char.toUpperCase()]
  }

  isDeleteClick(id:Number){
    for(let i =0; i<this.taskArr.length; i++){
      if(this.taskArr[i].id === id) {
        let ind = TASKS.findIndex(x => x.id === id);
        ind > -1 && this.taskArr.splice(ind,1)
      } 
      else{
        this.isDeleteClick(id)
      }
    }
    // let ind = TASKS.findIndex(x => x.id === id);
    // ind > -1 && this.taskArr.splice(ind,1)
    // console.log({list:this.taskArr})
  }
}
