import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Permissions} from './Permissions';

@Injectable()
export class CanActivateFeature2 implements CanActivate {
  private rights: string[];

  constructor() {
    this.rights = ['ADD', 'EDIT'];
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return Permissions.canActivate(this.rights, state);
  }
}
