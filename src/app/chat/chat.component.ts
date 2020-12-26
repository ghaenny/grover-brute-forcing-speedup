
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
  privateKeys: any[];

  ngOnInit() {
    this.privateKeys.push(
      {
        key: 'Test',
        user: 'Jake',
      },
      {
        key: 'Test',
        user: 'John',
      },
      {
        key: '',
        user: 'MITM',
      }
    )
  }

  getPrivateKey(userName: string) {
    return this.privateKeys.find(k => k.user === userName).key;
  }

  setPrivateKey(event: any, userName: string) {
    let privateKey = this.privateKeys.find(k => k.user === userName);
    if (!privateKey) {
      this.privateKeys.push({
        key: event.message,
        user: userName,
      });
    } else {
      privateKey.key = event.message;
    }


    console.log('Private Key: ', this.privateKeys)
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
      text: this.encrypt(event.message, userName),
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

  encrypt(data: string, userName: string): string {
    return crypto.AES.encrypt(data, this.getPrivateKey(userName));
  }

  decrypt(data: string, userName: string) {
    const key = this.getPrivateKey(userName);
    if (!key) return data;
    const decryptedBytes = crypto.AES.decrypt(data, key);
    const plainText = decryptedBytes.toString(crypto.enc.Utf8);
    if (!plainText) return data;
    return plainText;
  }
}
