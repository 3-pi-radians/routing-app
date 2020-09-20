import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-view2',
  templateUrl: './lazy-view2.component.html',
  styleUrls: ['./lazy-view2.component.scss']
})
export class LazyView2Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  optionSelected(childRoute) {
    this.router.navigate(['lazy-view2', childRoute]);
  }

}
