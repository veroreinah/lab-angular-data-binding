import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<object>;
  newFood: Object = {};
  showForm: boolean = false;
  fieldsError: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addFood() {
    if (this.newFood["name"] !== "" && this.newFood["calories"] !== "" && this.newFood["image"] !== "") {
      this.foods.push(this.newFood);

      this.newFood = {};
      this.showForm = false;
      this.fieldsError = false;
    } else {
      this.fieldsError = true;
    }
  }

}
