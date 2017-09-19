import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

export class Permissions {

  static getPermissionForFeature1(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return false;
  }

  static canActivate(rights: string[], state: RouterStateSnapshot): boolean {
    console.log(rights);
    console.log(state.url);
    return true;
  }

}
