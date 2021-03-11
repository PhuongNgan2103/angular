import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [
    {
      name: 'Ngan nguyen',
      phone: 9989892,
      img: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg',
      address: 'VT'
    },
    {
      name: 'An nguyen',
      phone: 123455,
      img: 'https://i.pinimg.com/originals/89/c7/6d/89c76d8f7aba747d06cb5b6feb84f22a.png',
      address: 'VT'
    },
    {
      name: 'Minh nguyen',
      phone: 12345556,
      img: 'data:image/png;base64,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',
      address: 'VT'
    }
  ];
  searchUser: IUser[] = [];

  constructor() {
    this.searchUser = this.users;
  }

  ngOnInit(): void {
  }

  delete(index: number) {
    if (confirm('Are you sure?')){
      this.users.splice(index, 1)
    }
  }

  search(event) {
    this.searchUser = [];
    let keyword = event.target.value;
    if (keyword == ''){
      this.searchUser = this.users;
    }else {
      for (const user of this.users) {
        if (user.name == keyword){
          this.searchUser.push(user);
        }
      }
    }
  }
}
