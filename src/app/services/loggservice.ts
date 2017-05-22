import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LogServices {

  private subject12 = new Subject<any>();

  setLogo(mystring?: string) {
    this.subject12.next(mystring);
    console.log(this.subject12);
    return this.subject12.asObservable();
  }

}
