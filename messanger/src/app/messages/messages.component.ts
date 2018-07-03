import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit, OnDestroy {
  title = 'Messages list';
  messageText: string;
  connection;
  messages = [];

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageText);
    this.messageText = "";
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
