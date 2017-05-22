import { Component , OnInit , DoCheck , OnChanges , AfterContentInit , AfterContentChecked, Input} from '@angular/core';
import { LogServices } from '../../services/loggservice';

@Component({
  selector: 'superparent',
  templateUrl: 'superParent.html'
})

export class SuperParentComponent {
  superparent: string;
  constructor(private LogServices: LogServices){
     this.LogServices.setLogo().subscribe(data => {
      this.superparent = data;
    });
  }

  unsub(){
    var mySubscription = this.LogServices.setLogo().subscribe(data => {
      mySubscription.unsubscribe();
    });
  }
}
