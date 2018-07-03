import { Injectable } from '@angular/core';

//import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = '/simple-channel';  
  private socket;
  
  sendMessage(message){
    this.socket.emit('message.post', message);    
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message.recieve', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  } 
}
