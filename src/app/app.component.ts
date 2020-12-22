import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
  }
  headers = [
    'SNo',
    'Name',
    'DOB',
   'gender',
    'address',
  'address1',
  'state',
  'city',
  'pincode',
  'educationaldetails'
];

records = {
  SNo: 1,
  Name: 'Ravi',
  DOB: '1234',
 gender: 'Male',
  address: 'abcd',
address1: 'cbda',
state: 'andhra',
city: 'vizag',
pincode: 530013,
educationaldetails:"b.tech"
}



  todo = this.headers;

  done = [];
  tabledata = [1,'Ravi','1234', 'Male', 'abcd', 'cbda','andhra', 'vizag', 530013, "b.tech"];
  onsubmit(){
    this.headers = this.done;
    this.tabledata = [];
    for(let i =0;i<this.headers.length;i++){
        this.tabledata.push(this.records[this.headers[i]]);
      }
   }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  title = 'kayktask';
}
