import { FilterService } from './filter-service/filter.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pm-app',
    templateUrl: './app.component.html',
    providers: [FilterService]
})
export class AppComponent { 
    public filter: string = '';  
}
