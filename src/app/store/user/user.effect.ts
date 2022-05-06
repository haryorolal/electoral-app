import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, take, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Observable, from, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from "src/environments/environment";
import { UserInterface } from "./user.model";
import * as fromUserActions from './user.action';
import { NotificationService } from "src/app/services";
import { serverTimestamp } from "firebase/firestore";
import { ActionTypes } from "./actionType";

type Action = fromUserActions.All

@Injectable()

export class UserEffects {
    constructor(private actions: Actions, private notificationService: NotificationService, 
        private router: Router, private afAuth: AngularFireAuth,
        private afs: AngularFirestore){}

    init$: Observable<Action> = createEffect( () => this.actions.pipe(
        ofType(ActionTypes.INIT),
        switchMap(() => this.afAuth.authState.pipe(take(1))),
        switchMap(authState => {
            if (authState) {
                return this.afs.doc<UserInterface>(`users/${authState.uid}`).valueChanges().pipe(
                    take(1),
                    map(user => new fromUserActions.InitAuthorizedAction(authState.uid, user || null)),
                    catchError(err => of(new fromUserActions.InitErrorAction(err.message)))
                );
            }else{
                return of(new fromUserActions.InitUnAuthorizedAction());
            }
        })
    ))

    //login
    login$: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.SIGN_IN_EMAIL),
        map((action: fromUserActions.SigninAction) => action.credentials),
        switchMap(credentials => 
            from (this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password )).pipe(
                switchMap(signInState => 
                    this.afs.doc<UserInterface>(`users/${signInState.user.uid}`).valueChanges().pipe(
                        take(1),
                        tap(() => {
                            this.router.navigate(['/dashboard'])
                        }),
                        map(user => new fromUserActions.SigninActionSuccess(signInState.user.uid, user || null))
                    )
                ),
                catchError(err => {
                    this.notificationService.error(err.message);
                    return of(new fromUserActions.SigninActionError(err.message));
                })
            )
        )
    ))

    //signup
    signup$: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.SIGN_UP_EMAIL),
        map((action: fromUserActions.SignupAction) => action.credentials),
        switchMap(credentials => 
            from(this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
                tap(() => {
                    this.afAuth.currentUser.then(cal => cal.sendEmailVerification(
                        environment.firebase.actionCodeSettings
                    ));
                    this.router.navigate(['/auth/email-confirm']);
                }),
                map((singUpState) => new fromUserActions.SignupActionSuccess(singUpState.user.uid)),
                catchError(err => {
                    this.notificationService.error(err.message);
                    return of(new fromUserActions.SingupActionError(err.message))
                })
            ))
    ))

    //signout

    signout$: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.SIGN_OUT),
        switchMap(() => 
            from(this.afAuth.signOut()).pipe( 
                tap(() => {
                    this.router.navigate(['./auth/login']);
                }) ,              
                map(() => new fromUserActions.SignoutSuccessAction()),
                catchError(err => of(new fromUserActions.SignoutActionError(err.message)))
            )
        )
    ))

    //Create

    Create: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.CREATE),
        map((action: fromUserActions.Create) => action.user),
        withLatestFrom(this.afAuth.authState.pipe(take(1))),
        map(([user, state]) => ({
            ...user,
            uid: state.uid,
            email: state.email,
            created: serverTimestamp()
        })),
        switchMap((user: UserInterface) => 
        from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
            tap(() => this.router.navigate(['dashboard/profile', user.uid])),
            map(() => new fromUserActions.CreateSuccess(user)),
            catchError(err => of(new fromUserActions.CreateError(err.message)))
        ))
    ))

    //Update
    update: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.UPDATE),
        map((action: fromUserActions.Update) => action.user),
        switchMap(user =>
            from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
                tap(() => this.router.navigate(['dashboard/profile', user.uid])),
                map(() => new fromUserActions.UpdateSuccess(user)),
                catchError(err => of(new fromUserActions.UpdateError(err.message)))
            ) 
        )
    ))
 }
