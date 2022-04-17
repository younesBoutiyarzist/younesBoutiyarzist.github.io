import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hasBackdrop = true;
  section = 0;

  constructor() { }

  ngOnInit() {
  }
  affichage(i:number): void {
    this.section = i;
  }

  
}
