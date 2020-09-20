import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-basic-routing',
  templateUrl: './basic-routing.component.html',
  styleUrls: ['./basic-routing.component.scss']
})
export class BasicRoutingComponent implements OnInit {

  foo: string;
  userId: string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foo = this.route.snapshot.paramMap.get('foo');
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   if (params.get("userId")) {
    //     this.userId = params.get("userId");
    //   }
    // });
    this.userId = this.route.snapshot.paramMap.get("userId");
  }

}
