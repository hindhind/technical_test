import { Component, OnInit } from '@angular/core';
import { MylistService } from '../mylist.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  lists: any = [];
  pager: number;

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
  onScroll(pager) {
    console.log('scroll down');
    this.mylistservice.getPagination(pager + 1).subscribe((res) =>{
      this.lists = res;
      console.log(this.lists);
    });
  }

}
