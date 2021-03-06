import { Component, Input, OnDestroy } from '@angular/core';
import { FilterService } from '../filter-service/filter.service';
import { Subscription } from 'rxjs/Subscription';

import { PRODUCTS } from './../product-service/product.service';
import { IProduct } from './../product';

@Component({
    moduleId: module.id,
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnDestroy{
    
    @Input() filter: string; 
    subscription: Subscription;
    products: IProduct[] = PRODUCTS;
    imageWidth: number = 70;
    imageMargin: number = 5;
    showImage: boolean = false;
    pageTitle: string = 'Lista de Productos';

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Lista de Productos: ' + message;
    }

    constructor(private filterService: FilterService) {
        this.subscription = filterService.filter$.subscribe(
            filter => {
                this.filter = filter;
            }
        );
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}