import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InvoicePage } from '../pages/invoice/invoice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogisticProvider } from '../providers/logistic/logistic';

import { HttpModule } from '@angular/http';
//import { InvoicePageModule } from '../pages/invoice/invoice.module'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InvoicePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
 //   InvoicePageModule,
    IonicPageModule.forChild(InvoicePage), 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InvoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogisticProvider
  ]
})
export class AppModule {}
