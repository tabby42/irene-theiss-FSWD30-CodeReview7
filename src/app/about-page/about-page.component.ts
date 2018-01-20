import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.services';
//import models
import { Member } from '../services/firebase.services';
import { HomePageComponent } from '../home-page/home-page.component';


@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  providers: []
})
export class AboutPageComponent implements OnInit {
  public members: Member[];

  //inject Firebaseservice into AppComponent constructor
  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit() {
  	  //get data for all members 
	  this._firebaseService.getMembers('male')
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
    	console.log('updateLikes: ' + key);
    	this._firebaseService.updatePropLikes(key, newVal);
    }

}
