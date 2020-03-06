import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  //Create
  public create(data: any, collection: string) {
    return this.firestore.collection(collection).add(data);
  }
  //Read
  public get(documentId: string, collection: string) {
    return this.firestore.collection(collection).doc(documentId).snapshotChanges();
  }
  //Get
  public getAll(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }
  //Update
  public update(documentId: string, data: any, collection: string) {
    return this.firestore.collection(collection).doc(documentId).set({data}, { merge: true});
  }
  //Delete
//  public delete(documentId: string, collection: string) {
//    this.api.deleteTodo(id)
//      .subscribe(res => {    
//          this.data.splice(index,1);
//        }, (err) => {
//          console.log(err);
//        }
//      );
//  }

}