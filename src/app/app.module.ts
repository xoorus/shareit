import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PicItemComponent } from './components/pics/pic-item/pic-item.component';
import { PicListComponent } from './components/pics/pic-list/pic-list.component';
import { HeaderComponent } from './components/head/header/header.component';
import { SearchComponent } from './components/head/search/search.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { PicFormComponent } from './components/pics/pic-form/pic-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { PicItemService } from './services/pic-item.service';


const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: 'main'}
];


@NgModule({
  declarations: [
    AppComponent,
    PicItemComponent,
    PicListComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    UserComponent,
    AuthComponent,
    LoginComponent,
    SigninComponent,
    PicFormComponent,
    UserListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PicItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
