import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: any;

  @Output() deleteUserEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteUserEvent.emit(this.user);
  }

}
