import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    console.log(this.data[0].Name);
  }
  headers = [
    'SNo',
    'Name',
    'DOB',
   'Gender',
    'Address',
  'Address1',
  'State',
  'City',
  'Pincode',
  'Educationaldetails'
];

data = [
  {
    SNo: 1,
    Name: 'Ravi',
    DOB: '03-02-1995',
   Gender: 'Male',
    Address: 'vizag',
  Address1: 'tpt colony',
  State: 'andhra pradesh',
  City: 'vizag',
  Pincode: 530013,
  Educationaldetails:"B.tech"
  },{
  SNo: 2,
  Name: 'Ravikiran',
  DOB: '05-10-2000',
 Gender: 'Male',
  Address: '',
Address1: 'cbda',
State: 'andhra',
City: 'vizag',
Pincode: 530014,
Educationaldetails:"b.tech"
}];
todo = this.headers;

  done = [];

  onsubmit(){
    this.headers = this.done;
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
