import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService, 
    private router: Router
  ) {}

  canActivate() {
    if(this.localStorageService.getValue(this.localStorageService.SESSION_TOKEN) == null) {
      return true;
    } else {
      this.router.navigate(['books']);
      return false;
    }    
  }
}
