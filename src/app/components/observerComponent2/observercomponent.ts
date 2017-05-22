import { Component , OnInit , DoCheck , OnChanges , AfterContentInit , AfterContentChecked, Input} from '@angular/core';
import { LogServices } from '../../services/loggservice';

@Component({
  selector: 'observ2',
  templateUrl: 'observercomponent.html'
})

export class Observ2Component {
  observer2: string;
  constructor(private LogServices: LogServices){
  }

  triggerFun(){
    this.LogServices.setLogo(this.observer2);
  }
}
