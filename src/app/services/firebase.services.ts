import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {
  members: AngularFireList<Member>;
  // categories: AngularFireList<Category>;
 
  constructor(private af: AngularFireDatabase) {
     
   }

   getMembers(gender: string = null): AngularFireList<Member> {
       if (gender != null) {
           this.members = this.af.list('/members', 
           	ref => ref.orderByChild('gender').equalTo(gender)) as AngularFireList<Member>;
       } else {
           this.members = this.af.list('/members') as AngularFireList<Member>;
       }
       return this.members;
   }

   updatePropLikes(key, newVal): void {
     // var memberToUpdate = this.af.list('/members', 
     //         ref => ref.orderByKey().equalTo(key)) as AngularFireList<Member>;
     // memberToUpdate.snapshotChanges().subscribe(actions => {
     //    actions.forEach(action => {
     //      //console.log(action.type);
     //      //console.log(action.key);
     //      console.log(action.payload.val());
     //    });
     //  });
      this.af.object('/members/' + key)
          .update({ likes: newVal});
   }

   // getCategories() {
   //     this.categories = this.af.list('/categories') as AngularFireList<Category>;
   //     return this.categories ;
   // }

   // addBusiness(newBusiness) {
   //     return this.businesses.push(newBusiness);
   // }

   // deleteBusiness(key) {
   // 	   return this.businesses.remove(key);
   // }

   // updateBusiness(key, newData) {
   		
   // }

}

export interface Member {
   $key?: string;
   name?: string; // ? means optional
   surname?: string;
   favoritePerformers: string[];
   age?: number;
   gender?: string;
   inRelation?: boolean;
   imageUrl?: string;
   likes?: number;
}

export interface Gender {
   $key?: string;
   value?: string;
}