import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.services';
//import models
import { Member } from '../services/firebase.services';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [FirebaseService]
})
export class HomePageComponent implements OnInit {
	//properties
    members: Member[];
   
    //inject Firebaseservice into AppComponent constructor
    constructor(private _firebaseService: FirebaseService) {
    }

    public ngOnInit() {
      //get data for all members 
	  this._firebaseService.getMembers()
      .snapshotChanges().map(actions => {
      return actions.map(action => ({ $key: action.key, ...action.payload.val() }));
      })
      .subscribe(members => {
        this.members = members;
        //console.log(this.members);
        //console.log(members.map(business => business.$key));
        return members.map(business => business.$key);
      });
    }

    public updateLikes (key, newVal): void {
    	//console.log('updateLikes: ' + key);
    	this._firebaseService.updatePropLikes(key, newVal);
    }

}
