import { Component , OnInit , DoCheck , OnChanges , AfterContentInit , AfterContentChecked, Input} from '@angular/core';
import { LogServices } from '../../services/loggservice';

@Component({
  selector: 'observ1',
  templateUrl: 'observercomponent.html'
})

export class ObservComponent {
  observer1: string;
  constructor(private LogServices: LogServices){
    //superparent
    this.LogServices.setLogo(this.observer1);
  }

  triggerFun(){
    console.log('---------');
    this.LogServices.setLogo(this.observer1);
  }
}
