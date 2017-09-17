import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// ------page-------------
import { HomePage } from '../pages/home/home';
import { RegistorPage } from '../pages/registor/registor';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
//-------Service---------
import { BookService } from '../app/service/book.service';
import { UserService } from '../app/service/user.service';
//--------firebasae------
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

const firebase = {
  apiKey: "AIzaSyC_wT7ytJ_wYjyug_9tXAuuxbgUXzmGvRc",
  authDomain: "bookapp-4f34d.firebaseapp.com",
  databaseURL: "https://bookapp-4f34d.firebaseio.com",
  projectId: "bookapp-4f34d",
  storageBucket: "bookapp-4f34d.appspot.com",
  messagingSenderId: "792290640296"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistorPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistorPage,
    MainPage
  ],
  providers: [
    BookService,
    UserService,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
