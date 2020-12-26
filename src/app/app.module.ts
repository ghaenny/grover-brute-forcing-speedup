import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbButtonModule, NbCardModule, NbProgressBarModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatComponent } from './chat/chat.component';
import { BruteForceComponent } from './brute-force/brute-force.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    BruteForceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbButtonModule,
    NbCardModule,
    NbProgressBarModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
