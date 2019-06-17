import { Component, OnInit } from '@angular/core';
import { MylistService } from '../mylist.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  lists: any = [];

  constructor(private mylistservice: MylistService ) { }

  ngOnInit() {
    this._getList();
  }
  _getList() {
    this.mylistservice.getList().subscribe((data) => {
      this.lists = data;
      console.log(this.lists);
    });
  }

}
