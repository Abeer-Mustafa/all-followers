import { GithubFollowersService } from '../../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators'


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService,
    ) { }

  ngOnInit() {
    let requiredParams = this.route.paramMap;

    let optionalParams = this.route.queryParamMap;

    combineLatest([requiredParams, optionalParams])
    .pipe(
      switchMap(results => {
        // results[0] is our requiredParams
        // results[1] is our optionalParams
        console.log(results[0]);
        console.log(results[1]);

        let page = results[1].get('page');
        console.log(page);

        return this.service.getAll();
      }),
    )
    .subscribe(followers => this.followers = followers);
  }



}
