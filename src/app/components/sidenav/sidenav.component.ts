import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserInterface } from "../../store/user";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {

  
    constructor() {}

    ngOnInit(): void {
        
    }

    
}