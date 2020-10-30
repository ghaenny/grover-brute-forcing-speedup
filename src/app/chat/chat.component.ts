
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  styles: [`
    ::ng-deep nb-layout-column {
      display: flex;
      justify-content: center;
    }
    :host {
      display: flex;
    }
    nb-chat {
      width: 300px;
      margin: 1rem;
    }
  `],
  templateUrl: './chat.component.html',
})

export class ChatComponent implements OnInit {

  messages: any[] = [];
  privateKeys: any[] = [];

  ngOnInit() {
    this.privateKeys.push(
      {
        key: 'Test',
        user: 'Jake',
      },
      {
        key: 'Test',
        user: 'John',
      }
    )
  }

  getPrivateKey(userName: string) {
    return this.privateKeys.find(k => k.user === userName).key;
  }

  setPrivateKey(event: any, userName: string) {
    this.privateKeys.push({
      key: event.message,
      user: userName,
    })
  }

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
  }
}
