import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { TagComponent } from './tag.component';
import { TagDetailComponent } from './tag-detail.component';
import { TagPopupComponent } from './tag-dialog.component';
import { TagDeletePopupComponent } from './tag-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class TagResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.params['page'] ? route.params['page'] : '1';
      let sort = route.params['sort'] ? route.params['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const tagRoute: Routes = [
  {
    path: 'tag',
    component: TagComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'blogApp.tag.home.title'
    }
  }, {
    path: 'tag/:id',
    component: TagDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'blogApp.tag.home.title'
    }
  }
];

export const tagPopupRoute: Routes = [
  {
    path: 'tag-new',
    component: TagPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'blogApp.tag.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tag/:id/edit',
    component: TagPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'blogApp.tag.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tag/:id/delete',
    component: TagDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'blogApp.tag.home.title'
    },
    outlet: 'popup'
  }
];
