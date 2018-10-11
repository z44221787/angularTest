import { Component, OnInit } from '@angular/core';
import {MessageService} from '../messages/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // messageService: MessageService;
  constructor(public messageService: MessageService ) {
      this.messageService = messageService;
   }

  ngOnInit() {
  }

}
