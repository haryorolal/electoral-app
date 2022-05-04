import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';

import { Observable, Subject, finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  
  @Input() file: File;
  @Output() completed = new EventEmitter<string>();

  taskCollection: AngularFireUploadTask;
  percentage$: Observable<number>;
  snapshot$: Observable<firebase.default.storage.UploadTaskSnapshot>;
  downloadURL: string;

  private destroy = new Subject<void>();

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.startupload();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  startupload(): void {
    //firebase file specific path
    const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`;

    const storageRef = this.storage.ref(path);
    this.taskCollection = this.storage.upload(path, this.file);
    this.percentage$ = this.taskCollection.percentageChanges();
    this.snapshot$ = this.taskCollection.snapshotChanges();

    this.snapshot$.pipe(
      takeUntil(this.destroy),
      finalize(async () => {
        this.downloadURL = await storageRef.getDownloadURL().toPromise();

        this.completed.next(this.downloadURL);
      })
    ).subscribe();
    
  }
}
