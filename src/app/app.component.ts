import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TwoComponent } from './two.component/two.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor(private router: Router) {}

  goTwo(): void {
    this.router.navigate(['two', 654], {
      queryParams: { ad: 234, bc: 'ehe', cd: 1234 },
    });
  }

  goThree(): void {
    this.router.navigate(['two', 777], {
      queryParams: { ad: 145, bc: 'sus', cd: 11400 },
    });
  }
}
