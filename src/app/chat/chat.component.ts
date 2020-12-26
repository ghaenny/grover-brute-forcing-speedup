
import { Component, OnInit, Input } from '@angular/core';
import * as crypto from 'crypto-js';

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

  @Input()
  messages: any[];

  @Input()
  userKey: string;

  @Input()
  hackerKey: string;

  ngOnInit() {
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
      text: this.encrypt(event.message),
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

  encrypt(data: string): string {
    return crypto.AES.encrypt(data, this.userKey);
  }

  decrypt(data: string, key: string) {
    const decryptedBytes = crypto.AES.decrypt(data, key);
    const plainText = decryptedBytes.toString(crypto.enc.Utf8);
    if (!plainText) return data;
    return plainText;
  }
}
