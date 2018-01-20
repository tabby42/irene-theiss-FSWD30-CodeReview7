import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService }  from '../services/firebase.services';

import { Member } from '../services/firebase.services';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [FirebaseService]

})
export class MemberDetailComponent implements OnInit {
  //This component  receives a member object through its member property and displays it
  @Input() member: Member;

  constructor(
	  private _route: ActivatedRoute,
	  private _firebaseService: FirebaseService,
	  private _location: Location
	) {}
  //https://angular.io/tutorial/toh-pt5#navigating-to-hero-details
  //The ActivatedRoute holds information about the route to this instance of 
  //the MemberDetailComponent. This component is interested in the route's 
  //bag of parameters extracted from the URL. 
  //The "id" parameter is the id of the member to display.

  //The FirebaseService gets meber data from the remote server and this component will use it to get the member-to-display.

  //The location is an Angular service for interacting with the browser. 
  //You'll use it later to navigate back to the view that navigated here.

  ngOnInit() {
  	  this.getMember();
  }

  //The _route.snapshot is a static image of the route information shortly 
  //after the component was created.
  //The paramMap is a dictionary of route parameter values 
  //extracted from the URL.
  getMember (): void {
  	  const id = this._route.snapshot.paramMap.get('id');
  	  console.log(id);
	  this._firebaseService.getMember(id)
	  .snapshotChanges().map(actions => {
        return actions.map(action => ({ $key: action.key, ...action.payload.val() }));
      })
      .subscribe(members => {
        this.member = members[0];
        console.log(this.member);
      });
  }

  updateLikes (key, newVal): void {
    //console.log('updateLikes: ' + key);
    this._firebaseService.updatePropLikes(key, newVal);
  }

}

