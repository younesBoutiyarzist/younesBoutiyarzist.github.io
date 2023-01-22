import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { Predict1Component } from './predict1/predict1.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as tf from '@tensorflow/tfjs';
import { Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project1Component implements OnInit {

  model: any ;
  predictions: any;
  todo:string[] = [];

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }
  @Output() HomeEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.loadModel();
  }

  async loadModel() {
    this._snackBar.open('loading Model', 'WAIT');
    this.model = await tf.loadLayersModel('../../assets/project1/model.json');
    this._snackBar.open('Model load','OK' , {
      duration: 2000
    });
  }
  openHome(): void {
    this.HomeEvent.emit(true);
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


  getfile() {
      document.getElementById('fileid')!.click();
  }

  openDialog(proba: number) {
    this.dialog.open(Predict1Component, {
      data: {
        probability: proba,
      },
    });
  }
  
  async predict(i: number) : Promise<any> {

    tf.tidy(() => {
      // Convert the canvas pixels to a Tensor of the matching shape
      let img = document.getElementById(i.toString())  as HTMLImageElement;
      let x_test =  tf.browser.fromPixels(img);
      x_test = tf.image.resizeBilinear(x_test, [64, 64]).div(tf.scalar(255))
      x_test = x_test.reshape([1, 64, 64, 3]);
      x_test = tf.cast(x_test, 'float32');

      // Make and format the predications
      const output = this.model.predict(x_test) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());
      this.openDialog(this.predictions[0]);
    });

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      if (this.model) {
        this.predict(event.previousIndex);
      }
      else {
        this._snackBar.open('Model not load yet','OK' , {
          duration: 2000
        });
      }
      
   } 
  }
}
