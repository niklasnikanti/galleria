import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PopoverModule } from 'ng2-popover';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
/*import { DashboardComponent } from './components/dashboard/dashboard.component';*/
import { ProfileComponent } from './components/profile/profile.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleryeditComponent } from './components/galleryedit/galleryedit.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { GalleryService } from './services/gallery.service';
import { UploadService } from './services/upload.service';
import { NavbarService } from './services/navbar.service';
import { RootService } from './services/root.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  /*{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},*/
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'gallery/:id', component: GalleryComponent},
  {path: 'galleries', component: GalleriesComponent, canActivate: [AuthGuard]},
  {path: 'galleryedit/:id', component: GalleryeditComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    /*DashboardComponent,*/
    ProfileComponent,
    GalleryComponent,
    GalleriesComponent,
    GalleryeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    PopoverModule
  ],
  providers: [ValidateService, AuthService, GalleryService, UploadService, NavbarService, RootService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
