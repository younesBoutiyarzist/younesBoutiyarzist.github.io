import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Prediction } from 'src/app/model/prediction';

@Component({
  selector: 'app-predict1',
  templateUrl: './predict1.component.html',
  styleUrls: ['./predict1.component.css']
})
export class Predict1Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public pred: Prediction) { }

  ngOnInit(): void {
    if (this.pred.probability > 0.5) {
      this.affichage = "Dog";
    } else {
      this.affichage = "Cat";
    }
  }

  affichage: string;


}

