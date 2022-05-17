import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { MatMenuTrigger} from "@angular/material/menu";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  
    constructor() {}

    ngOnInit(): void {
        this.trigger.openMenu()
    }

    
}