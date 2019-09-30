import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SegmentsPage } from '../pages/segments/segments';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/popover/popover';
import { SocialCard } from '../components/social-card/social-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SegmentsPage,
    PopoverPage,
    SocialCard
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SegmentsPage,
    PopoverPage
  ],
  providers: []
})
export class AppModule {}
