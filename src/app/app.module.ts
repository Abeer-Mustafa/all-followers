import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CoursesService } from './courses.service';
import { PostService } from './services/post.service';
import { InputFormatDirective } from './input-format.directive';
import { SummaryPipe } from './summary.pipe';
import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { NewCourseFormComponent } from './pages/new-course-form/new-course-form.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { GithubFollowersComponent } from './pages/github-followers/github-followers.component';
import { GithubProfileComponent } from './pages/github-profile/github-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HomeComponent2 } from './auth-section/home/home.component';
import { AdminComponent } from './auth-section/admin/admin.component';
import { LoginComponent } from './auth-section/login/login.component';
import { NoAccessComponent } from './auth-section/no-access/no-access.component';

import { OrderService } from './auth-section/services/order.service';
import { AuthService } from './auth-section/services/auth.service';

import { fakeBackendProvider } from './auth-section/helpers/fake-backend';
import { AuthGuard } from './auth-section/guards/auth.guard';
import { AdminGuard } from './auth-section/guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SignupFormComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    HomeComponent2,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,

    LoginComponent,
    NoAccessComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent},

      // auth section
      // { path: '', component: HomeComponent2 },
      // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
      // { path: 'login', component: LoginComponent },
      // { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    {provide: ErrorHandler, useClass: AppErrorHandler},

    // auth section
    OrderService,
    AuthService,
    AuthGuard,
    AdminGuard,

    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
