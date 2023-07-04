import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  constructor(private activeRoute: ActivatedRoute) {
    // static way
    console.log('snapshot.data', this.activeRoute.snapshot.data['user']);

    // dynamic way
    this.activeRoute.params.subscribe((v) =>
      console.log('params.subscribe', v)
    );
  }
}
