import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hasBackdrop = true;
  affichage = 0;

  constructor() { }

  ngOnInit() {
  }
  openSideBar(): void {
    console.log("OKOKO");
  }


  
}
