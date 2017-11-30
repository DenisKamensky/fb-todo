import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  todos;
  public taskName: string;
  constructor(private dataService: DataService) {
    this.todos = this.getTasks();
  }

  ngOnInit() {
  }
  public getTasks() {
    return this.dataService.getTasks();
  }
  public onSubmit(event) {
    if( this.taskName !== '') {
      this.saveTask();
      this.taskName = '';
    } else {
      return;
    }
  }
  private saveTask() {
    this.dataService.saveTask( {
      name: this.taskName,
      date: Date.parse(new Date().toString())
    });
  }
}
