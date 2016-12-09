import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: '../shared/star.component.html',
    styleUrls: ['../shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>  = new EventEmitter<string>();

    ngOnChanges():void {
        this.starWidth = this.rating * 74.85/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}