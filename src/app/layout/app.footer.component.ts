import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
radarData: any;
radarOptions: any;
pieData: any;
barData: any;
barOptions: any;
pieOptions: any;
    constructor(public layoutService: LayoutService) { }
    
}
