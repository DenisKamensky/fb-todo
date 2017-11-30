import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class DataService {
  private listRef: string;
  constructor(private db: AngularFireDatabase) { }
  public getTasks() {
    return this.db.list(this.getListRef()).valueChanges();
  }
  public saveTask(todo): void {
    this.db.list(this.getListRef()).push(todo);
  }
  private getListRef() {
    return this.listRef || '/todos';
  }

}
