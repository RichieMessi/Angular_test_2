import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  homeTitle = 'Welcome to the ninja cave..';
  myString = 'I will be a vegan';
  myBoolean = false;

  ninja = {
    name: 'Yoshi',
    belt: 'Black'
  }

  alertMe(val) {
    // console.warn('yup..')
    console.warn(val)
    
  }

  constructor() { }

  ngOnInit() {
  }

}
