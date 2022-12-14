import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials: any) {

    let result = this.authService.login(credentials);
    if (result){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/']);
    }
    else
      this.invalidLogin = true;

    // this.authService.login(credentials)
    //   .subscribe((result:any) => {
    //     if (result)
    //       this.router.navigate(['/']);
    //     else
    //       this.invalidLogin = true;
    //   });
  }
}
