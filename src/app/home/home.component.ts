import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Output() ClassifEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  openClassif(): void {
    this.ClassifEvent.emit(true);
  }

}
