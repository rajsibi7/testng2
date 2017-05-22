import { Component , OnInit , DoCheck , OnChanges , AfterContentInit , AfterContentChecked, Input} from '@angular/core';


@Component({
  selector: 'app-ngchangex-component',
  templateUrl: 'ngchange_ex.html'
  // styleUrls: ['./app.component.css']
})

export class NgchangeExComponent {
    hero: string;
  crashvalue: string = 'crash value working..';

    ngOnInit() {
      console.log('ng init workied');
    }

  ngOnChanges() {
      console.log('ngOnChanges workied');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
// @Component({
//   selector: 'app-change-directive',
//   templateUrl: 'ngchange_ex.html'
//   // styleUrls: ['./app.component.css']
// })
// export class ChangeComponent {
//   @Input() hero: Hero;
//   @Input() power: string;
// }
