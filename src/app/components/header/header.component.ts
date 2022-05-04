import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { UserInterface } from "../../store/user";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    @Input() user: UserInterface
    @Input() isAuthorized: boolean;
    @Output() signOut = new EventEmitter<void>();

    constructor(private router: Router) {}

    ngOnInit(): void {
        
    }

    onProfileNavigate(): void{
        const path = this.user ? this.user.uid : 'new';
        this.router.navigate(['/dashboard/profile', path]);
    }

    onSignout(): void {
        this.signOut.emit();
    }
}