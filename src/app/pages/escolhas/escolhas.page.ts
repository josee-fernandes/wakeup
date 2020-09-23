import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolhas',
  templateUrl: './escolhas.page.html',
  styleUrls: ['./escolhas.page.scss'],
})
export class EscolhasPage implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {}

  navigateOriginDestination(origin:string, destination:string){
    console.log({ origin, destination });
    this.navigate(destination);
  }

  navigate(destination:string){
    console.log({ destination });
    this.router.navigate([destination]);
  }
}
