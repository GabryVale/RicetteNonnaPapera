import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree,
  Route
} from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuards {
   
  constructor(public router: Router) {}
      
    

}