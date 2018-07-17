import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    itemCount: number;
    btnText: string = 'Add the pet';
    itemText: string = '';
    items = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
      this._data.item.subscribe(res => this.items = res);
      this.itemCount = this.items.length;
      this._data.changeItem(this.items);
  }

  addItem() {
      this.items.push(this.itemText);
      this.itemText = '';
      this.itemCount = this.items.length;
      this._data.changeItem(this.items);
  }

  removeItem(i) {
    this.items.splice(i, 1);
    this._data.changeItem(this.items);
  }

}
