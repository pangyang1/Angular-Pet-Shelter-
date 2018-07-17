import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

    private items = new BehaviorSubject<any>([]);
    item = this.items.asObservable();

  constructor() { }

  changeItem(item) {
      this.items.next(item);
  }

}
