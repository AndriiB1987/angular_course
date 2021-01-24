import { Component, OnInit } from '@angular/core';
import { cars } from 'src/data/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars=cars;
  constructor() { }

  ngOnInit(): void {
    console.log('___ON INIT___');
    console.log(this.cars);
  }

}
