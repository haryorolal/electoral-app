import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { UserInterface } from "../../store/user";
import * as fromRoot from '../../store';
import * as fromUser from '../../store/user';
import { Store, select } from "@ngrx/store";

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
    isProfileCompleted$: Observable<boolean>

    constructor(private router: Router, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {      
        this.isProfileCompleted$ = this.store.pipe(select(fromUser.getUser),
        map(user => user && user.isCompleted === true ))  
    }

    onProfileNavigate(): void{
        const path = this.user ? this.user.uid : 'new';
        this.router.navigate(['/dashboard/profile', path]);
    }

    onSignout(): void {
        this.signOut.emit();
    }
}