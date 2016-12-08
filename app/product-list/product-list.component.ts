import { Component, Input } from '@angular/core';
import { FilterService } from '../filter-service/filter.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    
    subscription: Subscription;
    @Input() filter: string;
    
    constructor(private filterService: FilterService) {
        this.subscription = filterService.filter$.subscribe(
            filter => {
                this.filter = filter;
            }
        );
    }

}