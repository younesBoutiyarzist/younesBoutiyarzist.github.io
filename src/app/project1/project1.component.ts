import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  photos = [
    '../../assets/project1/cat.1.jpg',
    '../../assets/project1/dog.1.jpg',
    '../../assets/project1/cat.2.jpg',
    '../../assets/project1/dog.2.jpg',
    '../../assets/project1/cat.3.jpg',
    '../../assets/project1/dog.3.jpg',
    '../../assets/project1/cat.4.jpg',
    '../../assets/project1/dog.4.jpg',
    '../../assets/project1/cat.5.jpg',
    '../../assets/project1/dog.5.jpg'

  ];
  // tslint:enable:max-line-length

  todo:string[] = [];
  getfile() {
      document.getElementById('fileid')!.click();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("OKOK");
    } 
  }
}
