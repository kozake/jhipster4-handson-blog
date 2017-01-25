import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { BlogSharedModule } from '../shared';
import {
    /* jhipster-needle-add-entity-to-module-import - JHipster will add entity classes here */
} from './';

let ENTITY_STATES = [
    /* jhipster-needle-add-entity-to-module-states - JHipster will add entity state vars here */
];

@NgModule({
    imports: [
        BlogSharedModule,
        InfiniteScrollModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        /* jhipster-needle-add-entity-to-module-declarations - JHipster will add entity component classes here */
    ],
    entryComponents: [
        /* jhipster-needle-add-entity-to-module-entryComponents - JHipster will add entity dialog classes here */
    ],
    providers: [
        /* jhipster-needle-add-entity-to-module-providers - JHipster will add entity Service classes here */
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}

