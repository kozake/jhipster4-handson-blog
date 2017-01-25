import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Entry } from './entry.model';
import { EntryPopupService } from './entry-popup.service';
import { EntryService } from './entry.service';

@Component({
    selector: 'jhi-entry-delete-dialog',
    templateUrl: './entry-delete-dialog.component.html'
})
export class EntryDeleteDialogComponent {

    entry: Entry;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private entryService: EntryService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['entry']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}]);
    }

    confirmDelete (id: number) {
        this.entryService.delete(id).subscribe(response => {
            this.eventManager.broadcast({ name: 'entryListModification', content: 'Deleted an entry'});
            this.router.navigate([{ outlets: { popup: null }}]);
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-entry-delete-popup',
    template: ''
})
export class EntryDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private entryPopupService: EntryPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.entryPopupService.open(EntryDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
