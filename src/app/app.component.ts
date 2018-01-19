import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
//import navbar and hero section
import {NavbarComponent} from './navbar/navbar.component';
import {HeroComponent} from './hero/hero.component';
//import database-related modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './services/firebase.services';
//import models
import { Member } from './services/firebase.services';
//import { Category } from './services/firebase.services';

//decorator plus class = Component
@Component({
  //metadata for component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
    //properties
    title: string = 'Coders Dating';
    members: Member[];
   
    //inject Firebaseservice into AppComponent constructor
    constructor(private _firebaseService: FirebaseService) {
    }

    public ngOnInit() {
	    // this._firebaseService.getMembers()
     //  .snapshotChanges().map(actions => {
     //  return actions.map(action => ({ $key: action.key, ...action.payload.val() }));
     //  })
     //  .subscribe(members => {
     //    this.members = members;
     //    console.log(this.members);
     //    console.log(members.map(business => business.$key));
     //    return members.map(business => business.$key);
     //  });
	  }
  
}
