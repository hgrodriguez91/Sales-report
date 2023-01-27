import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.css']
})
export class InitPageComponent implements OnInit {

  public username: string = '';

  constructor(private generalService: GeneralService,
    private router: Router) { }

  ngOnInit(): void {
  }

  setUsername(){
    this.generalService.setUsername(this.username);
    this.router.navigateByUrl('report');
  }

  get valid(){
    return this.username != '';
  }
}
