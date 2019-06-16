import { Component, OnInit } from '@angular/core';
import { MylistService } from '../mylist.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  lists: any = [];
  pager:number = 1;

  constructor(private mylistservice: MylistService ) { }

  ngOnInit() {
    this._getList();
  }
  _getList() {
    this.mylistservice.getListbyPage(this.pager).subscribe((data) => {
      this.lists = data;
      console.log(this.lists);
    });
  }
  // When scroll down the screen  
  onScroll()  
  {  
    console.log("Scrolled");  
    this.page = this.page + 1;  
    this.getPhotos();  
  } 
}
