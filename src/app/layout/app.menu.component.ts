import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Plan Overview', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Plan Managment', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Billing Managment', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Customer Overview', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                
                ]
            },
          
           
         
          
        ];
    }
}
