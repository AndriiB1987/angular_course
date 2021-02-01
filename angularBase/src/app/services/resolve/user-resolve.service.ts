import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{

  constructor(private userService : UserService) { 

  }
  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUser();
  }
}
